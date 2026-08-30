import { useEffect, useRef } from "react";
import SaturnLogo from "./SaturnLogo.jsx";

/**
 * Scroll-linked watermark — no spin, minimal drift.
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

    const sync = () => {
      const lenis = window.__lenis;
      const scroll = typeof lenis?.scroll === "number" ? lenis.scroll : window.scrollY || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scroll / max));

      const size = el.offsetHeight || 1;
      const vh = window.innerHeight;
      const pad = Math.max(72, vh * 0.08);
      const centerY = pad + progress * Math.max(0, vh - pad * 2);
      const y = centerY - size / 2;

      el.style.setProperty("--planet-x", "0px");
      el.style.setProperty("--planet-y", `${y}px`);
      el.style.setProperty("--planet-scale", "1");
      el.dataset.progress = progress.toFixed(3);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
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
