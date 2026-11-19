import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-400 ${
        scrolled
          ? "border-b border-forest/10 bg-cream/95 shadow-[0_8px_28px_rgba(0,40,0,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-cream/80 backdrop-blur-md"
      }`}
    >
      <div className="wrap flex h-[3.6rem] items-center justify-between md:h-[4.1rem]">
        <a href="#hero" className="elevate-wordmark text-forest">
          <span className="elevate-wordmark-mark" aria-hidden="true">
            ZK
          </span>
          <span className="elevate-wordmark-text">
            Zaid Khan
            <small>Applied AI + Operations</small>
          </span>
        </a>

        <nav className="nav-elevate" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} data-nav className="nav-elevate-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            className="btn btn-ghost track-cta"
            data-track="Resume Header"
            download={siteConfig.resumeDownloadName}
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-ink track-cta" data-track="Contact Header">
            Contact →
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
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                mobileOpen ? "top-1.5 rotate-[38deg]" : "top-0.5 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                mobileOpen ? "bottom-1.5 -rotate-[38deg]" : "bottom-0.5 rotate-0"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}
