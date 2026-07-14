import siteConfig from "../config/siteConfig.js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#building", label: "Building" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav({ mobileOpen, setMobileOpen }) {
  if (!mobileOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-cream pt-24 lg:hidden">
      <div className="container-wide flex flex-col gap-2">
        <a
          href={siteConfig.resumeUrl}
          className="btn btn-forest w-full track-cta"
          data-track="Resume Mobile"
          download="Zaid-Khan-Resume.pdf"
          onClick={() => setMobileOpen(false)}
        >
          Download resume
        </a>
        {LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-xl px-4 py-3 font-serif text-3xl tracking-[-0.03em] text-forest"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
