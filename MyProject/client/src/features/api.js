const KEY = 'myportfolio_access_token';
export const session = {
  token: () => sessionStorage.getItem(KEY),
  set: token => token ? sessionStorage.setItem(KEY, token) : sessionStorage.removeItem(KEY),
  clear: () => sessionStorage.removeItem(KEY)
};
export async function api(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (session.token()) headers.Authorization = `Bearer ${session.token()}`;
  let response;
  try { response = await fetch(`/api${path}`, { ...options, headers }); }
  catch { throw new Error('Cannot reach the API. Confirm that the backend is running.'); }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || `Request failed (${response.status})`);
  return body;
}
