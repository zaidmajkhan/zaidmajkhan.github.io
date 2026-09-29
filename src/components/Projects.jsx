import { lazy, Suspense } from "react";
import siteConfig from "../config/siteConfig.js";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

const ROWS = [
  {
    num: "01",
    title: "AI Lead Follow-Up Agent",
    cat: "Python · Claude · Gmail",
    year: "2026",
    flag: "Done",
    href: "https://github.com/zaidmajkhan/lead-followup-agent",
    external: true,
  },
  {
    num: "02",
    title: "ACE Lab Research",
    cat: "Human-centered design",
    year: "2026",
    flag: "Active",
    href: "#experience",
  },
  {
    num: "03",
    title: "HFCS Lab · Haptic Teleoperation",
    cat: "Human factors",
    year: "2026",
    flag: "Active",
    href: "#experience",
  },
  {
    num: "04",
    title: "CVS Pharmacy Workflow",
    cat: "Process",
    year: "2025",
    flag: "47% ↓",
    href: "#experience",
  },
  {
    num: "05",
    title: "Handshake AI · Project Lighthouse",
    cat: "Model evaluation",
    year: "2026",
    flag: "Active",
    href: "#experience",
  },
  {
    num: "06",
    title: "Wharton Investment Comp",
    cat: "Strategy",
    year: "2023",
    flag: "Top 6%",
    href: "#credentials",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-band scroll-mt-24 relative overflow-hidden">
      <div
        className="motif-bleed motif-bleed--left pointer-events-none absolute inset-y-0 left-0 hidden w-[min(34vw,22rem)] opacity-60 lg:block"
        aria-hidden="true"
      >
        <div className="scene-mount absolute inset-0">
          <Suspense fallback={null}>
            <SceneCanvas variant="signal" tone="cream" className="h-full w-full" />
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
            Shipped agent, lab research, pharmacy process redesign.
          </p>
        </div>

        <div className="border-t border-forest/12">
          {ROWS.map((row) => (
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
              <span
                className={
                  row.flag === "Done"
                    ? "chip chip--shipped"
                    : row.flag === "Live" || row.flag === "Active"
                      ? "chip chip--live"
                      : row.flag === "Soon"
                        ? "chip chip--deploying"
                        : "chip"
                }
              >
                {row.flag}
              </span>
            </a>
          ))}
        </div>

        <p className="reveal mt-6 text-sm text-mute">
          Need the PDF?{" "}
          <a
            href={siteConfig.resumeUrl}
            className="font-bold text-forest underline underline-offset-4 transition-opacity hover:opacity-70"
            download={siteConfig.resumeDownloadName}
          >
            Download resume
          </a>
        </p>
      </div>
    </section>
  );
}
