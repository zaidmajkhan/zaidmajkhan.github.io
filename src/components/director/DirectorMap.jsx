import { useCallback, useEffect, useState } from "react";
import { DESTINATIONS } from "../../config/destinations.js";
import siteConfig from "../../config/siteConfig.js";
import DestinationNode from "./DestinationNode.jsx";
import DestinationPanel from "./DestinationPanel.jsx";
import DirectorFooter from "./DirectorFooter.jsx";
import DirectorHeader from "./DirectorHeader.jsx";
import EarthHorizon from "./EarthHorizon.jsx";
import OrbitalGrid from "./OrbitalGrid.jsx";
import Starfield from "./Starfield.jsx";

export default function DirectorMap() {
  const [activeId, setActiveId] = useState(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setBooted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  const onPointer = useCallback((e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setPointer({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  const selectDestination = useCallback((destOrId) => {
    const dest =
      typeof destOrId === "string"
        ? DESTINATIONS.find((d) => d.id === destOrId)
        : destOrId;
    if (!dest) return;

    if (dest.external) {
      const a = document.createElement("a");
      a.href = dest.external;
      if (dest.download) a.download = dest.download;
      a.rel = "noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
      if (window.plausible) window.plausible("Resume Director Node");
      return;
    }

    setActiveId(dest.id);
    if (window.plausible) window.plausible(`Director:${dest.id}`);
  }, []);

  const close = useCallback(() => setActiveId(null), []);

  const onNav = useCallback(
    (item) => {
      if (item.destination) selectDestination(item.destination);
      else setActiveId(null);
    },
    [selectDestination],
  );

  return (
    <div
      className={`director ${booted ? "is-booted" : ""} ${activeId ? "has-panel" : ""}`}
      onMouseMove={onPointer}
    >
      <a className="skip-link" href="#director-map">
        Skip to map
      </a>

      <Starfield pointer={pointer} />
      <OrbitalGrid pointer={pointer} />
      <EarthHorizon />

      <DirectorHeader activeId={activeId} onNav={onNav} mapMode={!activeId} />

      <main id="director-map" className="director-stage" aria-label="Director destinations">
        <div className="director-hero-copy">
          <p className="director-kicker">Open to SWE · applied AI · ISE · Summer & Fall 2026</p>
          <p className="director-tagline">
            Select a destination to explore labs, systems, and signal.
          </p>
        </div>

        <div className="director-nodes">
          {DESTINATIONS.map((dest) => (
            <DestinationNode
              key={dest.id}
              dest={dest}
              selected={activeId === dest.id}
              onSelect={selectDestination}
            />
          ))}
        </div>

        <div className="director-cta-bar">
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-cyan track-cta"
            data-track="Resume Director CTA"
            download={siteConfig.resumeDownloadName}
          >
            Download resume
          </a>
          <button type="button" className="btn btn-ghost-cyan" onClick={() => selectDestination("signal")}>
            Open signal
          </button>
        </div>
      </main>

      <DirectorFooter
        activeId={activeId}
        onSelect={selectDestination}
        onDismiss={activeId ? close : () => selectDestination("origin")}
      />

      {activeId ? <DestinationPanel activeId={activeId} onClose={close} /> : null}
    </div>
  );
}
