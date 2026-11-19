/**
 * Soft mountain atmosphere — engineering-firm photography feel, not a cartoon motif.
 */
export default function MountainBackdrop({ visible = true }) {
  return (
    <div
      className={`mountain-backdrop${visible ? " is-on" : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      <img
        src="/assets/engineer-mountains.jpg"
        alt=""
        className="mountain-backdrop-img"
        decoding="async"
      />
      <div className="mountain-backdrop-wash" />
    </div>
  );
}
