import siteConfig from "../config/siteConfig.js";

export default function Building({ todoAppUrl }) {
  const projects = [
    {
      num: "01",
      title: "AI Lead Follow-Up Agent",
      tag: "In progress",
      body: "Python agent using Claude API + Gmail — ingests lead data, generates outreach, tracks sends. Still iterating on reliability.",
      href: "https://github.com/zaidmajkhan/lead-followup-agent",
    },
    {
      num: "02",
      title: "AI Todo App",
      tag: todoAppUrl ? "Live" : "Deploying",
      body: "Full-stack FastAPI + SQLite + Claude API on the server only. This portfolio stays static; the app deploys separately.",
      href: todoAppUrl || null,
    },
    {
      num: "03",
      title: "Healthcare Workflow Tools",
      tag: "Planned",
      body: "Exploring process-mapping tools inspired by pharmacy ops — modeling hand-offs and bottlenecks in clinical workflows.",
      href: null,
    },
  ];

  return (
    <section id="building" className="section-pad scroll-mt-24">
      <div className="container-wide">
        <div className="surface mx-auto max-w-[1320px] p-6 md:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center text-moss">03 — Building</p>
            <h2 className="heading-xl mt-5 text-forest">Personal projects, shipped separately.</h2>
            <p className="body-lg mx-auto mt-6 max-w-2xl text-muted">
              Side projects exploring AI and full-stack tooling. No client work — cards flip to
              live links when something ships.
            </p>
          </div>

          <div className="mt-14 grid border-y border-forest/15 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.num}
                className={`flex min-h-64 flex-col justify-between p-7 md:p-9 ${
                  i < projects.length - 1 ? "md:border-r md:border-forest/15" : ""
                } border-b border-forest/15 last:border-b-0 md:border-b-0`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-4xl tracking-[-0.05em] text-forest">{p.num}</span>
                  <span className="rounded-full border border-forest/15 px-3 py-1 text-[0.65rem] font-extrabold tracking-[0.12em] text-moss uppercase">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-forest">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 border-b border-forest/30 pb-1 text-xs font-extrabold tracking-[0.12em] uppercase"
                    >
                      Open ↗
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-forest track-cta"
              data-track="GitHub Building"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
