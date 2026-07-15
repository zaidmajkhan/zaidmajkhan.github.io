import { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig.js";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-study", label: "Case study" },
  { href: "#building", label: "Building" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={`wrap flex items-center justify-between rounded-2xl px-3 py-2 transition-[background,box-shadow,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-4 ${
          scrolled
            ? "border border-forest/10 bg-cream/95 shadow-[0_10px_36px_rgba(0,40,0,0.08)] backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none"
        }`}
      >
        <a href="#hero" className="font-display text-[1.7rem] leading-none tracking-[-0.02em] text-forest">
          ZK
        </a>

        <nav className="nav-pill" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} data-nav className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-ghost track-cta"
            data-track="Resume Header"
            download="Zaid-Khan-Resume.pdf"
          >
            Resume
          </a>
          {siteConfig.calBookingUrl ? (
            <a
              href={siteConfig.calBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost track-cta"
              data-track="Book Call Header"
            >
              Book a call
            </a>
          ) : null}
          <a href="#contact" className="btn btn-green track-cta" data-track="Contact Header">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-forest/25 text-forest lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                mobileOpen ? "top-1.5 rotate-45" : "top-0.5 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                mobileOpen ? "bottom-1.5 -rotate-45" : "bottom-0.5 rotate-0"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}
