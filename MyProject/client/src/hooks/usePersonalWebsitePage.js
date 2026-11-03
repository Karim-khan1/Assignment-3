import { useEffect } from "react";


export default function usePersonalWebsitePage() {

    useEffect(
        () => {

            const cleanups = [];
            const animations = [];

            const reducedMotionQuery =
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                );

            let reducedMotion =
                reducedMotionQuery.matches;


            function addListener(
                target,
                type,
                handler,
                options
            ) {

                if (!target) {
                    return;
                }


                target.addEventListener(
                    type,
                    handler,
                    options
                );


                cleanups.push(
                    () => {

                        target.removeEventListener(
                            type,
                            handler,
                            options
                        );

                    }
                );

            }


            function pulseLight(
                light,
                duration
            ) {

                if (
                    !light ||
                    reducedMotion
                ) {
                    return;
                }


                const animation =
                    light.animate(

                        [
                            {
                                opacity:
                                    0.55
                            },

                            {
                                opacity:
                                    1
                            },

                            {
                                opacity:
                                    0.55
                            }
                        ],

                        {
                            duration,
                            iterations:
                                Infinity,
                            easing:
                                "ease-in-out"
                        }

                    );


                animations.push(
                    animation
                );

            }



            /* =================================================
               REFERENCES
            ================================================= */

            const summaryPanel =
                document.querySelector(
                    ".website-summary-panel"
                );


            const summaryPulse =
                document.querySelector(
                    ".website-summary-pulse"
                );


            const statusLight =
                document.querySelector(
                    ".website-status-light"
                );


            const developmentCards =
                Array.from(
                    document.querySelectorAll(
                        ".website-development-grid article"
                    )
                );


            const featureCards =
                Array.from(
                    document.querySelectorAll(
                        ".website-feature-card"
                    )
                );


            const toolCards =
                Array.from(
                    document.querySelectorAll(
                        ".website-tools-grid article"
                    )
                );


            const showcases =
                Array.from(
                    document.querySelectorAll(
                        ".website-showcase"
                    )
                );


            const outcomePanel =
                document.querySelector(
                    ".website-outcome-primary"
                );


            const revealTargets = [

                ...document.querySelectorAll(
                    ".website-section-heading"
                ),

                ...document.querySelectorAll(
                    ".website-overview-layout"
                ),

                ...showcases,

                ...developmentCards,

                ...featureCards,

                ...toolCards,

                ...document.querySelectorAll(
                    ".website-outcome-layout"
                ),

                ...document.querySelectorAll(
                    ".website-project-navigation"
                )

            ];


            revealTargets.forEach(
                element => {

                    element.classList.add(
                        "website-reveal"
                    );

                }
            );



            /* =================================================
               REVEALS
            ================================================= */

            if (
                reducedMotion ||
                !(
                    "IntersectionObserver"
                    in window
                )
            ) {

                revealTargets.forEach(
                    element => {

                        element.classList.add(
                            "visible"
                        );

                    }
                );

            }

            else {

                const revealObserver =
                    new IntersectionObserver(

                        entries => {

                            entries.forEach(
                                entry => {

                                    if (
                                        !entry.isIntersecting
                                    ) {
                                        return;
                                    }


                                    entry.target
                                        .classList
                                        .add(
                                            "visible"
                                        );


                                    revealObserver
                                        .unobserve(
                                            entry.target
                                        );

                                }
                            );

                        },

                        {
                            threshold:
                                0.08,

                            rootMargin:
                                "0px 0px -35px 0px"
                        }

                    );


                revealTargets.forEach(
                    element => {

                        const rect =
                            element
                                .getBoundingClientRect();


                        if (
                            rect.bottom >= 0 &&
                            rect.top <=
                                window.innerHeight
                        ) {

                            element.classList.add(
                                "visible"
                            );

                        }

                        else {

                            revealObserver.observe(
                                element
                            );

                        }

                    }
                );


                cleanups.push(
                    () => {

                        revealObserver.disconnect();

                    }
                );

            }



            /* =================================================
               SUMMARY PANEL
            ================================================= */

            if (
                summaryPanel &&
                "IntersectionObserver" in window
            ) {

                const summaryObserver =
                    new IntersectionObserver(

                        entries => {

                            entries.forEach(
                                entry => {

                                    summaryPanel
                                        .classList
                                        .toggle(
                                            "summary-active",
                                            entry.isIntersecting
                                        );

                                }
                            );

                        },

                        {
                            threshold:
                                0.42
                        }

                    );


                summaryObserver.observe(
                    summaryPanel
                );


                cleanups.push(
                    () => {

                        summaryObserver.disconnect();

                    }
                );

            }



            /* =================================================
               INTERACTIVE CARD GROUPS
            ================================================= */

            function setupCardGroup(
                cards,
                activeClass
            ) {

                function clear() {

                    cards.forEach(
                        card => {

                            card.classList.remove(
                                activeClass
                            );

                        }
                    );

                }


                cards.forEach(
                    card => {

                        card.tabIndex =
                            0;


                        const activate =
                            () => {

                                cards.forEach(
                                    item => {

                                        item.classList.toggle(
                                            activeClass,
                                            item ===
                                                card
                                        );

                                    }
                                );

                            };


                        addListener(
                            card,
                            "mouseenter",
                            activate
                        );


                        addListener(
                            card,
                            "mouseleave",
                            clear
                        );


                        addListener(
                            card,
                            "focus",
                            activate
                        );


                        addListener(
                            card,
                            "blur",
                            clear
                        );

                    }
                );

            }


            setupCardGroup(
                developmentCards,
                "development-active"
            );


            setupCardGroup(
                featureCards,
                "feature-active"
            );


            setupCardGroup(
                toolCards,
                "tool-active"
            );


            setupCardGroup(
                showcases,
                "showcase-active"
            );



            /* =================================================
               OUTCOME
            ================================================= */

            if (
                outcomePanel
            ) {

                outcomePanel.tabIndex =
                    0;


                const activate =
                    () => {

                        outcomePanel
                            .classList
                            .add(
                                "outcome-active"
                            );

                    };


                const clear =
                    () => {

                        outcomePanel
                            .classList
                            .remove(
                                "outcome-active"
                            );

                    };


                addListener(
                    outcomePanel,
                    "mouseenter",
                    activate
                );


                addListener(
                    outcomePanel,
                    "mouseleave",
                    clear
                );


                addListener(
                    outcomePanel,
                    "focus",
                    activate
                );


                addListener(
                    outcomePanel,
                    "blur",
                    clear
                );

            }



            /* =================================================
               IMAGE FALLBACK
            ================================================= */

            document.querySelectorAll(
                ".website-image-frame img"
            )
                .forEach(
                    image => {

                        const handleFailure =
                            () => {

                                image.closest(
                                    ".website-image-frame"
                                )
                                    ?.classList
                                    .add(
                                        "image-failed"
                                    );

                            };


                        addListener(
                            image,
                            "error",
                            handleFailure
                        );


                        if (
                            image.complete &&
                            image.naturalWidth ===
                                0
                        ) {

                            handleFailure();

                        }

                    }
                );



            /* =================================================
               STATUS LIGHTS
            ================================================= */

            pulseLight(
                statusLight,
                2500
            );


            pulseLight(
                summaryPulse,
                2200
            );



            /* =================================================
               MOTION CHANGES
            ================================================= */

            function handleMotionChange(
                event
            ) {

                reducedMotion =
                    event.matches;


                if (
                    reducedMotion
                ) {

                    revealTargets.forEach(
                        element => {

                            element.classList.add(
                                "visible"
                            );

                        }
                    );

                }

            }


            if (
                typeof reducedMotionQuery
                    .addEventListener ===
                "function"
            ) {

                addListener(
                    reducedMotionQuery,
                    "change",
                    handleMotionChange
                );

            }



            document.body.classList.add(
                "website-initialized"
            );



            /* =================================================
               CLEANUP
            ================================================= */

            return () => {

                animations.forEach(
                    animation => {

                        animation.cancel();

                    }
                );


                cleanups.forEach(
                    cleanup => {

                        cleanup();

                    }
                );


                document.body
                    .classList
                    .remove(
                        "website-initialized"
                    );

            };

        },

        []

    );

}
