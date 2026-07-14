export default function About() {
  return (
    <section id="about" className="section scroll-mt-24 border-t border-line">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow reveal">01 — About</p>
            <h2 className="pin-title display-lg mt-5 text-soft">
              Systems
              <br />
              that lose
              <br />
              <span className="text-green">people.</span>
            </h2>
          </div>
          <div className="reveal max-w-xl self-end">
            <p className="body">
              I grew up watching my family navigate a healthcare system that felt designed to lose
              people in the cracks. Complex hand-offs. Broken information flow. An engineer looks
              at that and sees fixable problems.
            </p>
            <p className="body mt-5">
              Studying Industrial & Systems Engineering at Texas A&M because ISE is about making
              complex systems work — reducing waste, improving flow, designing processes that scale.
            </p>
            <p className="mt-8 border-l-2 border-green pl-4 text-sm font-medium tracking-wide text-soft">
              Long term: build a healthcare systems company that actually moves the needle.
            </p>
          </div>
        </div>

        <div className="reveal mt-16 grid border-t border-line md:grid-cols-3">
          {[
            ["Studying", "ISEN @ Texas A&M", "Engineering Academies · 4.0 GPA · May 2029"],
            ["Working", "CPhT · CVS Health", "Claims, bottlenecks, patient flow on the pharmacy floor"],
            ["Building", "AI · automation", "Python, FastAPI, Claude API — personal projects only"],
          ].map(([k, t, d], i) => (
            <article
              key={k}
              className={`surface-card border-b border-line p-6 md:border-b-0 ${i < 2 ? "md:border-r" : ""}`}
            >
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-green uppercase">{k}</p>
              <h3 className="mt-6 font-display text-2xl tracking-[-0.03em] text-soft md:text-3xl">
                {t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
