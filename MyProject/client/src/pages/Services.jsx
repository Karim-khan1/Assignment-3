import { Link } from "react-router-dom";
import useServicesPage from "../hooks/useServicesPage";
import "../styles/Services.css";

function Services() {
useServicesPage();
return (
<div className="services-page">
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
className="services-hero"
id="servicesHero"
>
<div
className="services-hero-background"
aria-hidden="true"
>
<span className="tool-line tool-line-one"></span>
<span className="tool-line tool-line-two"></span>
<span className="gear-ring gear-ring-one"></span>
<span className="gear-ring gear-ring-two"></span>
</div>

<div className="services-hero-container">

{/* =========================================
STATUS BAR
========================================== */}
<div className="services-status-bar">
<div>
<span>
DEVELOPMENT WORKSHOP
</span>
<strong>
SERVICE BAY
</strong>
</div>

<div className="services-status">
<span
className="services-status-light"
aria-hidden="true"
></span>
SYSTEMS AVAILABLE
</div>
</div>

{/* =========================================
HERO GRID
========================================== */}
<div className="services-hero-layout">

{/* =====================================
HERO COPY
====================================== */}
<div className="services-hero-content">
<span className="services-code">
LOADOUT // CAPABILITIES // 005
</span>

<p className="services-eyebrow">
DEVELOPMENT // PROGRAMMING // DESIGN
</p>

<h1>
One Developer.
<span>
Many Tools.
</span>
</h1>

<p className="services-description">
I work across several areas of development,
from game programming and Unity to Python,
web development, prototyping, debugging,
and general software problem solving.
</p>

<p className="services-description secondary">
Rather than focusing on one narrow tool,
I enjoy learning how different technologies
can be used together and choosing an
appropriate solution for the problem at hand.
</p>

<div className="services-hero-actions">
<a
className="service-button service-primary"
href="#servicesDirectory"
>
View Services
<span aria-hidden="true">
↓
</span>
</a>

<Link
className="service-button service-secondary"
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
LOADOUT PANEL
====================================== */}
<aside
className="loadout-panel"
aria-label="Development capabilities overview"
>
<header className="loadout-header">
<div>
<span>
ACTIVE LOADOUT
</span>
<strong>
DEVELOPMENT TOOLKIT
</strong>
</div>

<span className="loadout-number">
08
</span>
</header>

<div className="loadout-item">
<span className="loadout-indicator"></span>
<div>
<small>
GAME ENGINE
</small>
<strong>
Unity
</strong>
</div>
</div>

<div className="loadout-item">
<span className="loadout-indicator"></span>
<div>
<small>
PROGRAMMING
</small>
<strong>
C# / C++
</strong>
</div>
</div>

<div className="loadout-item">
<span className="loadout-indicator"></span>
<div>
<small>
SCRIPTING
</small>
<strong>
Python
</strong>
</div>
</div>

<div className="loadout-item">
<span className="loadout-indicator"></span>
<div>
<small>
FRONT END
</small>
<strong>
HTML / CSS / JavaScript
</strong>
</div>
</div>

<div className="loadout-item">
<span className="loadout-indicator developing"></span>
<div>
<small>
SOFTWARE DEVELOPMENT
</small>
<strong>
Java
</strong>
</div>
</div>

<footer className="loadout-footer">
<span
className="loadout-pulse"
aria-hidden="true"
></span>
TOOLKIT READY
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
SERVICES DIRECTORY
================================================== */}
<section
className="services-section"
id="servicesDirectory"
>
<div className="services-section-heading">
<div className="services-section-id">
<span>
I
</span>

<div>
<small>
DEVELOPMENT SERVICES
</small>
<strong>
CAPABILITY DIRECTORY
</strong>
</div>
</div>

<h2>
What I Can Work On
</h2>
</div>

<div className="services-grid">

{/* =========================================
UNITY / GAME DEVELOPMENT
========================================== */}
<article className="service-card featured-service">
<header>
<span>
SERVICE 01
</span>
<strong>
PRIMARY
</strong>
</header>

<div className="service-symbol">
UNITY
</div>

<span className="service-category">
GAME DEVELOPMENT
</span>

<h3>
Unity Development
</h3>

<p>
Building gameplay prototypes, interactive
mechanics, scenes, systems, and small game
experiences using Unity and C#.
</p>

<ul className="service-list">
<li>
Gameplay systems
</li>
<li>
Interactive mechanics
</li>
<li>
Prototype development
</li>
<li>
Scene scripting
</li>
</ul>

<div className="service-tech">
<span>
C#
</span>
<span>
Unity
</span>
</div>
</article>

{/* =========================================
PROGRAMMING
========================================== */}
<article className="service-card">
<header>
<span>
SERVICE 02
</span>
<strong>
DEVELOPMENT
</strong>
</header>

<div className="service-symbol">
&lt;/&gt;
</div>

<span className="service-category">
PROGRAMMING
</span>

<h3>
Software Programming
</h3>

<p>
Developing structured programs and logic
using object-oriented programming,
reusable classes, functions, and debugging.
</p>

<ul className="service-list">
<li>
Object-oriented programming
</li>
<li>
Program logic
</li>
<li>
Data handling
</li>
<li>
Debugging
</li>
</ul>

<div className="service-tech">
<span>
C#
</span>
<span>
C++
</span>
<span>
Java
</span>
</div>
</article>

{/* =========================================
PYTHON
========================================== */}
<article className="service-card">
<header>
<span>
SERVICE 03
</span>
<strong>
SCRIPTING
</strong>
</header>

<div className="service-symbol">
PY
</div>

<span className="service-category">
PYTHON DEVELOPMENT
</span>

<h3>
Python & Automation
</h3>

<p>
Creating scripts and small applications
for automation, logic, utilities, data
processing, and general problem solving.
</p>

<ul className="service-list">
<li>
Utility scripts
</li>
<li>
Automation
</li>
<li>
Data processing
</li>
<li>
Small applications
</li>
</ul>

<div className="service-tech">
<span>
Python
</span>
</div>
</article>

{/* =========================================
WEB DEVELOPMENT
========================================== */}
<article className="service-card featured-service">
<header>
<span>
SERVICE 04
</span>
<strong>
FRONT END
</strong>
</header>

<div className="service-symbol">
WEB
</div>

<span className="service-category">
WEB DEVELOPMENT
</span>

<h3>
Front-End Websites
</h3>

<p>
Building responsive websites with structured
HTML, custom CSS, JavaScript interaction,
accessibility, and distinctive visual themes.
</p>

<ul className="service-list">
<li>
Responsive layouts
</li>
<li>
HTML structure
</li>
<li>
CSS design
</li>
<li>
JavaScript interaction
</li>
</ul>

<div className="service-tech">
<span>
HTML
</span>
<span>
CSS
</span>
<span>
JavaScript
</span>
</div>
</article>

{/* =========================================
PROTOTYPING
========================================== */}
<article className="service-card">
<header>
<span>
SERVICE 05
</span>
<strong>
CONCEPT
</strong>
</header>

<div className="service-symbol">
LAB
</div>

<span className="service-category">
PROTOTYPING
</span>

<h3>
Rapid Prototypes
</h3>

<p>
Turning an idea into a small functioning
proof of concept that can be tested,
evaluated, and improved before expanding it.
</p>

<ul className="service-list">
<li>
Proof of concept
</li>
<li>
Feature testing
</li>
<li>
Early gameplay systems
</li>
<li>
Interface experiments
</li>
</ul>

<div className="service-tech">
<span>
Unity
</span>
<span>
Python
</span>
<span>
Web
</span>
</div>
</article>

{/* =========================================
DEBUGGING
========================================== */}
<article className="service-card">
<header>
<span>
SERVICE 06
</span>
<strong>
SUPPORT
</strong>
</header>

<div className="service-symbol">
FIX
</div>

<span className="service-category">
TROUBLESHOOTING
</span>

<h3>
Debugging & Testing
</h3>

<p>
Investigating technical problems,
identifying root causes, testing potential
fixes, and improving reliability.
</p>

<ul className="service-list">
<li>
Error investigation
</li>
<li>
Logic debugging
</li>
<li>
Code cleanup
</li>
<li>
Functionality testing
</li>
</ul>

<div className="service-tech">
<span>
Debugging
</span>
<span>
Testing
</span>
</div>
</article>
</div>
</section>

{/* =================================================
DEVELOPMENT WORKFLOW
================================================== */}
<section
className="services-section workflow-section"
id="workflow"
>
<div className="services-section-heading">
<div className="services-section-id">
<span>
II
</span>

<div>
<small>
DEVELOPMENT PROCESS
</small>
<strong>
WORKFLOW
</strong>
</div>
</div>

<h2>
From Idea to Working Build
</h2>
</div>

<div className="workflow-grid">

<article className="workflow-step">
<span className="workflow-number">
01
</span>

<div>
<span className="workflow-label">
DEFINE
</span>

<h3>
Understand the Problem
</h3>

<p>
Identify the goal, requirements,
constraints, and what the finished
result needs to accomplish.
</p>
</div>
</article>

<article className="workflow-step">
<span className="workflow-number">
02
</span>

<div>
<span className="workflow-label">
BUILD
</span>

<h3>
Create the Foundation
</h3>

<p>
Develop the core functionality before
layering additional features and visual
polish on top.
</p>
</div>
</article>

<article className="workflow-step">
<span className="workflow-number">
03
</span>

<div>
<span className="workflow-label">
TEST
</span>

<h3>
Find What Breaks
</h3>

<p>
Test functionality, identify errors,
verify expected behavior, and isolate
problems.
</p>
</div>
</article>

<article className="workflow-step">
<span className="workflow-number">
04
</span>

<div>
<span className="workflow-label">
REFINE
</span>

<h3>
Improve the Result
</h3>

<p>
Clean up the experience, improve
usability, and refine code or design
where needed.
</p>
</div>
</article>
</div>
</section>

{/* =================================================
TOOLKIT
================================================== */}
<section
className="services-section toolkit-section"
id="toolkit"
>
<div className="services-section-heading">
<div className="services-section-id">
<span>
III
</span>

<div>
<small>
DEVELOPMENT STACK
</small>
<strong>
TOOLKIT
</strong>
</div>
</div>

<h2>
Technologies I Work With
</h2>
</div>

<div className="toolkit-grid">

<div className="toolkit-item">
<span>
GAME ENGINE
</span>
<strong>
Unity
</strong>
</div>

<div className="toolkit-item">
<span>
PROGRAMMING
</span>
<strong>
C#
</strong>
</div>

<div className="toolkit-item">
<span>
PROGRAMMING
</span>
<strong>
C++
</strong>
</div>

<div className="toolkit-item">
<span>
SCRIPTING
</span>
<strong>
Python
</strong>
</div>

<div className="toolkit-item">
<span>
LEARNING
</span>
<strong>
Java
</strong>
</div>

<div className="toolkit-item">
<span>
WEB
</span>
<strong>
HTML
</strong>
</div>

<div className="toolkit-item">
<span>
WEB
</span>
<strong>
CSS
</strong>
</div>

<div className="toolkit-item">
<span>
WEB
</span>
<strong>
JavaScript
</strong>
</div>

<div className="toolkit-item">
<span>
3D
</span>
<strong>
Blender
</strong>
</div>
</div>
</section>

{/* =================================================
SCOPE / HONEST CAPABILITY
================================================== */}
<section
className="services-section scope-section"
id="scope"
>
<div className="services-section-heading">
<div className="services-section-id">
<span>
IV
</span>

<div>
<small>
DEVELOPMENT SCOPE
</small>
<strong>
CURRENT FOCUS
</strong>
</div>
</div>

<h2>
Where I Focus
</h2>
</div>

<div className="scope-layout">

<article className="scope-primary">
<span className="scope-label">
CURRENT STRENGTH
</span>

<h3>
Broad Development Skills
</h3>

<p>
My current strength is versatility. I enjoy
working across game programming, software
development, scripting, front-end web work,
prototyping, and troubleshooting rather than
limiting myself to a single development area.
</p>

<p>
As I continue through my education, these
capabilities will continue to grow and become
more specialized.
</p>
</article>

<aside className="scope-note">
<span>
CURRENT BOUNDARY
</span>

<strong>
Mobile development is not currently
a primary service area.
</strong>

<p>
I prefer to represent the tools and platforms
I have meaningful hands-on experience with
rather than claiming expertise in areas I
have not yet explored deeply.
</p>
</aside>
</div>
</section>

{/* =================================================
FINAL CTA
================================================== */}
<section className="services-final">
<div className="services-final-inner">
<div>
<span>
DEVELOPMENT TOOLKIT // READY
</span>

<h2>
Have something to build?
</h2>

<p>
Visit the Contact page to discuss a project,
development idea, or other technical work.
</p>
</div>

<Link
className="service-button service-light"
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

export default Services;
