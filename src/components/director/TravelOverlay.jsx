/** Destiny-style "Traveling to …" HUD during warp. */
export default function TravelOverlay({ dest, phase }) {
  if (!dest || !phase) return null;

  const arriving = phase === "peak" || phase === "arrive";

  return (
    <div className={`travel-overlay is-${phase}`} aria-live="polite">
      <div className="travel-overlay__streaks" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>
      <div className="travel-overlay__vignette" />
      <div className="travel-overlay__flash" />
      <div className="travel-overlay__copy">
        <p className="travel-overlay__eyebrow">Director · Orbit transfer</p>
        <h2 className="travel-overlay__title">{arriving ? "ARRIVING" : "TRAVELING TO"}</h2>
        <p className="travel-overlay__dest">{dest.label}</p>
        <p className="travel-overlay__sub">{dest.subtitle}</p>
        <div className="travel-overlay__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
