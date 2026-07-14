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
    <section id="credentials" className="section scroll-mt-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal text-green">05 — Proof</p>
          <h2 className="pin-title display-lg mt-3 text-forest">Proof, not posture.</h2>
        </div>

        <div className="reveal surface mx-auto mt-8 max-w-4xl overflow-hidden">
          <div className="grid border-b border-forest/12 md:grid-cols-4">
            {[
              ["4.0", "GPA"],
              ["47%", "Wait ↓ CVS"],
              ["Top 6%", "Wharton"],
              ["CPhT", "Licensed"],
            ].map(([v, l], i) => (
              <div
                key={l}
                className={`flex min-h-28 flex-col items-center justify-center border-b border-forest/12 p-5 text-center md:border-b-0 ${
                  i < 3 ? "md:border-r md:border-forest/12" : ""
                }`}
              >
                <span className="font-display text-4xl tracking-[-0.04em] text-forest md:text-[2.6rem]">{v}</span>
                <span className="mt-1.5 text-[0.62rem] font-extrabold tracking-[0.12em] text-mute uppercase">{l}</span>
              </div>
            ))}
          </div>

          <ul>
            {CREDS.map((c) => (
              <li
                key={c.title}
                className="grid gap-2 border-b border-forest/12 p-4 last:border-b-0 md:grid-cols-[5.5rem_1fr_auto] md:items-center md:gap-5 md:p-5"
              >
                <span className="text-sm font-bold text-green">{c.year}</span>
                <div>
                  <p className="font-display text-lg tracking-[-0.03em] text-forest">{c.title}</p>
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
