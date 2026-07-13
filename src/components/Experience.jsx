export default function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">02 — Experience</span>
          <div className="section-rule"></div>
        </div>

        <div className="experience-header">
          <h2 className="experience-heading reveal-up">Experience &amp; background</h2>
          <p className="experience-sub reveal-up">
            Healthcare ops on the pharmacy floor, systems engineering coursework, and hands-on process improvement in
            school and community roles.
          </p>
        </div>

        <div className="timeline">
          <article className="timeline-item reveal-up">
            <div className="timeline-meta">
              <span className="timeline-date">2025 — 2029</span>
              <span className="timeline-type">Education</span>
            </div>
            <div>
              <h3>Texas A&amp;M University — B.S. Industrial &amp; Systems Engineering</h3>
              <p>
                Engineering Academies pathway via Collin College. 4.0 GPA. Sole winner of the TAMU Engineering
                Academies Resume Challenge across all 13 Academy campuses (Fall 2025).
              </p>
            </div>
          </article>

          <article className="timeline-item reveal-up">
            <div className="timeline-meta">
              <span className="timeline-date">Mar 2025 — Present</span>
              <span className="timeline-type">Healthcare</span>
            </div>
            <div>
              <h3>CVS Health — Certified Pharmacy Technician</h3>
              <p>
                Process prescription data and insurance claims in RXConnect for 200+ patients daily. Identified
                peak-hour bottlenecks and restructured task sequencing — 47% reduction in patient wait times per
                RxConnect metrics. Licensed CPhT (PTCB) and Registered Pharmacy Technician (Texas).
              </p>
            </div>
          </article>

          <article className="timeline-item reveal-up">
            <div className="timeline-meta">
              <span className="timeline-date">Aug 2021 — May 2026</span>
              <span className="timeline-type">Operations</span>
            </div>
            <div>
              <h3>IACC Sunday School — Operations Team Leader</h3>
              <p>
                Supervised facility ops and classroom logistics for 600+ students weekly. Redesigned classroom setup
                procedures for incoming teachers — 73% setup time reduction per manager feedback. 120+ community service
                hours across classroom and food bank programs.
              </p>
            </div>
          </article>

          <article className="timeline-item reveal-up">
            <div className="timeline-meta">
              <span className="timeline-date">2023</span>
              <span className="timeline-type">Competition</span>
            </div>
            <div>
              <h3>Wharton Global High School Investment Competition</h3>
              <p>
                Top 6% globally (~4,000 teams, 100+ countries). Portfolio strategy, risk analysis, and presenting a
                coherent investment thesis under pressure.
              </p>
            </div>
          </article>
        </div>

        <div className="exp-thread reveal-up">
          <span className="exp-thread-label">Common thread</span>
          <p className="exp-thread-text">
            Pharmacy floor, Sunday school ops, global competition, and personal projects — every role is practice in
            mapping how systems behave under constraint and making them work better. That&apos;s the core of ISE, and what I
            want to apply in healthcare systems internships.
          </p>
        </div>
      </div>
    </section>
  );
}
