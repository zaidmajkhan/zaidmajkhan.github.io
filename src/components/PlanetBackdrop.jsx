import { useEffect, useRef } from "react";
import SaturnLogo from "./SaturnLogo.jsx";

/**
 * Large Saturn mark — scrolls top→bottom as a progress marker and
 * floats around with idle drift (the earlier roaming feel).
 */
export default function PlanetBackdrop({ visible = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return undefined;

    let raf = 0;
    let reduced = false;
    const start = performance.now();
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* ignore */
    }

    const sync = (now = performance.now()) => {
      const lenis = window.__lenis;
      const scroll = typeof lenis?.scroll === "number" ? lenis.scroll : window.scrollY || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scroll / max));

      const size = el.offsetHeight || 1;
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const pad = Math.max(72, vh * 0.08);
      const centerY = pad + progress * Math.max(0, vh - pad * 2);
      const y = centerY - size / 2;

      const t = (now - start) / 1000;
      /* Figure-eight-ish idle path so it never sits still */
      const idleX =
        Math.sin(t * 0.28) * Math.min(42, vw * 0.035) + Math.sin(t * 0.13) * 14;
      const idleY =
        Math.cos(t * 0.22) * Math.min(34, vh * 0.028) + Math.sin(t * 0.37) * 10;
      /* Scroll also nudges it horizontally across the right half */
      const scrollX = Math.sin(progress * Math.PI * 2) * Math.min(88, vw * 0.065);
      const scale = 1 + Math.sin(t * 0.17) * 0.04;

      el.style.setProperty("--planet-x", `${scrollX + idleX}px`);
      el.style.setProperty("--planet-y", `${y + idleY}px`);
      el.style.setProperty("--planet-scale", String(scale));
      el.dataset.progress = progress.toFixed(3);
    };

    if (reduced) {
      sync();
      window.addEventListener("resize", sync);
      return () => window.removeEventListener("resize", sync);
    }

    const onResize = () => sync();
    const tick = (now) => {
      sync(now);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`planet-backdrop${visible ? " is-on" : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      <SaturnLogo className="planet-logo" />
    </div>
  );
}
