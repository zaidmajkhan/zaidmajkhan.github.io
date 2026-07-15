const QUOTES = [
  {
    body: "Identified peak-hour bottlenecks and restructured task sequencing — 47% reduction in patient wait times.",
    cite: "RXConnect metrics",
    org: "CVS Health · Pharmacy ops",
  },
  {
    body: "Redesigned classroom setup for incoming teachers — 73% setup time reduction across a 600+ student operation.",
    cite: "Manager feedback",
    org: "IACC Sunday School · Facility ops",
  },
  {
    body: "Sole winner of the Engineering Academies Resume Challenge across all 13 TAMU Academy campuses.",
    cite: "Selection outcome",
    org: "Texas A&M Engineering Academies",
  },
];

export default function Testimonials() {
  return (
    <section id="proof" className="section scroll-mt-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal text-green">Social proof</p>
          <h2 className="pin-title display-lg mt-3 text-forest">Outcomes others can check</h2>
          <p className="body reveal mt-4 text-mute">
            Not anonymous hype — measurable results from roles and competitions on the record.
          </p>
        </div>

        <div className="stagger-children mt-10 grid gap-4 md:grid-cols-3">
          {QUOTES.map((q) => (
            <blockquote key={q.org} className="surface surface-card flex flex-col p-5 md:p-6">
              <p className="flex-1 text-sm leading-relaxed text-mute">&ldquo;{q.body}&rdquo;</p>
              <footer className="mt-5 border-t border-forest/10 pt-4">
                <cite className="block not-italic text-sm font-semibold text-forest">{q.cite}</cite>
                <span className="mt-0.5 block text-xs tracking-wide text-mute uppercase">{q.org}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
