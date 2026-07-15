import siteConfig from "../config/siteConfig.js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-study", label: "Case study" },
  { href: "#building", label: "Building" },
  { href: "#projects", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: siteConfig.blogUrl, label: "Blog" },
];

export default function MobileNav({ mobileOpen, setMobileOpen }) {
  if (!mobileOpen) return null;
  return (
    <div className="fixed inset-0 z-40 bg-cream/97 pt-24 backdrop-blur-xl lg:hidden">
      <div className="wrap flex flex-col gap-1">
        <a
          href={siteConfig.resumeUrl}
          className="btn btn-green mb-3 w-full track-cta"
          data-track="Resume Mobile"
          download="Zaid-Khan-Resume.pdf"
          onClick={() => setMobileOpen(false)}
        >
          Download resume
        </a>
        {siteConfig.calBookingUrl ? (
          <a
            href={siteConfig.calBookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost mb-4 w-full track-cta"
            data-track="Book Call Mobile"
            onClick={() => setMobileOpen(false)}
          >
            Book a call
          </a>
        ) : null}
        {LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="border-b border-line py-3.5 font-display text-3xl leading-snug tracking-[-0.02em] text-forest transition hover:text-green"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
