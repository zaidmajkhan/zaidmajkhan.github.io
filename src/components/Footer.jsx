import siteConfig from "../config/siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-cream-soft">
      <div className="wrap py-8 md:py-10">
        <div className="flex flex-col gap-6 border-b border-line pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-green">Next move</p>
            <a
              href="#contact"
              className="mt-2 block font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.12] tracking-[-0.025em] text-forest track-cta"
              data-track="Footer CTA"
            >
              Let&apos;s work <span className="text-green">together ↗</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {siteConfig.calBookingUrl ? (
              <a
                href={siteConfig.calBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost track-cta"
                data-track="Book Call Footer"
              >
                Book a call
              </a>
            ) : null}
            <a
              href={siteConfig.resumeUrl}
              className="btn btn-green track-cta"
              data-track="Resume Footer"
              download="Zaid-Khan-Resume.pdf"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-mute uppercase">
              Pages
            </p>
            <nav className="mt-3 grid gap-1.5 text-sm font-semibold text-forest">
              <a href="#about" className="hover:text-green">
                About
              </a>
              <a href="#experience" className="hover:text-green">
                Experience
              </a>
              <a href="#case-study" className="hover:text-green">
                Case study
              </a>
              <a href="#building" className="hover:text-green">
                Building
              </a>
              <a href="#projects" className="hover:text-green">
                Work
              </a>
              <a href="#faq" className="hover:text-green">
                FAQ
              </a>
              <a href="#contact" className="hover:text-green">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-mute uppercase">
              Follow
            </p>
            <div className="mt-3 grid gap-1.5 text-sm font-semibold text-forest">
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-green">
                {siteConfig.contactEmail}
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green"
              >
                LinkedIn ↗
              </a>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green"
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green"
              >
                X ↗
              </a>
            </div>
          </div>
          <div>
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-mute uppercase">
              Base
            </p>
            <div className="mt-3 grid gap-1.5 text-sm text-mute">
              <span>McKinney, TX</span>
              <span>Texas A&M Engineering Academies</span>
            </div>
          </div>
          <div>
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-mute uppercase">
              Connect
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Open to Summer & Fall 2026 internships — LinkedIn is fastest.
            </p>
            {siteConfig.calBookingUrl ? (
              <a
                href={siteConfig.calBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-bold text-forest underline underline-offset-4 transition-opacity hover:opacity-70 track-cta"
                data-track="Book Call Footer Nav"
              >
                Book a call →
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <a href="#hero" className="font-display text-xl tracking-[-0.03em] text-forest">
            Zaid Khan
          </a>
          <p>© {year} Zaid Khan</p>
          <a href="#hero" className="font-semibold text-green">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
