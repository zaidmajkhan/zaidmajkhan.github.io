import { useEffect, useRef } from "react";
import siteConfig from "../config/siteConfig.js";
import { useHeroParallax } from "../hooks/useHeroParallax.js";

export default function Hero() {
  const shellRef = useRef(null);
  const canvasRef = useRef(null);
  useHeroParallax(shellRef);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;
    (async () => {
      try {
        const { initHeroScene } = await import("../lib/scene3d.js");
        if (cancelled || !canvasRef.current) return;
        cleanup = initHeroScene(canvasRef.current) || (() => {});
      } catch {
        cleanup = () => {};
      }
    })();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section id="hero" className="bg-cream px-3 pb-3 pt-[5.1rem] md:px-5 md:pb-4 md:pt-[5.5rem]">
      <div ref={shellRef} className="elevate-hero">
        <div className="elevate-hero-copy">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hero-pill">McKinney · Texas A&M</span>
            <span className="eyebrow text-mute">Summer 2027 · Applied AI + Operations</span>
          </div>

          <h1 className="elevate-display mt-5 text-forest md:mt-7">
            <span className="block">Zaid</span>
            <span className="block">
              <em className="elevate-italic text-green">Khan.</em>
            </span>
          </h1>

          <p className="hero-copy mt-5 max-w-lg text-base leading-[1.7] text-mute md:mt-6 md:text-lg">
            ISEN @ Texas A&M (4.0). Research labs in motion, a shipped Python agent, and
            pharmacy-floor systems engineered under pressure.
          </p>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-semibold tracking-[0.14em] text-mute uppercase">
            <span>★ 4.0 GPA</span>
            <span className="text-forest/25">|</span>
            <span>47% Wait ↓</span>
            <span className="text-forest/25">|</span>
            <span>CPhT Licensed</span>
            <span className="text-forest/25">|</span>
            <span>SWE · ISE</span>
          </p>

          <div className="hero-actions mt-6 flex flex-wrap gap-2.5">
            <a
              href={siteConfig.resumeUrl}
              className="btn btn-green track-cta"
              data-track="Resume Hero"
              download={siteConfig.resumeDownloadName}
            >
              Download resume →
            </a>
            <a
              href="#experience"
              className="btn btn-ghost track-cta"
              data-track="View Experience"
            >
              See experience
            </a>
          </div>

          <div className="hero-meta mt-8 grid grid-cols-3 gap-3 border-t border-forest/10 pt-5 md:mt-10 md:max-w-md">
            {[
              ["4.0", "GPA"],
              ["47%", "Wait ↓"],
              ["CPhT", "Licensed"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="elevate-stat text-forest">{v}</p>
                <p className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-mute uppercase">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="elevate-hero-visual" aria-hidden="true">
          <div ref={canvasRef} className="hero-canvas elevate-hero-canvas" />
          <div className="elevate-seal">
            <span>Open</span>
            <span>Summer 2027</span>
          </div>
          <div className="elevate-visual-meta">
            <span>Walk the work</span>
            <span>Labs · Agent · Pharmacy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
