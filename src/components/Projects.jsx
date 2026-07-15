import { lazy, Suspense } from "react";
import siteConfig from "../config/siteConfig.js";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

export default function Projects({ todoAppUrl }) {
  const rows = [
    { num: "01", title: "Healthcare Systems", cat: "Systems Design", year: "2026", flag: "Focus", href: "#about" },
    {
      num: "02",
      title: "AI Lead Follow-Up Agent",
      cat: "Python · APIs",
      year: "2025",
      flag: "Done",
      href: "https://github.com/zaidmajkhan/lead-followup-agent",
      external: true,
    },
    {
      num: "03",
      title: "AI Todo App",
      cat: "Full-stack",
      year: "2026",
      flag: todoAppUrl ? "Live" : "Soon",
      href: todoAppUrl || "#building",
      external: Boolean(todoAppUrl),
    },
    { num: "04", title: "CVS Pharmacy Workflow", cat: "Process", year: "2025", flag: "47% ↓", href: "#experience" },
    { num: "05", title: "Wharton Investment Comp", cat: "Strategy", year: "2023", flag: "Top 6%", href: "#credentials" },
  ];

  return (
    <section id="projects" className="section scroll-mt-24 relative overflow-hidden bg-cream-soft">
      <div
        className="motif-bleed motif-bleed--cream pointer-events-none absolute -right-6 top-8 hidden h-64 w-64 opacity-55 lg:block"
        aria-hidden="true"
      >
        <div className="scene-mount absolute inset-0">
          <Suspense fallback={null}>
            <SceneCanvas variant="process" tone="cream" compact className="h-full w-full" />
          </Suspense>
        </div>
      </div>

      <div className="wrap relative z-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal text-green">04 — Work</p>
            <h2 className="pin-title display-lg mt-3 text-forest">Selected index</h2>
          </div>
          <p className="reveal body max-w-sm text-mute md:text-right">
            From pharmacy process redesign to personal AI tooling.
          </p>
        </div>

        <div className="border-t border-forest/12">
          {rows.map((row) => (
            <a
              key={row.num}
              href={row.href}
              {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="interactive-row group grid grid-cols-[2.75rem_1fr_auto] items-center gap-3 border-b border-forest/12 py-4 md:grid-cols-[3.5rem_1.4fr_1fr_4.5rem_auto] md:gap-5"
            >
              <span className="font-display text-sm text-mute">{row.num}</span>
              <span className="row-title font-display text-lg leading-snug tracking-[-0.02em] text-forest md:text-xl">
                {row.title}
              </span>
              <span className="hidden text-sm text-mute md:block">{row.cat}</span>
              <span className="hidden text-sm text-mute md:block">{row.year}</span>
              <span className="chip">{row.flag}</span>
            </a>
          ))}
        </div>

        <p className="reveal mt-6 text-sm text-mute">
          Need the PDF?{" "}
          <a
            href={siteConfig.resumeUrl}
            className="font-bold text-forest underline underline-offset-4 transition-opacity hover:opacity-70"
            download="Zaid-Khan-Resume.pdf"
          >
            Download resume →
          </a>
        </p>
      </div>
    </section>
  );
}
