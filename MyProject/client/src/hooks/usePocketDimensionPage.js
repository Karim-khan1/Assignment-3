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

export default function usePocketDimensionPage() {
    useEffect(() => {
        const cleanups = [];
        const animations = [];
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const reducedMotion = mq.matches;

        setupReveal(
            ".pocket-section-heading, .overview-layout, .pocket-showcase, .pocket-workflow-grid article, .pocket-tools-grid article, .pocket-outcome-layout, .pocket-project-navigation",
            "pocket-reveal",
            cleanups,
            reducedMotion
        );

        const summary = document.querySelector(".pocket-summary-panel");
        if (summary && "IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                ([entry]) => summary.classList.toggle("summary-active", entry?.isIntersecting),
                { threshold: 0.42 }
            );
            observer.observe(summary);
            cleanups.push(() => observer.disconnect());
        }

        const groups = [
            [".pocket-workflow-grid article", "workflow-active"],
            [".pocket-tools-grid article", "tool-active"],
            [".pocket-showcase", "showcase-active"],
        ];

        groups.forEach(([selector, activeClass]) => {
            const cards = Array.from(document.querySelectorAll(selector));
            const clear = () => cards.forEach((c) => c.classList.remove(activeClass));
            cards.forEach((card) => {
                card.tabIndex = 0;
                const activate = () => cards.forEach((c) => c.classList.toggle(activeClass, c === card));
                addListener(cleanups, card, "mouseenter", activate);
                addListener(cleanups, card, "mouseleave", clear);
                addListener(cleanups, card, "focus", activate);
                addListener(cleanups, card, "blur", clear);
            });
        });

        const outcome = document.querySelector(".pocket-outcome-primary");
        if (outcome) {
            outcome.tabIndex = 0;
            const on = () => outcome.classList.add("outcome-active");
            const off = () => outcome.classList.remove("outcome-active");
            addListener(cleanups, outcome, "mouseenter", on);
            addListener(cleanups, outcome, "mouseleave", off);
            addListener(cleanups, outcome, "focus", on);
            addListener(cleanups, outcome, "blur", off);
        }

        document.querySelectorAll(".pocket-image-frame img").forEach((image) => {
            const fail = () => image.closest(".pocket-image-frame")?.classList.add("image-failed");
            addListener(cleanups, image, "error", fail);
            if (image.complete && image.naturalWidth === 0) fail();
        });

        pulse(document.querySelector(".pocket-status-light"), 2500, reducedMotion, animations);
        pulse(document.querySelector(".pocket-summary-pulse"), 2200, reducedMotion, animations);

        document.body.classList.add("pocket-initialized");

        return () => {
            animations.forEach((a) => a.cancel());
            cleanups.forEach((fn) => fn());
            document.body.classList.remove("pocket-initialized");
        };
    }, []);
}