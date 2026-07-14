import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Single motion system: Lenis smooth scroll + GSAP scroll animations.
 * Kept in one effect so ScrollTrigger always sees the active Lenis instance.
 */
export function useMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let ticker = null;
    let heroTl = null;
    const cleanups = [];

    const setup = () => {
      if (!reduced) {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.2,
        });

        lenis.on("scroll", ScrollTrigger.update);
        ticker = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
        document.documentElement.classList.add("lenis", "lenis-smooth");
        window.__lenis = lenis;
      }

      /* Hero entrance — always runs */
      gsap.set([".hero-eyebrow", ".hero-copy", ".hero-actions .btn", ".hero-meta", ".hero-rive"], {
        opacity: 0,
        y: 18,
      });
      gsap.set(".hero-line > span", { yPercent: 110 });

      heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.55 }, 0.15)
        .to(".hero-line > span", { yPercent: 0, duration: 0.95, stagger: 0.1, ease: "power4.out" }, 0.2)
        .to(".hero-copy", { opacity: 1, y: 0, duration: 0.65 }, 0.55)
        .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.65)
        .to(".hero-meta", { opacity: 1, y: 0, duration: 0.55 }, 0.75)
        .to(".hero-rive", { opacity: 1, y: 0, duration: 0.6 }, 0.45);

      if (!reduced) {
        gsap.utils.toArray(".reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 48 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.utils.toArray(".pin-title").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0.2 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "top 45%",
                scrub: 0.6,
              },
            }
          );
        });

        gsap.utils.toArray(".rule-grow").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left center",
              duration: 1,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        /* Horizontal drift on section index numbers */
        gsap.utils.toArray(".drift").forEach((el) => {
          gsap.fromTo(
            el,
            { x: -24, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      } else {
        gsap.set(".reveal, .pin-title, .hero-eyebrow, .hero-copy, .hero-actions .btn, .hero-meta, .hero-rive, .hero-line > span", {
          clearProps: "all",
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
      }

      ScrollTrigger.refresh();

      const anchors = document.querySelectorAll('a[href^="#"]');
      const onAnchor = (e) => {
        const href = e.currentTarget.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target, { offset: -72, duration: 1.35 });
        } else {
          gsap.to(window, {
            duration: 1.1,
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
          a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
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

    /* Wait one frame so React has painted DOM targets */
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(setup);
    });

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
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);
}
