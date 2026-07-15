import { useEffect, useRef } from "react";

const MOTIFS = new Set(["systems", "care", "signal", "process"]);
const VEHICLES = new Set(["ambulance", "race", "sedan", "hatchback", "garage"]);

/**
 * Lazy-loads a Three.js scene. Pauses when off-screen.
 */
export default function SceneCanvas({
  variant = "systems",
  model,
  tone,
  className = "",
  compact = false,
}) {
  const ref = useRef(null);
  const resolved = model || variant;

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
      const mod = await import("../lib/scene3d.js");
      if (cancelled || !ref.current) return;

      let dispose;
      if (variant === "hero") {
        dispose = mod.initHeroScene(ref.current);
      } else if (resolved === "garage") {
        dispose = mod.initGarageScene(ref.current, { tone: tone || "forest", compact });
      } else if (VEHICLES.has(resolved)) {
        dispose = mod.initVehicleScene(ref.current, {
          model: resolved,
          tone: tone || (resolved === "ambulance" ? "cream" : "forest"),
          compact,
          desktopOnly: !compact,
        });
      } else if (MOTIFS.has(variant)) {
        dispose = mod.initMotifScene(ref.current, {
          motif: variant,
          tone: tone || (variant === "process" || variant === "care" ? "forest" : "cream"),
          compact,
          desktopOnly: !compact,
        });
      } else if (variant === "lattice") {
        dispose = mod.initLatticeScene(ref.current);
      } else {
        dispose = mod.initOrbitScene(ref.current, { compact });
      }

      cleanup = dispose || (() => {});
      setPaused = dispose?.setPaused || (() => {});
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
      { rootMargin: "20% 0px", threshold: 0.01 },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      cleanup();
    };
  }, [variant, model, tone, compact, resolved]);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
