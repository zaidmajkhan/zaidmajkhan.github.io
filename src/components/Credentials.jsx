const CREDS = [
  {
    year: "Fall '25",
    title: "Engineering Academies Resume Challenge",
    badge: "Winner",
    desc: "Sole winner across all 13 TAMU Engineering Academy campuses.",
  },
  {
    year: "2025",
    title: "4.0 GPA",
    badge: "Active",
    desc: "Maintained across all engineering coursework.",
  },
  {
    year: "Oct '25",
    title: "Certified Pharmacy Technician (CPhT)",
    badge: "Certified",
    desc: "PTCB national exam. State-licensed.",
  },
  {
    year: "Dec '23",
    title: "Wharton Global Investment Competition",
    badge: "Top 6%",
    desc: "~4,000 teams · 100+ countries.",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section scroll-mt-24 border-t border-line">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow reveal justify-center">05 — Proof</p>
          <h2 className="pin-title display-lg mt-4 text-soft">
            Numbers
            <br />
            <span className="text-green">don&apos;t lie.</span>
          </h2>
        </div>

        <div className="reveal mx-auto mt-12 max-w-5xl border border-line">
          <div className="grid border-b border-line md:grid-cols-4">
            {[
              ["4.0", "GPA"],
              ["47%", "Wait ↓ CVS"],
              ["Top 6%", "Wharton"],
              ["CPhT", "Licensed"],
            ].map(([v, l], i) => (
              <div
                key={l}
                className={`flex min-h-36 flex-col items-center justify-center border-b border-line p-6 text-center md:border-b-0 ${
                  i < 3 ? "md:border-r" : ""
                }`}
              >
                <span className="font-display text-4xl tracking-[-0.04em] text-green md:text-5xl">
                  {v}
                </span>
                <span className="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-mute uppercase">
                  {l}
                </span>
              </div>
            ))}
          </div>

          <ul>
            {CREDS.map((c) => (
              <li
                key={c.title}
                className="grid gap-3 border-b border-line p-5 last:border-b-0 md:grid-cols-[6rem_1fr_auto] md:items-center md:gap-6 md:p-6"
              >
                <span className="text-sm font-semibold text-green">{c.year}</span>
                <div>
                  <p className="font-display text-lg tracking-[-0.03em] text-soft">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm text-mute">{c.desc}</p>
                </div>
                <span className="chip w-fit">{c.badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
