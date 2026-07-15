import siteConfig from "../config/siteConfig.js";

const POSTS = [
  {
    meta: "Jun 2026 · Lead conversion",
    title: "How auto dealers lose leads after hours",
    href: "/blog/auto-dealers-after-hours-leads.html",
  },
  {
    meta: "May 2026 · Automation",
    title: "Getting AI follow-up under 3 minutes",
    href: "/blog/ai-follow-up-under-3-minutes.html",
  },
  {
    meta: "Apr 2026 · ROI",
    title: "When small business automation pays for itself",
    href: "/blog/small-business-automation-roi.html",
  },
];

export default function Notes() {
  return (
    <section id="notes" className="section scroll-mt-24">
      <div className="wrap">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal text-green">Build log</p>
            <h2 className="pin-title display-lg mt-3 text-forest">Notes worth sharing</h2>
          </div>
          <a
            href={siteConfig.blogUrl}
            className="reveal text-sm font-bold text-forest underline underline-offset-4 transition-opacity hover:opacity-70 track-cta"
            data-track="Blog All"
          >
            All posts →
          </a>
        </div>

        <div className="stagger-children grid gap-3 md:grid-cols-3">
          {POSTS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="surface surface-card block p-5 transition hover:border-forest/25 track-cta"
              data-track={`Blog ${p.title}`}
            >
              <span className="text-[0.62rem] font-extrabold tracking-[0.14em] text-green uppercase">
                {p.meta}
              </span>
              <h3 className="mt-3 font-display text-xl leading-snug tracking-[-0.02em] text-forest">
                {p.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="reveal surface mt-8 flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <p className="text-[0.65rem] font-extrabold tracking-[0.14em] text-green uppercase">
              Newsletter
            </p>
            <p className="mt-2 max-w-md text-sm text-mute">
              Systems, ops, and personal AI experiments — unsubscribe anytime.
            </p>
          </div>
          <a
            href={siteConfig.newsletterUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-green w-fit track-cta"
            data-track="Newsletter Notes"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
}
