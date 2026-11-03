import { Link } from "react-router-dom";
import useAboutPage from "../hooks/useAboutPage";
import "../styles/About.css";

function About() {
useAboutPage();
return (
<div className="about-page">
<a
className="skip-link"
href="#mainContent"
>
Skip to main content
</a>

<main id="mainContent">

{/* =================================================
ABOUT HERO
================================================== */}
<section
className="about-hero"
id="aboutHero"
>

{/* =============================================
DECORATIVE BACKGROUND
============================================== */}
<div
className="about-hero-background"
aria-hidden="true"
>
<span className="hero-grid-line line-one"></span>
<span className="hero-grid-line line-two"></span>
<span className="hero-grid-line line-three"></span>
<span className="hero-target-ring ring-one"></span>
<span className="hero-target-ring ring-two"></span>
</div>

<div className="about-hero-container">

{/* =========================================
HERO CLASSIFICATION BAR
========================================== */}
<div className="dossier-classification">
<div>
<span className="classification-label">
PERSONNEL ARCHIVE
</span>
<strong>
DEVELOPER DOSSIER
</strong>
</div>

<div className="classification-status">
<span
className="classification-light"
aria-hidden="true"
></span>
<span>
RECORD ACTIVE
</span>
</div>
</div>

{/* =========================================
HERO MAIN GRID
========================================== */}
<div className="about-hero-grid">

{/* =====================================
LEFT SIDE
====================================== */}
<div className="about-hero-content">
<span className="about-operation-code">
ARCHIVE // PERSONNEL // 001
</span>

<p className="about-hero-eyebrow">
GAME PROGRAMMER // SOFTWARE DEVELOPER
</p>

<h1>
About the
<span>
Developer
</span>
</h1>

<p className="about-hero-description">
A record of the person behind the
projects: my background, technical
interests, development experience,
education, and the skills I continue
building as a game programmer.
</p>

{/* =================================
HERO ACTIONS
================================== */}
<div className="about-hero-actions">
<a
className="about-command-button command-primary"
href="#personnelRecord"
>
<span aria-hidden="true">
↓
</span>
Open Personnel Record
</a>

<a
className="about-command-button command-secondary"
href="/documents/Game Programming - Resume.pdf"
target="_blank"
rel="noopener noreferrer"
>
View Résumé
<span aria-hidden="true">
↗
</span>
</a>
</div>

{/* =================================
HERO DATA
================================== */}
<div className="hero-record-data">

<div className="record-data-item">
<span>
DESIGNATION
</span>
<strong>
GAME PROGRAMMER
</strong>
</div>

<div className="record-data-item">
<span>
STATUS
</span>
<strong>
STUDENT / DEVELOPER
</strong>
</div>

<div className="record-data-item">
<span>
SPECIALIZATION
</span>
<strong>
INTERACTIVE SYSTEMS
</strong>
</div>
</div>
</div>

{/* =====================================
RIGHT SIDE COMMAND PANEL
====================================== */}
<aside
className="command-record"
aria-label="Developer record summary"
>
<header className="command-record-header">
<div>
<span>
COMMAND NETWORK
</span>
<strong>
PERSONNEL RECORD
</strong>
</div>

<span
className="record-number"
aria-hidden="true"
>
001
</span>
</header>

<div className="command-record-body">

<div className="command-record-row">
<span>
NAME
</span>
<strong>
Karimkhan Balouchi
</strong>
</div>

<div className="command-record-row">
<span>
ROLE
</span>
<strong>
Game Programmer
</strong>
</div>

<div className="command-record-row">
<span>
FIELD
</span>
<strong>
Software Development
</strong>
</div>

<div className="command-record-row">
<span>
DEVELOPMENT
</span>
<strong>
Active
</strong>
</div>

<div className="command-record-row">
<span>
PRIMARY TOOLS
</span>
<strong>
C# / C++ / Unity
</strong>
</div>

<div className="command-record-row">
<span>
SECONDARY
</span>
<strong>
Web Technologies
</strong>
</div>
</div>

<footer className="command-record-footer">
<span
className="record-online-light"
aria-hidden="true"
></span>
RECORD VERIFIED
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
PERSONNEL RECORD
================================================== */}
<section
className="about-section personnel-section"
id="personnelRecord"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
I
</span>
<div>
<small>
PERSONNEL FILE
</small>
<strong>
IDENTITY RECORD
</strong>
</div>
</div>

<h2>
Who I Am
</h2>
</div>

<div className="personnel-layout">

{/* =========================================
PROFILE IMAGE
========================================== */}
<div className="profile-column">
<div className="profile-frame">

<div className="profile-frame-header">
<span>
PERSONNEL IMAGE
</span>
<strong>
ACTIVE
</strong>
</div>

<div className="profile-image-container">
<img
src="/assets/images/profile/Profile.jpg"
alt="Professional profile photograph of Karimkhan Balouchi"
className="profile-image"
/>

<div
className="profile-scan-lines"
aria-hidden="true"
></div>
</div>

<div className="profile-frame-footer">
<span>
RECORD // KB-001
</span>
<span>
VERIFIED
</span>
</div>
</div>

{/* =====================================
PROFILE DETAILS*    
==================================== */}
<div className="profile-details">
<div>
<span>
NAME
</span>
<strong>
Karimkhan Balouchi
</strong>
</div>

<div>
<span>
PROFESSION
</span>
<strong>
Game Programming Student
</strong>
</div>

<div>
<span>
DISCIPLINE
</span>
<strong>
Software Development
</strong>
</div>
</div>
</div>

{/* =========================================
BIOGRAPHY
========================================== */}
<article className="biography-panel">
<span className="panel-identification">
BIOGRAPHICAL RECORD
</span>

<h3>
Programmer.
Creator.
Problem Solver.
</h3>

<p>
I am a game programming student with
an interest in building interactive
experiences, software systems, and
web applications through programming
and creative problem solving.
</p>

<p>
My work focuses on strengthening my
understanding of programming concepts
while applying them through practical
projects. I enjoy experimenting with
new ideas, learning how systems work,
debugging problems, and gradually
improving projects through iteration.
</p>

<p>
Game development is my primary area of
study, but my interests extend into
software development, web technologies,
user interaction, level and systems
design, and the technical processes
required to turn ideas into functioning
applications.
</p>

{/* =====================================
BIOGRAPHY STATUS BOX
====================================== */}
<div className="biography-status">
<div>
<span>
CURRENT OBJECTIVE
</span>
<strong>
Continue developing technical
and creative programming skills.
</strong>
</div>

<div>
<span>
DEVELOPMENT STATE
</span>
<strong className="status-active">
ACTIVE
</strong>
</div>
</div>
</article>
</div>
</section>

{/* =================================================
DEVELOPER IDENTITY
================================================== */}
<section
className="about-section identity-section"
id="developerIdentity"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
II
</span>
<div>
<small>
DEVELOPER PROFILE
</small>
<strong>
PROFESSIONAL IDENTITY
</strong>
</div>
</div>

<h2>
What Drives My Work
</h2>
</div>

<div className="identity-grid">

{/* =========================================
SYSTEMS
========================================== */}
<article className="identity-card">
<span className="identity-card-number">
01
</span>

<div
className="identity-symbol"
aria-hidden="true"
>
&lt;/&gt;
</div>

<span className="identity-label">
DEVELOPMENT
</span>

<h3>
Programming
</h3>

<p>
Programming gives me the ability to
transform ideas into functioning systems,
solve technical problems, and understand
how interactive applications operate
beneath the surface.
</p>
</article>

{/* =========================================
GAME DEVELOPMENT
========================================== */}
<article className="identity-card">
<span className="identity-card-number">
02
</span>

<div
className="identity-symbol"
aria-hidden="true"
>
◈
</div>

<span className="identity-label">
INTERACTIVE SYSTEMS
</span>

<h3>
Game Development
</h3>

<p>
Games combine programming, interaction,
design, problem solving, and creativity.
I enjoy working with those systems and
understanding how individual components
come together into a complete experience.
</p>
</article>

{/* =========================================
LEARNING
========================================== */}
<article className="identity-card">
<span className="identity-card-number">
03
</span>

<div
className="identity-symbol"
aria-hidden="true"
>
△
</div>

<span className="identity-label">
DEVELOPMENT CYCLE
</span>

<h3>
Continuous Learning
</h3>

<p>
Development constantly introduces new
problems and technologies. I approach
those challenges by learning gradually,
experimenting, debugging, and improving
my understanding through experience.
</p>
</article>
</div>
</section>
{/* =================================================
TECHNICAL ARSENAL
================================================== */}
<section
className="about-section arsenal-section"
id="technicalArsenal"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
III
</span>
<div>
<small>
TECHNICAL CAPABILITIES
</small>
<strong>
TECHNICAL ARSENAL
</strong>
</div>
</div>

<h2>
Tools of the Trade
</h2>
</div>

<div className="arsenal-introduction">
<p>
My technical skill set continues to grow through
coursework, personal projects, experimentation,
and practical development. These technologies
form the core tools I currently use while building
games, software, and interactive web experiences.
</p>
</div>

<div className="arsenal-grid">

{/* =========================================
C#
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-01
</span>
<span className="arsenal-status">
ACTIVE
</span>
</header>

<div className="arsenal-symbol">
C#
</div>

<h3>
C#
</h3>

<p>
Used primarily for object-oriented programming,
gameplay systems, application logic, and Unity
development.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
GAME DEVELOPMENT
</strong>
</div>
</article>

{/* =========================================
C++
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-02
</span>
<span className="arsenal-status">
ACTIVE
</span>
</header>

<div className="arsenal-symbol">
C++
</div>

<h3>
C++
</h3>

<p>
Used to strengthen lower-level programming,
object-oriented concepts, logic development,
and technical problem solving.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
PROGRAMMING
</strong>
</div>
</article>

{/* =========================================
JAVA
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-03
</span>
<span className="arsenal-status developing">
DEVELOPING
</span>
</header>

<div className="arsenal-symbol">
JAVA
</div>

<h3>
Java
</h3>

<p>
Currently expanding my understanding of Java,
classes, objects, constructors, methods, and
object-oriented application development.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
SOFTWARE DEVELOPMENT
</strong>
</div>
</article>

{/* =========================================
UNITY
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-04
</span>
<span className="arsenal-status">
ACTIVE
</span>
</header>

<div className="arsenal-symbol">
UNITY
</div>

<h3>
Unity
</h3>

<p>
Used for game development, prototyping,
gameplay programming, interactive systems,
scenes, and testing mechanics.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
GAME ENGINE
</strong>
</div>
</article>

{/* =========================================
HTML
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-05
</span>
<span className="arsenal-status">
ACTIVE
</span>
</header>

<div className="arsenal-symbol">
HTML
</div>

<h3>
HTML
</h3>

<p>
Used to create structured, accessible, and
maintainable content for responsive web
applications and portfolio projects.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
WEB DEVELOPMENT
</strong>
</div>
</article>

{/* =========================================
CSS
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-06
</span>
<span className="arsenal-status">
ACTIVE
</span>
</header>

<div className="arsenal-symbol">
CSS
</div>

<h3>
CSS
</h3>

<p>
Used for responsive layouts, visual design,
theming, interface polish, accessibility,
and presentation.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
INTERFACE DESIGN
</strong>
</div>
</article>

{/* =========================================
JAVASCRIPT
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-07
</span>
<span className="arsenal-status">
ACTIVE
</span>
</header>

<div className="arsenal-symbol">
JS
</div>

<h3>
JavaScript
</h3>

<p>
Used to create interactive website behavior,
interface controls, navigation systems,
dynamic states, and user-focused features.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
FRONT END
</strong>
</div>
</article>

{/* =========================================
BLENDER
========================================== */}
<article className="arsenal-card">
<header>
<span className="arsenal-index">
A-08
</span>
<span className="arsenal-status developing">
DEVELOPING
</span>
</header>

<div className="arsenal-symbol">
3D
</div>

<h3>
Blender
</h3>

<p>
Used for learning 3D workflows, creating
models, environments, assets, and preparing
content for interactive projects.
</p>

<div className="arsenal-meta">
<span>
FIELD
</span>
<strong>
3D DEVELOPMENT
</strong>
</div>
</article>
</div>
</section>

{/* =================================================
DEVELOPMENT DOCTRINE
================================================== */}
<section
className="about-section doctrine-section"
id="developmentDoctrine"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
IV
</span>
<div>
<small>
WORKING METHOD
</small>
<strong>
DEVELOPMENT DOCTRINE
</strong>
</div>
</div>

<h2>
How I Approach Development
</h2>
</div>

<div className="doctrine-layout">

{/* =========================================
PRIMARY DOCTRINE
========================================== /}
<article className="doctrine-primary">
<span className="doctrine-classification">
PRIMARY DIRECTIVE
</span>

<h3>
Build.
Test.
Improve.
</h3>

<p>
I prefer to approach development through
manageable stages rather than attempting to
solve every problem at once. Building a
functioning foundation first makes it easier
to test ideas, identify problems, and improve
the project gradually.
</p>

<p>
This approach helps me understand why something
works instead of simply memorizing a solution.
Each bug, failed attempt, and revision becomes
part of the learning process.
</p>
</article>

{/* =========================================
DOCTRINE POINTS
========================================== */}
<div className="doctrine-points">

<article className="doctrine-point">
<span className="doctrine-point-number">
01
</span>
<div>
<h3>
Problem Solving
</h3>
<p>
Break larger problems into smaller,
understandable parts and solve them
systematically.
</p>
</div>
</article>

<article className="doctrine-point">
<span className="doctrine-point-number">
02
</span>
<div>
<h3>
Iteration
</h3>
<p>
Start with something usable, evaluate
the result, and improve it through
focused revisions.
</p>
</div>
</article>

<article className="doctrine-point">
<span className="doctrine-point-number">
03
</span>
<div>
<h3>
Debugging
</h3>
<p>
Identify the root cause of a problem
rather than treating every visible
error as a separate issue.
</p>
</div>
</article>

<article className="doctrine-point">
<span className="doctrine-point-number">
04
</span>
<div>
<h3>
Continuous Learning
</h3>
<p>
Use projects and coursework as
opportunities to understand new tools,
programming concepts, and workflows.
</p>
</div>
</article>
</div>
</div>
</section>

{/* =================================================
INTERESTS
================================================== */}
<section
className="about-section interests-section"
id="interests"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
V
</span>
<div>
<small>
AREAS OF INTEREST
</small>
<strong>
SPECIALIZATIONS
</strong>
</div>
</div>

<h2>
Where My Interests Lead
</h2>
</div>

<div className="interests-grid">

<article className="interest-panel">
<span className="interest-marker">
FIELD 01
</span>

<h3>
Gameplay Systems
</h3>

<p>
Programming mechanics, interactions, game
logic, and systems that define how players
engage with an experience.
</p>
</article>

<article className="interest-panel">
<span className="interest-marker">
FIELD 02
</span>

<h3>
Interactive Environments
</h3>

<p>
Building spaces and applications where
programming, navigation, visuals, and user
interaction work together.
</p>
</article>

<article className="interest-panel">
<span className="interest-marker">
FIELD 03
</span>

<h3>
Software Systems
</h3>

<p>
Understanding how classes, objects, data,
logic, and application structure combine
into maintainable software.
</p>
</article>

<article className="interest-panel">
<span className="interest-marker">
FIELD 04
</span>

<h3>
Web Development
</h3>

<p>
Creating expressive but functional websites
with responsive layouts, interactive behavior,
and strong visual identity.
</p>
</article>

<article className="interest-panel">
<span className="interest-marker">
FIELD 05
</span>

<h3>
Worldbuilding & Design
</h3>

<p>
Exploring how environments, visual identity,
systems, and storytelling can create a more
cohesive interactive experience.
</p>
</article>

<article className="interest-panel">
<span className="interest-marker">
FIELD 06
</span>

<h3>
Technical Exploration
</h3>

<p>
Experimenting with new workflows, programming
techniques, software tools, and development
methods.
</p>
</article>
</div>
</section>

{/* =================================================
RESUME ARCHIVE
================================================== */}
<section
className="about-section resume-section"
id="resumeArchive"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
VI
</span>
<div>
<small>
PROFESSIONAL DOCUMENT
</small>
<strong>
RÉSUMÉ ARCHIVE
</strong>
</div>
</div>

<h2>
Résumé Record
</h2>
</div>

<div className="resume-archive">

<div className="resume-document-symbol">
<span>
PDF
</span>
</div>

<div className="resume-document-content">
<span className="resume-classification">
PROFESSIONAL RECORD
</span>

<h3>
Karimkhan Balouchi
Résumé
</h3>

<p>
View or download a PDF copy of my résumé
containing additional information about my
education, technical experience, skills,
and qualifications.
</p>

<div className="resume-document-data">
<div>
<span>
FORMAT
</span>
<strong>
PDF
</strong>
</div>

<div>
<span>
DOCUMENT TYPE
</span>
<strong>
RÉSUMÉ
</strong>
</div>

<div>
<span>
STATUS
</span>
<strong className="status-active">
AVAILABLE
</strong>
</div>
</div>

<div className="resume-actions">
<a
className="about-command-button command-primary"
href="/documents/Game Programming - Resume.pdf"
target="_blank"
rel="noopener noreferrer"
>
View Résumé
<span aria-hidden="true">
↗
</span>
</a>

<a
className="about-command-button command-secondary"
href="/documents/Game Programming - Resume.pdf"
download
>
Download PDF
<span aria-hidden="true">
↓
</span>
</a>
</div>
</div>
</div>
</section>

{/* =================================================
NEXT DESTINATIONS
================================================== */}
<section
className="about-section about-navigation-section"
id="continuePortfolio"
>
<div className="about-section-heading">
<div className="about-section-code">
<span>
VII
</span>
<div>
<small>
PORTFOLIO NETWORK
</small>
<strong>
NEXT DESTINATIONS
</strong>
</div>
</div>

<h2>
Continue Through the Portfolio
</h2>
</div>

<div className="about-navigation-grid">

<Link
className="about-navigation-card"
to="/projects"
>
<span className="about-navigation-index">
01
</span>

<span className="about-navigation-label">
PROJECT ARCHIVE
</span>

<strong>
Projects
</strong>

<p>
Explore selected development work,
programming projects, and technical outcomes.
</p>

<span className="about-navigation-arrow">
→
</span>
</Link>

<Link
className="about-navigation-card"
to="/education"
>
<span className="about-navigation-index">
02
</span>

<span className="about-navigation-label">
TRAINING RECORD
</span>

<strong>
Education
</strong>

<p>
Review my academic background,
qualifications, and development studies.
</p>

<span className="about-navigation-arrow">
→
</span>
</Link>

<Link
className="about-navigation-card"
to="/services"
>
<span className="about-navigation-index">
03
</span>

<span className="about-navigation-label">
CAPABILITIES
</span>

<strong>
Services
</strong>

<p>
See the programming, game development,
and web development services I can provide.
</p>

<span className="about-navigation-arrow">
→
</span>
</Link>

<Link
className="about-navigation-card"
to="/contact"
>
<span className="about-navigation-index">
04
</span>

<span className="about-navigation-label">
COMMUNICATION
</span>

<strong>
Contact
</strong>

<p>
Send a message through the portfolio's
contact system.
</p>

<span className="about-navigation-arrow">
→
</span>
</Link>
</div>
</section>

{/* =================================================
FINAL DOSSIER CTA
================================================== */}
<section className="about-final-cta">
<div className="about-final-cta-inner">
<div>
<span className="final-cta-label">
PERSONNEL RECORD // COMPLETE
</span>

<h2>
Ready for the next objective.
</h2>

<p>
Continue into the project archive to see
how these skills and interests are applied
through development work.
</p>
</div>

<Link
className="about-command-button command-light"
to="/projects"
>
Enter Project Archive
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

export default About;