const CREDS = [
  {
    year: "Fall '25",
    title: "Engineering Academies Resume Challenge",
    badge: "Winner",
    desc: "Sole winner representing Collin College across all 13 TAMU Engineering Academy campuses.",
  },
  {
    year: "2025",
    title: "4.0 GPA",
    badge: "Active",
    desc: "Maintained across all engineering coursework — no exceptions.",
  },
  {
    year: "Oct '25",
    title: "Certified Pharmacy Technician (CPhT)",
    badge: "Certified",
    desc: "State-licensed; passed the PTCB national exam independently.",
  },
  {
    year: "Dec '23",
    title: "Wharton Global Investment Competition",
    badge: "Top 6%",
    desc: "Competed against ~4,000 teams from 100+ countries in portfolio management.",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-pad scroll-mt-24">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-moss">05 — Credentials</p>
          <h2 className="heading-lg mt-5 text-forest">Proof, not posture.</h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[1.5rem] border border-forest/15 bg-cream-soft">
          <div className="grid border-b border-forest/15 md:grid-cols-4">
            {[
              { v: "4.0", l: "GPA" },
              { v: "47%", l: "Wait ↓ at CVS" },
              { v: "Top 6%", l: "Wharton Global" },
              { v: "CPhT", l: "Licensed" },
            ].map((m, i) => (
              <div
                key={m.l}
                className={`metric-cell ${i < 3 ? "md:border-r md:border-forest/15" : ""} border-b border-forest/15 md:border-b-0`}
              >
                <span className="font-serif text-5xl tracking-[-0.05em] text-forest md:text-6xl">
                  {m.v}
                </span>
                <span className="mt-3 text-sm font-bold text-muted">{m.l}</span>
              </div>
            ))}
          </div>

          <ul className="divide-y divide-forest/15">
            {CREDS.map((c) => (
              <li key={c.title} className="grid gap-3 p-6 md:grid-cols-[6rem_1fr_auto] md:items-start md:gap-6 md:p-7">
                <span className="text-sm font-bold text-moss">{c.year}</span>
                <div>
                  <p className="font-serif text-xl tracking-[-0.03em] text-forest">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                </div>
                <span className="w-fit rounded-full border border-forest/15 px-3 py-1 text-[0.65rem] font-extrabold tracking-[0.1em] text-moss uppercase">
                  {c.badge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
