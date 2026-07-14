import siteConfig from "../config/siteConfig.js";

export default function Projects({ todoAppUrl }) {
  const rows = [
    {
      num: "01",
      title: "Healthcare Systems",
      cat: "Systems Design",
      year: "2026",
      flag: "Focus",
      href: "#about",
    },
    {
      num: "02",
      title: "AI Lead Follow-Up Agent",
      cat: "Python · APIs",
      year: "2025",
      flag: "In progress",
      href: "https://github.com/zaidmajkhan/lead-followup-agent",
      external: true,
    },
    {
      num: "03",
      title: "AI Todo App",
      cat: "Full-stack",
      year: "2026",
      flag: todoAppUrl ? "Live" : "Deploying",
      href: todoAppUrl || "#building",
      external: Boolean(todoAppUrl),
    },
    {
      num: "04",
      title: "CVS Pharmacy Workflow",
      cat: "Process Improvement",
      year: "2025",
      flag: "47% wait ↓",
      href: "#experience",
    },
    {
      num: "05",
      title: "Wharton Investment Competition",
      cat: "Portfolio Strategy",
      year: "2023",
      flag: "Top 6%",
      href: "#credentials",
    },
  ];

  return (
    <section id="projects" className="section-pad scroll-mt-24 bg-cream-soft">
      <div className="container-wide">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-moss">04 — Projects</p>
            <h2 className="heading-lg mt-4 text-forest">Selected work & focus areas</h2>
          </div>
          <p className="max-w-md text-muted">
            From pharmacy process redesign to personal AI tooling — the through-line is systems
            under constraint.
          </p>
        </div>

        <div className="border-t border-forest/15">
          {rows.map((row) => (
            <a
              key={row.num}
              href={row.href}
              {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-forest/15 py-6 transition-colors hover:bg-cream md:grid-cols-[4rem_1.4fr_1fr_5rem_auto] md:gap-6 md:px-2"
            >
              <span className="font-serif text-xl text-moss/70">{row.num}</span>
              <span className="font-serif text-xl tracking-[-0.03em] text-forest md:text-2xl group-hover:translate-x-1 transition-transform">
                {row.title}
              </span>
              <span className="hidden text-sm text-muted md:block">{row.cat}</span>
              <span className="hidden text-sm text-muted md:block">{row.year}</span>
              <span className="rounded-full border border-forest/15 px-3 py-1 text-[0.65rem] font-extrabold tracking-[0.1em] text-moss uppercase">
                {row.flag}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Resume available anytime —{" "}
          <a href={siteConfig.resumeUrl} className="font-bold text-forest underline underline-offset-4" download="Zaid-Khan-Resume.pdf">
            download PDF
          </a>
          .
        </p>
      </div>
    </section>
  );
}
