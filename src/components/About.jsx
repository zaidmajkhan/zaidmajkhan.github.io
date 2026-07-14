export default function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="container-wide">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow justify-center text-moss">01 — About</p>
          <h2 className="heading-xl mt-6 text-balance text-forest">
            Systems that lose people deserve better engineering.
          </h2>
          <p className="body-lg mx-auto mt-7 max-w-3xl text-muted">
            I grew up watching my family navigate a healthcare system designed to lose people
            in the cracks — complex hand-offs, poor information flow, broken processes. An
            engineer looks at that and sees fixable problems.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl items-center gap-4 text-moss">
          <span className="h-px flex-1 bg-moss/30" />
          <span className="text-xs font-extrabold uppercase tracking-[0.16em]">Currently</span>
          <span className="h-px flex-1 bg-moss/30" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              k: "Studying",
              t: "ISEN @ Texas A&M",
              d: "Engineering Academies pathway. 4.0 GPA. Graduation May 2029.",
            },
            {
              k: "Working",
              t: "CPhT · CVS Health",
              d: "Front-line pharmacy ops — claims, bottlenecks, and patient flow.",
            },
            {
              k: "Building",
              t: "AI · automation tools",
              d: "Personal projects with Python, FastAPI, and Claude API.",
            },
          ].map((card) => (
            <article
              key={card.k}
              className="surface flex min-h-[240px] flex-col justify-between p-7 md:p-8"
            >
              <span className="text-xs font-extrabold tracking-[0.14em] text-moss uppercase">
                {card.k}
              </span>
              <div>
                <h3 className="mt-10 font-serif text-3xl tracking-[-0.035em] text-forest md:text-4xl">
                  {card.t}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{card.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
