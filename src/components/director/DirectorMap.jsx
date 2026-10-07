import { useCallback, useEffect, useRef, useState } from "react";
import { DESTINATIONS } from "../../config/destinations.js";
import siteConfig from "../../config/siteConfig.js";
import DestinationNode from "./DestinationNode.jsx";
import DestinationPanel from "./DestinationPanel.jsx";
import DirectorCanvas from "./DirectorCanvas.jsx";
import DirectorFooter from "./DirectorFooter.jsx";
import DirectorHeader from "./DirectorHeader.jsx";
import TravelOverlay from "./TravelOverlay.jsx";

export default function DirectorMap() {
  const [activeId, setActiveId] = useState(null);
  const [booted, setBooted] = useState(false);
  const [projected, setProjected] = useState({});
  const [travelDest, setTravelDest] = useState(null);
  const [travelPhase, setTravelPhase] = useState(null);
  const apiRef = useRef(null);
  const travelingRef = useRef(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setBooted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeId || travelPhase ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId, travelPhase]);

  const openDestination = useCallback((dest) => {
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

  const selectDestination = useCallback(
    async (destOrId) => {
      const dest =
        typeof destOrId === "string"
          ? DESTINATIONS.find((d) => d.id === destOrId)
          : destOrId;
      if (!dest || travelingRef.current) return;

      // Resume PDF — still warp visually then download
      if (dest.external) {
        travelingRef.current = true;
        setTravelDest(dest);
        setTravelPhase("approach");
        try {
          await apiRef.current?.travelTo?.(dest.id);
        } catch {
          /* ignore */
        }
        setTravelPhase("arrive");
        openDestination(dest);
        setTimeout(() => {
          setTravelPhase(null);
          setTravelDest(null);
          travelingRef.current = false;
          apiRef.current?.resetCamera?.(true);
        }, 400);
        return;
      }

      if (activeId === dest.id) return;

      travelingRef.current = true;
      setActiveId(null);
      setTravelDest(dest);
      setTravelPhase("approach");

      try {
        await apiRef.current?.travelTo?.(dest.id);
      } catch {
        /* ignore */
      }

      setTravelPhase("arrive");
      openDestination(dest);

      window.setTimeout(() => {
        setTravelPhase(null);
        setTravelDest(null);
        travelingRef.current = false;
      }, 450);
    },
    [activeId, openDestination],
  );

  const close = useCallback(() => {
    setActiveId(null);
    apiRef.current?.resetCamera?.(true);
    apiRef.current?.setSelected?.(null);
  }, []);

  const onNav = useCallback(
    (item) => {
      if (item.destination) selectDestination(item.destination);
      else close();
    },
    [selectDestination, close],
  );

  const onTravelPeak = useCallback(() => {
    setTravelPhase("peak");
  }, []);

  return (
    <div
      className={`director ${booted ? "is-booted" : ""} ${activeId ? "has-panel" : ""} ${
        travelPhase ? "is-traveling" : ""
      }`}
    >
      <a className="skip-link" href="#director-map">
        Skip to map
      </a>

      <DirectorCanvas
        apiRef={apiRef}
        selectedId={activeId}
        onSelect={selectDestination}
        onProject={setProjected}
        onTravelStart={() => setTravelPhase("approach")}
        onTravelPeak={onTravelPeak}
        onTravelEnd={() => setTravelPhase("arrive")}
      />

      <DirectorHeader activeId={activeId} onNav={onNav} mapMode={!activeId && !travelPhase} />

      <main id="director-map" className="director-stage" aria-label="Director destinations">
        <div className="director-hero-copy">
          <p className="director-kicker">Open to SWE · applied AI · ISE · Summer & Fall 2026</p>
          <p className="director-tagline">
            Select a destination — camera will travel through orbit.
          </p>
        </div>

        <div className="director-nodes director-nodes--projected">
          {DESTINATIONS.map((dest) => (
            <DestinationNode
              key={dest.id}
              dest={dest}
              selected={activeId === dest.id}
              projected={projected[dest.id]}
              onSelect={selectDestination}
              dimmed={!!travelPhase && travelDest?.id !== dest.id}
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
          <button
            type="button"
            className="btn btn-ghost-cyan"
            onClick={() => selectDestination("signal")}
          >
            Open signal
          </button>
        </div>
      </main>

      <DirectorFooter
        activeId={activeId}
        onSelect={selectDestination}
        onDismiss={activeId ? close : () => selectDestination("origin")}
      />

      <TravelOverlay dest={travelDest} phase={travelPhase} />

      {activeId && !travelPhase ? (
        <DestinationPanel activeId={activeId} onClose={close} />
      ) : null}
    </div>
  );
}
