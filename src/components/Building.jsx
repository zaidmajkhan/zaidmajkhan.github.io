import { lazy, Suspense } from "react";
import siteConfig from "../config/siteConfig.js";

const RiveMark = lazy(() => import("./RiveMark.jsx"));

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
    <section id="building" className="section scroll-mt-24 border-t border-line">
      <div className="wrap">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow reveal">03 — Building</p>
            <h2 className="pin-title display-lg mt-4 text-soft">
              Off
              <br />
              <span className="text-green">track.</span>
            </h2>
            <p className="reveal body mt-6 max-w-lg">
              Personal projects. No client theater. Cards flip to live links when something ships.
            </p>
          </div>
          <div className="reveal relative hidden h-48 overflow-hidden border border-line bg-panel lg:block">
            <Suspense fallback={null}>
              <RiveMark src="/assets/vehicles.riv" className="absolute inset-0 h-full w-full" />
            </Suspense>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/60 to-transparent p-4">
              <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-green uppercase">
                Motion · Rive
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid border-t border-line md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.num}
              className={`reveal flex min-h-72 flex-col justify-between border-b border-line p-6 md:border-b-0 ${
                i < 2 ? "md:border-r" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-soft">{p.num}</span>
                <span className="chip">{p.tag}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.03em] uppercase text-soft">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block text-xs font-semibold tracking-[0.14em] text-green uppercase"
                  >
                    Open ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10">
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
