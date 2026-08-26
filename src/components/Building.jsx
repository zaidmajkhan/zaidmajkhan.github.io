import siteConfig from "../config/siteConfig.js";

const TAG_CLASS = {
  Shipped: "chip chip--shipped",
  Live: "chip chip--live",
  Active: "chip chip--live",
  Deploying: "chip chip--deploying",
  Planned: "chip chip--planned",
};

export default function Building({ todoAppUrl }) {
  const projects = [
    {
      num: "01",
      title: "AI Lead Follow-Up Agent",
      tag: "Shipped",
      body: "Autonomous outreach: JSON leads → Claude-personalized campaigns → Gmail OAuth. Dry-run mode, sent-tracking dedup, rate limiting, structured errors, GitHub Actions CI/CD.",
      href: "https://github.com/zaidmajkhan/lead-followup-agent",
    },
    {
      num: "02",
      title: "ACE Lab research",
      tag: "Active",
      body: "Qualitative research + HCD with Dr. Farzan Sasangohar and Dr. Alec Smith. CITI / IRB certified.",
      href: "#experience",
    },
    {
      num: "03",
      title: "AI Todo App",
      tag: todoAppUrl ? "Live" : "Deploying",
      body: "FastAPI + SQLite + Claude on the server. Keys never hit the browser.",
      href: todoAppUrl || null,
    },
  ];

  return (
    <section id="building" className="section scroll-mt-24">
      <div className="wrap">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow reveal text-green">03 — Building</p>
          <h2 className="pin-title display-lg mt-3 text-forest">Personal projects, shipped separately.</h2>
          <p className="body reveal mt-4 max-w-lg text-mute">
            From a production-style Python agent to lab research — software and systems in the same
            toolkit.
          </p>
        </div>

        <div className="stagger-children mt-8 grid border-y border-forest/12 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.num}
              className={`flex min-h-[14rem] flex-col justify-between p-5 transition-colors duration-300 hover:bg-forest/[0.03] ${
                i < 2 ? "md:border-r md:border-forest/12" : ""
              } border-b border-forest/12 last:border-b-0 md:border-b-0`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-3xl text-forest">{p.num}</span>
                <span className={TAG_CLASS[p.tag] || "chip"}>{p.tag}</span>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-forest">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.body}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    {...(p.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="mt-4 inline-block text-xs font-extrabold tracking-[0.12em] text-green uppercase transition-opacity hover:opacity-70"
                  >
                    Open ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-7">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-green track-cta"
            data-track="GitHub Building"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
