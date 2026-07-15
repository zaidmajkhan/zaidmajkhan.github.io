import { useCallback, useEffect, useState } from "react";
import About from "./components/About.jsx";
import Building from "./components/Building.jsx";
import Contact from "./components/Contact.jsx";
import Credentials from "./components/Credentials.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import IntroOverlay from "./components/IntroOverlay.jsx";
import MobileNav from "./components/MobileNav.jsx";
import PlanetBackdrop from "./components/PlanetBackdrop.jsx";
import Projects from "./components/Projects.jsx";
import siteConfig from "./config/siteConfig.js";
import { useMotion } from "./hooks/useMotion.js";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  /* Always run intro on load (phone-like). Only skip for reduced-motion. */
  const [introActive, setIntroActive] = useState(() => {
    try {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return true;
    }
  });
  const [motionReady, setMotionReady] = useState(() => !introActive);
  const [revealsReady, setRevealsReady] = useState(() => !introActive);
  const [playedIntro] = useState(() => introActive);

  const onIntroPrepare = useCallback(() => {
    setMotionReady(true);
  }, []);

  const onIntroDone = useCallback(() => {
    document.documentElement.classList.add("intro-seen");
    document.documentElement.classList.remove("intro-leaving");
    setIntroActive(false);
    setMotionReady(true);
    setRevealsReady(true);
  }, []);

  useMotion(motionReady, playedIntro, revealsReady);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || introActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, introActive]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".track-cta");
    const handlers = [];
    nodes.forEach((el) => {
      const onClick = () => {
        const name = el.getAttribute("data-track");
        if (name && window.plausible) window.plausible(name);
      };
      el.addEventListener("click", onClick);
      handlers.push([el, onClick]);
    });
    return () => handlers.forEach(([el, onClick]) => el.removeEventListener("click", onClick));
  }, [motionReady]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <IntroOverlay active={introActive} onPrepare={onIntroPrepare} onDone={onIntroDone} />
      <PlanetBackdrop visible={!introActive} />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Building todoAppUrl={siteConfig.todoAppUrl} />
        <Projects todoAppUrl={siteConfig.todoAppUrl} />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
