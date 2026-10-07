/** Curved planetary horizon anchoring the bottom of the Director. */
export default function EarthHorizon() {
  return (
    <div className="earth-horizon" aria-hidden="true">
      <div className="earth-horizon__glow" />
      <div className="earth-horizon__body" />
      <div className="earth-horizon__rim" />
    </div>
  );
}
