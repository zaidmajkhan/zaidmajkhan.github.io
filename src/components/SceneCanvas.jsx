import { useEffect, useRef } from "react";

const MOTIFS = new Set(["systems", "care", "signal", "process", "rocket", "planet"]);

/**
 * Lazy-loads a Three.js scene only when visible — never eager-starts all mounts.
 * @param {"hero"|"orbit"|"lattice"|"systems"|"care"|"signal"|"process"|"rocket"|"planet"} variant
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
            desktopOnly: true,
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

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          start().then(() => setPaused(false));
        } else if (started) {
          setPaused(true);
        }
      },
      { rootMargin: "15% 0px", threshold: 0.05 },
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
