import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { REVEAL_STAGGER_MS } from "../config/motion.js";

const REVEAL_SELECTOR =
  ".reveal, .pin-title, .rule-grow, .stagger-children > *, .stat-cell, #experience article, #projects .interactive-row, .scene-mount, .depth-card";

const ENTER_EASE = "power1.out";

/**
 * Unified motion: calm scroll reveals, restrained hero entrance, smooth Lenis.
 */
export function useMotion(ready = true, fromIntro = false, revealsReady = true) {
  const fromIntroRef = useRef(fromIntro);
  fromIntroRef.current = fromIntro;

  useLayoutEffect(() => {
    if (!ready) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const waitedForIntro = fromIntroRef.current;
    let lenis = null;
    let rafId = 0;
    let heroTl = null;
    const cleanups = [];

    document.documentElement.classList.add("motion-on");
    void document.documentElement.offsetHeight;

    if (!reduced) {
      try {
        lenis = new Lenis({
          duration: 1.15,
          easing: (t) => 1 - (1 - t) ** 3,
          smoothWheel: true,
          touchMultiplier: 1,
        });
        const tick = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        document.documentElement.classList.add("lenis", "lenis-smooth");
        window.__lenis = lenis;
        try {
          lenis.scrollTo(0, { immediate: true });
        } catch {
          /* ignore */
        }
        cleanups.push(() => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
          window.__lenis = null;
          document.documentElement.classList.remove("lenis", "lenis-smooth");
        });
      } catch {
        lenis = null;
      }
    }

    const heroBits = gsap.utils.toArray(".hero-eyebrow, .hero-copy, .hero-meta > div");
    const heroLines = gsap.utils.toArray(".hero-line > span");
    const heroBtns = gsap.utils.toArray(".hero-actions .btn");
    const heroTargets = [...heroBits, ...heroLines, ...heroBtns];

    const showHero = () => {
      gsap.set([...heroTargets, ".hero-canvas"], {
        clearProps: "all",
        opacity: 1,
        visibility: "visible",
        y: 0,
      });
    };

    if (heroLines.length && waitedForIntro && !reduced) {
      gsap.set(heroBits, { y: 10, opacity: 0 });
      gsap.set(heroLines, { y: 14, opacity: 0, scale: 0.985 });
      gsap.set(heroBtns, { y: 8, opacity: 0 });
      gsap.set(".hero-canvas", { opacity: 0, scale: 0.98 });

      heroTl = gsap.timeline({
        delay: 0.22,
        defaults: { ease: ENTER_EASE },
        onComplete: () => {
          gsap.set(heroTargets, { clearProps: "transform" });
          gsap.set(".hero-canvas", { clearProps: "transform" });
        },
      });

      heroTl
        .to(".hero-canvas", { opacity: 0.72, scale: 1, duration: 0.65 }, 0)
        .to(heroBits, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 }, 0.06)
        .to(heroLines, { opacity: 1, y: 0, scale: 1, duration: 0.62, stagger: 0.09 }, 0.1)
        .to(heroBtns, { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 }, 0.28);

      const heroFailsafe = window.setTimeout(showHero, 1800);
      cleanups.push(() => clearTimeout(heroFailsafe));
    } else {
      showHero();
    }

    const onAnchor = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      if (lenis) lenis.scrollTo(top, { duration: 0.9 });
      else window.scrollTo({ top, behavior: "smooth" });
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
      showHero();
      document.documentElement.classList.remove("motion-on");
    };
  }, [ready]);

  useLayoutEffect(() => {
    if (!ready || !revealsReady) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    const collect = () => Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    const staggerIndex = (el) => {
      const parent = el.parentElement;
      if (!parent?.classList.contains("stagger-children")) return 0;
      return [...parent.children].indexOf(el);
    };

    const reveal = (el, delay = 0) => {
      if (!el || el.classList.contains("in")) return;
      const run = () => {
        el.style.setProperty("--reveal-delay", `${delay}ms`);
        el.classList.add("in");
      };
      if (delay <= 0) run();
      else window.setTimeout(run, delay);
    };

    document.documentElement.classList.add("reveals-armed");

    if (reduced) {
      collect().forEach((el) => el.classList.add("in"));
      cleanups.push(() => document.documentElement.classList.remove("reveals-armed"));
      return () => cleanups.forEach((fn) => fn());
    }

    try {
      window.__lenis?.resize?.();
    } catch {
      /* ignore */
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          reveal(el, staggerIndex(el) * REVEAL_STAGGER_MS);
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    collect().forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    const mo = new MutationObserver(() => {
      collect().forEach((el) => {
        if (el.classList.contains("in")) return;
        io.observe(el);
      });
    });
    mo.observe(document.getElementById("main-content") || document.body, {
      childList: true,
      subtree: true,
    });

    cleanups.push(() => {
      io.disconnect();
      mo.disconnect();
      document.documentElement.classList.remove("reveals-armed");
    });

    return () => cleanups.forEach((fn) => fn());
  }, [ready, revealsReady]);
}
