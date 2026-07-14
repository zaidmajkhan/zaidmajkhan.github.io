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
    <section id="hero" className="bg-cream px-2.5 pb-2.5 pt-[5.4rem] md:px-4 md:pb-4 md:pt-[5.8rem]">
      <div className="hero-shell flex flex-col justify-between p-5 sm:p-7 md:p-10 lg:p-12">
        <div ref={canvasRef} className="hero-canvas" aria-hidden="true" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <p className="hero-eyebrow eyebrow text-lime">
            Open to internships · Summer & Fall 2026
          </p>
          <div className="hero-rive hidden h-20 w-20 shrink-0 md:block lg:h-28 lg:w-28">
            <Suspense fallback={null}>
              <RiveMark src="/assets/motion.riv" className="h-full w-full opacity-90" />
            </Suspense>
          </div>
        </div>

        <div className="relative z-10 overflow-hidden py-8 md:py-6">
          <h1 className="display-xl text-cream">
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Zaid</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block text-green">Khan</span>
            </span>
          </h1>
        </div>

        <div className="relative z-10 grid gap-5 border-t border-cream/20 pt-5 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <div>
            <p className="hero-copy max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              ISEN @ Texas A&M. Healthcare systems, process design, and tools that make complex
              operations work.
            </p>
            <div className="hero-actions mt-5 flex flex-wrap gap-2.5">
              <a
                href={siteConfig.resumeUrl}
                className="btn btn-cream track-cta"
                data-track="Resume Hero"
                download="Zaid-Khan-Resume.pdf"
              >
                Download resume
              </a>
              <a href="#experience" className="btn btn-ghost-cream track-cta" data-track="View Experience">
                See experience
              </a>
            </div>
          </div>
          <div className="hero-meta grid grid-cols-3 gap-3 border-t border-cream/15 pt-4 md:border-t-0 md:pt-0 md:text-right">
            {[
              ["4.0", "GPA"],
              ["47%", "Wait ↓"],
              ["CPhT", "Licensed"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl tracking-[-0.03em] text-cream md:text-[1.75rem]">{v}</p>
                <p className="mt-1 text-[0.62rem] font-extrabold tracking-[0.12em] text-cream/50 uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
