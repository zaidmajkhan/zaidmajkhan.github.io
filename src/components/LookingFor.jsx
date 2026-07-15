import siteConfig from "../config/siteConfig.js";

const TRACKS = [
  {
    label: "Healthcare ops",
    detail: "Pharmacy / clinical workflow, patient flow, quality & safety adjacent roles.",
  },
  {
    label: "ISE · process",
    detail: "Industrial & systems engineering, continuous improvement, ops analysis.",
  },
  {
    label: "Technical program",
    detail: "TPM-style coordination, tooling, and cross-functional systems work.",
  },
];

export default function LookingFor() {
  return (
    <section id="looking-for" className="section scroll-mt-24">
      <div className="wrap">
        <div className="surface band-forest relative overflow-hidden p-5 sm:p-7 lg:p-9">
          <div className="relative z-10">
            <p className="eyebrow reveal text-lime">Fit check</p>
            <h2 className="pin-title display-lg mt-3 text-cream">What I&apos;m looking for</h2>
            <p className="body reveal mt-4 max-w-xl text-cream/70">
              Transparent starting points for teams — if one of these matches, book a short call or
              send the form. No packaging theater.
            </p>

            <div className="stagger-children mt-8 grid gap-3 md:grid-cols-3">
              {TRACKS.map((t) => (
                <article
                  key={t.label}
                  className="rounded-xl border border-cream/15 bg-cream/[0.05] p-5"
                >
                  <h3 className="font-display text-xl tracking-[-0.02em] text-cream">{t.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{t.detail}</p>
                </article>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-wrap gap-2.5">
              {siteConfig.calBookingUrl ? (
                <a
                  href={siteConfig.calBookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-cream track-cta"
                  data-track="Book Call Looking For"
                >
                  Book a 15-min call
                </a>
              ) : null}
              <a href="#contact" className="btn btn-ghost-cream track-cta" data-track="Contact Looking For">
                Send a message
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="btn btn-ghost-cream track-cta"
                data-track="Resume Looking For"
                download="Zaid-Khan-Resume.pdf"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
