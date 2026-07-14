import { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig.js";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#building", label: "Building" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={`container-wide flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-400 md:px-4 ${
          scrolled
            ? "border border-forest/10 bg-cream/90 shadow-[0_12px_40px_rgba(0,40,0,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a href="#hero" className="font-serif text-[1.65rem] font-medium tracking-[-0.03em] text-forest">
          ZK
        </a>

        <nav className="nav-pill" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-outline track-cta"
            data-track="Resume Header"
            download="Zaid-Khan-Resume.pdf"
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-forest track-cta" data-track="Contact Header">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-forest/20 text-forest lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition ${
                mobileOpen ? "top-2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition ${
                mobileOpen ? "bottom-2 -rotate-45" : "bottom-1"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}
