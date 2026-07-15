import { useEffect, useRef } from "react";

/**
 * Fixed Saturn that tracks scroll progress — top of page → top of viewport,
 * bottom of page → bottom of viewport.
 */
export default function PlanetBackdrop({ visible = true }) {
  const ref = useRef(null);
  const pauseRef = useRef(() => {});

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const { initPlanetScene } = await import("../lib/scene3d.js");
      if (cancelled || !ref.current) return;
      const dispose = initPlanetScene(ref.current);
      cleanup = dispose || (() => {});
      pauseRef.current = dispose?.setPaused || (() => {});
      pauseRef.current(!visible);
    })();

    return () => {
      cancelled = true;
      cleanup();
      pauseRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    pauseRef.current(!visible);
  }, [visible]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return undefined;

    let raf = 0;
    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* ignore */
    }

    const sync = () => {
      const lenis = window.__lenis;
      const scroll = typeof lenis?.scroll === "number" ? lenis.scroll : window.scrollY || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scroll / max));

      const size = el.offsetHeight || 1;
      const vh = window.innerHeight;
      /* Track the planet's center so a large globe still travels top → bottom */
      const pad = Math.max(120, vh * 0.14);
      const centerY = pad + progress * Math.max(0, vh - pad * 2);
      const y = centerY - size / 2;

      el.style.transform = `translate3d(0, ${y}px, 0)`;
      el.dataset.progress = progress.toFixed(3);
    };

    if (reduced) {
      sync();
      window.addEventListener("resize", sync);
      return () => window.removeEventListener("resize", sync);
    }

    const tick = () => {
      sync();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", sync);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", sync);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`planet-backdrop${visible ? " is-on" : ""}`}
      aria-hidden="true"
      role="presentation"
    />
  );
}
