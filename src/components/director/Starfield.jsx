import { useEffect, useRef } from "react";

/** Soft parallax starfield + nebula wash behind the Director map. */
export default function Starfield({ pointer }) {
  const canvasRef = useRef(null);
  const pointerRef = useRef(pointer);
  pointerRef.current = pointer;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.35 + 0.2,
      a: Math.random() * 0.55 + 0.15,
      layer: Math.random() < 0.35 ? 0.35 : Math.random() < 0.7 ? 0.65 : 1,
      tw: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t) => {
      const px = (pointerRef.current?.x ?? 0.5) - 0.5;
      const py = (pointerRef.current?.y ?? 0.5) - 0.5;

      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(w * 0.55, h * 0.42, 0, w * 0.5, h * 0.5, w * 0.72);
      g.addColorStop(0, "rgba(88, 52, 140, 0.22)");
      g.addColorStop(0.35, "rgba(28, 58, 110, 0.18)");
      g.addColorStop(0.7, "rgba(8, 16, 36, 0.55)");
      g.addColorStop(1, "rgba(3, 6, 14, 0.95)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(w * 0.2, h * 0.75, 0, w * 0.2, h * 0.75, w * 0.45);
      g2.addColorStop(0, "rgba(40, 120, 160, 0.12)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        const ox = px * 18 * s.layer;
        const oy = py * 12 * s.layer;
        const twinkle = reduced ? 1 : 0.65 + 0.35 * Math.sin(t * 0.0012 + s.tw);
        ctx.beginPath();
        ctx.fillStyle = `rgba(220, 235, 255, ${s.a * twinkle})`;
        ctx.arc(s.x * w + ox, s.y * h + oy, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    if (!reduced) raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="director-starfield" aria-hidden="true" />;
}
