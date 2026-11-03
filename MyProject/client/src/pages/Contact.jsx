import { Link, useNavigate } from "react-router-dom";
import useContactPage from "../hooks/useContactPage";
import "../styles/Contact.css";

function Contact() {
const navigate = useNavigate();
useContactPage(navigate);
return (
<div className="contact-page">
<a
className="skip-link"
href="#mainContent"
>
Skip to main content
</a>

<main id="mainContent">

{/* =================================================
CONTACT HERO
================================================== */}
<section
className="contact-hero"
id="contactHero"
>

<div
className="contact-signal-background"
aria-hidden="true"
>
<span className="signal-ring signal-ring-one"></span>
<span className="signal-ring signal-ring-two"></span>
<span className="signal-ring signal-ring-three"></span>
<span className="signal-line signal-line-one"></span>
<span className="signal-line signal-line-two"></span>
</div>

<div className="contact-hero-container">

{/* =========================================
NETWORK STATUS
========================================== */}
<div className="communications-status">
<div>
<span className="communications-kicker">
COMMUNICATION NETWORK
</span>
<strong>
CONTACT RELAY
</strong>
</div>

<div className="communications-online">
<span
className="communications-light"
aria-hidden="true"
></span>
CHANNELS ONLINE
</div>
</div>

{/* =========================================
HERO CONTENT
========================================== */}
<div className="contact-hero-layout">

<div className="contact-hero-copy">
<span className="contact-channel-code">
COMMS // NETWORK // 006
</span>

<p className="contact-eyebrow">
COMMUNICATION // COLLABORATION
</p>

<h1>
Establish
<span>
Contact
</span>
</h1>

<p className="contact-description">
Whether the message concerns a project,
coursework, development, collaboration,
or another professional topic, several
communication channels are available.
</p>

<div className="contact-hero-actions">
<a
className="contact-button contact-primary"
href="#contactForm"
>
Send Message
<span aria-hidden="true">
↓
</span>
</a>

<a
className="contact-button contact-secondary"
href="#communicationChannels"
>
View Channels
</a>
</div>
</div>

{/* =====================================
NETWORK PANEL
====================================== */}
<aside
className="network-panel"
aria-label="Communication network status"
>
<header className="network-panel-header">
<div>
<span>
NETWORK STATUS
</span>
<strong>
AVAILABLE CHANNELS
</strong>
</div>

<span
className="network-panel-code"
aria-hidden="true"
>
04
</span>
</header>

<div className="network-channel">
<span className="channel-indicator online"></span>
<div>
<span>
PRIMARY
</span>
<strong>
Centennial Email
</strong>
</div>

<small>
ONLINE
</small>
</div>

<div className="network-channel">
<span className="channel-indicator online"></span>
<div>
<span>
ACADEMIC
</span>
<strong>
Microsoft Teams
</strong>
</div>

<small>
ONLINE
</small>
</div>

<div className="network-channel">
<span className="channel-indicator online"></span>
<div>
<span>
DIRECT
</span>
<strong>
Discord
</strong>
</div>

<small>
ONLINE
</small>
</div>

<div className="network-channel">
<span className="channel-indicator online"></span>
<div>
<span>
DEVELOPMENT
</span>
<strong>
GitHub
</strong>
</div>

<small>
ONLINE
</small>
</div>

<footer className="network-panel-footer">
<span
className="network-pulse"
aria-hidden="true"
></span>
COMMUNICATION RELAY ACTIVE
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
COMMUNICATION CHANNELS
================================================== */}
<section
className="contact-section"
id="communicationChannels"
>
<div className="contact-section-heading">
<div className="contact-section-id">
<span>
I
</span>

<div>
<small>
COMMUNICATION DIRECTORY
</small>
<strong>
AVAILABLE CHANNELS
</strong>
</div>
</div>

<h2>
Ways to Reach Me
</h2>
</div>

<div className="communication-grid">

{/* =========================================
CENTENNIAL EMAIL
========================================== */}
<article className="communication-card primary-channel">
<header>
<span>
CHANNEL 01
</span>
<strong>
PRIMARY
</strong>
</header>

<div
className="communication-symbol"
aria-hidden="true"
>
@
</div>

<span className="communication-type">
ACADEMIC EMAIL
</span>

<h3>
Centennial College
</h3>

<p>
The preferred contact method for academic,
course-related, and professional
communication.
</p>

<div className="communication-address">
<span>
EMAIL
</span>
<strong>
kbalouch@my.centennialcollege.ca
</strong>
</div>

<a
className="communication-action"
href="mailto:kbalouch@my.centennialcollege.ca"
>
Send Email
<span aria-hidden="true">
→
</span>
</a>
</article>

{/* =========================================
MICROSOFT TEAMS
========================================== */}
<article className="communication-card">
<header>
<span>
CHANNEL 02
</span>
<strong>
ACADEMIC
</strong>
</header>

<div
className="communication-symbol"
aria-hidden="true"
>
T
</div>

<span className="communication-type">
MICROSOFT TEAMS
</span>

<h3>
Teams
</h3>

<p>
Available through my Centennial College
account for coursework, project discussion,
and academic communication.
</p>

<div className="communication-address">
<span>
ACCOUNT
</span>
<strong>
kbalouch@my.centennialcollege.ca
</strong>
</div>

<a
className="communication-action"
href="mailto:kbalouch@my.centennialcollege.ca"
>
Contact Through College Account
<span aria-hidden="true">
→
</span>
</a>
</article>

{/* =========================================
DISCORD
========================================== */}
<article className="communication-card">
<header>
<span>
CHANNEL 03
</span>
<strong>
DIRECT
</strong>
</header>

<div
className="communication-symbol"
aria-hidden="true"
>
D
</div>

<span className="communication-type">
DIRECT COMMUNICATION
</span>

<h3>
Discord
</h3>

<p>
An alternative communication method for
development discussion and direct
conversation when appropriate.
</p>

<div className="communication-address">
<span>
derpman1
</span>
<strong>
derpman1
</strong>
</div>

<button
className="communication-action copy-contact"
type="button"
data-copy-value="derpman1"
>
Copy Username
<span aria-hidden="true">
⧉
</span>
</button>
</article>

{/* =========================================
GITHUB
========================================== */}
<article className="communication-card">
<header>
<span>
CHANNEL 04
</span>
<strong>
DEVELOPMENT
</strong>
</header>

<div
className="communication-symbol"
aria-hidden="true"
>
&lt;/&gt;
</div>

<span className="communication-type">
DEVELOPMENT PROFILE
</span>

<h3>
GitHub
</h3>

<p>
View repositories, programming work,
project development, and source code through
my professional GitHub account.
</p>

<div className="communication-address">
<span>
PROFILE
</span>
<strong>
Karim-khan1
</strong>
</div>

<a
className="communication-action"
href="https://github.com/Karim-khan1?tab=repositories"
id="contactGithubLink"
target="_blank"
rel="noopener noreferrer"
>
Open GitHub
<span aria-hidden="true">
↗
</span>
</a>
</article>
</div>
</section>

{/* =================================================
CONTACT FORM
================================================== */}
<section
className="contact-section form-section"
id="contactForm"
>
<div className="contact-section-heading">
<div className="contact-section-id">
<span>
II
</span>

<div>
<small>
DIRECT TRANSMISSION
</small>
<strong>
MESSAGE TERMINAL
</strong>
</div>
</div>

<h2>
Send a Message
</h2>
</div>

<div className="contact-form-layout">

{/* =========================================
FORM INFORMATION
========================================== */}
<aside className="form-information">
<span className="form-information-label">
TRANSMISSION PROTOCOL
</span>

<h3>
Open a Communication Channel
</h3>

<p>
Complete each required field and submit the
message. For this portfolio assignment, the
entered information is handled locally by the
page and is not transmitted to a server or
stored in a database.
</p>

<div className="form-protocol-list">

<div>
<span>
01
</span>
<p>
Complete all required fields.
</p>
</div>

<div>
<span>
02
</span>
<p>
Confirm the provided email address.
</p>
</div>

<div>
<span>
03
</span>
<p>
Submit the communication form.
</p>
</div>

<div>
<span>
04
</span>
<p>
The portfolio returns to Home
after successful submission.
</p>
</div>
</div>
</aside>

{/* =========================================
REQUIRED ASSIGNMENT FORM
========================================== */}
<form
className="contact-form"
id="portfolioContactForm"
noValidate
>
<div className="form-terminal-header">
<div>
<span>
CONTACT_FORM
</span>
<strong>
TRANSMISSION INPUT
</strong>
</div>

<div className="form-terminal-status">
<span
className="form-status-light"
aria-hidden="true"
></span>
READY
</div>
</div>

<div className="contact-form-body">

{/* =================================
FIRST + LAST NAME
================================== */}
<div className="form-row">

<div className="form-field">
<label htmlFor="firstName">
First Name
<span aria-hidden="true">
*
</span>
</label>

<input
type="text"
id="firstName"
name="firstName"
autoComplete="given-name"
required
/>

<small
className="field-error"
id="firstNameError"
></small>
</div>

<div className="form-field">
<label htmlFor="lastName">
Last Name
<span aria-hidden="true">
*
</span>
</label>

<input
type="text"
id="lastName"
name="lastName"
autoComplete="family-name"
required
/>

<small
className="field-error"
id="lastNameError"
></small>
</div>
</div>

{/* =================================
PHONE
================================== */}
<div className="form-field">
<label htmlFor="contactNumber">
Contact Number
<span aria-hidden="true">
*
</span>
</label>

<input
type="tel"
id="contactNumber"
name="contactNumber"
autoComplete="tel"
placeholder="Example: 647-534-3518"
required
/>

<small
className="field-error"
id="contactNumberError"
></small>
</div>

{/* =================================
EMAIL
================================== */}
<div className="form-field">
<label htmlFor="emailAddress">
Email Address
<span aria-hidden="true">
*
</span>
</label>

<input
type="email"
id="emailAddress"
name="emailAddress"
autoComplete="email"
placeholder="name@example.com"
required
/>

<small
className="field-error"
id="emailAddressError"
></small>
</div>

{/* =================================
MESSAGE
================================== */}
<div className="form-field">
<label htmlFor="message">
Message
<span aria-hidden="true">
*
</span>
</label>

<textarea
id="message"
name="message"
rows="8"
maxLength="1500"
required
></textarea>

<div className="message-field-meta">
<small
className="field-error"
id="messageError"
></small>

<span id="messageCounter">
0 / 1500
</span>
</div>
</div>

{/* =================================
SUBMISSION
================================== */}
<div className="form-submit-area">
<button
className="contact-button contact-submit"
type="submit"
>
Transmit Message
<span aria-hidden="true">
→
</span>
</button>

<p
className="form-submit-status"
id="formSubmitStatus"
role="status"
aria-live="polite"
>
Waiting for transmission.
</p>
</div>
</div>
</form>
</div>
</section>

{/* =================================================
RESPONSE / AVAILABILITY
================================================== */}
<section className="contact-section availability-section">
<div className="contact-section-heading">
<div className="contact-section-id">
<span>
III
</span>

<div>
<small>
COMMUNICATION NOTES
</small>
<strong>
RESPONSE PROTOCOL
</strong>
</div>
</div>

<h2>
Contact Information
</h2>
</div>

<div className="availability-grid">

<article>
<span>
PRIMARY METHOD
</span>
<strong>
Centennial Email
</strong>
<p>
Recommended for academic and professional
correspondence.
</p>
</article>

<article>
<span>
ACADEMIC METHOD
</span>
<strong>
Microsoft Teams
</strong>
<p>
Suitable for Centennial College coursework
and project communication.
</p>
</article>

<article>
<span>
ALTERNATIVE METHOD
</span>
<strong>
Discord
</strong>
<p>
Available as an additional direct
communication channel.
</p>
</article>
</div>
</section>

{/* =================================================
FINAL CTA
================================================== */}
<section className="contact-final">
<div className="contact-final-inner">
<div>
<span>
COMMUNICATION NETWORK // ONLINE
</span>

<h2>
Channel established.
</h2>

<p>
Browse the rest of the portfolio or use the
message terminal above to send a communication.
</p>
</div>

<Link
className="contact-button contact-light"
to="/"
>
Return Home
<span aria-hidden="true">
→
</span>
</Link>
</div>
</section>

</main>

</div>
);
}

export default Contact;