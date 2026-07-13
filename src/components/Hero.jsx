import siteConfig from '../config/siteConfig.js';

export default function Hero({ hero3dRef }) {
  return (
    <section className="section hero" id="hero">
      <div className="hero-mesh" aria-hidden="true"></div>
      <div className="hero-3d" id="hero3d" ref={hero3dRef} aria-hidden="true"></div>
      <div className="container">
        <div className="hero-top">
          <div className="hero-status">
            <span className="status-dot"></span>
            Open to internships — Summer &amp; Fall 2026
          </div>
          <div className="hero-location">
            McKinney, TX &nbsp;·&nbsp; Texas A&amp;M Engineering Academies
          </div>
        </div>

        <div className="hero-name-row">
          <h1 className="hero-name">
            <div className="clip-wrap">
              <span className="clip-inner">Zaid</span>
            </div>
            <div className="clip-wrap">
              <span className="clip-inner clip-inner--accent">Khan</span>
            </div>
          </h1>
          <p className="hero-role reveal-up">ISEN @ Texas A&amp;M · Healthcare Systems · Process Design</p>
        </div>

        <div className="hero-rule"></div>

        <div className="recruiter-strip reveal-up">
          <span className="recruiter-chip">4.0 GPA</span>
          <span className="recruiter-chip">CPhT · CVS Health</span>
          <span className="recruiter-chip">Top 6% Wharton</span>
          <span className="recruiter-chip">Resume Challenge Winner</span>
          <span className="recruiter-chip">Python · Claude API</span>
        </div>

        <div className="hero-bottom">
          <div className="hero-bottom-left">
            <div className="hero-stat-row">
              <div className="hero-stat glass-card">
                <span className="hero-stat-val">4.0</span>
                <span className="hero-stat-label">GPA</span>
              </div>
              <div className="hero-stat glass-card">
                <span className="hero-stat-val">47%</span>
                <span className="hero-stat-label">Wait ↓ CVS</span>
              </div>
              <div className="hero-stat glass-card">
                <span className="hero-stat-val">CPhT</span>
                <span className="hero-stat-label">Licensed</span>
              </div>
              <div className="hero-stat glass-card">
                <span className="hero-stat-val">ISEN</span>
                <span className="hero-stat-label">Major</span>
              </div>
            </div>
            <p className="hero-desc">
              Industrial &amp; Systems Engineering student at Texas A&amp;M (Engineering Academies, 4.0 GPA).
              Licensed pharmacy technician at CVS Health — front-line healthcare ops experience.
              Seeking internships in healthcare systems, operations, and process design.
              Exploring AI and automation through personal projects on the side.
            </p>
            <div className="hero-actions">
              <a
                href={siteConfig.resumeUrl}
                className="btn primary track-cta resume-link"
                data-track="Resume Hero"
                download="Zaid-Khan-Resume.pdf"
              >
                Download resume
              </a>
              <a href="#experience" className="btn ghost track-cta" data-track="View Experience">
                View experience
              </a>
              <a href="#projects" className="btn ghost track-cta" data-track="View Projects">
                See projects
              </a>
            </div>
          </div>

          <div className="hero-bottom-right">
            <div className="hero-cards">
              <div className="hero-card glass-card">
                <div className="hero-card-label">Studying</div>
                <div className="hero-card-val">ISEN @ Texas A&amp;M</div>
                <div className="hero-card-sub">Engineering Academies · 4.0 GPA · May 2029</div>
              </div>
              <div className="hero-card glass-card">
                <div className="hero-card-label">Focus</div>
                <div className="hero-card-val">Healthcare Systems</div>
                <div className="hero-card-sub">Process design · ops · ISE</div>
              </div>
              <div className="hero-card glass-card">
                <div className="hero-card-label">Building</div>
                <div className="hero-card-val">Personal Projects</div>
                <div className="hero-card-sub">Python · APIs · in progress</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="scroll-hint-text">Scroll</span>
          <div className="scroll-hint-line"></div>
        </div>
      </div>
    </section>
  );
}
