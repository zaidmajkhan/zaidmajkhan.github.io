import { useEffect, useRef, useState } from "react";
import AmbientBg from "./components/AmbientBg.jsx";
import BackToTop from "./components/BackToTop.jsx";
import About from "./components/About.jsx";
import Building from "./components/Building.jsx";
import Contact from "./components/Contact.jsx";
import Credentials from "./components/Credentials.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Experience from "./components/Experience.jsx";
import FilmGrain from "./components/FilmGrain.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import IntroOverlay from "./components/IntroOverlay.jsx";
import Marquee from "./components/Marquee.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Projects from "./components/Projects.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import siteConfig from "./config/siteConfig.js";
import { CLOSE_MOBILE_NAV, useGsapAnimations } from "./hooks/useGsapAnimations.js";
import { useTheme } from "./hooks/useTheme.js";
import { initHeroScene } from "./lib/scene3d.js";

export default function App() {
  const hero3dRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [introSeen] = useState(() => document.documentElement.classList.contains("intro-seen"));

  const { toggleTheme, effectiveTheme } = useTheme();
  useGsapAnimations(introSeen);

  useEffect(() => {
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const onCloseMobileNav = () => setMobileOpen(false);
    window.addEventListener(CLOSE_MOBILE_NAV, onCloseMobileNav);
    return () => window.removeEventListener(CLOSE_MOBILE_NAV, onCloseMobileNav);
  }, []);

  useEffect(() => {
    const container = hero3dRef.current;
    if (!container) return undefined;
    return initHeroScene(container);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".track-cta");
    const handlers = [];
    elements.forEach((el) => {
      function onClick() {
        const name = el.getAttribute("data-track");
        if (name && window.plausible) window.plausible(name);
      }
      el.addEventListener("click", onClick);
      handlers.push({ el, onClick });
    });
    return () => {
      handlers.forEach(({ el, onClick }) => el.removeEventListener("click", onClick));
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <AmbientBg />
      <FilmGrain />
      <CursorGlow />
      <IntroOverlay countRef={countRef} barRef={barRef} />
      <ScrollProgress />

      <Header
        onThemeToggle={toggleTheme}
        theme={effectiveTheme}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <MobileNav mobileOpen={mobileOpen} />

      <main id="main-content">
        <Hero hero3dRef={hero3dRef} />
        <Marquee />
        <TrustStrip />
        <About />
        <Experience />
        <Building todoAppUrl={siteConfig.todoAppUrl} />
        <Projects todoAppUrl={siteConfig.todoAppUrl} />
        <Credentials />
        <Contact />
      </main>

      <Footer githubUrl={siteConfig.githubUrl} twitterUrl={siteConfig.twitterUrl} />
      <BackToTop />
    </>
  );
}
