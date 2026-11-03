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

export default function useAboutPage() {
    useEffect(() => {
        const cleanups = [];
        const animations = [];
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        let reducedMotion = mq.matches;

        setupReveal(
            ".about-section-heading, .personnel-layout, .identity-card, .arsenal-card, .doctrine-primary, .doctrine-point, .interest-panel, .resume-archive, .about-navigation-card, .about-final-cta-inner",
            "about-reveal",
            cleanups,
            reducedMotion
        );

        const commandRecord = document.querySelector(".command-record");
        if (commandRecord && "IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                ([entry]) => commandRecord.classList.toggle("record-active", entry?.isIntersecting),
                { threshold: 0.45 }
            );
            observer.observe(commandRecord);
            cleanups.push(() => observer.disconnect());
        }

        const arsenalCards = Array.from(document.querySelectorAll(".arsenal-card"));
        const clearArsenal = () => arsenalCards.forEach((card) => card.classList.remove("arsenal-active"));
        arsenalCards.forEach((card) => {
            card.tabIndex = 0;
            const activate = () => {
                arsenalCards.forEach((item) =>
                    item.classList.toggle("arsenal-active", item === card)
                );
            };
            const keydown = (event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                card.classList.contains("arsenal-active") ? clearArsenal() : activate();
            };
            addListener(cleanups, card, "mouseenter", activate);
            addListener(cleanups, card, "mouseleave", clearArsenal);
            addListener(cleanups, card, "focus", activate);
            addListener(cleanups, card, "blur", clearArsenal);
            addListener(cleanups, card, "keydown", keydown);
        });

        document
            .querySelectorAll(".identity-card, .doctrine-point, .interest-panel")
            .forEach((panel) => { panel.tabIndex = 0; });

        const profileImage = document.querySelector(".profile-image");
        const profileContainer = document.querySelector(".profile-image-container");
        const imageFail = () => {
            profileImage?.classList.add("image-load-error");
            profileContainer?.classList.add("image-failed");
        };
        if (profileImage) {
            addListener(cleanups, profileImage, "error", imageFail);
            if (profileImage.complete && profileImage.naturalWidth === 0) imageFail();
        }

        document.querySelectorAll('a[href$=".pdf"]').forEach((link) => {
            const clicked = () => {
                link.classList.add("resume-accessed");
                const timer = window.setTimeout(() => link.classList.remove("resume-accessed"), 700);
                cleanups.push(() => window.clearTimeout(timer));
            };
            addListener(cleanups, link, "click", clicked);
        });

        const recordFooter = document.querySelector(".command-record-footer");
        recordFooter?.setAttribute("role", "status");
        recordFooter?.setAttribute("aria-live", "polite");

        const dossierStatus = document.querySelector(".classification-status span:last-child");
        const messages = ["RECORD ACTIVE", "PERSONNEL VERIFIED", "SYSTEM ONLINE", "ARCHIVE READY"];
        let index = 0;
        let intervalId = null;

        const tick = () => {
            if (!dossierStatus || document.hidden) return;
            index = (index + 1) % messages.length;
            dossierStatus.textContent = messages[index];
        };
        const start = () => {
            if (intervalId === null) intervalId = window.setInterval(tick, 4800);
        };
        const stop = () => {
            if (intervalId !== null) window.clearInterval(intervalId);
            intervalId = null;
        };
        const visibility = () => document.hidden ? stop() : start();
        start();
        addListener(cleanups, document, "visibilitychange", visibility);

        pulse(document.querySelector(".classification-light"), 2500, reducedMotion, animations);
        pulse(document.querySelector(".record-online-light"), 2200, reducedMotion, animations);

        const motionChange = (event) => { reducedMotion = event.matches; };
        if (mq.addEventListener) addListener(cleanups, mq, "change", motionChange);

        document.body.classList.add("about-initialized");

        return () => {
            stop();
            animations.forEach((a) => a.cancel());
            cleanups.forEach((fn) => fn());
            document.body.classList.remove("about-initialized");
        };
    }, []);
}