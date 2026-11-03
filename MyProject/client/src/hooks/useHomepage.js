import { useEffect } from "react";


export default function useHomePage() {

    useEffect(
        () => {

            const cleanups = [];
            const animations = [];
            const timers = [];

            const reducedMotionQuery =
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                );

            let reducedMotion =
                reducedMotionQuery.matches;


            /* =================================================
               HELPERS
            ================================================= */

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
                                    0.65
                            },

                            {
                                opacity:
                                    1
                            },

                            {
                                opacity:
                                    0.65
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
               PAGE REFERENCES
            ================================================= */

            const body =
                document.body;


            const heroTerminal =
                document.querySelector(
                    ".hero-terminal"
                );


            const terminalStatusText =
                document.querySelector(
                    ".terminal-status strong"
                );


            const terminalStatusLight =
                document.querySelector(
                    ".terminal-status-light"
                );


            const heroTechnologyTags =
                Array.from(
                    document.querySelectorAll(
                        ".hero-technologies span"
                    )
                );


            const disciplineCards =
                Array.from(
                    document.querySelectorAll(
                        ".discipline-card"
                    )
                );


            const projectCards =
                Array.from(
                    document.querySelectorAll(
                        ".project-preview-card"
                    )
                );


            const revealTargets = [

                ...disciplineCards,

                ...projectCards,

                ...document.querySelectorAll(
                    ".section-heading"
                ),

                ...document.querySelectorAll(
                    ".about-preview-layout"
                ),

                ...document.querySelectorAll(
                    ".contact-cta"
                )

            ];



            /* =================================================
               PAGE STATE
            ================================================= */

            body.classList.add(
                "page-ready",
                "portfolio-initialized"
            );


            revealTargets.forEach(
                target => {

                    target.classList.add(
                        "reveal"
                    );

                }
            );



            /* =================================================
               REVEAL SYSTEM
            ================================================= */

            if (
                reducedMotion ||
                !(
                    "IntersectionObserver"
                    in window
                )
            ) {

                revealTargets.forEach(
                    target => {

                        target.classList.add(
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
                    target => {

                        const rect =
                            target
                                .getBoundingClientRect();


                        if (
                            rect.bottom >= 0 &&
                            rect.top <=
                                window.innerHeight
                        ) {

                            target.classList.add(
                                "visible"
                            );

                        }

                        else {

                            revealObserver.observe(
                                target
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
               TERMINAL STATUS
            ================================================= */

            const terminalMessages = [

                "BUILDING",
                "LEARNING",
                "DEBUGGING",
                "CREATING"

            ];


            let terminalMessageIndex =
                0;


            let terminalTimer =
                null;


            function updateTerminalStatus() {

                if (
                    !terminalStatusText ||
                    document.hidden
                ) {
                    return;
                }


                terminalMessageIndex =
                    (
                        terminalMessageIndex +
                        1
                    ) %
                    terminalMessages.length;


                const nextMessage =
                    terminalMessages[
                        terminalMessageIndex
                    ];


                if (
                    reducedMotion
                ) {

                    terminalStatusText
                        .textContent =
                        nextMessage;

                    return;

                }


                const fadeOut =
                    terminalStatusText.animate(

                        [
                            {
                                opacity:
                                    1,
                                transform:
                                    "translateY(0)"
                            },

                            {
                                opacity:
                                    0,
                                transform:
                                    "translateY(-3px)"
                            }
                        ],

                        {
                            duration:
                                130,

                            easing:
                                "ease-out"
                        }

                    );


                animations.push(
                    fadeOut
                );


                const timer =
                    window.setTimeout(
                        () => {

                            terminalStatusText
                                .textContent =
                                nextMessage;


                            const fadeIn =
                                terminalStatusText.animate(

                                    [
                                        {
                                            opacity:
                                                0,
                                            transform:
                                                "translateY(3px)"
                                        },

                                        {
                                            opacity:
                                                1,
                                            transform:
                                                "translateY(0)"
                                        }
                                    ],

                                    {
                                        duration:
                                            170,

                                        easing:
                                            "ease-out"
                                    }

                                );


                            animations.push(
                                fadeIn
                            );

                        },
                        135
                    );


                timers.push(
                    timer
                );

            }


            function startTerminalStatus() {

                if (
                    !terminalStatusText ||
                    terminalTimer !== null
                ) {
                    return;
                }


                terminalTimer =
                    window.setInterval(
                        updateTerminalStatus,
                        4200
                    );

            }


            function stopTerminalStatus() {

                if (
                    terminalTimer === null
                ) {
                    return;
                }


                window.clearInterval(
                    terminalTimer
                );


                terminalTimer =
                    null;

            }


            startTerminalStatus();


            addListener(
                document,
                "visibilitychange",
                () => {

                    if (
                        document.hidden
                    ) {

                        stopTerminalStatus();

                    }

                    else {

                        startTerminalStatus();

                    }

                }
            );


            pulseLight(
                terminalStatusLight,
                2400
            );



            /* =================================================
               TECHNOLOGY TAGS
            ================================================= */

            function clearTechnologyTags() {

                heroTechnologyTags
                    .forEach(
                        tag => {

                            tag.classList.remove(
                                "technology-active"
                            );

                        }
                    );

            }


            heroTechnologyTags
                .forEach(
                    tag => {

                        tag.tabIndex =
                            0;


                        const activate =
                            () => {

                                heroTechnologyTags
                                    .forEach(
                                        item => {

                                            item.classList.toggle(
                                                "technology-active",
                                                item ===
                                                    tag
                                            );

                                        }
                                    );

                            };


                        addListener(
                            tag,
                            "mouseenter",
                            activate
                        );


                        addListener(
                            tag,
                            "mouseleave",
                            clearTechnologyTags
                        );


                        addListener(
                            tag,
                            "focus",
                            activate
                        );


                        addListener(
                            tag,
                            "blur",
                            clearTechnologyTags
                        );

                    }
                );



            /* =================================================
               CARD ACCESSIBILITY + POINTER POSITION
            ================================================= */

            const interactiveCards = [

                ...disciplineCards,
                ...projectCards

            ];


            const finePointerQuery =
                window.matchMedia(
                    "(hover: hover) and (pointer: fine)"
                );


            interactiveCards
                .forEach(
                    (
                        card,
                        index
                    ) => {

                        card.tabIndex =
                            0;


                        if (
                            card.classList.contains(
                                "project-preview-card"
                            )
                        ) {

                            card.setAttribute(
                                "aria-label",
                                `Featured project ${
                                    index -
                                    disciplineCards.length +
                                    1
                                }`
                            );

                        }

                        else {

                            const title =
                                card.querySelector(
                                    "h3"
                                )
                                    ?.textContent
                                    ?.trim();


                            if (title) {

                                card.setAttribute(
                                    "aria-label",
                                    title
                                );

                            }

                        }


                        addListener(
                            card,
                            "pointermove",
                            event => {

                                if (
                                    reducedMotion ||
                                    !finePointerQuery.matches
                                ) {
                                    return;
                                }


                                const rect =
                                    card
                                        .getBoundingClientRect();


                                const x =
                                    (
                                        event.clientX -
                                        rect.left
                                    ) /
                                    rect.width;


                                const y =
                                    (
                                        event.clientY -
                                        rect.top
                                    ) /
                                    rect.height;


                                card.style.setProperty(
                                    "--pointer-x",
                                    `${x * 100}%`
                                );


                                card.style.setProperty(
                                    "--pointer-y",
                                    `${y * 100}%`
                                );

                            }
                        );

                    }
                );



            /* =================================================
               HERO TERMINAL
            ================================================= */

            if (
                heroTerminal
            ) {

                heroTerminal.tabIndex =
                    0;


                heroTerminal.setAttribute(
                    "aria-label",
                    "Developer profile code preview"
                );


                addListener(
                    heroTerminal,
                    "focus",
                    () => {

                        heroTerminal
                            .classList
                            .add(
                                "terminal-focused"
                            );

                    }
                );


                addListener(
                    heroTerminal,
                    "blur",
                    () => {

                        heroTerminal
                            .classList
                            .remove(
                                "terminal-focused"
                            );

                    }
                );


                addListener(
                    heroTerminal,
                    "pointermove",
                    event => {

                        if (
                            reducedMotion ||
                            !finePointerQuery.matches
                        ) {
                            return;
                        }


                        const rect =
                            heroTerminal
                                .getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) /
                            rect.width;


                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) /
                            rect.height;


                        const rotateY =
                            (
                                x - 0.5
                            ) *
                            1.4;


                        const rotateX =
                            (
                                0.5 - y
                            ) *
                            1.4;


                        heroTerminal.style
                            .transform =
                            `
                                perspective(1000px)
                                rotateX(${rotateX}deg)
                                rotateY(${rotateY}deg)
                            `;

                    }
                );


                addListener(
                    heroTerminal,
                    "pointerleave",
                    () => {

                        heroTerminal.style
                            .transform =
                            "";

                    }
                );

            }



            /* =================================================
               OTHER ACCESSIBILITY
            ================================================= */

            const contactCTA =
                document.querySelector(
                    ".contact-cta"
                );


            contactCTA?.setAttribute(
                "aria-label",
                "Contact call to action"
            );



            /* =================================================
               REDUCED MOTION CHANGES
            ================================================= */

            function handleReducedMotionChange(
                event
            ) {

                reducedMotion =
                    event.matches;


                if (
                    reducedMotion
                ) {

                    revealTargets.forEach(
                        target => {

                            target.classList.add(
                                "visible"
                            );

                        }
                    );


                    if (
                        heroTerminal
                    ) {

                        heroTerminal.style
                            .transform =
                            "";

                    }

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
                    handleReducedMotionChange
                );

            }



            /* =================================================
               CLEANUP
            ================================================= */

            return () => {

                stopTerminalStatus();


                timers.forEach(
                    timer => {

                        window.clearTimeout(
                            timer
                        );

                    }
                );


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


                if (
                    heroTerminal
                ) {

                    heroTerminal.style
                        .transform =
                        "";

                }


                body.classList.remove(
                    "portfolio-initialized"
                );

            };

        },

        []

    );

}
