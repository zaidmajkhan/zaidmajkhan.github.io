import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERESTS = [
  { key: "systems", label: "Systems", detail: "ISE · design" },
  { key: "signal", label: "Signal", detail: "AI · build" },
];

/**
 * Loading intro — always plays on desktop and mobile.
 * If OS reduce-motion is on, skip the 3D curtain but still show ZK + progress.
 */
export default function IntroOverlay({ active, onPrepare, onDone }) {
  const countRef = useRef(null);
  const barRef = useRef(null);
  const canvasRef = useRef(null);
  const preparedRef = useRef(false);
  const onPrepareRef = useRef(onPrepare);
  const onDoneRef = useRef(onDone);
  onPrepareRef.current = onPrepare;
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!active) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.remove("intro-seen", "intro-leaving");

    let disposeScene = () => {};
    let cancelled = false;

    /* 3D is optional — never gate the whole loader on WebGL / reduce-motion */
    if (!reduced) {
      (async () => {
        try {
          const { initIntroScene } = await import("../lib/scene3d.js");
          if (cancelled || !canvasRef.current) return;
          disposeScene = initIntroScene(canvasRef.current) || (() => {});
        } catch {
          disposeScene = () => {};
        }
      })();
    }

    const duration = reduced ? 1.35 : 2.6;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration,
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
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, delay: 0.12, ease: "power3.out" },
      )
      .to(".intro-chip", { opacity: 0, y: -8, duration: 0.3, stagger: 0.04, ease: "power2.in" }, duration * 0.65);

    const leaveAt = Math.round(duration * 1000) + 50;
    const prepare = window.setTimeout(() => {
      if (!preparedRef.current) {
        preparedRef.current = true;
        onPrepareRef.current?.();
      }
    }, Math.max(400, leaveAt - 250));

    const done = window.setTimeout(() => {
      document.documentElement.classList.add("intro-leaving");
      window.setTimeout(() => {
        document.documentElement.classList.add("intro-seen");
        document.documentElement.classList.remove("intro-leaving");
        onDoneRef.current?.();
      }, 550);
    }, leaveAt);

    return () => {
      cancelled = true;
      tween.kill();
      chipsTl.kill();
      clearTimeout(prepare);
      clearTimeout(done);
      disposeScene();
    };
  }, [active]);

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
