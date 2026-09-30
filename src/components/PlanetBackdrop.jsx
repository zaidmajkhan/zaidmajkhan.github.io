import { useEffect, useRef } from "react";
import SaturnLogo from "./SaturnLogo.jsx";

/**
 * Scroll-linked watermark. No perpetual rAF — updates on scroll/resize only.
 */
export default function PlanetBackdrop({ visible = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return undefined;

    let raf = 0;
    let lenisOff = null;
    let lenisTimer = 0;

    const sync = () => {
      raf = 0;
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
      const scrollX = Math.sin(progress * Math.PI * 2) * Math.min(44, vw * 0.034);

      el.style.setProperty("--planet-x", `${scrollX}px`);
      el.style.setProperty("--planet-y", `${y}px`);
      el.style.setProperty("--planet-scale", "1");
      el.dataset.progress = progress.toFixed(3);
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(sync);
    };

    const attachLenis = () => {
      if (lenisOff) return true;
      const lenis = window.__lenis;
      if (!lenis) return false;
      lenis.on("scroll", schedule);
      lenisOff = () => {
        try {
          lenis.off("scroll", schedule);
        } catch {
          /* ignore */
        }
      };
      return true;
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    if (!attachLenis()) {
      /* Lenis may boot after this effect */
      lenisTimer = window.setInterval(() => {
        if (attachLenis()) window.clearInterval(lenisTimer);
      }, 250);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(lenisTimer);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      lenisOff?.();
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
