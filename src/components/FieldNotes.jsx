const SHOTS = [
  {
    src: "/assets/engineer-mountains.jpg",
    alt: "Mountain range at dawn — systems thinking at scale",
    label: "Horizon",
    caption: "Scale · constraint · clarity",
  },
  {
    src: "/assets/hero-showcase.jpg",
    alt: "Engineering desk with laptop dashboard and tools",
    label: "Build space",
    caption: "Agents · analysis · iteration",
  },
  {
    src: "/assets/engineer-desk-detail.jpg",
    alt: "Notebook with systems sketches and precision tools",
    label: "Field notes",
    caption: "Measure · redesign · ship",
  },
];

export default function FieldNotes() {
  return (
    <section className="field-notes section scroll-mt-24" aria-label="Visual field notes">
      <div className="wrap">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal text-green">• Field notes</p>
            <h2 className="pin-title elevate-display-lg mt-2 text-forest">
              Built for engineers who <em className="elevate-italic">look up.</em>
            </h2>
          </div>
          <p className="body reveal max-w-sm text-mute md:text-right">
            Atmosphere from the work — mountains for scale, desks for craft, notes for systems.
          </p>
        </div>

        <div className="field-notes-grid stagger-children">
          {SHOTS.map((shot) => (
            <figure key={shot.src} className="field-note">
              <div className="field-note-media">
                <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                <span className="eyebrow text-green">{shot.label}</span>
                <span className="field-note-caption">{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
