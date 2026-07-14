import siteConfig from "../config/siteConfig.js";

export default function Hero() {
  return (
    <section id="hero" className="px-2.5 pb-2.5 pt-[5.6rem] md:px-4">
      <div className="hero-stage flex flex-col justify-between p-5 sm:p-8 md:p-12 lg:p-16">
        <div className="relative z-10 max-w-4xl py-8 md:py-12">
          <p className="eyebrow text-lime">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
            Open to internships · Summer & Fall 2026
          </p>
          <h1 className="hero-name mt-6 text-cream">
            <span className="block">Zaid</span>
            <span className="block text-lime">Khan</span>
          </h1>
        </div>

        <div className="relative z-10 flex flex-col gap-6 border-t border-cream/20 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-cream/75 md:text-xl">
            ISEN student at Texas A&M. Healthcare systems, process design, and
            the tools that make complex operations work.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.resumeUrl}
              className="btn btn-cream track-cta"
              data-track="Resume Hero"
              download="Zaid-Khan-Resume.pdf"
            >
              Download resume
            </a>
            <a href="#experience" className="btn btn-outline-cream track-cta" data-track="View Experience">
              See experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
