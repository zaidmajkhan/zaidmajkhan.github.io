import { useEffect, useRef } from "react";
import { DESTINATIONS } from "../../config/destinations.js";
import { initDirectorScene } from "../../lib/directorScene.js";

/**
 * Full-bleed Three.js Director stage (planets, bloom, warp).
 * Projects label positions to HTML overlays via onProject.
 */
export default function DirectorCanvas({
  selectedId,
  onSelect,
  onHover,
  onProject,
  onTravelStart,
  onTravelPeak,
  onTravelEnd,
  apiRef,
}) {
  const mountRef = useRef(null);
  const handlersRef = useRef({});
  handlersRef.current = {
    onSelect,
    onHover,
    onProject,
    onTravelStart,
    onTravelPeak,
    onTravelEnd,
  };

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return undefined;

    const { api, dispose } = initDirectorScene(el, DESTINATIONS, {
      onSelect: (id) => handlersRef.current.onSelect?.(id),
      onHover: (id) => handlersRef.current.onHover?.(id),
      onProject: (map) => handlersRef.current.onProject?.(map),
      onTravelStart: (d) => handlersRef.current.onTravelStart?.(d),
      onTravelPeak: (d) => handlersRef.current.onTravelPeak?.(d),
      onTravelEnd: (d) => handlersRef.current.onTravelEnd?.(d),
    });

    if (apiRef) apiRef.current = api;

    return () => {
      if (apiRef) apiRef.current = null;
      dispose();
    };
  }, [apiRef]);

  useEffect(() => {
    apiRef?.current?.setSelected?.(selectedId);
  }, [selectedId, apiRef]);

  return <div ref={mountRef} className="director-canvas" aria-hidden="true" />;
}
