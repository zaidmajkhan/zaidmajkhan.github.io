import { useEffect, useRef } from "react";
import siteConfig from "../config/siteConfig.js";

export default function Hero() {
  const canvasRef = useRef(null);

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
    <section id="hero" className="bg-cream px-2.5 pb-2 pt-[5.1rem] md:px-4 md:pb-3 md:pt-[5.4rem]">
      <div className="hero-shell">
        <div className="hero-shell-media" aria-hidden="true">
          <div ref={canvasRef} className="hero-canvas" />
        </div>

        <div className="hero-shell-content flex min-h-[min(32rem,calc(100dvh-6rem))] flex-col justify-between p-5 sm:p-7 md:min-h-[min(34rem,calc(100dvh-5.5rem))] md:p-9 lg:min-h-[min(36rem,calc(100dvh-5.25rem))] lg:p-11">
          <div className="relative z-10 flex shrink-0 items-start justify-between gap-4">
            <p className="hero-eyebrow eyebrow text-lime">
              Open to SWE · applied AI · ISE · Summer & Fall 2026
            </p>
          </div>

          <div className="relative z-10 shrink-0 py-5 md:py-6 lg:py-7">
            <h1 className="display-xl text-cream">
              <span className="hero-line">
                <span className="will-change-transform">Zaid</span>
              </span>
              <span className="hero-line">
                <span className="will-change-transform text-lime">Khan</span>
              </span>
            </h1>
          </div>

          <div className="relative z-10 grid shrink-0 gap-5 border-t border-cream/20 pt-5 md:grid-cols-[1.35fr_0.65fr] md:items-end">
            <div>
              <p className="hero-copy max-w-xl text-base leading-[1.7] text-cream/75 md:text-lg">
                ISEN @ Texas A&M. Building at the intersection of AI, systems engineering, and
                healthcare access.
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
                <a
                  href="#experience"
                  className="btn btn-ghost-cream track-cta"
                  data-track="View Experience"
                >
                  See experience
                </a>
              </div>
            </div>
            <div className="hero-meta grid grid-cols-3 gap-3 border-t border-cream/15 pt-4 md:border-t-0 md:pt-0 md:text-right">
              {[
                ["4.0", "GPA"],
                ["Python", "Claude API"],
                ["CPhT", "Licensed"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl leading-none tracking-[-0.02em] text-cream md:text-[1.75rem]">
                    {v}
                  </p>
                  <p className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-cream/50 uppercase">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
