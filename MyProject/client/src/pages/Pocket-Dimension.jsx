import { Link } from "react-router-dom";
import usePocketDimensionPage from "../hooks/usePocketDimensionPage";
import "../styles/Pocket-Dimension.css";

function PocketDimension() {
usePocketDimensionPage();
return (
<div className="pocket-project-page">
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
className="pocket-hero"
id="pocketHero"
>
<div
className="pocket-hero-background"
aria-hidden="true"
>
<span className="world-ring world-ring-one"></span>
<span className="world-ring world-ring-two"></span>
<span className="world-line world-line-one"></span>
<span className="world-line world-line-two"></span>
</div>

<div className="pocket-hero-container">

{/* =========================================
PROJECT STATUS BAR
========================================== */}
<div className="pocket-status-bar">
<div>
<span>
PROJECT ARCHIVE
</span>
<strong>
RECORD 01
</strong>
</div>

<div className="pocket-status">
<span
className="pocket-status-light"
aria-hidden="true"
></span>
IN DEVELOPMENT
</div>
</div>

{/* =========================================
HERO CONTENT
========================================== */}
<div className="pocket-hero-layout">

<div className="pocket-hero-content">
<span className="pocket-code">
ENVIRONMENT // BLENDER // UNITY
</span>

<p className="pocket-eyebrow">
GAME DEVELOPMENT / 3D ENVIRONMENT
</p>

<h1>
Pocket
<span>
Dimension
</span>
</h1>

<p className="pocket-description">
A large personal 3D environment project
focused on building interconnected spaces
in Blender and preparing them for Unity
integration, lighting, interaction, and
future game-engine functionality.
</p>

<div className="pocket-hero-actions">
<a
className="pocket-button pocket-primary"
href="#projectOverview"
>
View Case Study
<span aria-hidden="true">
↓
</span>
</a>

<Link
className="pocket-button pocket-secondary"
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
PROJECT SUMMARY PANEL
====================================== */}
<aside
className="pocket-summary-panel"
aria-label="Pocket Dimension project summary"
>
<header>
<div>
<span>
PROJECT SUMMARY
</span>
<strong>
ACTIVE DEVELOPMENT
</strong>
</div>

<span className="pocket-record-number">
01
</span>
</header>

<div className="pocket-summary-row">
<span>
ROLE
</span>
<strong>
Game Developer
</strong>
</div>

<div className="pocket-summary-row">
<span>
SECONDARY ROLE
</span>
<strong>
3D Environment Developer
</strong>
</div>

<div className="pocket-summary-row">
<span>
PRIMARY TOOLS
</span>
<strong>
Blender / Unity
</strong>
</div>

<div className="pocket-summary-row">
<span>
SCRIPTING
</span>
<strong>
C#
</strong>
</div>

<div className="pocket-summary-row">
<span>
STATUS
</span>
<strong className="pocket-active">
In Development
</strong>
</div>

<footer>
<span
className="pocket-summary-pulse"
aria-hidden="true"
></span>
PROJECT PIPELINE ACTIVE
</footer>
</aside>
</div>
</div>
</section>

{/* =================================================
PROJECT OVERVIEW
================================================== */}
<section
className="pocket-section"
id="projectOverview"
>
<div className="pocket-section-heading">
<div className="pocket-section-id">
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
Building a Personal World
</h2>
</div>

<div className="overview-layout">

<article className="overview-primary">
<span className="overview-label">
PROJECT CONCEPT
</span>

<h3>
Environment First.
Interaction Second.
</h3>

<p>
The Pocket Dimension project began as a
personal environment-building idea focused on
creating a large interconnected world with
interior spaces, exterior areas, themed rooms,
and explorable environments.
</p>

<p>
The current workflow begins in Blender, where
rooms and architectural spaces are modeled and
refined before being exported into Unity.
</p>

<p>
Unity will serve as the final environment for
lighting, interaction, navigation, doors,
scene functionality, and future game systems.
</p>
</article>

<aside className="overview-objectives">
<span className="objectives-label">
CURRENT OBJECTIVES
</span>

<ul>
<li>
Build modular environments
</li>
<li>
Maintain clean room proportions
</li>
<li>
Prepare assets for Unity
</li>
<li>
Preserve materials and color
</li>
<li>
Add lighting and interaction
</li>
<li>
Expand the environment over time
</li>
</ul>
</aside>
</div>
</section>

{/* =================================================
IMAGE 01
================================================== */}
<section className="pocket-section showcase-section">
<div className="pocket-section-heading">
<div className="pocket-section-id">
<span>
II
</span>

<div>
<small>
DEVELOPMENT CAPTURE
</small>
<strong>
ENVIRONMENT VIEW
</strong>
</div>
</div>

<h2>
Current Environment
</h2>
</div>

<figure className="pocket-showcase large-showcase">
<div className="pocket-image-frame">
<img
src="../public/project-images/pocket-dimension/Pocket-Dimension-01.png"
alt="Pocket Dimension Blender and Unity environment development screenshot"
loading="lazy"
/>
</div>

<figcaption>
<span>
CAPTURE 01
</span>

<strong>
Environment Development
</strong>

<p>
A development view showing part of the
Pocket Dimension environment during the
modeling and layout process.
</p>
</figcaption>
</figure>
</section>

{/* =================================================
WORKFLOW
================================================== */}
<section
className="pocket-section workflow-section"
id="workflow"
>
<div className="pocket-section-heading">
<div className="pocket-section-id">
<span>
III
</span>

<div>
<small>
DEVELOPMENT PIPELINE
</small>
<strong>
WORKFLOW
</strong>
</div>
</div>

<h2>
Blender to Unity
</h2>
</div>

<div className="pocket-workflow-grid">

<article>
<span className="workflow-number">
01
</span>

<span className="workflow-label">
PLAN
</span>

<h3>
Layout
</h3>

<p>
Establish room dimensions, hallways,
connections, stairs, and overall spatial
relationships.
</p>
</article>

<article>
<span className="workflow-number">
02
</span>

<span className="workflow-label">
BUILD
</span>

<h3>
Blender
</h3>

<p>
Model the environment, refine proportions,
create structures, and organize reusable
scene elements.
</p>
</article>

<article>
<span className="workflow-number">
03
</span>

<span className="workflow-label">
EXPORT
</span>

<h3>
Asset Transfer
</h3>

<p>
Prepare models and materials for transfer
from Blender into the game engine.
</p>
</article>

<article>
<span className="workflow-number">
04
</span>

<span className="workflow-label">
INTEGRATE
</span>

<h3>
Unity
</h3>

<p>
Add lighting, navigation, interaction,
functionality, and additional scene polish.
</p>
</article>
</div>
</section>

{/* =================================================
IMAGE GALLERY
================================================== */}
<section
className="pocket-section gallery-section"
id="gallery"
>
<div className="pocket-section-heading">
<div className="pocket-section-id">
<span>
IV
</span>

<div>
<small>
DEVELOPMENT CAPTURES
</small>
<strong>
PROJECT GALLERY
</strong>
</div>
</div>

<h2>
More Development Views
</h2>
</div>

<div className="pocket-gallery-grid">

<figure className="pocket-showcase">
<div className="pocket-image-frame">
<img
src="../public/project-images/pocket-dimension/Pocket-Dimension-02.png"
alt="Additional Pocket Dimension environment development screenshot"
loading="lazy"
/>
</div>

<figcaption>
<span>
CAPTURE 02
</span>

<strong>
Environment Detail
</strong>
</figcaption>
</figure>

<figure className="pocket-showcase">
<div className="pocket-image-frame">
<img
src="../public/project-images/pocket-dimension/Pocket-Dimension-03.png"
alt="Additional Pocket Dimension Blender or Unity development screenshot"
loading="lazy"
/>
</div>

<figcaption>
<span>
CAPTURE 03
</span>

<strong>
Development Progress
</strong>
</figcaption>
</figure>
</div>
</section>

{/* =================================================
TECHNICAL STACK
================================================== */}
<section className="pocket-section">
<div className="pocket-section-heading">
<div className="pocket-section-id">
<span>
V
</span>

<div>
<small>
DEVELOPMENT TOOLS
</small>
<strong>
TECHNICAL STACK
</strong>
</div>
</div>

<h2>
Tools Used
</h2>
</div>

<div className="pocket-tools-grid">

<article>
<span>
3D MODELING
</span>
<strong>
Blender
</strong>
<p>
Used for modeling, environment layout,
geometry, room design, and asset creation.
</p>
</article>

<article>
<span>
GAME ENGINE
</span>
<strong>
Unity
</strong>
<p>
Used for final scene integration, lighting,
interaction, environment functionality,
and game systems.
</p>
</article>

<article>
<span>
PROGRAMMING
</span>
<strong>
C#
</strong>
<p>
Intended for interaction systems, doors,
navigation features, and game-engine logic.
</p>
</article>
</div>
</section>

{/* =================================================
OUTCOME
================================================== */}
<section className="pocket-section outcome-section">
<div className="pocket-section-heading">
<div className="pocket-section-id">
<span>
VI
</span>

<div>
<small>
PROJECT RESULT
</small>
<strong>
CURRENT OUTCOME
</strong>
</div>
</div>

<h2>
What the Project Has Produced
</h2>
</div>

<div className="pocket-outcome-layout">
<article className="pocket-outcome-primary">
<span>
CURRENT RESULT
</span>

<h3>
A growing modular environment.
</h3>

<p>
The project has established a repeatable
Blender-to-Unity workflow for creating and
organizing a large environment.
</p>

<p>
The current focus is on producing clean,
reusable spaces that can later support
lighting, interaction, movement, and
additional game systems.
</p>
</article>

<aside className="pocket-outcome-status">
<div>
<span>
ENVIRONMENT
</span>
<strong>
In Development
</strong>
</div>

<div>
<span>
BLENDER WORKFLOW
</span>
<strong>
Established
</strong>
</div>

<div>
<span>
UNITY INTEGRATION
</span>
<strong>
Planned / Ongoing
</strong>
</div>

<div>
<span>
PROJECT STATUS
</span>
<strong className="pocket-active">
Active
</strong>
</div>
</aside>
</div>
</section>

{/* =================================================
PROJECT NAVIGATION
================================================== */}
<section className="pocket-project-navigation">
<Link
className="project-nav-card back-card"
to="/projects"
>
<span>
PROJECT ARCHIVE
</span>
<strong>
← Back to Projects
</strong>
</Link>

<a
className="project-nav-card next-card"
href="/Assignment-4/Project-3/Assignment 4.html"
>
<span>
NEXT PROJECT
</span>
<strong>
Assignment 4 →
</strong>
</a>
</section>

</main>

</div>
);
}

export default PocketDimension;