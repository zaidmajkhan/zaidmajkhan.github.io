import { useEffect, useRef } from "react";

/**
 * Fixed Saturn-like planet that keeps rotating after the loading intro.
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

  return (
    <div
      ref={ref}
      className={`planet-backdrop${visible ? " is-on" : ""}`}
      aria-hidden="true"
    />
  );
}
