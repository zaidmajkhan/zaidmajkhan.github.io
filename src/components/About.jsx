const CURRENTLY = [
  ["Studying", "ISEN @ Texas A&M", "4.0 GPA · May 2029"],
  [
    "Researching",
    "ACE Lab + HFCS Lab",
    "HCD interviews · haptic teleoperation (Dr. Ferris)",
  ],
  [
    "Building",
    "AI Lead Follow-Up Agent",
    "Python, Claude API, Gmail API · GitHub Actions CI/CD",
  ],
  ["Working", "CPhT · CVS Health", "200+ patients/day · 47% wait reduction"],
  [
    "Also",
    "Handshake AI · Project Lighthouse",
    "Finance prompts + grading rubrics for frontier models",
  ],
];

const PILLARS = [
  {
    num: "01",
    title: "Research",
    body: "Human-centered interviews and haptic teleoperation planning in A&M labs.",
  },
  {
    num: "02",
    title: "Software",
    body: "Shipped Python agents, Claude APIs, and CI/CD that hold up under real use.",
  },
  {
    num: "03",
    title: "Operations",
    body: "Pharmacy-floor process design measured against patient wait and throughput.",
  },
];

const SKILLS = [
  "Python",
  "Java",
  "JavaScript",
  "Claude API",
  "CI/CD",
  "Prompt engineering",
  "Process improvement",
  "Root cause analysis",
  "Operations leadership",
];

export default function About() {
  return (
    <section id="about" className="section section-quiet scroll-mt-24 relative overflow-hidden">
      <div className="wrap relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <p className="eyebrow reveal text-green">• About the builder</p>
            <h2 className="pin-title elevate-display-lg mt-4 text-forest">
              Systems that lose people.{" "}
              <em className="elevate-italic text-green">Deserve better.</em>
            </h2>
            <p className="body reveal mt-5 text-mute">
              I grew up watching my family navigate a healthcare system that felt designed to lose
              people in the cracks. An engineer looks at that and sees fixable problems — and the
              toolkit is software as much as operations: Python agents, human-centered research,
              and pharmacy-floor process design. Long term, I want to build technology that helps
              people with disabilities live more independently.
            </p>
            <a
              href="#experience"
              className="btn btn-green mt-6 track-cta"
              data-track="About to Experience"
            >
              Meet the work →
            </a>
          </div>

          <figure className="reveal relative mx-auto w-full max-w-md overflow-hidden rounded-[1.25rem] lg:mx-0 lg:max-w-none">
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

        <div className="stagger-children mt-12 grid gap-6 border-y border-forest/12 py-8 md:grid-cols-3 md:gap-0">
          {PILLARS.map((p, i) => (
            <article
              key={p.num}
              className={`md:px-6 ${i > 0 ? "md:border-l md:border-forest/12" : ""} ${i === 0 ? "md:pl-0" : ""} ${i === 2 ? "md:pr-0" : ""}`}
            >
              <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-green uppercase">
                {p.num} / {p.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 text-green lg:mx-0 lg:max-w-none">
          <span className="rule-grow h-px flex-1 origin-left bg-green/30" />
          <span className="text-[0.65rem] font-extrabold tracking-[0.16em] uppercase">Currently</span>
          <span className="rule-grow h-px flex-1 origin-left bg-green/30" />
        </div>

        <div className="stagger-children mt-2 border-y border-forest/12">
          {CURRENTLY.map(([k, t, d], i, rows) => (
            <article
              key={k}
              className={`grid gap-2 py-5 md:grid-cols-[7.5rem_1fr_1.2fr] md:items-baseline md:gap-6 ${
                i < rows.length - 1 ? "border-b border-forest/12" : ""
              }`}
            >
              <span className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">
                {k}
              </span>
              <h3 className="elevate-display-sm text-forest">{t}</h3>
              <p className="text-sm leading-relaxed text-mute md:text-right">{d}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-forest/12 pt-6">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="text-[0.68rem] font-semibold tracking-[0.08em] text-mute uppercase"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
