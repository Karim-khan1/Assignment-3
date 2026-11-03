import { Link } from "react-router-dom";
import useHomePage from "../hooks/useHomepage";

function Home() {
    useHomePage();

    return (
        <>
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
className="portfolio-hero"
id="home"
>
<div
className="hero-decoration"
aria-hidden="true"
>
<span className="grid-line grid-line-one"></span>
<span className="grid-line grid-line-two"></span>
<span className="grid-line grid-line-three"></span>
</div>
<div className="hero-layout">
{/* =========================================
HERO COPY
========================================== */}
<div className="hero-content">
<div className="availability-badge">
<span
className="availability-dot"
aria-hidden="true"
></span>
GAME PROGRAMMING STUDENT
</div>
<p className="hero-eyebrow">
GAME PROGRAMMER // SOFTWARE DEVELOPER
</p>
<h1>
Building interactive
<span>
experiences
</span>
through code.
</h1>
<p className="hero-description">
Welcome to my portfolio. I am a game
programming student focused on creating
interactive applications, games, software,
and web experiences while continuing to
expand my technical and creative skills.
</p>
<div className="hero-actions">
<Link
className="button button-primary"
to="/projects"
>
View Projects
<span aria-hidden="true">
→
</span>
</Link>
<Link
className="button button-secondary"
to="/about"
>
About Me
</Link>
</div>
{/* =====================================
TECHNOLOGY TAGS
====================================== */}
<div
className="hero-technologies"
aria-label="Programming technologies"
>
<span>
C#
</span>
<span>
Blender
</span>
<span>
Unity
</span>
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
</div>
{/* =========================================
HERO TERMINAL
========================================== */}
<div
className="hero-terminal"
aria-label="Developer profile summary"
>
<div className="terminal-header">
<div
className="terminal-controls"
aria-hidden="true"
>
<span></span>
<span></span>
<span></span>
</div>
<span>
developer_profile.cs
</span>
</div>
<div className="terminal-body">
<div className="terminal-line">
<span className="line-number">
01
</span>
<code>
<span className="code-keyword">
public class
</span>
<span className="code-class">
Developer
</span>
</code>
</div>
<div className="terminal-line">
<span className="line-number">
02
</span>
<code>
{"{"}
</code>
</div>
<div className="terminal-line">
<span className="line-number">
03
</span>
<code className="code-indent">
<span className="code-keyword">
string
</span>
role =
<span className="code-string">
"Game Programmer"
</span>;
</code>
</div>
<div className="terminal-line">
<span className="line-number">
04
</span>
<code className="code-indent">
<span className="code-keyword">
string[]
</span>
focus = {"{"}
</code>
</div>
<div className="terminal-line">
<span className="line-number">
05
</span>
<code className="code-indent-double">
<span className="code-string">
"Gameplay"
</span>,
<span className="code-string">
"Programming"
</span>,
</code>
</div>
<div className="terminal-line">
<span className="line-number">
06
</span>
<code className="code-indent-double">
<span className="code-string">
"Web Development"
</span>
</code>
</div>
<div className="terminal-line">
<span className="line-number">
07
</span>
<code className="code-indent">
{"};"}
</code>
</div>
<div className="terminal-line">
<span className="line-number">
08
</span>
<code className="code-indent">
<span className="code-keyword">
bool
</span>
learning =
<span className="code-boolean">
true
</span>;
</code>
</div>
<div className="terminal-line">
<span className="line-number">
09
</span>
<code>
{"}"}
</code>
</div>
</div>
<div className="terminal-status">
<span
className="terminal-status-light"
aria-hidden="true"
></span>
<span>
STATUS:
</span>
<strong>
BUILDING
</strong>
</div>
</div>
</div>
<a
className="hero-scroll"
href="#portfolioOverview"
aria-label="Continue to portfolio overview"
>
<span>
EXPLORE
</span>
<span aria-hidden="true">
↓
</span>
</a>
</section>
{/* =================================================
PORTFOLIO OVERVIEW
================================================== */}
<section
className="portfolio-section overview-section"
id="portfolioOverview"
>
<div className="section-heading">
<div>
<span className="section-number">
01
</span>
<span className="section-eyebrow">
PORTFOLIO OVERVIEW
</span>
</div>
<h2>
What I Work With
</h2>
<p>
My work combines programming, interactive
development, problem solving, and design
across game and web development.
</p>
</div>
<div className="discipline-grid">
{/* =========================================
GAME PROGRAMMING
========================================== */}
<article className="discipline-card">
<div
className="discipline-icon"
aria-hidden="true"
>
01
</div>
<span className="discipline-label">
PRIMARY FOCUS
</span>
<h3>
Game Programming
</h3>
<p>
Developing gameplay systems,
interactive mechanics, prototypes,
and game-focused applications.
</p>
<div className="discipline-tags">
<span>
C#
</span>
<span>
Blender
</span>
<span>
Unity
</span>
</div>
</article>
{/* =========================================
SOFTWARE DEVELOPMENT
========================================== */}
<article className="discipline-card">
<div
className="discipline-icon"
aria-hidden="true"
>
02
</div>
<span className="discipline-label">
DEVELOPMENT
</span>
<h3>
Programming
</h3>
<p>
Building structured software with
an emphasis on maintainable code,
problem solving, debugging, and
practical implementation.
</p>
<div className="discipline-tags">
<span>
C#
</span>
<span>
WPF
</span>
<span>
Interaction Design
</span>
<span>
Coursework
</span>
</div>
</article>
{/* =========================================
WEB DEVELOPMENT
========================================== */}
<article className="discipline-card">
<div
className="discipline-icon"
aria-hidden="true"
>
03
</div>
<span className="discipline-label">
FRONT END
</span>
<h3>
Web Development
</h3>
<p>
Creating responsive and interactive
websites using modern HTML, CSS,
JavaScript, and accessible design
practices.
</p>
<div className="discipline-tags">
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
Web Development
</span>
</div>
</article>
</div>
</section>
{/* =================================================
FEATURED PROJECTS PREVIEW
================================================== */}
<section
className="portfolio-section featured-projects-section"
id="featuredProjects"
>
<div className="section-heading section-heading-split">
<div>
<div>
<span className="section-number">
02
</span>
<span className="section-eyebrow">
SELECTED WORK
</span>
</div>
<h2>
Featured Projects
</h2>
</div>
<Link
className="section-link"
to="/projects"
>
View All Projects
<span aria-hidden="true">
→
</span>
</Link>
</div>
<div className="project-preview-grid">
{/* =========================================
PROJECT 01
========================================== */}
<article className="project-preview-card">
<div className="project-preview-image">
<div
className="project-image-placeholder"
aria-hidden="true"
>
<span>
PROJECT
</span>
<strong>
01
</strong>
</div>
</div>
<div className="project-preview-content">
<span className="project-type">
GAME DEVELOPMENT
</span>
<h3>
Project One
</h3>
<p>
A short preview of one of my
game programming or interactive
development projects.
</p>
<div className="project-technologies">
<span>
C#
</span>
<span>
Unity
</span>
</div>
</div>
</article>
{/* =========================================
PROJECT 02
========================================== */}
<article className="project-preview-card">
<div className="project-preview-image">
<div
className="project-image-placeholder"
aria-hidden="true"
>
<span>
PROJECT
</span>
<strong>
02
</strong>
</div>
</div>
<div className="project-preview-content">
<span className="project-type">
SOFTWARE DEVELOPMENT
</span>
<h3>
Project Two
</h3>
<p>
A programming project demonstrating
technical implementation, structured
development, and problem solving.
</p>
<div className="project-technologies">
<span>
C++
</span>
<span>
OOP
</span>
</div>
</div>
</article>
{/* =========================================
PROJECT 03
========================================== */}
<article className="project-preview-card">
<div className="project-preview-image">
<div
className="project-image-placeholder"
aria-hidden="true"
>
<span>
PROJECT
</span>
<strong>
03
</strong>
</div>
</div>
<div className="project-preview-content">
<span className="project-type">
WEB DEVELOPMENT
</span>
<h3>
Project Three
</h3>
<p>
A responsive web project combining
structured HTML, modern CSS, and
JavaScript interaction.
</p>
<div className="project-technologies">
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
</div>
</article>
</div>
</section>
{/* =================================================
ABOUT PREVIEW
================================================== */}
<section
className="portfolio-section about-preview-section"
id="aboutPreview"
>
<div className="about-preview-layout">
<div className="about-preview-number">
<span>
03
</span>
</div>
<div className="about-preview-content">
<span className="section-eyebrow">
ABOUT THE DEVELOPER
</span>
<h2>
Always building.
Always learning.
</h2>
<p>
I am developing my skills through
education, programming projects,
experimentation, and hands-on
development across games, software,
and web technologies.
</p>
<Link
className="button button-primary"
to="/about"
>
Learn More About Me
<span aria-hidden="true">
→
</span>
</Link>
</div>
</div>
</section>
{/* =================================================
CONTACT CTA
================================================== */}
<section
className="portfolio-section contact-cta-section"
>
<div className="contact-cta">
<div>
<span className="section-eyebrow">
GET IN TOUCH
</span>
<h2>
Interested in working together?
</h2>
<p>
Visit the contact page to send a
message or learn more about how
to reach me.
</p>
</div>
<Link
className="button button-light"
to="/contact"
>
Contact Me
<span aria-hidden="true">
→
</span>
</Link>
</div>
</section>
</main>
</>
);
}

export default Home;