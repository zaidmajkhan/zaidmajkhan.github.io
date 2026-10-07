import { useEffect } from "react";
import DirectorMap from "./components/director/DirectorMap.jsx";

/**
 * Destiny Director–inspired portfolio hub.
 * Interactive star map → destination panels (about, labs, systems, triumph, signal).
 */
export default function App() {
  useEffect(() => {
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }
    window.scrollTo(0, 0);

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

    const mo = new MutationObserver(() => {
      document.querySelectorAll(".track-cta").forEach((el) => {
        if (el.dataset.bound) return;
        el.dataset.bound = "1";
        el.addEventListener("click", () => {
          const name = el.getAttribute("data-track");
          if (name && window.plausible) window.plausible(name);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      handlers.forEach(([el, onClick]) => el.removeEventListener("click", onClick));
      mo.disconnect();
    };
  }, []);

  return <DirectorMap />;
}
