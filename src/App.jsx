import { useCallback, useEffect, useState } from "react";
import About from "./components/About.jsx";
import Building from "./components/Building.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import Contact from "./components/Contact.jsx";
import Credentials from "./components/Credentials.jsx";
import Experience from "./components/Experience.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import IntroOverlay from "./components/IntroOverlay.jsx";
import LookingFor from "./components/LookingFor.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Notes from "./components/Notes.jsx";
import siteConfig from "./config/siteConfig.js";
import { useMotion } from "./hooks/useMotion.js";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [introSeen] = useState(() => document.documentElement.classList.contains("intro-seen"));
  const [introActive] = useState(() => !introSeen);
  const [motionReady, setMotionReady] = useState(introSeen);

  const onIntroDone = useCallback(() => {
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {
      /* ignore */
    }
    setMotionReady(true);
  }, []);

  useMotion(motionReady, introActive);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || (introActive && !motionReady) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, introActive, motionReady]);

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
      <IntroOverlay active={introActive} onDone={onIntroDone} />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <CaseStudy />
        <Building todoAppUrl={siteConfig.todoAppUrl} />
        <Projects todoAppUrl={siteConfig.todoAppUrl} />
        <Testimonials />
        <Credentials />
        <LookingFor />
        <Faq />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
