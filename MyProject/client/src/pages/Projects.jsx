import { Link } from "react-router-dom";
import useProjectsPage from "../hooks/useProjectsPage";
import "../styles/Projects.css";

function Projects() {
useProjectsPage();
return (
<div className="projects-page">
<a
className="skip-link"
href="#mainContent"
>
Skip to main content
</a>

<main id="mainContent">

{/* =================================================
HERO
================================================== */}
<section
className="projects-hero"
id="projectsHero"
>
<div
className="projects-hero-background"
aria-hidden="true"
>
<span className="archive-line archive-line-one"></span>
<span className="archive-line archive-line-two"></span>
<span className="archive-ring archive-ring-one"></span>
<span className="archive-ring archive-ring-two"></span>
</div>

<div className="projects-hero-container">

{/* =========================================
ARCHIVE STATUS
========================================== */}
<div className="projects-status-bar">
<div>
<span>
DEVELOPMENT ARCHIVE
</span>
<strong>
PROJECT DIRECTORY
</strong>
</div>

<div className="projects-status">
<span
className="projects-status-light"
aria-hidden="true"
></span>
03 RECORDS AVAILABLE
</div>
</div>

{/* =========================================
HERO LAYOUT
========================================== */}
<div className="projects-hero-layout">

<div className="projects-hero-content">
<span className="projects-code">
ARCHIVE // DEVELOPMENT // 003
</span>

<p className="projects-eyebrow">
PROGRAMMING // GAME DEVELOPMENT // WEB
</p>

<h1>
Selected
<span>
Projects.
</span>
</h1>

<p className="projects-description">
A selection of development work showing
different areas of my experience, from
3D environment development and structured
coursework to large-scale front-end web
development.
</p>

<div className="projects-hero-actions">
<a
className="project-button project-primary"
href="#projectArchive"
>
Open Archive
<span aria-hidden="true">
↓
</span>
</a>

<Link
className="project-button project-secondary"
to="/contact"
>
Contact Me
<span aria-hidden="true">
→
</span>
</Link>
</div>
</div>

{/* =====================================
PROJECT INDEX PANEL
====================================== */}
<aside
className="project-index-panel"
aria-label="Project archive summary"
>
<header className="project-index-header">
<div>
<span>
ARCHIVE INDEX
</span>
<strong>
SELECTED RECORDS
</strong>
</div>

<span className="project-index-count">
03
</span>
</header>

<a
className="project-index-entry"
href="#pocketDimension"
>
<span>
01
</span>
<div>
<small>
GAME DEVELOPMENT
</small>
<strong>
Pocket Dimension
</strong>
</div>
</a>

<a
className="project-index-entry"
href="#assignmentFour"
>
<span>
02
</span>
<div>
<small>
COURSEWORK
</small>
<strong>
Assignment 4
</strong>
</div>
</a>

<a
className="project-index-entry"
href="#personalWebsite"
>
<span>
03
</span>
<div>
<small>
WEB DEVELOPMENT
</small>
<strong>
Personal Website
</strong>
</div>
</a>

<footer className="project-index-footer">
<span
className="archive-pulse"
aria-hidden="true"
></span>
ARCHIVE READY
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
PROJECT ARCHIVE
================================================== */}
<section
className="projects-section"
id="projectArchive"
>
<div className="projects-section-heading">
<div className="projects-section-id">
<span>
I
</span>

<div>
<small>
SELECTED DEVELOPMENT
</small>
<strong>
PROJECT ARCHIVE
</strong>
</div>
</div>

<h2>
Development Records
</h2>
</div>

<div className="project-records">

{/* =========================================
PROJECT 01
POCKET DIMENSION
========================================== */}
<article
className="project-record"
id="pocketDimension"
>
<div className="project-record-image">
<img
src="/assets/images/projects/Pocket-Dimension.jpg"
alt="Screenshot of the Pocket Dimension 3D environment project"
loading="lazy"
/>

<div className="project-image-status">
<span>
PROJECT 01
</span>
<strong>
IN DEVELOPMENT
</strong>
</div>
</div>

<div className="project-record-content">
<header className="project-record-header">
<div>
<span className="project-record-type">
GAME DEVELOPMENT / 3D ENVIRONMENT
</span>

<h3>
Pocket Dimension
</h3>
</div>

<span className="project-record-number">
01
</span>
</header>

<p className="project-record-description">
A large personal 3D environment project
being developed through a Blender-to-Unity
workflow. The project focuses on designing
interconnected interior and exterior spaces
before integrating them into Unity for
lighting, interaction, and game-engine
functionality.
</p>

<div className="project-details-grid">

<div className="project-detail">
<span>
MY ROLE
</span>
<strong>
Game Developer /
3D Environment Developer
</strong>
</div>

<div className="project-detail">
<span>
PROJECT TYPE
</span>
<strong>
Personal Development Project
</strong>
</div>
</div>

<div className="project-technologies-list">
<span>
Blender
</span>
<span>
Unity
</span>
<span>
C#
</span>
<span>
3D Environment
</span>
</div>

<div className="project-outcome">
<span>
OUTCOME
</span>
<p>
Established a reusable workflow for
creating environments in Blender and
preparing them for Unity, including
spatial planning, modular room design,
scene organization, and future
interactive functionality.
</p>
</div>

<div className="project-record-actions">
<Link
className="project-button project-primary"
to="/projects/pocket-dimension"
>
Open Project Record
<span aria-hidden="true">
→
</span>
</Link>
</div>
</div>
</article>

{/* =========================================
PROJECT 02
ASSIGNMENT 4
========================================== */}
<article
className="project-record reverse-record"
id="assignmentFour"
>
<div className="project-record-image">
<img
src="/assets/images/projects/Assignment-4.jpg"
alt="Screenshot of Assignment 4 programming project"
loading="lazy"
/>

<div className="project-image-status">
<span>
PROJECT 02
</span>
<strong>
COMPLETED
</strong>
</div>
</div>

<div className="project-record-content">
<header className="project-record-header">
<div>
<span className="project-record-type">
COLLEGE PROGRAMMING PROJECT
</span>

<h3>
Assignment 4
</h3>
</div>

<span className="project-record-number">
02
</span>
</header>

<p className="project-record-description">
A completed college programming assignment
focused on implementing interactive
application behavior while following a
defined set of technical requirements.
</p>

<div className="project-details-grid">

<div className="project-detail">
<span>
MY ROLE
</span>
<strong>
Programmer / Developer
</strong>
</div>

<div className="project-detail">
<span>
PROJECT TYPE
</span>
<strong>
Academic Coursework
</strong>
</div>
</div>

<div className="project-technologies-list">
<span>
C#
</span>
<span>
Interaction
</span>
<span>
Event Handling
</span>
<span>
Application Logic
</span>
</div>

<div className="project-outcome">
<span>
OUTCOME
</span>
<p>
Successfully completed the required
functionality while gaining additional
experience with interactive programming,
event-driven logic, testing, and
structured assignment development.
</p>
</div>

<div className="project-record-actions">
<a
className="project-button project-primary"
href="/Assignment-4/Project-3/Assignment 4.html"
>
Launch Interactive Project
<span aria-hidden="true">
→
</span>
</a>
</div>
</div>
</article>

{/* =========================================
PROJECT 03
PERSONAL WEBSITE
========================================== */}
<article
className="project-record"
id="personalWebsite"
>
<div className="project-record-image">
<img
src="/assets/images/projects/Personal-Website.jpg"
alt="Screenshot of the large personal website project"
loading="lazy"
/>

<div className="project-image-status">
<span>
PROJECT 03
</span>
<strong>
ONGOING
</strong>
</div>
</div>

<div className="project-record-content">
<header className="project-record-header">
<div>
<span className="project-record-type">
FRONT-END WEB DEVELOPMENT
</span>

<h3>
Personal Website
</h3>
</div>

<span className="project-record-number">
03
</span>
</header>

<p className="project-record-description">
A large multi-page personal website
containing themed archives, development
projects, gaming content, interactive
navigation systems, and extensive
organized information across many
independently styled sections.
</p>

<div className="project-details-grid">

<div className="project-detail">
<span>
MY ROLE
</span>
<strong>
Front-End Developer /
Designer
</strong>
</div>

<div className="project-detail">
<span>
PROJECT TYPE
</span>
<strong>
Long-Term Personal Project
</strong>
</div>
</div>

<div className="project-technologies-list">
<span>
HTML
</span>
<span>
CSS
</span>
<span>
JavaScript
</span>
<span>
Responsive Design
</span>
</div>

<div className="project-outcome">
<span>
OUTCOME
</span>
<p>
Developed a large modular website with
reusable navigation systems, responsive
layouts, themed interfaces, custom
JavaScript behavior, and an expandable
structure capable of supporting a large
amount of content.
</p>
</div>

<div className="project-record-actions">
<Link
className="project-button project-primary"
to="/projects/personal-website"
>
Open Project Record
<span aria-hidden="true">
→
</span>
</Link>
</div>
</div>
</article>
</div>
</section>

{/* =================================================
PROJECT RANGE
================================================== */}
<section className="projects-section project-range-section">
<div className="projects-section-heading">
<div className="projects-section-id">
<span>
II
</span>

<div>
<small>
DEVELOPMENT RANGE
</small>
<strong>
PROJECT COVERAGE
</strong>
</div>
</div>

<h2>
Three Different Areas
</h2>
</div>

<div className="project-range-grid">

<article>
<span>
01
</span>
<h3>
Game Development
</h3>
<p>
Environment creation, Blender workflows,
Unity integration, game-engine systems,
and interactive development.
</p>
</article>

<article>
<span>
02
</span>
<h3>
Programming
</h3>
<p>
Structured coursework, technical requirements,
event handling, application logic, and
functionality testing.
</p>
</article>

<article>
<span>
03
</span>
<h3>
Web Development
</h3>
<p>
Responsive pages, large-scale content
organization, themed interfaces, navigation,
and JavaScript interaction.
</p>
</article>
</div>
</section>

{/* =================================================
FINAL CTA
================================================== */}
<section className="projects-final">
<div className="projects-final-inner">
<div>
<span>
DEVELOPMENT ARCHIVE // COMPLETE
</span>

<h2>
Different tools.
Different problems.
</h2>

<p>
These projects represent different areas of
my development experience and the range of
technologies I continue learning and using.
</p>
</div>

<Link
className="project-button project-light"
to="/contact"
>
Establish Contact
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

export default Projects;
