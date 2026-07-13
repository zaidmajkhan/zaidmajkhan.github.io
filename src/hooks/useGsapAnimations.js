import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CLOSE_MOBILE_NAV = "zk-close-mobile-nav";

export function useGsapAnimations(introSeen) {
  useLayoutEffect(() => {
    const tweens = [];

    /* ── Preloader counter (cosmetic; CSS handles the reveal) ── */
    if (!introSeen) {
      const countEl = document.getElementById("introCount");
      const barEl = document.getElementById("introBar");
      const tween = gsap.to(
        { v: 0 },
        {
          v: 100,
          duration: 1.3,
          ease: "power2.inOut",
          onUpdate() {
            const v = Math.round(this.targets()[0].v);
            if (countEl) countEl.textContent = v;
            if (barEl) barEl.style.width = `${v}%`;
          },
        }
      );
      tweens.push(tween);
    }

    /* ── Hero entrance (synced to lift of intro overlay) ── */
    const heroTl = gsap.timeline({
      delay: introSeen ? 0.1 : 1.2,
      defaults: { ease: "power3.out" },
    });
    heroTl
      .from(".hero-status", { opacity: 0, y: 12, duration: 0.5 }, 0)
      .from(".hero-location", { opacity: 0, duration: 0.45 }, 0)
      .from(".hero-name .clip-inner", { yPercent: 100, duration: 0.8, stagger: 0.08 }, 0.08)
      .from(".hero-role", { opacity: 0, y: 14, duration: 0.55 }, 0.2)
      .from(".hero-rule", { scaleX: 0, duration: 0.7, ease: "power2.inOut", transformOrigin: "left" }, 0.35)
      .from(".hero-stat", { opacity: 0, y: 16, duration: 0.45, stagger: 0.06 }, 0.45)
      .from(".hero-desc", { opacity: 0, y: 14, duration: 0.45 }, 0.55)
      .from(".hero-actions .btn", { opacity: 0, y: 12, duration: 0.4, stagger: 0.08 }, 0.62)
      .from(".hero-card", { opacity: 0, y: 18, duration: 0.45, stagger: 0.07 }, 0.5)
      .from(".hero-scroll-hint", { opacity: 0, y: 10, duration: 0.45 }, 0.65);
    tweens.push(heroTl);

    /* ── Section rule expand ── */
    gsap.utils.toArray(".section-rule").forEach((rule) => {
      const tween = gsap.fromTo(
        rule,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: rule,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(tween);
    });

    /* ── Section labels ── */
    gsap.utils.toArray(".section-label").forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, x: -14 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(tween);
    });

    /* ── Clip reveals ── */
    gsap.utils.toArray(".section .clip-inner").forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el.closest(".clip-wrap") || el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(tween);
    });

    /* ── Marquee strip ── */
    const marqueeTween = gsap.fromTo(
      ".marquee-strip",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".marquee-strip",
          start: "top 96%",
          toggleActions: "play none none reverse",
        },
      }
    );
    tweens.push(marqueeTween);

    /* ── Generic reveal-up ── */
    gsap.utils.toArray(".reveal-up").forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(tween);
    });

    /* ── Header on scroll ── */
    const headerTrigger = ScrollTrigger.create({
      start: "top -60",
      end: "max",
      onUpdate(self) {
        const header = document.getElementById("siteHeader");
        if (header) header.classList.toggle("scrolled", self.progress > 0);
      },
    });

    /* ── Active nav tracking ── */
    const sections = document.querySelectorAll(".section[id]");
    function setActiveNav(id) {
      document.querySelectorAll(".nav a, .mobile-nav a").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
      });
    }
    const navTriggers = [];
    sections.forEach((section) => {
      navTriggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActiveNav(section.id),
          onEnterBack: () => setActiveNav(section.id),
        })
      );
    });

    return () => {
      tweens.forEach((t) => t.kill());
      headerTrigger.kill();
      navTriggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [introSeen]);

  useEffect(() => {
    const cleanups = [];

    /* ── Scroll progress bar ── */
    const bar = document.getElementById("scrollProgress");
    function onScrollProgress() {
      if (!bar) return;
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = `${Math.min(pct, 100)}%`;
    }
    window.addEventListener("scroll", onScrollProgress, { passive: true });
    onScrollProgress();
    cleanups.push(() => window.removeEventListener("scroll", onScrollProgress));

    /* ── Smooth anchor scroll ── */
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((a) => {
      function onClick(e) {
        const hash = a.getAttribute("href").slice(1);
        const target = document.getElementById(hash);
        if (!target) return;
        e.preventDefault();
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 80 },
          duration: 1.2,
          ease: "power3.inOut",
        });
        window.dispatchEvent(new CustomEvent(CLOSE_MOBILE_NAV));
      }
      a.addEventListener("click", onClick);
      cleanups.push(() => a.removeEventListener("click", onClick));
    });

    /* ── Projects: cursor-follow preview ── */
    const index = document.getElementById("projectIndex");
    const prev = document.getElementById("projectPreview");
    if (index && prev && window.matchMedia("(pointer: fine)").matches) {
      const ppNum = prev.querySelector(".pp-num");
      const ppTitle = prev.querySelector(".pp-title");
      const ppSub = prev.querySelector(".pp-sub");
      let cx = innerWidth / 2;
      let cy = innerHeight / 2;
      let tx = cx;
      let ty = cy;
      let previewRaf = 0;

      const rowHandlers = [];
      index.querySelectorAll(".project-row").forEach((row) => {
        function onEnter() {
          if (ppNum) ppNum.textContent = row.querySelector(".pr-num")?.textContent ?? "";
          if (ppTitle) ppTitle.textContent = row.getAttribute("data-title") ?? "";
          if (ppSub) ppSub.textContent = row.getAttribute("data-sub") ?? "";
          prev.classList.add("show");
        }
        function onLeave() {
          prev.classList.remove("show");
        }
        row.addEventListener("mouseenter", onEnter);
        row.addEventListener("mouseleave", onLeave);
        rowHandlers.push({ row, onEnter, onLeave });
      });

      function onPreviewMove(e) {
        cx = e.clientX;
        cy = e.clientY;
      }
      window.addEventListener("mousemove", onPreviewMove, { passive: true });

      function previewLoop() {
        tx += (cx - tx) * 0.15;
        ty += (cy - ty) * 0.15;
        prev.style.left = `${tx}px`;
        prev.style.top = `${ty}px`;
        previewRaf = requestAnimationFrame(previewLoop);
      }
      previewRaf = requestAnimationFrame(previewLoop);

      cleanups.push(() => {
        cancelAnimationFrame(previewRaf);
        window.removeEventListener("mousemove", onPreviewMove);
        rowHandlers.forEach(({ row, onEnter, onLeave }) => {
          row.removeEventListener("mouseenter", onEnter);
          row.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    /* ── Services: click to pin open (touch-friendly) ── */
    const serviceItems = document.querySelectorAll(".service-item");
    const serviceHandlers = [];
    serviceItems.forEach((item) => {
      function onClick() {
        item.classList.toggle("open");
      }
      item.addEventListener("click", onClick);
      serviceHandlers.push({ item, onClick });
    });
    cleanups.push(() => {
      serviceHandlers.forEach(({ item, onClick }) => {
        item.removeEventListener("click", onClick);
      });
    });

    /* ── Back to top ── */
    const btn = document.getElementById("backToTop");
    if (btn) {
      function toggleBackToTop() {
        const show = window.scrollY > 480;
        btn.classList.toggle("visible", show);
        btn.hidden = !show;
      }
      window.addEventListener("scroll", toggleBackToTop, { passive: true });
      toggleBackToTop();
      function onBackToTopClick() {
        gsap.to(window, { scrollTo: { y: 0 }, duration: 1.0, ease: "power3.inOut" });
      }
      btn.addEventListener("click", onBackToTopClick);
      cleanups.push(() => {
        window.removeEventListener("scroll", toggleBackToTop);
        btn.removeEventListener("click", onBackToTopClick);
      });
    }

    /* ── Cursor glow (desktop) ── */
    const glow = document.getElementById("cursorGlow");
    if (glow && window.matchMedia("(pointer: fine)").matches) {
      let cx = innerWidth / 2;
      let cy = innerHeight / 2;
      let tx = cx;
      let ty = cy;
      let glowRaf = 0;

      function onGlowEnter() {
        glow.classList.add("active");
      }
      function onGlowLeave() {
        glow.classList.remove("active");
      }
      function onGlowMove(e) {
        cx = e.clientX;
        cy = e.clientY;
      }

      document.addEventListener("mouseenter", onGlowEnter);
      document.addEventListener("mouseleave", onGlowLeave);
      window.addEventListener("mousemove", onGlowMove, { passive: true });

      function glowLoop() {
        tx += (cx - tx) * 0.08;
        ty += (cy - ty) * 0.08;
        glow.style.left = `${tx}px`;
        glow.style.top = `${ty}px`;
        glowRaf = requestAnimationFrame(glowLoop);
      }
      glowRaf = requestAnimationFrame(glowLoop);

      cleanups.push(() => {
        cancelAnimationFrame(glowRaf);
        document.removeEventListener("mouseenter", onGlowEnter);
        document.removeEventListener("mouseleave", onGlowLeave);
        window.removeEventListener("mousemove", onGlowMove);
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}

export { CLOSE_MOBILE_NAV };
