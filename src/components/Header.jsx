import { useEffect, useRef, useState } from "react";
import siteConfig from "../config/siteConfig.js";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#building", label: "Building" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-void/90 backdrop-blur-md" : ""
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[4.25rem]">
        <a href="#hero" className="font-display text-lg font-bold tracking-[-0.04em] uppercase text-soft">
          ZK<span className="text-green">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} data-nav className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-ghost track-cta"
            data-track="Resume Header"
            download="Zaid-Khan-Resume.pdf"
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-green track-cta" data-track="Contact Header">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-line text-soft lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 block h-px w-5 bg-current transition ${mobileOpen ? "top-1.5 rotate-45" : "top-0.5"}`} />
            <span className={`absolute left-0 block h-px w-5 bg-current transition ${mobileOpen ? "bottom-1.5 -rotate-45" : "bottom-0.5"}`} />
          </span>
        </button>
      </div>
    </header>
  );
}
