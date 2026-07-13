import siteConfig from '../config/siteConfig.js';

export default function Header({ onThemeToggle, theme, mobileOpen, setMobileOpen }) {
  function handleHamburgerClick() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <header className="site-header" id="siteHeader">
      <div className="container header-inner">
        <a className="logo" href="#hero">
          ZK
        </a>
        <nav className="nav" id="nav">
          <a href="#about" data-label="About">
            <span>About</span>
          </a>
          <a href="#experience" data-label="Experience">
            <span>Experience</span>
          </a>
          <a href="#building" data-label="Building">
            <span>Building</span>
          </a>
          <a href="#projects" data-label="Projects">
            <span>Projects</span>
          </a>
          <a href="#credentials" data-label="Credentials">
            <span>Credentials</span>
          </a>
          <a href="#contact" data-label="Contact">
            <span>Contact</span>
          </a>
        </nav>
        <div className="header-actions">
          <a
            href={siteConfig.resumeUrl}
            className="header-cta track-cta resume-link"
            data-track="Resume Header"
            download="Zaid-Khan-Resume.pdf"
          >
            Resume ↓
          </a>
          <a href="#contact" className="header-cta-book btn ghost track-cta" data-track="Contact Header">
            Contact
          </a>
        </div>
        <button
          className="theme-toggle"
          id="themeToggle"
          type="button"
          aria-label="Toggle light or dark theme"
          aria-pressed={theme === 'light'}
          onClick={onThemeToggle}
        >
          <span className="tt-icon tt-sun" aria-hidden="true">
            ☀
          </span>
          <span className="tt-icon tt-moon" aria-hidden="true">
            ☾
          </span>
        </button>
        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          id="hamburger"
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobileNav"
          onClick={handleHamburgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
