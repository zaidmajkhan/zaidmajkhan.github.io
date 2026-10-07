import siteConfig from "../../config/siteConfig.js";
import { DIRECTOR_NAV } from "../../config/destinations.js";

export default function DirectorHeader({ activeId, onNav, mapMode }) {
  return (
    <header className="director-header">
      <div className="director-brand">
        <div className="director-brand__mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="director-brand__svg">
            <polygon
              points="20,3 37,14 37,30 20,37 3,30 3,14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx="20" cy="20" r="4.5" fill="currentColor" opacity="0.85" />
          </svg>
        </div>
        <div>
          <p className="director-brand__title">ZAID KHAN</p>
          <p className="director-brand__rank">ISEN · TEXAS A&M · GPA 4.0</p>
        </div>
      </div>

      <nav className="director-nav" aria-label="Director">
        {DIRECTOR_NAV.map((item) => {
          const isActive =
            item.active ||
            (item.destination && item.destination === activeId) ||
            (item.id === "map" && mapMode && !activeId) ||
            (item.id === "destinations" && mapMode);
          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                className={`director-nav__link ${isActive ? "is-active" : ""}`}
                download={item.download ? siteConfig.resumeDownloadName : undefined}
                data-track="Resume Director Nav"
              >
                {item.label}
              </a>
            );
          }
          return (
            <button
              key={item.id}
              type="button"
              className={`director-nav__link ${isActive ? "is-active" : ""}`}
              onClick={() => onNav(item)}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="director-social" aria-label="Links">
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="director-social__link"
          data-track="LinkedIn Director"
        >
          LI
        </a>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="director-social__link"
          data-track="GitHub Director"
        >
          GH
        </a>
      </div>
    </header>
  );
}
