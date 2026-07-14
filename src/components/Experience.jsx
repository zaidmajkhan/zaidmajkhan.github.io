const ITEMS = [
  {
    date: "2025 — 2029",
    type: "Education",
    title: "Texas A&M — B.S. Industrial & Systems Engineering",
    body: "Engineering Academies pathway via Collin College. 4.0 GPA. Sole winner of the TAMU Engineering Academies Resume Challenge across all 13 Academy campuses (Fall 2025).",
  },
  {
    date: "Mar 2025 — Present",
    type: "Healthcare",
    title: "CVS Health — Certified Pharmacy Technician",
    body: "Process prescription data and insurance claims in RXConnect for 200+ patients daily. Restructured peak-hour task sequencing — 47% reduction in patient wait times. Licensed CPhT (PTCB) and Texas RPhT.",
  },
  {
    date: "Aug 2021 — May 2026",
    type: "Operations",
    title: "IACC Sunday School — Operations Team Leader",
    body: "Supervised facility ops and classroom logistics for 600+ students weekly. Redesigned teacher setup procedures — 73% setup time reduction. 120+ community service hours.",
  },
  {
    date: "2023",
    type: "Competition",
    title: "Wharton Global High School Investment Competition",
    body: "Top 6% globally (~4,000 teams, 100+ countries). Portfolio strategy, risk analysis, and presenting under pressure.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad scroll-mt-24 bg-forest text-cream">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow text-lime">02 — Experience</p>
            <h2 className="heading-lg mt-5 max-w-3xl text-cream">
              Pharmacy floors, school ops, and global competitions.
            </h2>
          </div>
          <p className="body-lg max-w-xl text-cream/65 lg:justify-self-end">
            Every role is practice in mapping how systems behave under constraint — and making
            them work better. That&apos;s the core of ISE.
          </p>
        </div>

        <div className="mt-14 border-t border-cream/15">
          {ITEMS.map((item) => (
            <article key={item.title} className="timeline-row border-cream/15">
              <div>
                <p className="text-sm font-bold text-lime">{item.date}</p>
                <p className="mt-1 text-xs font-extrabold tracking-[0.14em] text-cream/45 uppercase">
                  {item.type}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-[-0.03em] text-cream md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-cream/60">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
