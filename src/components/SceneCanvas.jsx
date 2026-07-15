import { useEffect, useRef } from "react";

const MOTIFS = new Set(["systems", "care", "signal", "process"]);

/**
 * Lazy-loads a Three.js scene. Starts immediately on desktop so motifs
 * don't wait on IntersectionObserver (which Lenis can starve).
 * @param {"hero"|"orbit"|"lattice"|"systems"|"care"|"signal"|"process"} variant
 * @param {"cream"|"forest"} tone
 */
export default function SceneCanvas({
  variant = "systems",
  tone,
  className = "",
  compact = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let cleanup = () => {};
    let setPaused = () => {};
    let cancelled = false;
    let started = false;

    const start = async () => {
      if (cancelled || started) return;
      started = true;
      try {
        const mod = await import("../lib/scene3d.js");
        if (cancelled || !ref.current) return;

        let dispose;
        if (variant === "hero") {
          dispose = mod.initHeroScene(ref.current);
        } else if (MOTIFS.has(variant)) {
          dispose = mod.initMotifScene(ref.current, {
            motif: variant,
            tone: tone || (variant === "process" || variant === "care" ? "forest" : "cream"),
            compact,
            desktopOnly: false,
          });
        } else if (variant === "lattice") {
          dispose = mod.initLatticeScene(ref.current);
        } else {
          dispose = mod.initOrbitScene(ref.current, { compact });
        }

        cleanup = typeof dispose === "function" ? dispose : () => {};
        setPaused = dispose?.setPaused || (() => {});
      } catch {
        cleanup = () => {};
      }
    };

    /* Start right away on wide screens; IO only used to pause off-screen */
    const narrow = window.matchMedia("(max-width: 700px)").matches;
    if (!narrow) {
      start();
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          start().then(() => setPaused(false));
        } else if (started) {
          setPaused(true);
        }
      },
      { rootMargin: "25% 0px", threshold: 0.01 },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      cleanup();
    };
  }, [variant, tone, compact]);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
