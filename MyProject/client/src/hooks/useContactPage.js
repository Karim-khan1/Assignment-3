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

export default function useContactPage(navigate) {
    useEffect(() => {
        const cleanups = [];
        const animations = [];
        const timers = [];
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const reducedMotion = mq.matches;

        const form = document.getElementById("portfolioContactForm");
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const contactNumber = document.getElementById("contactNumber");
        const emailAddress = document.getElementById("emailAddress");
        const message = document.getElementById("message");
        const messageCounter = document.getElementById("messageCounter");
        const submitStatus = document.getElementById("formSubmitStatus");
        const terminalStatus = document.querySelector(".form-terminal-status");
        const submitButton = form?.querySelector('button[type="submit"]');

        const fields = {
            firstName: { element: firstName, error: document.getElementById("firstNameError") },
            lastName: { element: lastName, error: document.getElementById("lastNameError") },
            contactNumber: { element: contactNumber, error: document.getElementById("contactNumberError") },
            emailAddress: { element: emailAddress, error: document.getElementById("emailAddressError") },
            message: { element: message, error: document.getElementById("messageError") },
        };

        setupReveal(
            ".contact-section-heading, .communication-card, .contact-form-layout, .availability-grid article, .contact-final-inner",
            "contact-reveal",
            cleanups,
            reducedMotion
        );

        const containerFor = (element) => element?.closest(".form-field") || null;

        const setError = (name, text) => {
            const config = fields[name];
            const container = containerFor(config?.element);
            container?.classList.remove("is-valid");
            container?.classList.add("has-error");
            config?.element?.setAttribute("aria-invalid", "true");
            if (config?.error) config.error.textContent = text;
        };

        const setValid = (name) => {
            const config = fields[name];
            const container = containerFor(config?.element);
            container?.classList.remove("has-error");
            container?.classList.add("is-valid");
            config?.element?.setAttribute("aria-invalid", "false");
            if (config?.error) config.error.textContent = "";
        };

        const validate = (name) => {
            const value = fields[name]?.element?.value.trim() || "";
            if (name === "firstName" || name === "lastName") {
                if (!value) return setError(name, `Please enter your ${name === "firstName" ? "first" : "last"} name.`), false;
                if (value.length < 2) return setError(name, "Name must contain at least 2 characters."), false;
            }
            if (name === "contactNumber") {
                const digits = value.replace(/\D/g, "");
                if (!value || !/^[0-9+\-().\s]+$/.test(value) || digits.length < 7) {
                    setError(name, "Please enter a valid contact number.");
                    return false;
                }
            }
            if (name === "emailAddress") {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setError(name, "Please enter a valid email address.");
                    return false;
                }
            }
            if (name === "message") {
                if (value.length < 10) {
                    setError(name, "Message must contain at least 10 characters.");
                    return false;
                }
            }
            setValid(name);
            return true;
        };

        Object.entries(fields).forEach(([name, config]) => {
            if (!config.element) return;
            if (config.error) config.element.setAttribute("aria-describedby", config.error.id);
            addListener(cleanups, config.element, "blur", () => validate(name));
        });

        const updateCounter = () => {
            if (!message || !messageCounter) return;
            const max = Number(message.getAttribute("maxlength")) || 1500;
            messageCounter.textContent = `${message.value.length} / ${max}`;
            messageCounter.style.color =
                message.value.length >= max * 0.9 ? "var(--contact-amber-light)" : "";
        };
        addListener(cleanups, message, "input", updateCounter);
        updateCounter();

        const setTerminal = (text, state = "") => {
            if (!terminalStatus) return;
            terminalStatus.classList.remove("transmitting", "success", "error");
            if (state) terminalStatus.classList.add(state);
            const light = terminalStatus.querySelector(".form-status-light");
            terminalStatus.replaceChildren();
            if (light) terminalStatus.appendChild(light);
            terminalStatus.append(` ${text}`);
        };

        const setSubmit = (text, state = "") => {
            if (!submitStatus) return;
            submitStatus.textContent = text;
            submitStatus.classList.remove("success", "error");
            if (state) submitStatus.classList.add(state);
        };

        if (form) {
            const submitHandler = async (event) => {
                event.preventDefault();
                const names = Object.keys(fields);
                const valid = names.map(validate).every(Boolean);

                if (!valid) {
                    form.classList.add("transmission-error");
                    setTerminal("INPUT ERROR", "error");
                    setSubmit("Please correct the highlighted fields before transmitting.", "error");
                    form.querySelector(".form-field.has-error input, .form-field.has-error textarea")?.focus();
                    return;
                }

                const submittedData = Object.fromEntries(
                    names.map((name) => [name, fields[name].element?.value.trim() || ""])
                );
                // The backend model calls this field "email".
                submittedData.email = submittedData.emailAddress;
                delete submittedData.emailAddress;
                form.classList.remove("transmission-error");
                form.classList.add("is-submitting");
                submitButton?.setAttribute("disabled", "");
                setTerminal("TRANSMITTING", "transmitting");
                setSubmit("Sending message...");
                try {
                    const response = await fetch("/api/contacts", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(submittedData)
                    });
                    const result = await response.json();
                    if (!response.ok) throw new Error(result.message || "Message could not be sent.");
                    form.classList.add("transmission-success");
                    form.reset();
                    updateCounter();
                    setTerminal("TRANSMISSION COMPLETE", "success");
                    setSubmit("Message saved successfully.", "success");
                } catch (error) {
                    form.classList.add("transmission-error");
                    setTerminal("TRANSMISSION FAILED", "error");
                    setSubmit(error.message || "Please try again.", "error");
                } finally {
                    form.classList.remove("is-submitting");
                    submitButton?.removeAttribute("disabled");
                }
            };
            addListener(cleanups, form, "submit", submitHandler);
        }

        document.querySelectorAll(".copy-contact").forEach((button) => {
            addListener(cleanups, button, "click", async () => {
                const value = button.dataset.copyValue;
                if (!value) return;
                try {
                    await navigator.clipboard.writeText(value);
                    button.classList.add("copy-success");
                    const timer = window.setTimeout(() => button.classList.remove("copy-success"), 1300);
                    timers.push(timer);
                } catch {
                    button.classList.add("copy-failed");
                    const timer = window.setTimeout(() => button.classList.remove("copy-failed"), 1300);
                    timers.push(timer);
                }
            });
        });

        const cards = Array.from(document.querySelectorAll(".communication-card"));
        const clearCards = () => cards.forEach((c) => c.classList.remove("channel-active"));
        cards.forEach((card) => {
            card.tabIndex = 0;
            const activate = () => cards.forEach((c) => c.classList.toggle("channel-active", c === card));
            addListener(cleanups, card, "mouseenter", activate);
            addListener(cleanups, card, "mouseleave", clearCards);
            addListener(cleanups, card, "focus", activate);
            addListener(cleanups, card, "blur", clearCards);
        });

        document.querySelectorAll(".availability-grid article").forEach((card) => {
            card.tabIndex = 0;
        });

        const network = document.querySelector(".network-panel");
        if (network && "IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                ([entry]) => network.classList.toggle("network-active", entry?.isIntersecting),
                { threshold: 0.42 }
            );
            observer.observe(network);
            cleanups.push(() => observer.disconnect());
        }

        pulse(document.querySelector(".communications-light"), 2500, reducedMotion, animations);
        pulse(document.querySelector(".network-pulse"), 2100, reducedMotion, animations);
        pulse(document.querySelector(".form-status-light"), 2350, reducedMotion, animations);

        document.body.classList.add("contact-initialized");

        return () => {
            timers.forEach((t) => window.clearTimeout(t));
            animations.forEach((a) => a.cancel());
            cleanups.forEach((fn) => fn());
            document.body.classList.remove("contact-initialized");
        };
    }, [navigate]);
}