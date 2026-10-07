/**
 * HTML label + hit assist over projected 3D planet positions.
 * Visual orb is rendered in Three.js; this is the Destiny-style caption.
 */
export default function DestinationNode({ dest, selected, projected, onSelect, dimmed }) {
  if (!projected?.visible) return null;

  const hit = Math.max(52, (projected.r || 0.7) * 62);
  const style = {
    left: `${projected.x}px`,
    top: `${projected.y}px`,
    "--hit": `${hit}px`,
  };

  return (
    <button
      type="button"
      className={`dest-node dest-node--label accent-${dest.accent} ${
        dest.featured ? "is-featured" : ""
      } ${selected ? "is-selected" : ""} ${dimmed ? "is-dimmed" : ""}`}
      style={style}
      onClick={() => onSelect(dest)}
      aria-label={`${dest.label}: ${dest.subtitle}`}
      aria-pressed={selected}
    >
      <span className="dest-node__hit" aria-hidden="true" />
      <span className="dest-node__meta">
        <span className="dest-node__label">{dest.label}</span>
        <span className="dest-node__sub">{dest.subtitle}</span>
        {dest.status ? <span className="dest-node__status">{dest.status}</span> : null}
      </span>
    </button>
  );
}
