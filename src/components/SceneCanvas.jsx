import { useEffect, useRef } from "react";

/**
 * Lazy-loads a Three.js scene initiator into a container.
 * @param {"hero"|"orbit"|"lattice"} variant
 */
export default function SceneCanvas({ variant = "orbit", className = "", compact = false }) {
  const ref = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;
    (async () => {
      const mod = await import("../lib/scene3d.js");
      if (cancelled || !ref.current) return;
      const init =
        variant === "hero"
          ? mod.initHeroScene
          : variant === "lattice"
            ? mod.initLatticeScene
            : mod.initOrbitScene;
      cleanup =
        (variant === "orbit" ? init(ref.current, { compact }) : init(ref.current)) || (() => {});
    })();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [variant, compact]);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
