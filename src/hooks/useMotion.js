import { useLayoutEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

/**
 * Reliable motion:
 * - Hero via GSAP (+ failsafe)
 * - Scroll reveals via IntersectionObserver + CSS (.in)
 * - Lenis for smooth scroll only — never gates visibility
 */
export function useMotion() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let rafId = 0;
    let heroTl = null;
    const cleanups = [];

    document.documentElement.classList.add("motion-on");

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.1,
      });
      const tick = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
      document.documentElement.classList.add("lenis", "lenis-smooth");
      window.__lenis = lenis;
      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        window.__lenis = null;
        document.documentElement.classList.remove("lenis", "lenis-smooth");
      });
    }

    const heroBits = gsap.utils.toArray(
      ".hero-eyebrow, .hero-copy, .hero-actions .btn, .hero-meta > div, .hero-rive",
    );
    const heroLines = gsap.utils.toArray(".hero-line > span");

    const showHero = () => {
      gsap.set([...heroBits, ...heroLines, ".hero-canvas"], {
        clearProps: "all",
        opacity: 1,
        visibility: "visible",
        y: 0,
        yPercent: 0,
      });
    };

    if (reduced || !heroBits.length) {
      showHero();
    } else {
      gsap.set(heroBits, { opacity: 0, y: 18 });
      gsap.set(heroLines, { yPercent: 105 });
      gsap.set(".hero-canvas", { opacity: 0 });

      heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set([...heroBits, ...heroLines], { clearProps: "transform" });
        },
      });

      heroTl
        .to(".hero-canvas", { opacity: 0.42, duration: 1.1, ease: "power2.out" }, 0)
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.55 }, 0.12)
        .to(heroLines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" }, 0.18)
        .to(".hero-copy", { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, 0.62)
        .to(".hero-meta > div", { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 }, 0.72)
        .to(".hero-rive", { opacity: 1, y: 0, duration: 0.5 }, 0.4);

      const heroFailsafe = window.setTimeout(showHero, 1800);
      cleanups.push(() => clearTimeout(heroFailsafe));
    }

    const revealEls = Array.from(
      document.querySelectorAll(
        ".reveal, .pin-title, .rule-grow, .stagger-children > *, .stat-cell, #experience article, #projects .interactive-row, .scene-mount",
      ),
    );

    if (reduced) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
      );

      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 24) {
          el.classList.add("in");
        } else {
          io.observe(el);
        }
      });

      cleanups.push(() => io.disconnect());

      const allSafe = window.setTimeout(() => {
        revealEls.forEach((el) => el.classList.add("in"));
      }, 4000);
      cleanups.push(() => clearTimeout(allSafe));
    }

    const onAnchor = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      if (lenis) lenis.scrollTo(top, { duration: 1.1 });
      else window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", onAnchor));
    cleanups.push(() => anchors.forEach((a) => a.removeEventListener("click", onAnchor)));

    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      const y = window.scrollY;
      sections.forEach((section) => {
        if (y >= section.offsetTop - 140) current = section.id;
      });
      document.querySelectorAll("[data-nav]").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => {
      cleanups.forEach((fn) => fn());
      if (heroTl) heroTl.kill();
      document.documentElement.classList.remove("motion-on");
    };
  }, []);
}
