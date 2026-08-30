import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERESTS = [
  { key: "systems", label: "Systems", detail: "ISE · design" },
  { key: "signal", label: "Signal", detail: "AI · build" },
];

/**
 * Calm loading intro — typography + progress only (no 3D).
 */
export default function IntroOverlay({ active, onPrepare, onDone }) {
  const countRef = useRef(null);
  const barRef = useRef(null);
  const preparedRef = useRef(false);
  const onPrepareRef = useRef(onPrepare);
  const onDoneRef = useRef(onDone);
  onPrepareRef.current = onPrepare;
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!active) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.remove("intro-seen", "intro-leaving");

    const duration = reduced ? 1.1 : 1.65;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration,
      ease: "power1.inOut",
      onUpdate: () => {
        const v = Math.round(obj.v);
        if (countRef.current) countRef.current.textContent = String(v);
        if (barRef.current) barRef.current.style.width = `${v}%`;
      },
    });

    const chipsTl = gsap.timeline();
    if (!reduced) {
      chipsTl
        .fromTo(
          ".intro-chip",
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.1, ease: "power1.out" },
        )
        .to(
          ".intro-chip",
          { opacity: 0, y: -4, duration: 0.28, stagger: 0.03, ease: "power1.in" },
          duration * 0.62,
        );
    }

    const leaveAt = Math.round(duration * 1000) + 40;
    const prepare = window.setTimeout(() => {
      if (!preparedRef.current) {
        preparedRef.current = true;
        onPrepareRef.current?.();
      }
    }, Math.max(350, leaveAt - 220));

    const done = window.setTimeout(() => {
      document.documentElement.classList.add("intro-leaving");
      window.setTimeout(() => {
        document.documentElement.classList.add("intro-seen");
        document.documentElement.classList.remove("intro-leaving");
        onDoneRef.current?.();
      }, 480);
    }, leaveAt);

    return () => {
      tween.kill();
      chipsTl.kill();
      clearTimeout(prepare);
      clearTimeout(done);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="intro-overlay" id="introOverlay" aria-hidden="true">
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
