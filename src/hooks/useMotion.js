import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const EASE = "power3.out";

/**
 * Polished motion: Lenis + restrained GSAP.
 * Play-once reveals, no blur/reverse flicker, no magnetic noise.
 */
export function useMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let ticker = null;
    let heroTl = null;
    const cleanups = [];

    const setup = () => {
      document.documentElement.classList.add("motion-ready");

      if (!reduced) {
        lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.15,
        });
        lenis.on("scroll", ScrollTrigger.update);
        ticker = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
        document.documentElement.classList.add("lenis", "lenis-smooth");
        window.__lenis = lenis;
      }

      /* Hero — clean entrance */
      const heroBits = gsap.utils.toArray(
        ".hero-eyebrow, .hero-copy, .hero-actions .btn, .hero-meta > div, .hero-rive",
      );
      gsap.set(heroBits, { autoAlpha: 0, y: 20 });
      gsap.set(".hero-line > span", { yPercent: 105 });
      gsap.set(".hero-canvas", { autoAlpha: 0 });

      heroTl = gsap.timeline({ defaults: { ease: EASE } });
      if (!reduced) {
        heroTl
          .to(".hero-canvas", { autoAlpha: 0.42, duration: 1.2, ease: "power2.out" }, 0.05)
          .to(".hero-eyebrow", { autoAlpha: 1, y: 0, duration: 0.65 }, 0.15)
          .to(".hero-line > span", { yPercent: 0, duration: 0.95, stagger: 0.1, ease: "power4.out" }, 0.2)
          .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.7 }, 0.55)
          .to(".hero-actions .btn", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.7)
          .to(".hero-meta > div", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.07 }, 0.8)
          .to(".hero-rive", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.45);
      } else {
        gsap.set([".hero-line > span", ...heroBits, ".hero-canvas"], {
          clearProps: "all",
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        });
      }

      if (!reduced) {
        gsap.from("header .wrap", {
          y: -16,
          autoAlpha: 0,
          duration: 0.7,
          ease: EASE,
          delay: 0.05,
        });

        /* Hide scroll targets once, then animate in — avoids CSS/GSAP fighting */
        const scrollTargets = gsap.utils.toArray(
          ".reveal, .stagger-children > *, .stat-cell, #experience article, #projects .interactive-row, .scene-mount, #contact .band-forest",
        );
        gsap.set(scrollTargets, { autoAlpha: 0, y: 24 });

        /* Unified soft reveals — play once */
        gsap.utils.toArray(".reveal").forEach((el) => {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });

        gsap.utils.toArray(".stagger-children").forEach((group) => {
          gsap.to(group.children, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: {
              trigger: group,
              start: "top 86%",
              once: true,
            },
          });
        });

        /* Titles — gentle scrub, not faded-out */
        gsap.utils.toArray(".pin-title").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 24, autoAlpha: 0.35 },
            {
              y: 0,
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 55%",
                scrub: 0.5,
              },
            },
          );
        });

        gsap.utils.toArray(".rule-grow").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left center",
              duration: 0.9,
              ease: "power2.inOut",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            },
          );
        });

        /* Experience rows */
        const expRows = gsap.utils.toArray("#experience article");
        if (expRows.length) {
          gsap.to(expRows, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: {
              trigger: "#experience .border-t",
              start: "top 80%",
              once: true,
            },
          });
        }

        /* Project rows */
        const projectRows = gsap.utils.toArray("#projects .interactive-row");
        if (projectRows.length) {
          gsap.to(projectRows, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: {
              trigger: "#projects .border-t",
              start: "top 85%",
              once: true,
            },
          });
        }

        /* Stats — subtle rise + optional count */
        gsap.utils.toArray(".stat-cell").forEach((el, i) => {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            delay: i * 0.06,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray("[data-count]").forEach((el) => {
          const end = parseFloat(el.getAttribute("data-count") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
          const obj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: end,
                duration: 1.25,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = `${obj.val.toFixed(decimals)}${suffix}`;
                },
              });
            },
          });
        });

        /* Soft scene fade-in */
        gsap.utils.toArray(".scene-mount").forEach((el) => {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        /* Contact panel */
        const contactPanel = document.querySelector("#contact .band-forest");
        if (contactPanel) {
          gsap.to(contactPanel, {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: { trigger: contactPanel, start: "top 88%", once: true },
          });
        }

        /* Failsafe — show anything stuck invisible while already on-screen */
        window.setTimeout(() => {
          scrollTargets.forEach((el) => {
            if (Number(gsap.getProperty(el, "opacity")) > 0.05) return;
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.95 && top > -Math.min(el.clientHeight || 80, 200)) {
              gsap.to(el, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                overwrite: "auto",
                clearProps: "transform",
              });
            }
          });
        }, 2200);

        /* Very light parallax on hero canvas only */
        const heroCanvas = document.querySelector(".hero-canvas");
        if (heroCanvas) {
          gsap.to(heroCanvas, {
            y: 40,
            ease: "none",
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      } else {
        gsap.set(".reveal, .pin-title, .stat-cell, .scene-mount, #experience article, #projects .interactive-row", {
          clearProps: "all",
          autoAlpha: 1,
          y: 0,
        });
        gsap.set(".stagger-children > *", { clearProps: "all", autoAlpha: 1, y: 0 });
      }

      /* Refresh after layout settles (fonts / 3D mounts) */
      requestAnimationFrame(() => ScrollTrigger.refresh());
      setTimeout(() => ScrollTrigger.refresh(), 400);

      const anchors = document.querySelectorAll('a[href^="#"]');
      const onAnchor = (e) => {
        const href = e.currentTarget.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -72, duration: 1.25 });
        else {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 72 },
            ease: "power3.inOut",
          });
        }
      };
      anchors.forEach((a) => a.addEventListener("click", onAnchor));
      cleanups.push(() => anchors.forEach((a) => a.removeEventListener("click", onAnchor)));

      const sections = document.querySelectorAll("section[id]");
      const onScroll = () => {
        let current = "";
        const y = lenis ? lenis.scroll : window.scrollY;
        sections.forEach((section) => {
          if (y >= section.offsetTop - 140) current = section.id;
        });
        document.querySelectorAll("[data-nav]").forEach((a) => {
          const on = a.getAttribute("href") === `#${current}`;
          a.classList.toggle("active", on);
        });
      };
      if (lenis) lenis.on("scroll", onScroll);
      else window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => {
        if (lenis) lenis.off("scroll", onScroll);
        else window.removeEventListener("scroll", onScroll);
      });
    };

    const raf = requestAnimationFrame(() => requestAnimationFrame(setup));

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
      if (heroTl) heroTl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (ticker) gsap.ticker.remove(ticker);
      if (lenis) {
        lenis.destroy();
        window.__lenis = null;
      }
      document.documentElement.classList.remove("lenis", "lenis-smooth", "motion-ready");
    };
  }, []);
}
