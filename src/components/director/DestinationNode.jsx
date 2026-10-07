const SIZE = {
  lg: "node--lg",
  md: "node--md",
  sm: "node--sm",
};

export default function DestinationNode({ dest, selected, onSelect }) {
  const style = {
    left: `${dest.x}%`,
    top: `${dest.y}%`,
  };

  return (
    <button
      type="button"
      className={`dest-node ${SIZE[dest.size] || "node--md"} accent-${dest.accent} ${
        dest.featured ? "is-featured" : ""
      } ${selected ? "is-selected" : ""}`}
      style={style}
      onClick={() => onSelect(dest)}
      aria-label={`${dest.label}: ${dest.subtitle}`}
      aria-pressed={selected}
    >
      <span className="dest-node__ring" aria-hidden="true" />
      <span className="dest-node__core" aria-hidden="true">
        <span className="dest-node__orb" />
      </span>
      <span className="dest-node__meta">
        <span className="dest-node__label">{dest.label}</span>
        <span className="dest-node__sub">{dest.subtitle}</span>
        {dest.status ? <span className="dest-node__status">{dest.status}</span> : null}
      </span>
    </button>
  );
}
