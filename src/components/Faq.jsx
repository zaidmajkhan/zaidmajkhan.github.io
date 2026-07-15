const ITEMS = [
  {
    q: "What roles are you targeting?",
    a: "Healthcare operations, industrial & systems engineering, technical program / ops analyst internships for Summer & Fall 2026. Happy to talk about adjacent systems or process roles too.",
  },
  {
    q: "When are you available?",
    a: "Summer 2026 and Fall 2026. Studying via the Texas A&M Engineering Academies pathway — reach out early if your hiring window is tight.",
  },
  {
    q: "Where are you based / can you relocate?",
    a: "Based in McKinney, TX. Open to on-site, hybrid, or remote depending on the team. Willing to relocate for the right internship.",
  },
  {
    q: "What tools and coursework do you work with?",
    a: "Pharmacy ops (RXConnect), process mapping on the floor, plus personal builds in Python, FastAPI, and Claude API. Coursework is ISEN — systems, process design, and ops.",
  },
  {
    q: "How should recruiters reach you?",
    a: "LinkedIn is fastest. Email or the contact form also work — weekday replies within 24 hours. Prefer a short call? Use Book a call.",
  },
  {
    q: "Do you have a resume PDF?",
    a: "Yes — download from the header, hero, or footer. Also linked from the work index.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section scroll-mt-24 bg-cream-soft">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow reveal text-green">FAQ</p>
            <h2 className="pin-title display-lg mt-3 text-forest">Before you reach out</h2>
            <p className="body reveal mt-4 max-w-md text-mute">
              Quick answers for recruiters and teams so you can decide if a conversation makes sense.
            </p>
          </div>

          <div className="faq-list stagger-children grid gap-2.5">
            {ITEMS.map((item) => (
              <details key={item.q} className="faq-item surface group p-0 open:shadow-[0_8px_28px_rgba(0,40,0,0.06)]">
                <summary className="cursor-pointer list-none px-5 py-4 font-display text-lg tracking-[-0.02em] text-forest marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <span className="text-green transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="border-t border-forest/10 px-5 py-4 text-sm leading-relaxed text-mute">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
