import { lazy, Suspense } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

export default function About() {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="wrap">
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="eyebrow reveal text-green">01 — About</p>
            <h2 className="pin-title display-lg mt-4 text-balance text-forest">
              Systems that lose people deserve better engineering.
            </h2>
            <p className="body reveal mt-5 text-mute">
              I grew up watching my family navigate a healthcare system that felt designed to lose
              people in the cracks. An engineer looks at that and sees fixable problems.
            </p>
          </div>
          <div className="scene-mount relative mx-auto hidden h-56 w-full max-w-sm overflow-hidden rounded-2xl border border-forest/10 bg-gradient-to-br from-cream-soft to-cream-deep lg:block">
            <Suspense fallback={null}>
              <SceneCanvas variant="lattice" className="absolute inset-0 h-full w-full" />
            </Suspense>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 text-green">
          <span className="rule-grow h-px flex-1 origin-left bg-green/30" />
          <span className="text-[0.65rem] font-extrabold tracking-[0.16em] uppercase">Currently</span>
          <span className="rule-grow h-px flex-1 origin-left bg-green/30" />
        </div>

        <div className="stagger-children mt-5 grid gap-3 md:grid-cols-3">
          {[
            ["Studying", "ISEN @ Texas A&M", "Engineering Academies · 4.0 GPA · May 2029"],
            ["Working", "CPhT · CVS Health", "Claims, bottlenecks, and patient flow on the floor"],
            ["Building", "AI · automation", "Python, FastAPI, Claude API — personal projects"],
          ].map(([k, t, d]) => (
            <article key={k} className="surface surface-card flex flex-col p-5">
              <span className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">{k}</span>
              <div>
                <h3 className="mt-4 font-display text-2xl leading-snug tracking-[-0.02em] text-forest md:text-[1.65rem]">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mute">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
