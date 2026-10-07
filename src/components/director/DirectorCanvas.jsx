import { useEffect, useRef } from "react";
import { DESTINATIONS } from "../../config/destinations.js";
import { initDirectorScene } from "../../lib/directorScene.js";

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
  handlersRef.current = { onSelect, onHover, onProject, onTravelStart, onTravelPeak, onTravelEnd };

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return undefined;
    let dispose = () => {};
    try {
      const scene = initDirectorScene(el, DESTINATIONS, {
        onSelect: (id) => handlersRef.current.onSelect?.(id),
        onHover: (id) => handlersRef.current.onHover?.(id),
        onProject: (map) => handlersRef.current.onProject?.(map),
        onTravelStart: (d) => handlersRef.current.onTravelStart?.(d),
        onTravelPeak: (d) => handlersRef.current.onTravelPeak?.(d),
        onTravelEnd: (d) => handlersRef.current.onTravelEnd?.(d),
      });
      dispose = scene.dispose;
      if (apiRef) apiRef.current = scene.api;
    } catch (err) {
      console.error("Director 3D failed", err);
    }
    return () => {
      if (apiRef) apiRef.current = null;
      try {
        dispose();
      } catch {
        /* ignore */
      }
    };
  }, [apiRef]);

  useEffect(() => {
    apiRef?.current?.setSelected?.(selectedId);
  }, [selectedId, apiRef]);

  return <div ref={mountRef} className="director-canvas" aria-hidden="true" />;
}
