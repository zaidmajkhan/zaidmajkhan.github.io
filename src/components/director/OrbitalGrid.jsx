/** Concentric orbital rings + radial HUD lines behind destination nodes. */
export default function OrbitalGrid({ pointer }) {
  const px = ((pointer?.x ?? 0.5) - 0.5) * 12;
  const py = ((pointer?.y ?? 0.5) - 0.5) * 8;

  return (
    <svg
      className="director-grid"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ transform: `translate(${px}px, ${py}px)` }}
    >
      <defs>
        <radialGradient id="gridFade" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="rgba(160,200,255,0.22)" />
          <stop offset="55%" stopColor="rgba(120,160,220,0.08)" />
          <stop offset="100%" stopColor="rgba(80,120,180,0)" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="46" r="38" fill="none" stroke="url(#gridFade)" strokeWidth="0.08" />
      <circle cx="50" cy="46" r="28" fill="none" stroke="rgba(170,200,255,0.14)" strokeWidth="0.06" />
      <circle cx="50" cy="46" r="18" fill="none" stroke="rgba(170,200,255,0.18)" strokeWidth="0.07" />
      <circle cx="50" cy="46" r="9" fill="none" stroke="rgba(200,180,255,0.28)" strokeWidth="0.08" />

      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="46"
          x2={50 + 40 * Math.cos((deg * Math.PI) / 180)}
          y2={46 + 40 * Math.sin((deg * Math.PI) / 180)}
          stroke="rgba(160,190,230,0.08)"
          strokeWidth="0.05"
          strokeDasharray="0.4 0.7"
        />
      ))}

      <line x1="50" y1="4" x2="50" y2="96" stroke="rgba(160,190,230,0.06)" strokeWidth="0.04" />
      <line x1="2" y1="46" x2="98" y2="46" stroke="rgba(160,190,230,0.06)" strokeWidth="0.04" />

      <circle cx="50" cy="46" r="1.2" fill="none" stroke="rgba(220,200,255,0.35)" strokeWidth="0.1" />
    </svg>
  );
}
