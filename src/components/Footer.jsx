import siteConfig from '../config/siteConfig.js';

export default function Footer({ githubUrl, twitterUrl }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <span className="footer-eyebrow">Have something in mind?</span>
          <a href="#contact" className="footer-bigline track-cta" data-track="Footer CTA">
            <span className="clip-wrap">
              <span className="clip-inner">Let&apos;s work</span>
            </span>
            <span className="clip-wrap">
              <span className="clip-inner clip-inner--accent">
                together <i className="fb-arrow">↗</i>
              </span>
            </span>
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-col-label">Sitemap</span>
            <nav className="footer-links" aria-label="Footer">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#building">Building</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-col">
            <span className="footer-col-label">Connect</span>
            <div className="footer-links">
              <a href="mailto:zaidmajkhan@gmail.com">zaidmajkhan@gmail.com</a>
              <a href={siteConfig.resumeUrl} className="resume-link" download="Zaid-Khan-Resume.pdf">
                Resume ↓
              </a>
              <a href="https://linkedin.com/in/zaidmajkhan" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={githubUrl} id="footerGithub" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={twitterUrl} id="footerTwitter" target="_blank" rel="noreferrer">
                X / Twitter ↗
              </a>
            </div>
          </div>
          <div className="footer-col">
            <span className="footer-col-label">Based in</span>
            <div className="footer-links">
              <span>McKinney, TX</span>
              <span>Texas A&amp;M Engineering Academies</span>
            </div>
          </div>
        </div>

        <div className="footer-base">
          <a className="footer-logo" href="#hero">
            Zaid Khan
          </a>
          <p className="footer-copy muted small">
            © <span id="yearFooter">{year}</span> Zaid Khan
          </p>
          <a href="#hero" className="footer-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
