import { useEffect, useRef } from "react";
import SaturnLogo from "./SaturnLogo.jsx";

/**
 * Scroll-linked watermark with a slow spin and gentle drift.
 */
export default function PlanetBackdrop({ visible = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return undefined;

    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* ignore */
    }

    const start = performance.now();

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
      const idleX =
        Math.sin(t * 0.2) * Math.min(22, vw * 0.02) + Math.sin(t * 0.1) * 8;
      const idleY =
        Math.cos(t * 0.16) * Math.min(16, vh * 0.014) + Math.sin(t * 0.24) * 5;
      const scrollX = Math.sin(progress * Math.PI * 2) * Math.min(44, vw * 0.034);

      el.style.setProperty("--planet-x", `${scrollX + idleX}px`);
      el.style.setProperty("--planet-y", `${y + idleY}px`);
      el.style.setProperty("--planet-scale", "1");
      el.dataset.progress = progress.toFixed(3);
    };

    if (reduced) {
      sync();
      window.addEventListener("scroll", sync, { passive: true });
      window.addEventListener("resize", sync);
      return () => {
        window.removeEventListener("scroll", sync);
        window.removeEventListener("resize", sync);
      };
    }

    let raf = 0;
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
