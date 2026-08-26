export default function About() {
  return (
    <section id="about" className="section section-quiet scroll-mt-24 relative overflow-hidden">
      <div className="wrap relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <p className="eyebrow reveal text-green">01 — About</p>
            <h2 className="pin-title display-lg mt-4 text-balance text-forest">
              Systems that lose people deserve better engineering.
            </h2>
            <p className="body reveal mt-5 text-mute">
              I grew up watching my family navigate a healthcare system that felt designed to lose
              people in the cracks. An engineer looks at that and sees fixable problems — and the
              toolkit is software as much as operations: Python agents, APIs, and human-centered
              research alongside pharmacy-floor process design.
            </p>
          </div>

          <figure className="reveal relative mx-auto w-full max-w-md overflow-hidden rounded-2xl lg:mx-0 lg:max-w-none">
            <img
              src="/assets/og-image.jpg"
              alt="Workspace flat-lay — laptop, notebook, and forest-green desk setup"
              className="about-still block h-56 w-full object-cover object-[center_35%] sm:h-64 lg:h-72"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-mute uppercase">
              Build space · systems over spectacle
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 text-green lg:mx-0 lg:max-w-none">
          <span className="rule-grow h-px flex-1 origin-left bg-green/30" />
          <span className="text-[0.65rem] font-extrabold tracking-[0.16em] uppercase">Currently</span>
          <span className="rule-grow h-px flex-1 origin-left bg-green/30" />
        </div>

        <div className="stagger-children mt-2 border-y border-forest/12">
          {[
            ["Studying", "ISEN @ Texas A&M", "Engineering Academies · 4.0 GPA · May 2029"],
            ["Working", "CPhT · CVS Health", "Claims, bottlenecks, and patient flow on the floor"],
            ["Researching", "ACE Lab @ Texas A&M", "Qualitative methods, HCD · CITI / IRB certified"],
            [
              "Building",
              "AI Lead Follow-Up Agent",
              "Python, Claude API, Gmail API · GitHub Actions CI/CD",
            ],
          ].map(([k, t, d], i, rows) => (
            <article
              key={k}
              className={`grid gap-2 py-5 md:grid-cols-[7.5rem_1fr_1.2fr] md:items-baseline md:gap-6 ${
                i < rows.length - 1 ? "border-b border-forest/12" : ""
              }`}
            >
              <span className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">
                {k}
              </span>
              <h3 className="font-display text-2xl leading-snug tracking-[-0.02em] text-forest md:text-[1.65rem]">
                {t}
              </h3>
              <p className="text-sm leading-relaxed text-mute md:text-right">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
