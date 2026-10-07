import { QUICK_HEXES } from "../../config/destinations.js";
import siteConfig from "../../config/siteConfig.js";

function HexIcon({ type }) {
  if (type === "core") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (type === "orbit") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
    );
  }
  if (type === "hex") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l7 4v10l-7 4-7-4V7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }
  if (type === "mark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4l6 16H6z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 12c3-6 13-6 16 0M4 12c3 6 13 6 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export default function DirectorFooter({ activeId, onSelect, onDismiss }) {
  return (
    <footer className="director-footer">
      <div className="director-hexes" role="toolbar" aria-label="Quick destinations">
        {QUICK_HEXES.map((h) => (
          <button
            key={h.id}
            type="button"
            className={`director-hex accent-${h.accent} ${activeId === h.id ? "is-active" : ""}`}
            onClick={() => onSelect(h.id)}
            aria-label={h.label}
            title={h.label}
          >
            <HexIcon type={h.icon} />
          </button>
        ))}
      </div>

      <div className="director-footer__links">
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${siteConfig.contactEmail}`}>Email</a>
        <a href={siteConfig.resumeUrl} download={siteConfig.resumeDownloadName}>
          Resume
        </a>
        <button type="button" onClick={onDismiss}>
          {activeId ? "Dismiss" : "Origin"}
        </button>
      </div>
    </footer>
  );
}
