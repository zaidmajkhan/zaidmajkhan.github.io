/** Destiny-style "Traveling to …" HUD during warp. */
export default function TravelOverlay({ dest, phase }) {
  if (!dest || !phase) return null;

  return (
    <div className={`travel-overlay is-${phase}`} aria-live="polite">
      <div className="travel-overlay__vignette" />
      <div className="travel-overlay__flash" />
      <div className="travel-overlay__copy">
        <p className="travel-overlay__eyebrow">Director · Orbit transfer</p>
        <h2 className="travel-overlay__title">
          {phase === "peak" || phase === "arrive" ? "ARRIVING" : "TRAVELING TO"}
        </h2>
        <p className="travel-overlay__dest">{dest.label}</p>
        <p className="travel-overlay__sub">{dest.subtitle}</p>
        <div className="travel-overlay__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
