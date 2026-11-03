import { useEffect, useState } from 'react';
import { api, session } from './api.js';
import './management.css';

const types = {
  projects: ['title', 'completionDate', 'description'],
  qualifications: ['title', 'completionDate', 'description'],
  contacts: ['firstName', 'lastName', 'contactNumber', 'email', 'message']
};
const defaultValues = fields => Object.fromEntries(fields.map(field => [field, '']));

export default function Management() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('signin');
  const [authFields, setAuthFields] = useState({ name: '', email: '', password: '' });
  const [type, setType] = useState('projects');
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(defaultValues(types.projects));
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const isAdmin = user?.role === 'admin';
  const canRead = type !== 'contacts' || isAdmin;

  useEffect(() => {
    if (!session.token()) return;
    api('/auth/profile').then(result => setUser(result.user))
      .catch(() => session.clear());
  }, []);

  useEffect(() => {
    setForm(defaultValues(types[type]));
    setEditing(null);
    if (!user || !canRead) { setItems([]); return; }
    setBusy(true);
    setError('');
    api(`/${type}`).then(setItems).catch(err => setError(err.message)).finally(() => setBusy(false));
  }, [type, user, canRead]);

  const authenticate = async event => {
    event.preventDefault(); setBusy(true); setError(''); setMessage('');
    try {
      const payload = mode === 'signup' ? authFields : { email: authFields.email, password: authFields.password };
      const result = await api(`/auth/${mode}`, { method: 'POST', body: JSON.stringify(payload) });
      session.set(result.token);
      // Profile response is authoritative for role.
      const profile = await api('/auth/profile');
      setUser(profile.user);
      setMessage(`Signed in as ${profile.user.name}.`);
      setAuthFields({ name: '', email: '', password: '' });
    } catch (err) { setError(err.message); session.clear(); }
    finally { setBusy(false); }
  };

  const signout = () => { session.clear(); setUser(null); setItems([]); setMessage('Signed out. Your local access token was removed.'); setError(''); };

  const submitRecord = async event => {
    event.preventDefault(); if (!isAdmin) return;
    setBusy(true); setError(''); setMessage('');
    try {
      const payload = { ...form };
      const result = await api(`/${type}${editing ? `/${editing}` : ''}`, {
        method: editing ? 'PUT' : 'POST', body: JSON.stringify(payload)
      });
      setMessage(`${type.slice(0, -1)} ${editing ? 'updated' : 'created'} (ID: ${result._id}).`);
      setForm(defaultValues(types[type])); setEditing(null);
      setItems(await api(`/${type}`));
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  const remove = async item => {
    if (!isAdmin || !window.confirm(`Delete record ${item._id}?`)) return;
    setBusy(true); setError('');
    try {
      await api(`/${type}/${item._id}`, { method: 'DELETE' });
      setItems(current => current.filter(record => record._id !== item._id));
      setMessage(`Record ${item._id} deleted.`);
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  const selectRecord = item => {
    setEditing(item._id);
    setForm(Object.fromEntries(types[type].map(field => [field, field === 'completionDate' ? (item[field]?.slice(0, 10) || '') : (item[field] || '')])));
  };

  return <main className="management"><h1>Account & Portfolio Management</h1>
    <p>Manage projects, qualifications, and contact submissions through the MongoDB API.</p>
    {error && <p className="message error" role="alert">{error}</p>}
    {message && <p className="message success" role="status">{message}</p>}
    {!user ? <section className="mg-card"><h2>{mode === 'signin' ? 'Sign in' : 'Create account'}</h2>
      <form onSubmit={authenticate}>
        {mode === 'signup' && <label>Name<input required value={authFields.name} onChange={e => setAuthFields({ ...authFields, name: e.target.value })}/></label>}
        <label>Email<input type="email" required value={authFields.email} onChange={e => setAuthFields({ ...authFields, email: e.target.value })}/></label>
        <label>Password<input type="password" minLength={8} required value={authFields.password} onChange={e => setAuthFields({ ...authFields, password: e.target.value })}/></label>
        <button disabled={busy}>{busy ? 'Working…' : mode === 'signin' ? 'Sign in' : 'Sign up'}</button>
      </form><button className="mg-link" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}>{mode === 'signin' ? 'Need an account? Sign up' : 'Already registered? Sign in'}</button>
    </section> : <><section className="mg-card mg-top"><span>Signed in: <strong>{user.name}</strong> ({user.role})</span><button onClick={signout}>Sign out</button></section>
      <div className="mg-tabs">{Object.keys(types).filter(key => key !== 'contacts' || isAdmin).map(key => <button key={key} className={type === key ? 'selected' : ''} onClick={() => setType(key)}>{key}</button>)}</div>
      {canRead && <><section className="mg-card"><h2>{type}</h2>{busy && <p>Loading…</p>}
        {!busy && items.length === 0 && <p>No records found.</p>}
        <div className="mg-records">{items.map(item => <article key={item._id} className="mg-record">
          <strong>{item.title || `${item.firstName} ${item.lastName}`}</strong>
          <p>{item.description || item.message}</p><small>ID: {item._id}</small>
          {isAdmin && <div className="mg-actions"><button onClick={() => selectRecord(item)} disabled={busy}>Edit</button><button onClick={() => remove(item)} disabled={busy}>Delete</button></div>}
        </article>)}</div></section>
        {isAdmin && <section className="mg-card"><h2>{editing ? 'Update record' : 'Create record'}</h2><form onSubmit={submitRecord}>
          {types[type].map(field => <label key={field}>{field}<input required type={field === 'completionDate' ? 'date' : field === 'email' ? 'email' : 'text'} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}/></label>)}
          <button disabled={busy}>{editing ? 'Save changes' : 'Create'}</button>
          {editing && <button type="button" onClick={() => { setEditing(null); setForm(defaultValues(types[type])); }}>Cancel edit</button>}
        </form></section>}
      </>}
    </>}
  </main>;
}
