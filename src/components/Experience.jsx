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
    <section id="experience" className="section scroll-mt-24 border-t border-line bg-ink">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal">02 — Experience</p>
            <h2 className="pin-title display-lg mt-4 text-soft">
              On
              <br />
              <span className="text-green">track.</span>
            </h2>
          </div>
          <p className="reveal body max-w-md md:text-right">
            Pharmacy floors, school ops, global competition — every role is systems under
            constraint.
          </p>
        </div>

        <div className="mt-14 border-t border-line">
          {ITEMS.map((item, i) => (
            <article key={item.title} className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-[10rem_1fr] md:gap-10">
              <div>
                <p className="text-sm font-semibold text-green">{item.date}</p>
                <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.14em] text-mute uppercase">
                  {item.type}
                </p>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 font-display text-sm font-bold text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-[-0.03em] text-soft md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute md:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
