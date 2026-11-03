import { Link } from "react-router-dom";
import useEducationPage from "../hooks/useEducationPage";
import "../styles/Education.css";

function Education() {
useEducationPage();
return (
<div className="education-page">
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
className="education-hero"
id="educationHero"
>
<div
className="education-hero-background"
aria-hidden="true"
>
<span className="academy-line academy-line-one"></span>
<span className="academy-line academy-line-two"></span>
<span className="academy-ring academy-ring-one"></span>
<span className="academy-ring academy-ring-two"></span>
</div>

<div className="education-hero-container">

{/* =========================================
STATUS BAR
========================================== */}
<div className="education-status-bar">
<div>
<span>
ACADEMIC DEVELOPMENT
</span>
<strong>
TRAINING ARCHIVE
</strong>
</div>

<div className="education-status">
<span
className="education-status-light"
aria-hidden="true"
></span>
RECORD ACTIVE
</div>
</div>

{/* =========================================
HERO GRID
========================================== */}
<div className="education-hero-layout">

{/* =====================================
HERO COPY
====================================== */}
<div className="education-hero-content">
<span className="education-code">
ACADEMIC // PROGRESSION // 004
</span>

<p className="education-eyebrow">
EDUCATION // TRAINING // DEVELOPMENT
</p>

<h1>
Learning Through
<span>
Progression.
</span>
</h1>

<p className="education-description">
My education reflects a progression from
secondary school into post-secondary
studies focused on programming, game
development, software systems, and
technical problem solving.
</p>

<div className="education-hero-actions">
<a
className="education-button education-primary"
href="#academicTimeline"
>
View Academic Record
<span aria-hidden="true">
↓
</span>
</a>

<a
className="education-button education-secondary"
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
</div>

{/* =====================================
CURRENT STATUS PANEL
====================================== */}
<aside
className="academic-status-panel"
aria-label="Current academic status"
>
<header className="academic-status-header">
<div>
<span>
CURRENT PROGRAM
</span>
<strong>
ACADEMIC STATUS
</strong>
</div>

<span className="academic-record-number">
02
</span>
</header>

<div className="academic-status-row">
<span>
INSTITUTION
</span>
<strong>
Centennial College
</strong>
</div>

<div className="academic-status-row">
<span>
PROGRAM
</span>
<strong>
Game Programming
</strong>
</div>

<div className="academic-status-row">
<span>
STATUS
</span>
<strong className="academic-active">
In Progress
</strong>
</div>

<div className="academic-status-row">
<span>
FOCUS
</span>
<strong>
Programming & Game Development
</strong>
</div>

<div className="academic-status-row">
<span>
LOCATION
</span>
<strong>
Toronto, Ontario
</strong>
</div>

<footer className="academic-status-footer">
<span
className="academic-status-pulse"
aria-hidden="true"
></span>
LEARNING PATH ACTIVE
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
ACADEMIC TIMELINE
================================================== */}
<section
className="education-section timeline-section"
id="academicTimeline"
>
<div className="education-section-heading">
<div className="education-section-id">
<span>
I
</span>

<div>
<small>
ACADEMIC HISTORY
</small>
<strong>
PROGRESSION TIMELINE
</strong>
</div>
</div>

<h2>
Education Timeline
</h2>
</div>

<div className="academic-timeline">

{/* =========================================
HIGH SCHOOL
========================================== */}
<article className="timeline-record">
<div className="timeline-marker">
<span>
01
</span>
</div>

<div className="timeline-content">
<div className="timeline-record-header">
<div>
<span className="timeline-date">
2016–2018
</span>

<span className="timeline-type">
SECONDARY EDUCATION
</span>
</div>

<strong className="timeline-status completed">
COMPLETED
</strong>
</div>

<h3>
Stephpen Leacock Collegiate Institute
</h3>

<p className="timeline-program">
Ontario Secondary School Diploma
</p>

<p>
Completed secondary education and
graduated before progressing into
post-secondary studies.
</p>

<div className="timeline-meta">
<span>
LEVEL
</span>
<strong>
HIGH SCHOOL
</strong>
</div>
</div>
</article>

{/* =========================================
CENTENNIAL
========================================== */}
<article className="timeline-record current-record">
<div className="timeline-marker">
<span>
02
</span>
</div>

<div className="timeline-content">
<div className="timeline-record-header">
<div>
<span className="timeline-date">
CURRENT
</span>

<span className="timeline-type">
POST-SECONDARY EDUCATION
</span>
</div>

<strong className="timeline-status active">
ACTIVE
</strong>
</div>

<h3>
Centennial College
</h3>

<p className="timeline-program">
Game Programming
</p>

<p>
Currently studying programming,
game development, software systems,
web development, and related technical
disciplines through hands-on coursework
and project-based learning.
</p>

<div className="timeline-meta">
<span>
LEVEL
</span>
<strong>
COLLEGE
</strong>
</div>
</div>
</article>
</div>
</section>

{/* =================================================
CURRENT PROGRAM
================================================== */}
<section
className="education-section program-section"
id="currentProgram"
>
<div className="education-section-heading">
<div className="education-section-id">
<span>
II
</span>

<div>
<small>
CURRENT STUDIES
</small>
<strong>
PROGRAM PROFILE
</strong>
</div>
</div>

<h2>
Game Programming
</h2>
</div>

<div className="program-layout">

{/* =========================================
PROGRAM OVERVIEW
========================================== */}
<article className="program-overview">
<span className="program-label">
CURRENT ACADEMIC PATH
</span>

<h3>
Centennial College
</h3>

<p>
My current studies focus on the technical
foundations used in game programming and
software development.
</p>

<p>
Through coursework and assignments, I continue
building experience with programming languages,
object-oriented development, game engines,
front-end web development, databases, software
structure, and debugging.
</p>

<div className="program-status">
<div>
<span>
STATUS
</span>
<strong>
In Progress
</strong>
</div>

<div>
<span>
PRIMARY FIELD
</span>
<strong>
Game Programming
</strong>
</div>
</div>
</article>

{/* =========================================
STUDY AREAS
========================================== */}
<div className="study-area-grid">

<article className="study-area-card">
<span>
STUDY AREA 01
</span>

<h3>
Programming
</h3>

<p>
Developing strong foundations in
logic, syntax, data, methods,
classes, and software structure.
</p>
</article>

<article className="study-area-card">
<span>
STUDY AREA 02
</span>

<h3>
Game Development
</h3>

<p>
Applying programming concepts to
gameplay systems, interactive mechanics,
prototypes, and game engine workflows.
</p>
</article>

<article className="study-area-card">
<span>
STUDY AREA 03
</span>

<h3>
Web Development
</h3>

<p>
Building structured and responsive
websites using HTML, CSS, and JavaScript.
</p>
</article>

<article className="study-area-card">
<span>
STUDY AREA 04
</span>

<h3>
Software Design
</h3>

<p>
Learning how programs are organized,
tested, debugged, and improved through
structured development.
</p>
</article>
</div>
</div>
</section>

{/* =================================================
COURSEWORK / LEARNING AREAS
================================================== */}
<section
className="education-section coursework-section"
id="coursework"
>
<div className="education-section-heading">
<div className="education-section-id">
<span>
III
</span>

<div>
<small>
TECHNICAL LEARNING
</small>
<strong>
COURSEWORK AREAS
</strong>
</div>
</div>

<h2>
What I Am Learning
</h2>
</div>

<div className="coursework-grid">

<article className="coursework-card">
<span className="coursework-code">
C-01
</span>

<h3>
C# Programming
</h3>

<p>
Object-oriented programming, classes,
methods, program logic, and practical
development.
</p>
</article>

<article className="coursework-card">
<span className="coursework-code">
C-02
</span>

<h3>
C++ Programming
</h3>

<p>
Programming fundamentals, logic,
object-oriented design, memory concepts,
and structured development.
</p>
</article>

<article className="coursework-card">
<span className="coursework-code">
C-03
</span>

<h3>
Java Programming
</h3>

<p>
Classes, objects, constructors,
setters, getters, methods, and
object-oriented application development.
</p>
</article>

<article className="coursework-card">
<span className="coursework-code">
C-04
</span>

<h3>
Unity Development
</h3>

<p>
Game engine workflows, gameplay scripting,
interaction systems, scenes, and prototypes.
</p>
</article>

<article className="coursework-card">
<span className="coursework-code">
C-05
</span>

<h3>
Front-End Development
</h3>

<p>
HTML, CSS, JavaScript, responsive layouts,
accessibility, and interactive website design.
</p>
</article>

<article className="coursework-card">
<span className="coursework-code">
C-06
</span>

<h3>
Databases
</h3>

<p>
Working with structured data,
relational databases, queries,
and database fundamentals.
</p>
</article>
</div>
</section>

{/* =================================================
SKILLS DEVELOPED
================================================== */}
<section
className="education-section skills-section"
id="academicSkills"
>
<div className="education-section-heading">
<div className="education-section-id">
<span>
IV
</span>

<div>
<small>
LEARNING OUTCOMES
</small>
<strong>
DEVELOPED SKILLS
</strong>
</div>
</div>

<h2>
Skills Built Through Education
</h2>
</div>

<div className="academic-skills-grid">

<article>
<span>
01
</span>
<h3>
Problem Solving
</h3>
<p>
Breaking down technical problems and
developing workable solutions.
</p>
</article>

<article>
<span>
02
</span>
<h3>
Debugging
</h3>
<p>
Identifying errors, tracing root causes,
and testing potential fixes.
</p>
</article>

<article>
<span>
03
</span>
<h3>
Programming Logic
</h3>
<p>
Structuring program behavior using
variables, conditions, loops, methods,
and objects.
</p>
</article>

<article>
<span>
04
</span>
<h3>
Project Development
</h3>
<p>
Turning requirements into working
applications and technical projects.
</p>
</article>

<article>
<span>
05
</span>
<h3>
Iteration
</h3>
<p>
Testing work, identifying improvements,
and refining projects over time.
</p>
</article>

<article>
<span>
06
</span>
<h3>
Technical Communication
</h3>
<p>
Explaining code, project decisions,
requirements, and development outcomes.
</p>
</article>
</div>
</section>

{/* =================================================
CURRENT DEVELOPMENT
================================================== */}
<section
className="education-section current-learning-section"
>
<div className="education-section-heading">
<div className="education-section-id">
<span>
V
</span>

<div>
<small>
ACTIVE DEVELOPMENT
</small>
<strong>
CURRENT LEARNING
</strong>
</div>
</div>

<h2>
Still Learning
</h2>
</div>

<div className="current-learning-layout">

<article className="current-learning-primary">
<span>
DEVELOPMENT STATUS
</span>

<h3>
Education is still in progress.
</h3>

<p>
My current skills represent an active stage
of development rather than a finished endpoint.
</p>

<p>
Each semester introduces new languages,
workflows, development tools, and technical
problems that expand what I can build and
understand.
</p>
</article>

<aside className="current-learning-status">
<div>
<span>
CURRENT PROGRAM
</span>
<strong>
Game Programming
</strong>
</div>

<div>
<span>
INSTITUTION
</span>
<strong>
Centennial College
</strong>
</div>

<div>
<span>
STATUS
</span>
<strong className="academic-active">
Active
</strong>
</div>

<div>
<span>
OBJECTIVE
</span>
<strong>
Continue Building Experience
</strong>
</div>
</aside>
</div>
</section>

{/* =================================================
RESUME / DOCUMENTATION
================================================== */}
<section
className="education-section education-resume-section"
>
<div className="education-section-heading">
<div className="education-section-id">
<span>
VI
</span>

<div>
<small>
PROFESSIONAL DOCUMENT
</small>
<strong>
EDUCATION RECORD
</strong>
</div>
</div>

<h2>
Additional Information
</h2>
</div>

<div className="education-resume-card">
<div className="education-resume-symbol">
<span>
PDF
</span>
</div>

<div>
<span className="education-resume-label">
PROFESSIONAL RÉSUMÉ
</span>

<h3>
View My Résumé
</h3>

<p>
My résumé contains additional information
about education, qualifications, technical
skills, and development experience.
</p>

<div className="education-resume-actions">
<a
className="education-button education-primary"
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
className="education-button education-secondary"
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
NEXT DESTINATION
================================================== */}
<section className="education-final">
<div className="education-final-inner">
<div>
<span>
ACADEMIC RECORD // ACTIVE
</span>

<h2>
From learning to building.
</h2>

<p>
Continue into the Projects section to see
how programming concepts are applied through
practical development work.
</p>
</div>

<Link
className="education-button education-light"
to="/projects"
>
View Projects
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

export default Education;
