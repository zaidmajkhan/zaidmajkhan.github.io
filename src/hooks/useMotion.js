import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";

const REVEAL_SELECTOR =
  ".reveal, .pin-title, .rule-grow, .stagger-children > *, .stat-cell, #experience article, #projects .interactive-row, .scene-mount";

/**
 * Motion that can never blank the page:
 * - Hero never rests at opacity 0
 * - Reveals only add a play-once slide (CSS); default state is always visible
 * - Lenis + nav still run
 */
export function useMotion(ready = true, fromIntro = false, revealsReady = true) {
  const fromIntroRef = useRef(fromIntro);
  fromIntroRef.current = fromIntro;

  /* —— Lenis + hero —— */
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

    /* Always visible first — animate as enhancement only */
    showHero();

    if (!reduced && heroLines.length) {
      gsap.set(heroBits, { y: 10, opacity: 1 });
      gsap.set(heroLines, { y: 16, opacity: 1 });
      gsap.set(heroBtns, { y: 8, opacity: 1 });
      gsap.set(".hero-canvas", { opacity: 0.35 });

      heroTl = gsap.timeline({
        delay: waitedForIntro ? 0.35 : 0.05,
        defaults: { ease: "power2.out" },
        onComplete: () => {
          gsap.set(heroTargets, { clearProps: "transform" });
        },
      });

      heroTl
        .to(".hero-canvas", { opacity: 0.7, duration: 1.2, ease: "power1.out" }, 0)
        .to(heroBits, { y: 0, duration: 0.55, stagger: 0.04 }, 0.05)
        .to(heroLines, { y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, 0.08)
        .to(heroBtns, { y: 0, duration: 0.45, stagger: 0.06 }, 0.35);

      const heroFailsafe = window.setTimeout(showHero, 2200);
      cleanups.push(() => clearTimeout(heroFailsafe));
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
      showHero();
      document.documentElement.classList.remove("motion-on");
    };
  }, [ready]);

  /* —— Scroll flourishes (never hide resting content) —— */
  useLayoutEffect(() => {
    if (!ready || !revealsReady) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];
    const collect = () => Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    const reveal = (el) => {
      if (!el || el.classList.contains("in")) return;
      el.classList.add("in");
    };

    document.documentElement.classList.add("reveals-armed");

    if (reduced) {
      collect().forEach(reveal);
      return () => document.documentElement.classList.remove("reveals-armed");
    }

    try {
      window.__lenis?.resize?.();
    } catch {
      /* ignore */
    }

    const checkReveals = () => {
      const vh = window.innerHeight || 1;
      collect().forEach((el) => {
        if (el.classList.contains("in")) return;
        const rect = el.getBoundingClientRect();
        /* Always readable (CSS keeps opacity 1). .in only triggers slide flourish. */
        if (rect.top < vh * 1.05 && rect.bottom > 8) reveal(el);
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
      { root: null, rootMargin: "15% 0px", threshold: 0.01 },
    );

    const observeAll = () => {
      collect().forEach((el) => {
        if (!el.classList.contains("in")) io.observe(el);
      });
    };
    observeAll();
    checkReveals();

    const mo = new MutationObserver(() => {
      collect().forEach((el) => {
        if (el.classList.contains("in")) return;
        io.observe(el);
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        if (rect.top < vh * 1.15 && rect.bottom > 0) reveal(el);
      });
    });
    mo.observe(document.getElementById("main-content") || document.body, {
      childList: true,
      subtree: true,
    });

    const onScrollCheck = () => checkReveals();
    window.addEventListener("scroll", onScrollCheck, { passive: true });
    const lenis = window.__lenis;
    if (lenis) lenis.on("scroll", onScrollCheck);

    /* Safety: never leave first two viewports without flourish class */
    const nearSafe = window.setTimeout(() => {
      const vh = window.innerHeight || 1;
      collect().forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 2.4) reveal(el);
      });
    }, 500);
    const allSafe = window.setTimeout(() => collect().forEach(reveal), 2500);

    cleanups.push(() => {
      clearTimeout(nearSafe);
      clearTimeout(allSafe);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScrollCheck);
      if (lenis) lenis.off("scroll", onScrollCheck);
      document.documentElement.classList.remove("reveals-armed");
    });

    return () => cleanups.forEach((fn) => fn());
  }, [ready, revealsReady]);
}
