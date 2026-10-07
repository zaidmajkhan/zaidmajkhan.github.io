/** Caption under projected 3D planet — Destiny thin tracked labels. */
export default function DestinationNode({ dest, selected, projected, onSelect, dimmed }) {
  if (!projected?.visible) return null;
  const hit = Math.max(44, (projected.r || 0.55) * 70);

  return (
    <button
      type="button"
      className={`dest-node accent-${dest.id} ${dest.featured ? "is-featured" : ""} ${
        selected ? "is-selected" : ""
      } ${dimmed ? "is-dimmed" : ""}`}
      style={{ left: projected.x, top: projected.y, "--hit": `${hit}px` }}
      onClick={() => onSelect(dest)}
      aria-label={`${dest.label}: ${dest.subtitle}`}
      aria-pressed={selected}
    >
      <span className="dest-node__hit" aria-hidden="true" />
      <span className="dest-node__meta">
        <span className="dest-node__label">{dest.label}</span>
        {dest.status ? <span className="dest-node__status">{dest.status}</span> : null}
      </span>
    </button>
  );
}
