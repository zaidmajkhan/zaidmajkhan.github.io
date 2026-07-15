import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERESTS = [
  { key: "systems", label: "Systems", detail: "ISE · design" },
  { key: "signal", label: "Signal", detail: "AI · build" },
];

/**
 * Cream loading intro — train crosses while mini objects fly by.
 * Saturn stays on the page as the scroll float (PlanetBackdrop).
 *
 * onPrepare fires as the overlay starts leaving so motion can hide/prime
 * content under the cover (avoids a double appear after load).
 */
export default function IntroOverlay({ active, onPrepare, onDone }) {
  const countRef = useRef(null);
  const barRef = useRef(null);
  const canvasRef = useRef(null);
  const preparedRef = useRef(false);

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

    const chipsTl = gsap.timeline();
    chipsTl
      .fromTo(
        ".intro-chip",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, delay: 0.22, ease: "power3.out" },
      )
      .to(".intro-chip", { opacity: 0, y: -6, duration: 0.35, stagger: 0.05, ease: "power2.in" }, 1.35);

    const prepare = window.setTimeout(() => {
      if (!preparedRef.current) {
        preparedRef.current = true;
        onPrepare?.();
      }
    }, 1900);

    const done = window.setTimeout(() => {
      document.documentElement.classList.add("intro-leaving");
      window.setTimeout(() => {
        document.documentElement.classList.add("intro-seen");
        document.documentElement.classList.remove("intro-leaving");
        onDone?.();
      }, 650);
    }, 2100);

    return () => {
      cancelled = true;
      tween.kill();
      chipsTl.kill();
      clearTimeout(prepare);
      clearTimeout(done);
      disposeScene();
    };
  }, [active, onPrepare, onDone]);

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
