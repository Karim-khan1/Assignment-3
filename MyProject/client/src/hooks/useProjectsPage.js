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

export default function useProjectsPage() {
    useEffect(() => {
        const cleanups = [];
        const animations = [];
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const reducedMotion = mq.matches;

        const projectRecords = Array.from(document.querySelectorAll(".project-record"));
        const indexEntries = Array.from(document.querySelectorAll(".project-index-entry"));
        const rangeCards = Array.from(document.querySelectorAll(".project-range-grid article"));

        setupReveal(
            ".projects-section-heading, .project-record, .project-range-grid article, .projects-final-inner",
            "projects-reveal",
            cleanups,
            reducedMotion
        );

        const syncIndex = (project) => {
            const id = project?.id;
            indexEntries.forEach((entry) =>
                entry.classList.toggle("index-active", entry.getAttribute("href") === `#${id}`)
            );
        };

        const clearProjects = () => {
            projectRecords.forEach((p) => p.classList.remove("project-active"));
            indexEntries.forEach((e) => e.classList.remove("index-active"));
        };

        projectRecords.forEach((project) => {
            project.tabIndex = 0;
            const activate = () => {
                projectRecords.forEach((p) => p.classList.toggle("project-active", p === project));
                syncIndex(project);
            };
            addListener(cleanups, project, "mouseenter", activate);
            addListener(cleanups, project, "mouseleave", clearProjects);
            addListener(cleanups, project, "focus", activate);
            addListener(cleanups, project, "blur", clearProjects);
            addListener(cleanups, project, "keydown", (event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                project.classList.contains("project-active") ? clearProjects() : activate();
            });
        });

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    const visible = entries
                        .filter((e) => e.isIntersecting)
                        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                    if (visible.length) syncIndex(visible[0].target);
                },
                { threshold: [0.25, 0.45, 0.65], rootMargin: "-10% 0px -35% 0px" }
            );
            projectRecords.forEach((p) => observer.observe(p));
            cleanups.push(() => observer.disconnect());
        }

        rangeCards.forEach((card) => {
            card.tabIndex = 0;
            const activate = () => rangeCards.forEach((c) => c.classList.toggle("range-active", c === card));
            const clear = () => rangeCards.forEach((c) => c.classList.remove("range-active"));
            addListener(cleanups, card, "mouseenter", activate);
            addListener(cleanups, card, "mouseleave", clear);
            addListener(cleanups, card, "focus", activate);
            addListener(cleanups, card, "blur", clear);
        });

        document.querySelectorAll(".project-record-image img").forEach((image) => {
            const fail = () => image.closest(".project-record-image")?.classList.add("image-failed");
            addListener(cleanups, image, "error", fail);
            if (image.complete && image.naturalWidth === 0) fail();
        });

        pulse(document.querySelector(".projects-status-light"), 2500, reducedMotion, animations);
        pulse(document.querySelector(".archive-pulse"), 2200, reducedMotion, animations);

        document.body.classList.add("projects-initialized");

        return () => {
            animations.forEach((a) => a.cancel());
            cleanups.forEach((fn) => fn());
            document.body.classList.remove("projects-initialized");
        };
    }, []);
}
