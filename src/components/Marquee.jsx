const ITEMS = [
  "Applied AI",
  "Operations",
  "Summer 2027",
  "ISEN @ Texas A&M",
  "4.0 GPA",
  "Shipped Python agent",
  "ACE Lab",
  "HFCS Lab",
  "CVS · 47% wait ↓",
  "Handshake AI",
  "CPhT Licensed",
];

export default function Marquee() {
  const line = ITEMS.flatMap((item, i) => [
    <span key={`t-${i}`} className="marquee-item">
      {item}
    </span>,
    <span key={`d-${i}`} className="marquee-dot" aria-hidden="true">
      ✦
    </span>,
  ]);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">{line}</div>
        <div className="marquee-group" aria-hidden="true">
          {line}
        </div>
      </div>
    </div>
  );
}
