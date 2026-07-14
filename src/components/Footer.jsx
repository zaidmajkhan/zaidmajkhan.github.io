import siteConfig from "../config/siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-cream">
      <div className="container-wide py-16 md:py-20">
        <div className="flex flex-col gap-8 border-b border-forest/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-moss">Have something in mind?</p>
            <a href="#contact" className="mt-4 block font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-[-0.04em] text-forest track-cta" data-track="Footer CTA">
              Let&apos;s work <span className="text-moss">together ↗</span>
            </a>
          </div>
          <a href={siteConfig.resumeUrl} className="btn btn-forest track-cta" data-track="Resume Footer" download="Zaid-Khan-Resume.pdf">
            Download resume
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-muted uppercase">Sitemap</p>
            <nav className="mt-4 grid gap-2 text-sm font-semibold">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#building">Building</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div>
            <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-muted uppercase">Connect</p>
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
            <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-muted uppercase">Based in</p>
            <div className="mt-4 grid gap-2 text-sm text-muted">
              <span>McKinney, TX</span>
              <span>Texas A&M Engineering Academies</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-forest/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <a href="#hero" className="font-serif text-xl tracking-[-0.03em] text-forest">
            Zaid Khan
          </a>
          <p>© {year} Zaid Khan</p>
          <a href="#hero" className="font-semibold text-forest">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
