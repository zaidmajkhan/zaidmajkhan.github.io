const ITEMS = [
  {
    date: "Jun 2026 — Now",
    type: "AI",
    title: "Handshake AI — Fellow, Project Lighthouse",
    body: "Write persona-grounded finance prompts that stress-test frontier models against synthetic financial workspace data. Build and score grading rubrics (Critical Elements, Failure Justifications, Golden Trajectory) for accuracy and reasoning quality.",
  },
  {
    date: "Jul 2026 — Now",
    type: "Research",
    title: "ACE Lab, Texas A&M — Undergraduate Researcher (Dr. Sasangohar, Dr. Smith)",
    body: "CITI human-subjects + Huron IRB certified. Structured parent/caregiver interviews for a parenting coaching app — qualitative methods and human-centered design on usability and engagement.",
  },
  {
    date: "Jul 2026 — Now",
    type: "Research",
    title: "Human Factors & Cognitive Systems Lab — Research Volunteer (Dr. Ferris)",
    body: "Developing a multi-year research plan with Dr. Thomas Ferris, focused on the lab’s haptic teleoperation project for remote medical examination.",
  },
  {
    date: "Mar 2025 — Now",
    type: "Healthcare",
    title: "CVS Health — Certified Pharmacy Technician",
    body: "RxConnect for 200+ patients daily. Peak-hour task sequencing rewrite — 47% wait reduction. Licensed CPhT (PTCB) + Texas RPhT.",
  },
  {
    date: "2025 — Dec 2028",
    type: "Education",
    title: "Texas A&M — B.S. Industrial & Systems Engineering",
    body: "4.0 GPA. Coursework includes CSCE 111, ISEN 210, STAT 211, Java. Sole winner of the TAMU Engineering Academies Resume Challenge across 13 Academy campuses.",
  },
  {
    date: "2021 — 2026",
    type: "Operations",
    title: "IACC Sunday School — Operations Team Leader / Teacher",
    body: "Facility and classroom ops for 600+ students weekly. Teacher setup redesign — 73% time cut, adopted program-wide.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section band-forest scroll-mt-24 relative overflow-hidden">
      <div className="wrap relative z-10">
        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="eyebrow reveal text-lime">02 — Experience</p>
            <h2 className="pin-title display-lg mt-3 text-cream">
              AI eval, research labs, pharmacy floors.
            </h2>
          </div>
          <p className="reveal body max-w-md text-cream/65 md:justify-self-end md:text-right">
            Every role is practice in mapping how systems behave under constraint.
          </p>
        </div>

        <div className="mt-10 border-t border-cream/15">
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="exp-row grid gap-3 border-b border-cream/15 py-5 md:grid-cols-[9.5rem_1fr] md:gap-8"
            >
              <div>
                <p className="text-sm font-bold text-lime">{item.date}</p>
                <p className="mt-0.5 text-[0.62rem] font-extrabold tracking-[0.14em] text-cream/45 uppercase">
                  {item.type}
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 font-display text-sm text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-cream md:text-[1.45rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream/60">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
