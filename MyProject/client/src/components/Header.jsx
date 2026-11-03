import {
    useState,
    useEffect
} from "react";


import {
    NavLink,
    Link
} from "react-router-dom";


function Header() {

    const [
        menuOpen,
        setMenuOpen
    ] = useState(false);


    const [
        scrolled,
        setScrolled
    ] = useState(false);



    useEffect(
        () => {

            const handleScroll = () => {

                setScrolled(
                    window.scrollY > 18
                );

            };


            handleScroll();


            window.addEventListener(
                "scroll",
                handleScroll,
                {
                    passive: true
                }
            );


            return () => {

                window.removeEventListener(
                    "scroll",
                    handleScroll
                );

            };

        },

        []
    );



    function closeMenu() {

        setMenuOpen(false);

    }



    function navClass({
        isActive
    }) {

        return isActive
            ? "active"
            : "";
    }



    return (

        <header
            className={
                `site-header ${
                    scrolled
                        ? "header-scrolled"
                        : ""
                }`
            }
            id="siteHeader"
        >

            <nav
                className="main-navigation"
                aria-label="Main navigation"
            >


                <Link
                    className="portfolio-logo"
                    to="/"
                    aria-label="Portfolio home"
                    onClick={closeMenu}
                >

                    <span
                        className="logo-emblem"
                        aria-hidden="true"
                    >

                        <img
                            src="/assets/logo/Portfolio-Logo.png"
                            alt=""
                        />

                    </span>


                    <span className="logo-text">

                        <strong>
                            Karimkhan Balouchi
                        </strong>

                        <small>
                            GAME PROGRAMMER
                        </small>

                    </span>

                </Link>



                <button
                    className={
                        `navigation-toggle ${
                            menuOpen
                                ? "navigation-open"
                                : ""
                        }`
                    }
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="navigationLinks"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    onClick={
                        () =>
                            setMenuOpen(
                                previous =>
                                    !previous
                            )
                    }
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>



                <ul
                    className={
                        `navigation-links ${
                            menuOpen
                                ? "navigation-open"
                                : ""
                        }`
                    }
                    id="navigationLinks"
                >

                    <li>

                        <NavLink
                            to="/"
                            className={navClass}
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>

                    </li>


                    <li>

                        <NavLink
                            to="/about"
                            className={navClass}
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>

                    </li>


                    <li>

                        <NavLink
                            to="/projects"
                            className={navClass}
                            onClick={closeMenu}
                        >
                            Projects
                        </NavLink>

                    </li>


                    <li>

                        <NavLink
                            to="/education"
                            className={navClass}
                            onClick={closeMenu}
                        >
                            Education
                        </NavLink>

                    </li>


                    <li>

                        <NavLink
                            to="/services"
                            className={navClass}
                            onClick={closeMenu}
                        >
                            Services
                        </NavLink>

                    </li>


                    <li>

                        <NavLink
                            to="/contact"
                            className={
                                ({
                                    isActive
                                }) =>
                                    `navigation-contact ${
                                        isActive
                                            ? "active"
                                            : ""
                                    }`
                            }
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>

                    </li>

                    <li><NavLink to="/manage" className={navClass} onClick={closeMenu}>Manage</NavLink></li>
                </ul>

            </nav>

        </header>

    );

}


export default Header;