import { useEffect } from "react";

/**
 * Subtle hero depth — only runs rAF while the cursor is moving / settling.
 */
export function useHeroParallax(shellRef) {
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;

    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* ignore */
    }
    if (reduced) return undefined;

    const media = shell.querySelector(".hero-shell-media");
    const content = shell.querySelector(".hero-shell-content");
    const canvas = shell.querySelector(".hero-canvas");

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;

    const apply = () => {
      const bgX = -currentX * 8;
      const bgY = -currentY * 6;
      const fgX = currentX * 4;
      const fgY = currentY * 3;
      const sceneX = currentX * 6;
      const sceneY = currentY * 4;

      if (media) media.style.transform = `translate3d(${bgX}px, ${bgY}px, 0)`;
      if (content) content.style.transform = `translate3d(${fgX}px, ${fgY}px, 0)`;
      if (canvas) canvas.style.transform = `translate3d(${sceneX}px, ${sceneY}px, 0)`;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      apply();

      const settled =
        Math.abs(targetX - currentX) < 0.002 && Math.abs(targetY - currentY) < 0.002;
      if (settled) {
        currentX = targetX;
        currentY = targetY;
        apply();
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const rect = shell.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      kick();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      kick();
    };

    shell.addEventListener("pointermove", onMove, { passive: true });
    shell.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      shell.removeEventListener("pointermove", onMove);
      shell.removeEventListener("pointerleave", onLeave);
      if (media) media.style.transform = "";
      if (content) content.style.transform = "";
      if (canvas) canvas.style.transform = "";
    };
  }, [shellRef]);
}
