import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Full motion system: Lenis + dense GSAP scroll / entrance / hover animations.
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
          duration: 1.25,
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

      /* ——— Hero entrance ——— */
      gsap.set(
        [".hero-eyebrow", ".hero-copy", ".hero-actions .btn", ".hero-meta > div", ".hero-rive", ".hero-shell"],
        { opacity: 0 },
      );
      gsap.set([".hero-eyebrow", ".hero-copy", ".hero-actions .btn", ".hero-meta > div", ".hero-rive"], {
        y: 28,
      });
      gsap.set(".hero-line > span", { yPercent: 120, rotate: 4 });
      gsap.set(".hero-shell", { scale: 0.97, y: 18 });
      gsap.set(".hero-canvas", { opacity: 0, scale: 1.08 });

      heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .to(".hero-shell", { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power4.out" }, 0)
        .to(".hero-canvas", { opacity: 0.45, scale: 1, duration: 1.4, ease: "power2.out" }, 0.15)
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 }, 0.25)
        .to(
          ".hero-line > span",
          { yPercent: 0, rotate: 0, duration: 1.05, stagger: 0.12, ease: "power4.out" },
          0.28,
        )
        .to(".hero-copy", { opacity: 1, y: 0, duration: 0.7 }, 0.7)
        .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 }, 0.82)
        .to(".hero-meta > div", { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, 0.95)
        .to(".hero-rive", { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.4)" }, 0.55);

      if (!reduced) {
        /* Header slide-in */
        gsap.from("header", {
          y: -40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.1,
        });

        /* Generic reveal (fade + lift) */
        gsap.utils.toArray(".reveal").forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 56, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.95,
              delay: (i % 3) * 0.04,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Scale-in cards */
        gsap.utils.toArray(".reveal-scale").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.88, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Slide from sides */
        gsap.utils.toArray(".reveal-left").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -48 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
        gsap.utils.toArray(".reveal-right").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: 48 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Stagger children of a group */
        gsap.utils.toArray(".stagger-children").forEach((group) => {
          const kids = group.children;
          gsap.fromTo(
            kids,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: group,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Section titles — scrubbed arrival */
        gsap.utils.toArray(".pin-title").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 56, opacity: 0.15, letterSpacing: "-0.01em" },
            {
              y: 0,
              opacity: 1,
              letterSpacing: "-0.04em",
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "top 40%",
                scrub: 0.8,
              },
            },
          );
        });

        /* Rule / line grow */
        gsap.utils.toArray(".rule-grow").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left center",
              duration: 1.05,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Drift numbers */
        gsap.utils.toArray(".drift").forEach((el) => {
          gsap.fromTo(
            el,
            { x: -32, opacity: 0, rotate: -6 },
            {
              x: 0,
              opacity: 1,
              rotate: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Parallax layers */
        gsap.utils.toArray("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-parallax") || "0.2");
          gsap.to(el, {
            yPercent: speed * -40,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        /* Hero canvas slow drift on scroll */
        const heroCanvas = document.querySelector(".hero-canvas");
        if (heroCanvas) {
          gsap.to(heroCanvas, {
            yPercent: 18,
            rotate: 2,
            ease: "none",
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        /* Experience timeline draw + row cascade */
        const expRows = gsap.utils.toArray("#experience article");
        if (expRows.length) {
          gsap.fromTo(
            expRows,
            { opacity: 0, x: -28 },
            {
              opacity: 1,
              x: 0,
              duration: 0.75,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: {
                trigger: "#experience",
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        /* Project rows — slide and underline feel */
        gsap.utils.toArray("#projects .interactive-row").forEach((row, i) => {
          gsap.fromTo(
            row,
            { opacity: 0, x: i % 2 ? 40 : -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Credentials counter */
        gsap.utils.toArray("[data-count]").forEach((el) => {
          const end = parseFloat(el.getAttribute("data-count") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const prefix = el.getAttribute("data-prefix") || "";
          const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            onUpdate: () => {
              el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
            },
          });
        });

        /* Stat pulse on credentials strip */
        gsap.utils.toArray(".stat-cell").forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 24, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: i * 0.08,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* 3D scene mounts — fade / float in */
        gsap.utils.toArray(".scene-mount").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.85, rotateY: -12 },
            {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        /* Contact panel lift */
        const contactPanel = document.querySelector("#contact .band-forest");
        if (contactPanel) {
          gsap.fromTo(
            contactPanel,
            { opacity: 0, y: 60, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: contactPanel,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        /* Magnetic buttons */
        document.querySelectorAll(".btn").forEach((btn) => {
          const onMove = (e) => {
            const r = btn.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            gsap.to(btn, { x: x * 0.22, y: y * 0.28, duration: 0.35, ease: "power2.out" });
          };
          const onLeave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.45)" });
          };
          btn.addEventListener("mousemove", onMove);
          btn.addEventListener("mouseleave", onLeave);
          cleanups.push(() => {
            btn.removeEventListener("mousemove", onMove);
            btn.removeEventListener("mouseleave", onLeave);
          });
        });

        /* Soft hover lift on surface cards */
        document.querySelectorAll(".surface-card").forEach((card) => {
          const enter = () =>
            gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out", overwrite: "auto" });
          const leave = () =>
            gsap.to(card, { y: 0, duration: 0.45, ease: "power3.out", overwrite: "auto" });
          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
          });
        });

        /* Footer fade */
        gsap.from("footer .wrap > *", {
          opacity: 0,
          y: 28,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.set(
          ".reveal, .reveal-scale, .reveal-left, .reveal-right, .pin-title, .hero-eyebrow, .hero-copy, .hero-actions .btn, .hero-meta > div, .hero-rive, .hero-line > span, .hero-shell, .hero-canvas, .scene-mount, .stat-cell",
          {
            clearProps: "all",
            opacity: 1,
            y: 0,
            x: 0,
            yPercent: 0,
            scale: 1,
            rotate: 0,
            filter: "none",
          },
        );
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
          lenis.scrollTo(target, { offset: -72, duration: 1.4 });
        } else {
          gsap.to(window, {
            duration: 1.15,
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
