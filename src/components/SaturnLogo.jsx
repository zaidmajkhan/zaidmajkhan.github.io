/**
 * Clean Saturn planet logo — solid body cutting a single ring band.
 */
export default function SaturnLogo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(120 82) rotate(-20)">
        {/* Soft ring wash */}
        <ellipse cx="0" cy="0" rx="108" ry="34" fill="currentColor" opacity="0.12" />
        {/* Ring band */}
        <ellipse
          cx="0"
          cy="0"
          rx="100"
          ry="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
          opacity="0.55"
        />
        {/* Thin ring edges */}
        <ellipse
          cx="0"
          cy="0"
          rx="112"
          ry="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          opacity="0.4"
        />
        <ellipse
          cx="0"
          cy="0"
          rx="88"
          ry="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          opacity="0.35"
        />
      </g>
      {/* Body on top so the ring reads behind/through */}
      <circle cx="120" cy="78" r="46" fill="currentColor" />
      <circle cx="106" cy="64" r="14" fill="#f7e9dc" opacity="0.22" />
    </svg>
  );
}
