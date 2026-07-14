import { lazy, Suspense } from "react";
import siteConfig from "../config/siteConfig.js";

const RiveMark = lazy(() => import("./RiveMark.jsx"));
const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

export default function Building({ todoAppUrl }) {
  const projects = [
    {
      num: "01",
      title: "AI Lead Follow-Up Agent",
      tag: "In progress",
      body: "Python + Claude API + Gmail. Lead ingest, outreach, send tracking.",
      href: "https://github.com/zaidmajkhan/lead-followup-agent",
    },
    {
      num: "02",
      title: "AI Todo App",
      tag: todoAppUrl ? "Live" : "Deploying",
      body: "FastAPI + SQLite + Claude on the server. Keys never hit the browser.",
      href: todoAppUrl || null,
    },
    {
      num: "03",
      title: "Healthcare Workflow Tools",
      tag: "Planned",
      body: "Process-mapping experiments from pharmacy ops — hand-offs and bottlenecks.",
      href: null,
    },
  ];

  return (
    <section id="building" className="section scroll-mt-24">
      <div className="wrap">
        <div className="surface mx-auto overflow-hidden p-5 md:p-8 lg:p-10">
          <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow reveal text-green">03 — Building</p>
              <h2 className="pin-title display-lg mt-3 text-forest">Personal projects, shipped separately.</h2>
              <p className="body reveal mt-4 max-w-lg text-mute">
                Side projects exploring AI and full-stack tooling. Cards flip to live links when
                something ships.
              </p>
            </div>
            <div className="reveal relative hidden h-44 overflow-hidden rounded-xl border border-forest/10 bg-forest lg:block">
              <Suspense fallback={null}>
                <SceneCanvas
                  variant="orbit"
                  compact
                  className="absolute inset-0 h-full w-full opacity-70"
                />
                <RiveMark
                  src="/assets/vehicles.riv"
                  className="absolute inset-0 h-full w-full opacity-35 mix-blend-screen"
                />
              </Suspense>
            </div>
          </div>

          <div className="stagger-children mt-8 grid border-y border-forest/12 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.num}
                className={`flex min-h-[15rem] flex-col justify-between p-5 transition-colors duration-300 hover:bg-forest/[0.03] ${
                  i < 2 ? "md:border-r md:border-forest/12" : ""
                } border-b border-forest/12 last:border-b-0 md:border-b-0`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-3xl text-forest">{p.num}</span>
                  <span className="chip">{p.tag}</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-xl tracking-[-0.03em] text-forest">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{p.body}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
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
      </div>
    </section>
  );
}
