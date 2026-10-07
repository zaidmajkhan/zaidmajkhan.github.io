import siteConfig from "../../config/siteConfig.js";
import { DIRECTOR_NAV } from "../../config/destinations.js";

export default function DirectorHeader({ activeId, onNav, mapMode }) {
  return (
    <header className="director-header">
      <div className="director-brand">
        <div className="director-brand__mark" aria-hidden="true">
          <svg viewBox="0 0 36 36">
            <path
              d="M18 2L32 10.5V25.5L18 34L4 25.5V10.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <circle cx="18" cy="18" r="3.2" fill="currentColor" />
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

      <div className="director-social">
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="director-social__link">
          LI
        </a>
        <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="director-social__link">
          GH
        </a>
      </div>
    </header>
  );
}
