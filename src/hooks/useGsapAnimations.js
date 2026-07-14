import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useGsapAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.5 }, 0.1)
      .from(".hero-line > span", { yPercent: 110, duration: 0.9, stagger: 0.08 }, 0.15)
      .from(".hero-copy", { opacity: 0, y: 20, duration: 0.6 }, 0.45)
      .from(".hero-actions .btn", { opacity: 0, y: 14, duration: 0.45, stagger: 0.08 }, 0.55)
      .from(".hero-meta", { opacity: 0, duration: 0.5 }, 0.7);

    if (!reduced) {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".parallax-slow").forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".pin-title").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: 8, opacity: 0.25 },
          {
            xPercent: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    } else {
      gsap.set(".reveal", { opacity: 1, y: 0 });
    }

    const anchors = document.querySelectorAll('a[href^="#"]');
    const onAnchor = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      gsap.to(window, {
        duration: 1.1,
        scrollTo: { y: target, offsetY: 72 },
        ease: "power3.inOut",
      });
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchor));

    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id;
      });
      document.querySelectorAll("[data-nav]").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", onAnchor));
      window.removeEventListener("scroll", onScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      heroTl.kill();
    };
  }, []);
}
