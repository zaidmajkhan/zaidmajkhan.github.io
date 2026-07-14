import { lazy, Suspense, useEffect, useRef } from "react";
import siteConfig from "../config/siteConfig.js";

const RiveMark = lazy(() => import("./RiveMark.jsx"));

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;
    (async () => {
      const { initHeroScene } = await import("../lib/scene3d.js");
      if (cancelled) return;
      cleanup = initHeroScene(canvasRef.current) || (() => {});
    })();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div ref={canvasRef} className="hero-canvas opacity-70" aria-hidden="true" />

      <div className="wrap relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-between pb-10 pt-8 md:pb-14 md:pt-14">
        <div className="flex items-start justify-between gap-6">
          <p className="hero-eyebrow eyebrow">Open to internships · Summer & Fall 2026</p>
          <div className="hidden h-28 w-28 shrink-0 md:block lg:h-36 lg:w-36">
            <Suspense fallback={<div className="h-full w-full border border-line" />}>
              <RiveMark src="/assets/motion.riv" className="h-full w-full opacity-90" />
            </Suspense>
          </div>
        </div>

        <div className="overflow-hidden">
          <h1 className="display-xl text-soft">
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Zaid</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block text-green">Khan</span>
            </span>
          </h1>
        </div>

        <div className="grid gap-8 border-t border-line pt-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="hero-copy body max-w-xl">
              ISEN @ Texas A&M. Healthcare systems, process design, and shipping tools that make
              operations less broken.
            </p>
            <div className="hero-actions mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.resumeUrl}
                className="btn btn-green track-cta"
                data-track="Resume Hero"
                download="Zaid-Khan-Resume.pdf"
              >
                Download resume
              </a>
              <a href="#experience" className="btn btn-ghost track-cta" data-track="View Experience">
                See experience
              </a>
            </div>
          </div>
          <div className="hero-meta grid grid-cols-3 gap-4 border-t border-line pt-4 md:border-t-0 md:pt-0 md:text-right">
            {[
              ["4.0", "GPA"],
              ["47%", "Wait ↓"],
              ["CPhT", "Licensed"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-soft md:text-3xl">
                  {v}
                </p>
                <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.14em] text-mute uppercase">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
