import siteConfig from "../config/siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-void">
      <div className="wrap py-16 md:py-20">
        <div className="flex flex-col gap-8 border-b border-line pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Next move</p>
            <a
              href="#contact"
              className="mt-4 block font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-soft track-cta"
              data-track="Footer CTA"
            >
              Let&apos;s work
              <br />
              <span className="text-green">together ↗</span>
            </a>
          </div>
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-green track-cta"
            data-track="Resume Footer"
            download="Zaid-Khan-Resume.pdf"
          >
            Download resume
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-mute uppercase">Pages</p>
            <nav className="mt-4 grid gap-2 text-sm font-semibold">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#building">Building</a>
              <a href="#projects">Work</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-mute uppercase">Follow</p>
            <div className="mt-4 grid gap-2 text-sm font-semibold">
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">
                X / Twitter ↗
              </a>
            </div>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-mute uppercase">Base</p>
            <div className="mt-4 grid gap-2 text-sm text-mute">
              <span>McKinney, TX</span>
              <span>Texas A&M Engineering Academies</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <a href="#hero" className="font-display text-lg font-bold uppercase tracking-[-0.04em] text-soft">
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
