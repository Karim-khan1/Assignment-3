import { Link } from "react-router-dom";
import usePersonalWebsitePage from "../hooks/usePersonalWebsitePage";
import "../styles/Personal-Website.css";

function PersonalWebsite() {
    usePersonalWebsitePage();

    return (
        <div className="website-project-page">
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
className="website-hero"
id="websiteHero"
>
<div
className="website-hero-background"
aria-hidden="true"
>
<span className="portal-line portal-line-one"></span>
<span className="portal-line portal-line-two"></span>
<span className="portal-node portal-node-one"></span>
<span className="portal-node portal-node-two"></span>
<span className="portal-node portal-node-three"></span>
</div>

<div className="website-hero-container">

{/* =========================================
STATUS BAR
========================================== */}
<div className="website-status-bar">
<div>
<span>
PROJECT ARCHIVE
</span>
<strong>
RECORD 03
</strong>
</div>

<div className="website-status">
<span
className="website-status-light"
aria-hidden="true"
></span>
ONGOING DEVELOPMENT
</div>
</div>

{/* =========================================
HERO LAYOUT
========================================== */}
<div className="website-hero-layout">

<div className="website-hero-content">
<span className="website-code">
WEB // ARCHIVE // MULTI-PAGE
</span>

<p className="website-eyebrow">
FRONT-END DEVELOPMENT / CONTENT ARCHITECTURE
</p>

<h1>
Personal
<span>
Website
</span>
</h1>

<p className="website-description">
A long-term multi-page website built as
a personal archive, development playground,
and collection of themed sections covering
projects, games, technical experiments,
worldbuilding, and organized reference
material.
</p>

<div className="website-hero-actions">
<a
className="website-button website-primary"
href="#projectOverview"
>
View Case Study
<span aria-hidden="true">
↓
</span>
</a>

<Link
className="website-button website-secondary"
to="/projects"
>
Back to Projects
<span aria-hidden="true">
←
</span>
</Link>
</div>
</div>

{/* =====================================
SUMMARY PANEL
====================================== */}
<aside
className="website-summary-panel"
aria-label="Personal Website project summary"
>
<header>
<div>
<span>
PROJECT SUMMARY
</span>
<strong>
LONG-TERM DEVELOPMENT
</strong>
</div>

<span className="website-record-number">
03
</span>
</header>

<div className="website-summary-row">
<span>
ROLE
</span>
<strong>
Front-End Developer
</strong>
</div>

<div className="website-summary-row">
<span>
SECONDARY ROLE
</span>
<strong>
Designer / Content Architect
</strong>
</div>

<div className="website-summary-row">
<span>
PRIMARY STACK
</span>
<strong>
HTML / CSS / JavaScript
</strong>
</div>

<div className="website-summary-row">
<span>
STRUCTURE
</span>
<strong>
Multi-Page Website
</strong>
</div>

<div className="website-summary-row">
<span>
STATUS
</span>
<strong className="website-active">
Ongoing
</strong>
</div>

<footer>
<span
className="website-summary-pulse"
aria-hidden="true"
></span>
ARCHIVE EXPANDING
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
PROJECT OVERVIEW
================================================== */}
<section
className="website-section"
id="projectOverview"
>
<div className="website-section-heading">
<div className="website-section-id">
<span>
I
</span>

<div>
<small>
PROJECT DESCRIPTION
</small>
<strong>
OVERVIEW
</strong>
</div>
</div>

<h2>
A Website That Keeps Growing
</h2>
</div>

<div className="website-overview-layout">

<article className="website-overview-primary">
<span className="website-overview-label">
PROJECT CONCEPT
</span>

<h3>
One Website.
Many Worlds.
</h3>

<p>
The Personal Website began as a place to
collect information, projects, interests,
and experiments in one location.
</p>

<p>
Over time, it developed into a much larger
multi-page archive containing independently
themed sections, project hubs, gaming
content, visual experiments, documentation,
and interactive pages.
</p>

<p>
Each major section can have its own visual
identity while still remaining connected
through shared navigation and overall site
structure.
</p>
</article>

<aside className="website-overview-scope">
<span className="website-scope-label">
PROJECT SCOPE
</span>

<ul>
<li>
Multi-page architecture
</li>
<li>
Responsive page design
</li>
<li>
Custom JavaScript systems
</li>
<li>
Themed archive sections
</li>
<li>
Project documentation
</li>
<li>
Expandable content structure
</li>
<li>
Shared navigation systems
</li>
<li>
Long-term maintenance
</li>
</ul>
</aside>
</div>
</section>

{/* =================================================
MAIN SCREENSHOT
================================================== */}
<section className="website-section website-showcase-section">
<div className="website-section-heading">
<div className="website-section-id">
<span>
II
</span>

<div>
<small>
DEVELOPMENT CAPTURE
</small>
<strong>
WEBSITE VIEW
</strong>
</div>
</div>

<h2>
Main Website Structure
</h2>
</div>

<figure className="website-showcase website-showcase-large">
<div className="website-image-frame">
<img
src="../public/project-images/personal-website/Personal-Website-01.png"
alt="Screenshot of the Personal Website project"
loading="lazy"
/>
</div>

<figcaption>
<span>
CAPTURE 01
</span>

<strong>
Main Website Interface
</strong>

<p>
One view of the website showing the larger
visual and navigational structure used to
connect many different themed sections.
</p>
</figcaption>
</figure>
</section>

{/* =================================================
DEVELOPMENT APPROACH
================================================== */}
<section
className="website-section"
id="developmentApproach"
>
<div className="website-section-heading">
<div className="website-section-id">
<span>
III
</span>

<div>
<small>
DEVELOPMENT METHOD
</small>
<strong>
APPROACH
</strong>
</div>
</div>

<h2>
Modular by Design
</h2>
</div>

<div className="website-development-grid">

<article>
<span className="website-development-number">
01
</span>

<span className="website-development-label">
STRUCTURE
</span>

<h3>
Organize
</h3>

<p>
Separate major topics into dedicated folders,
hubs, and pages so large amounts of content
remain manageable.
</p>
</article>

<article>
<span className="website-development-number">
02
</span>

<span className="website-development-label">
DESIGN
</span>

<h3>
Theme
</h3>

<p>
Give different sections their own visual
identities rather than forcing every page
into the same design.
</p>
</article>

<article>
<span className="website-development-number">
03
</span>

<span className="website-development-label">
INTERACTION
</span>

<h3>
Enhance
</h3>

<p>
Add JavaScript systems such as navigation,
filters, lightboxes, interactive cards,
responsive menus, and status states.
</p>
</article>

<article>
<span className="website-development-number">
04
</span>

<span className="website-development-label">
EXPANSION
</span>

<h3>
Grow
</h3>

<p>
Keep the structure flexible so new sections,
projects, lore archives, galleries, and tools
can be added without rebuilding the entire site.
</p>
</article>
</div>
</section>

{/* =================================================
FEATURE AREAS
================================================== */}
<section className="website-section">
<div className="website-section-heading">
<div className="website-section-id">
<span>
IV
</span>

<div>
<small>
WEBSITE CONTENT
</small>
<strong>
FEATURE AREAS
</strong>
</div>
</div>

<h2>
Examples of Site Content
</h2>
</div>

<div className="website-feature-grid">

<article className="website-feature-card">
<span>
ARCHIVE SYSTEM
</span>

<h3>
Girls' Frontline
</h3>

<p>
A large lore and reference archive with
timelines, factions, characters, operations,
worldbuilding, and interconnected topic pages.
</p>
</article>

<article className="website-feature-card">
<span>
SERVER ARCHIVE
</span>

<h3>
Minecraft
</h3>

<p>
A themed section documenting server
information, screenshots, builds, projects,
world history, and technical setup.
</p>
</article>

<article className="website-feature-card">
<span>
GAME TRIBUTE
</span>

<h3>
The Minish Cap
</h3>

<p>
Highly themed dungeon pages with unique
presentation styles inspired by individual
environments and gameplay areas.
</p>
</article>

<article className="website-feature-card">
<span>
DEVELOPMENT
</span>

<h3>
Project Archives
</h3>

<p>
Personal and academic development projects
can be preserved and accessed through the
larger website structure.
</p>
</article>
</div>
</section>

{/* =================================================
GALLERY
================================================== */}
<section
className="website-section"
id="websiteGallery"
>
<div className="website-section-heading">
<div className="website-section-id">
<span>
V
</span>

<div>
<small>
DEVELOPMENT CAPTURES
</small>
<strong>
WEBSITE GALLERY
</strong>
</div>
</div>

<h2>
Different Sections, Different Identities
</h2>
</div>

<div className="website-gallery-grid">

<figure className="website-showcase">
<div className="website-image-frame">
<img
src="../public/project-images/personal-website/Personal-Website-02.png"
alt="Screenshot of another themed section within the Personal Website"
loading="lazy"
/>
</div>

<figcaption>
<span>
CAPTURE 02
</span>

<strong>
Themed Archive Section
</strong>

<p>
An example of how individual areas of the
website can use a completely different
visual style while remaining part of the
same overall project.
</p>
</figcaption>
</figure>

<figure className="website-showcase">
<div className="website-image-frame">
<img
src="../public/project-images/personal-website/Personal-Website-03.png"
alt="Screenshot showing another area of the Personal Website project"
loading="lazy"
/>
</div>

<figcaption>
<span>
CAPTURE 03
</span>

<strong>
Expanding Content System
</strong>

<p>
Another development view demonstrating
the range of layouts and content that the
website can support.
</p>
</figcaption>
</figure>
</div>
</section>

{/* =================================================
TECHNICAL STACK
================================================== */}
<section className="website-section">
<div className="website-section-heading">
<div className="website-section-id">
<span>
VI
</span>

<div>
<small>
DEVELOPMENT STACK
</small>
<strong>
TECHNOLOGIES
</strong>
</div>
</div>

<h2>
Core Technologies
</h2>
</div>

<div className="website-tools-grid">

<article>
<span>
STRUCTURE
</span>

<strong>
HTML
</strong>

<p>
Used to structure pages, navigation,
content sections, accessibility, and
semantic layout.
</p>
</article>

<article>
<span>
PRESENTATION
</span>

<strong>
CSS
</strong>

<p>
Used for responsive layouts, themed visual
identities, animation states, and interface
design.
</p>
</article>

<article>
<span>
INTERACTION
</span>

<strong>
JavaScript
</strong>

<p>
Used for navigation systems, galleries,
filtering, responsive controls, lightboxes,
and interactive page behavior.
</p>
</article>
</div>
</section>

{/* =================================================
OUTCOME
================================================== */}
<section className="website-section">
<div className="website-section-heading">
<div className="website-section-id">
<span>
VII
</span>

<div>
<small>
PROJECT RESULT
</small>
<strong>
OUTCOME
</strong>
</div>
</div>

<h2>
What the Project Demonstrates
</h2>
</div>

<div className="website-outcome-layout">

<article className="website-outcome-primary">
<span>
CURRENT RESULT
</span>

<h3>
A large modular front-end archive.
</h3>

<p>
The Personal Website has developed into a
large, reusable structure capable of holding
many different projects, themed archives,
galleries, guides, and experimental pages.
</p>

<p>
Building it has provided extensive practice
with front-end development, project
organization, visual design, debugging,
responsive layouts, and maintaining a growing
codebase.
</p>
</article>

<aside className="website-outcome-status">
<div>
<span>
ARCHITECTURE
</span>
<strong>
Multi-Page
</strong>
</div>

<div>
<span>
RESPONSIVE DESIGN
</span>
<strong>
Implemented
</strong>
</div>

<div>
<span>
JAVASCRIPT SYSTEMS
</span>
<strong>
Implemented
</strong>
</div>

<div>
<span>
PROJECT STATUS
</span>
<strong className="website-active">
Ongoing
</strong>
</div>
</aside>
</div>
</section>

{/* =================================================
PROJECT NAVIGATION
================================================== */}
<section className="website-project-navigation">
<a
className="website-nav-card previous-card"
href="/Assignment-4/Project-3/Assignment 4.html"
>
<span>
PREVIOUS PROJECT
</span>

<strong>
← Assignment 4
</strong>
</a>

<Link
className="website-nav-card back-card"
to="/projects"
>
<span>
PROJECT ARCHIVE
</span>

<strong>
Back to Projects →
</strong>
</Link>
</section>

</main>

</div>
);
}

export default PersonalWebsite;