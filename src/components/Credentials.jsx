import { lazy, Suspense } from "react";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

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
    <section id="credentials" className="section scroll-mt-24 relative overflow-hidden">
      <div
        className="motif-bleed motif-bleed--left pointer-events-none absolute -left-8 bottom-0 hidden h-80 w-80 opacity-70 lg:block"
        aria-hidden="true"
      >
        <div className="scene-mount absolute inset-0">
          <Suspense fallback={null}>
            <SceneCanvas variant="sedan" tone="cream" compact className="h-full w-full" />
          </Suspense>
        </div>
      </div>

      <div className="wrap relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal text-green">05 — Proof</p>
          <h2 className="pin-title display-lg mt-3 text-forest">Proof, not posture.</h2>
        </div>

        <div className="surface mx-auto mt-8 max-w-4xl overflow-hidden">
          <div className="grid border-b border-forest/12 md:grid-cols-4">
            {[
              { val: "4.0", label: "GPA", count: "4", decimals: "1" },
              { val: "47%", label: "Wait ↓ CVS", count: "47", suffix: "%" },
              { val: "Top 6%", label: "Wharton", count: null },
              { val: "CPhT", label: "Licensed", count: null },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`stat-cell flex min-h-28 flex-col items-center justify-center border-b border-forest/12 p-5 text-center md:border-b-0 ${
                  i < 3 ? "md:border-r md:border-forest/12" : ""
                }`}
              >
                <span
                  className="font-display text-4xl leading-none tracking-[-0.02em] text-forest md:text-[2.6rem]"
                  {...(s.count
                    ? {
                        "data-count": s.count,
                        "data-suffix": s.suffix || "",
                        "data-decimals": s.decimals || "0",
                      }
                    : {})}
                >
                  {s.val}
                </span>
                <span className="mt-1.5 text-[0.62rem] font-extrabold tracking-[0.12em] text-mute uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <ul className="stagger-children">
            {CREDS.map((c) => (
              <li
                key={c.title}
                className="grid gap-2 border-b border-forest/12 p-4 last:border-b-0 md:grid-cols-[5.5rem_1fr_auto] md:items-center md:gap-5 md:p-5"
              >
                <span className="text-sm font-bold text-green">{c.year}</span>
                <div>
                  <p className="font-display text-lg leading-snug tracking-[-0.02em] text-forest">
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
