import { useEffect } from "react";

function addListener(cleanups, target, type, handler, options) {
    if (!target) return;
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
}

function pulse(light, duration, reducedMotion, animations) {
    if (!light || reducedMotion) return;
    const animation = light.animate(
        [{ opacity: 0.55 }, { opacity: 1 }, { opacity: 0.55 }],
        { duration, iterations: Infinity, easing: "ease-in-out" }
    );
    animations.push(animation);
}

function setupReveal(selector, className, cleanups, reducedMotion) {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach((el) => el.classList.add(className));

    if (reducedMotion || !("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("visible"));
        return targets;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.08, rootMargin: "0px 0px -35px 0px" }
    );

    targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
            el.classList.add("visible");
        } else {
            observer.observe(el);
        }
    });

    cleanups.push(() => observer.disconnect());
    return targets;
}

export default function useEducationPage() {
    useEffect(() => {
        const cleanups = [];
        const animations = [];
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        let reducedMotion = mq.matches;

        setupReveal(
            ".education-section-heading, .timeline-record, .program-layout, .study-area-card, .coursework-card, .academic-skills-grid article, .current-learning-primary, .current-learning-status, .education-resume-card, .education-final-inner",
            "education-reveal",
            cleanups,
            reducedMotion
        );

        const statusPanel = document.querySelector(".academic-status-panel");
        if (statusPanel && "IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                ([entry]) => statusPanel.classList.toggle("status-active", entry?.isIntersecting),
                { threshold: 0.42 }
            );
            observer.observe(statusPanel);
            cleanups.push(() => observer.disconnect());
        }

        const groups = [
            [".timeline-record", "timeline-active", true],
            [".study-area-card", "study-active", false],
            [".coursework-card", "coursework-active", false],
            [".academic-skills-grid article", "skill-active", false],
        ];

        groups.forEach(([selector, activeClass, keyboardToggle]) => {
            const cards = Array.from(document.querySelectorAll(selector));
            const clear = () => cards.forEach((c) => c.classList.remove(activeClass));
            cards.forEach((card) => {
                card.tabIndex = 0;
                const activate = () => cards.forEach((c) => c.classList.toggle(activeClass, c === card));
                addListener(cleanups, card, "mouseenter", activate);
                addListener(cleanups, card, "mouseleave", clear);
                addListener(cleanups, card, "focus", activate);
                addListener(cleanups, card, "blur", clear);
                if (keyboardToggle) {
                    addListener(cleanups, card, "keydown", (event) => {
                        if (event.key !== "Enter" && event.key !== " ") return;
                        event.preventDefault();
                        card.classList.contains(activeClass) ? clear() : activate();
                    });
                }
            });
        });

        document
            .querySelectorAll(".current-learning-primary, .current-learning-status")
            .forEach((panel) => { panel.tabIndex = 0; });

        pulse(document.querySelector(".education-status-light"), 2500, reducedMotion, animations);
        pulse(document.querySelector(".academic-status-pulse"), 2200, reducedMotion, animations);

        document.body.classList.add("education-initialized");

        return () => {
            animations.forEach((a) => a.cancel());
            cleanups.forEach((fn) => fn());
            document.body.classList.remove("education-initialized");
        };
    }, []);
}