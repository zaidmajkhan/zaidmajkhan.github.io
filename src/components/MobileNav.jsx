import siteConfig from '../config/siteConfig.js';

export default function MobileNav({ mobileOpen }) {
  return (
    <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav">
      <div className="container">
        <a
          href={siteConfig.resumeUrl}
          className="mobile-cta resume-link track-cta"
          data-track="Resume Mobile"
          download="Zaid-Khan-Resume.pdf"
        >
          Download resume ↓
        </a>
        <a href="#contact" className="mobile-cta mobile-cta-book track-cta" data-track="Contact Mobile">
          Contact
        </a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#building">Building</a>
        <a href="#projects">Projects</a>
        <a href="#credentials">Credentials</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
