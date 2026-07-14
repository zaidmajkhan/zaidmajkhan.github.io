import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Cream/forest loading intro — show once per session.
 */
export default function IntroOverlay({ active, onDone }) {
  const countRef = useRef(null);
  const barRef = useRef(null);

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

    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 1.15,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(obj.v);
        if (countRef.current) countRef.current.textContent = String(v);
        if (barRef.current) barRef.current.style.width = `${v}%`;
      },
    });

    const done = window.setTimeout(() => {
      document.documentElement.classList.add("intro-leaving");
      window.setTimeout(() => {
        document.documentElement.classList.add("intro-seen");
        document.documentElement.classList.remove("intro-leaving");
        onDone?.();
      }, 700);
    }, 1250);

    return () => {
      tween.kill();
      clearTimeout(done);
    };
  }, [active, onDone]);

  if (!active) return null;

  return (
    <div className="intro-overlay" id="introOverlay" aria-hidden="true">
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
