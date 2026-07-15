import { useLayoutEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

const REVEAL_SELECTOR =
  ".reveal, .pin-title, .rule-grow, .stagger-children > *, .stat-cell, #experience article, #projects .interactive-row, .scene-mount";

/**
 * Motion after intro:
 * - Hero GSAP entrance
 * - Scroll reveals via scroll + IO (desktop-safe with Lenis)
 */
export function useMotion(ready = true, introDelay = false) {
  useLayoutEffect(() => {
    if (!ready) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let rafId = 0;
    let heroTl = null;
    const cleanups = [];

    document.documentElement.classList.add("motion-on");
    void document.documentElement.offsetHeight;

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

    const heroBits = gsap.utils.toArray(".hero-eyebrow, .hero-copy, .hero-meta > div");
    const heroLines = gsap.utils.toArray(".hero-line > span");
    const heroBtns = gsap.utils.toArray(".hero-actions .btn");

    const showHero = () => {
      gsap.set([...heroBits, ...heroLines, ...heroBtns, ".hero-canvas"], {
        clearProps: "all",
        opacity: 1,
        visibility: "visible",
        y: 0,
      });
    };

    if (reduced || !heroLines.length) {
      showHero();
    } else {
      gsap.set(heroBits, { opacity: 0, y: 10 });
      gsap.set(heroLines, { opacity: 0, y: 18 });
      gsap.set(heroBtns, { opacity: 0, y: 8 });
      gsap.set(".hero-canvas", { opacity: 0 });

      heroTl = gsap.timeline({
        delay: introDelay ? 0.12 : 0.04,
        defaults: { ease: "power2.out" },
        onComplete: () => {
          gsap.set([...heroBits, ...heroLines, ...heroBtns], { clearProps: "transform" });
        },
      });

      heroTl
        .to(".hero-canvas", { opacity: 0.55, duration: 1.35, ease: "power1.out" }, 0)
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.65 }, 0.12)
        .to(heroLines, { opacity: 1, y: 0, duration: 0.95, stagger: 0.12, ease: "power3.out" }, 0.18)
        .to(".hero-copy", { opacity: 1, y: 0, duration: 0.65 }, 0.55)
        .to(heroBtns, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, 0.68)
        .to(".hero-meta > div", { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, 0.78);

      const heroFailsafe = window.setTimeout(showHero, 2600);
      cleanups.push(() => clearTimeout(heroFailsafe));
    }

    const collect = () => Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    if (reduced) {
      collect().forEach((el) => el.classList.add("in"));
    } else {
      const reveal = (el) => {
        if (!el || el.classList.contains("in")) return;
        el.classList.add("in");
      };

      const checkReveals = () => {
        const vh = window.innerHeight || 1;
        collect().forEach((el) => {
          if (el.classList.contains("in")) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < vh * 0.92 && rect.bottom > 24) reveal(el);
        });
      };

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            io.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
      );

      let booted = false;
      const boot = () => {
        if (booted) return;
        booted = true;
        /* Arm hide rules only after observers are live — avoids blank sections */
        document.documentElement.classList.add("reveals-armed");
        collect().forEach((el) => io.observe(el));
        checkReveals();
        /* Second pass after layout settles / 3D mounts */
        window.setTimeout(checkReveals, 120);
        window.setTimeout(checkReveals, 400);
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(boot);
      });

      window.addEventListener("scroll", checkReveals, { passive: true });
      window.addEventListener("resize", checkReveals, { passive: true });
      if (lenis) lenis.on("scroll", checkReveals);
      cleanups.push(() => {
        io.disconnect();
        window.removeEventListener("scroll", checkReveals);
        window.removeEventListener("resize", checkReveals);
        if (lenis) lenis.off("scroll", checkReveals);
        document.documentElement.classList.remove("reveals-armed");
      });

      const allSafe = window.setTimeout(() => {
        collect().forEach(reveal);
      }, 2500);
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
    if (lenis) lenis.on("scroll", onScroll);
    onScroll();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      if (lenis) lenis.off("scroll", onScroll);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      if (heroTl) heroTl.kill();
      document.documentElement.classList.remove("motion-on", "reveals-armed");
    };
  }, [ready, introDelay]);
}
