import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERESTS = [
  { key: "systems", label: "Systems", detail: "ISE · design" },
  { key: "care", label: "Care flow", detail: "Healthcare ops" },
  { key: "signal", label: "Signal", detail: "AI · build" },
  { key: "loop", label: "Process", detail: "Ops · improve" },
];

/**
 * Cream loading intro — train crosses while mini objects fly by.
 * Saturn stays on the page as the scroll float (PlanetBackdrop).
 */
export default function IntroOverlay({ active, onDone }) {
  const countRef = useRef(null);
  const barRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) {
      onDone?.();
      return undefined;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("intro-seen");
      onDone?.();
      return undefined;
    }

    let disposeScene = () => {};
    let cancelled = false;
    (async () => {
      const { initIntroScene } = await import("../lib/scene3d.js");
      if (cancelled || !canvasRef.current) return;
      disposeScene = initIntroScene(canvasRef.current) || (() => {});
    })();

    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 2.05,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(obj.v);
        if (countRef.current) countRef.current.textContent = String(v);
        if (barRef.current) barRef.current.style.width = `${v}%`;
      },
    });

    gsap.fromTo(
      ".intro-chip",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, delay: 0.28, ease: "power3.out" },
    );

    const done = window.setTimeout(() => {
      document.documentElement.classList.add("intro-leaving");
      window.setTimeout(() => {
        document.documentElement.classList.add("intro-seen");
        document.documentElement.classList.remove("intro-leaving");
        onDone?.();
      }, 700);
    }, 2300);

    return () => {
      cancelled = true;
      tween.kill();
      clearTimeout(done);
      disposeScene();
    };
  }, [active, onDone]);

  if (!active) return null;

  return (
    <div className="intro-overlay" id="introOverlay" aria-hidden="true">
      <div ref={canvasRef} className="intro-canvas" />

      <div className="intro-chips" aria-hidden="true">
        {INTERESTS.map((item) => (
          <div key={item.key} className={`intro-chip intro-chip--${item.key}`}>
            <span className="intro-chip-label">{item.label}</span>
            <span className="intro-chip-detail">{item.detail}</span>
          </div>
        ))}
      </div>

      <span className="intro-mark">ZK</span>

      <div className="intro-foot">
        <span className="intro-label">Zaid Khan — Portfolio</span>
        <span className="intro-count">
          <span ref={countRef}>0</span>
          <i>%</i>
        </span>
      </div>
      <div className="intro-bar">
        <span ref={barRef} />
      </div>
    </div>
  );
}
