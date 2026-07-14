import siteConfig from "../config/siteConfig.js";

export default function Projects({ todoAppUrl }) {
  const rows = [
    { num: "01", title: "Healthcare Systems", cat: "Systems Design", year: "2026", flag: "Focus", href: "#about" },
    {
      num: "02",
      title: "AI Lead Follow-Up Agent",
      cat: "Python · APIs",
      year: "2025",
      flag: "WIP",
      href: "https://github.com/zaidmajkhan/lead-followup-agent",
      external: true,
    },
    {
      num: "03",
      title: "AI Todo App",
      cat: "Full-stack",
      year: "2026",
      flag: todoAppUrl ? "Live" : "Soon",
      href: todoAppUrl || "#building",
      external: Boolean(todoAppUrl),
    },
    { num: "04", title: "CVS Pharmacy Workflow", cat: "Process", year: "2025", flag: "47% ↓", href: "#experience" },
    { num: "05", title: "Wharton Investment Comp", cat: "Strategy", year: "2023", flag: "Top 6%", href: "#credentials" },
  ];

  return (
    <section id="projects" className="section scroll-mt-24 border-t border-line bg-ink">
      <div className="wrap">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal">04 — Work</p>
            <h2 className="pin-title display-lg mt-4 text-soft">
              Selected
              <br />
              <span className="text-green">index.</span>
            </h2>
          </div>
          <p className="reveal body max-w-sm md:text-right">
            From pharmacy process redesign to personal AI tooling.
          </p>
        </div>

        <div className="border-t border-line">
          {rows.map((row) => (
            <a
              key={row.num}
              href={row.href}
              {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="reveal group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:bg-panel md:grid-cols-[4rem_1.5fr_1fr_5rem_auto] md:gap-6"
            >
              <span className="font-display text-sm font-bold text-mute">{row.num}</span>
              <span className="font-display text-lg font-bold tracking-[-0.03em] uppercase text-soft transition-transform group-hover:translate-x-1 md:text-2xl">
                {row.title}
              </span>
              <span className="hidden text-sm text-mute md:block">{row.cat}</span>
              <span className="hidden text-sm text-mute md:block">{row.year}</span>
              <span className="chip">{row.flag}</span>
            </a>
          ))}
        </div>

        <p className="reveal mt-8 text-sm text-mute">
          Need the PDF?{" "}
          <a
            href={siteConfig.resumeUrl}
            className="font-semibold text-green"
            download="Zaid-Khan-Resume.pdf"
          >
            Download resume →
          </a>
        </p>
      </div>
    </section>
  );
}
