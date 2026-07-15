import { lazy, Suspense } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

export default function CaseStudy() {
  return (
    <section id="case-study" className="section scroll-mt-24 relative overflow-hidden bg-cream-soft">
      <div
        className="motif-bleed motif-bleed--cream pointer-events-none absolute inset-y-4 right-0 hidden w-[min(36vw,26rem)] opacity-85 lg:block"
        aria-hidden="true"
      >
        <div className="scene-mount absolute inset-0">
          <Suspense fallback={null}>
            <SceneCanvas variant="ambulance" tone="cream" className="h-full w-full" />
          </Suspense>
        </div>
      </div>

      <div className="wrap relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-xl">
          <p className="eyebrow reveal text-green">Case study</p>
          <h2 className="pin-title display-lg mt-3 text-forest">
            CVS pharmacy workflow — 47% wait reduction
          </h2>
          <p className="body reveal mt-4 text-mute">
            A floor-level process redesign at CVS Health: peak-hour sequencing, fewer bottlenecks,
            patients out the door faster.
          </p>
        </div>

        <div className="stagger-children mt-10 grid gap-4 md:grid-cols-3">
          <article className="surface surface-card p-5 md:p-6">
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">
              Problem
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Peak hours stacked verification, bagging, and counseling in a sequence that forced idle
              wait between stations. 200+ patients/day through RXConnect made small delays
              compound into long queues.
            </p>
          </article>
          <article className="surface surface-card p-5 md:p-6">
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">
              Solution
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Mapped the hand-offs, rewritten peak-hour task order so parallelizable work overlapped,
              and tightened station readiness for the licensed counseling step.
            </p>
          </article>
          <article className="surface surface-card p-5 md:p-6">
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">
              Result
            </p>
            <p className="mt-3 font-display text-4xl tracking-[-0.02em] text-forest">47%</p>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              Reduction in patient wait time per RXConnect metrics. Still CPhT (PTCB) + Texas RPhT
              on the floor.
            </p>
          </article>
        </div>

        <blockquote className="reveal surface mx-auto mt-8 max-w-3xl border-l-4 border-green p-5 md:p-7 lg:mx-0">
          <p className="font-display text-xl leading-snug tracking-[-0.02em] text-forest md:text-2xl">
            &ldquo;Every role is practice in mapping how systems behave under constraint — pharmacy
            floors included.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-mute">
            <cite className="not-italic font-semibold text-forest">Zaid Khan</cite>
            <span className="mx-2 text-forest/30">·</span>
            CPhT · CVS Health
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
