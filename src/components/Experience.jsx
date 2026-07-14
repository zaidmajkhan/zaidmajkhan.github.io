import { lazy, Suspense } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

const ITEMS = [
  {
    date: "2025 — 2029",
    type: "Education",
    title: "Texas A&M — B.S. Industrial & Systems Engineering",
    body: "Engineering Academies pathway via Collin College. 4.0 GPA. Sole winner of the TAMU Engineering Academies Resume Challenge across all 13 Academy campuses.",
  },
  {
    date: "Mar 2025 — Now",
    type: "Healthcare",
    title: "CVS Health — Certified Pharmacy Technician",
    body: "RXConnect for 200+ patients daily. Peak-hour sequencing rewrite — 47% wait reduction. Licensed CPhT (PTCB) + Texas RPhT.",
  },
  {
    date: "2021 — 2026",
    type: "Operations",
    title: "IACC Sunday School — Operations Team Leader",
    body: "Facility ops for 600+ students weekly. Teacher setup redesign — 73% time cut. 120+ service hours.",
  },
  {
    date: "2023",
    type: "Competition",
    title: "Wharton Global Investment Competition",
    body: "Top 6% globally across ~4,000 teams from 100+ countries.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section band-forest scroll-mt-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(28vw,22rem)] opacity-45 lg:block"
        aria-hidden="true"
      >
        <div className="scene-mount absolute inset-0">
          <Suspense fallback={null}>
            <SceneCanvas variant="orbit" className="h-full w-full" />
          </Suspense>
        </div>
      </div>

      <div className="wrap relative z-10">
        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="eyebrow reveal text-lime">02 — Experience</p>
            <h2 className="pin-title display-lg mt-3 text-cream">
              Pharmacy floors, school ops, competitions.
            </h2>
          </div>
          <p className="reveal body max-w-md text-cream/65 md:justify-self-end md:text-right">
            Every role is practice in mapping how systems behave under constraint.
          </p>
        </div>

        <div className="mt-10 border-t border-cream/15">
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="exp-row grid gap-3 border-b border-cream/15 py-5 md:grid-cols-[9.5rem_1fr] md:gap-8"
            >
              <div>
                <p className="text-sm font-bold text-lime">{item.date}</p>
                <p className="mt-0.5 text-[0.62rem] font-extrabold tracking-[0.14em] text-cream/45 uppercase">
                  {item.type}
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 font-display text-sm text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-cream md:text-[1.45rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream/60">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
