import siteConfig from "../config/siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-cream-soft">
      <div className="wrap py-8 md:py-9">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-green">Next</p>
            <a
              href="#contact"
              className="mt-2 block font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.025em] text-forest track-cta"
              data-track="Footer CTA"
            >
              Let&apos;s work <span className="text-green">together ↗</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-forest">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green"
            >
              GitHub
            </a>
            <a
              href={siteConfig.resumeUrl}
              className="hover:text-green track-cta"
              data-track="Resume Footer"
              download="Zaid-Khan-Resume.pdf"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-line pt-5 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zaid Khan · McKinney, TX</p>
          <a href="#hero" className="font-semibold text-green">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
