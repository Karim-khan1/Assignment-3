import {
    Link
} from "react-router-dom";


function Footer() {

    const currentYear =
        new Date().getFullYear();


    return (

        <footer className="site-footer">

            <div className="footer-container">


                <div className="footer-identity">

                    <Link
                        className="footer-logo"
                        to="/"
                        aria-label="Return to portfolio home"
                    >

                        <span
                            className="footer-logo-emblem"
                            aria-hidden="true"
                        >

                            <img
                                src="/assets/logo/Portfolio-Logo.png"
                                alt=""
                            />

                        </span>


                        <span className="footer-logo-text">

                            <strong>
                                Karimkhan Balouchi
                            </strong>

                            <small>
                                GAME PROGRAMMER
                            </small>

                        </span>

                    </Link>


                    <p>

                        Game programming and software development
                        portfolio focused on interactive systems,
                        programming, problem solving, and creative
                        development.

                    </p>

                </div>



                <nav
                    className="footer-navigation"
                    aria-label="Footer navigation"
                >

                    <div className="footer-navigation-group">

                        <span className="footer-heading">
                            PORTFOLIO
                        </span>


                        <Link to="/">
                            Home
                        </Link>


                        <Link to="/about">
                            About
                        </Link>


                        <Link to="/projects">
                            Projects
                        </Link>

                    </div>



                    <div className="footer-navigation-group">

                        <span className="footer-heading">
                            INFORMATION
                        </span>


                        <Link to="/education">
                            Education
                        </Link>


                        <Link to="/services">
                            Services
                        </Link>


                        <Link to="/contact">
                            Contact
                        </Link>

                    </div>



                    <div className="footer-navigation-group">

                        <span className="footer-heading">
                            DEVELOPMENT
                        </span>


                        <a
                            href="#"
                            id="githubProfileLink"
                        >
                            GitHub
                        </a>


                        <a
                            href="/documents/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Résumé
                        </a>

                    </div>

                </nav>

            </div>



            <div className="footer-bottom">

                <div className="footer-bottom-content">

                    <p>

                        &copy; {currentYear}
                        {" "}
                        Karimkhan Balouchi.
                        Portfolio created for academic
                        and professional presentation.

                    </p>


                    <div className="footer-status">

                        <span
                            className="footer-status-dot"
                            aria-hidden="true"
                        ></span>


                        <span>
                            PORTFOLIO
                        </span>


                        <strong>
                            ONLINE
                        </strong>

                    </div>

                </div>

            </div>

        </footer>

    );

}


export default Footer;