export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">01 — About</span>
          <div className="section-rule"></div>
        </div>

        <div className="about-body">
          <div className="about-left">
            <blockquote className="about-quote">
              <div className="clip-wrap">
                <span className="clip-inner">&quot;The system isn&apos;t broken.</span>
              </div>
              <div className="clip-wrap">
                <span className="clip-inner">It&apos;s just not</span>
              </div>
              <div className="clip-wrap">
                <span className="clip-inner">engineered yet.&quot;</span>
              </div>
            </blockquote>
            <div className="about-stack">
              <span className="stack-item">Industrial &amp; Systems Eng.</span>
              <span className="stack-item">AI Automation</span>
              <span className="stack-item">Healthcare Systems</span>
            </div>

            <div className="about-currently">
              <span className="about-currently-label">Currently</span>
              <div className="about-currently-item">
                <span className="ac-key">Building</span>
                <span className="ac-val">Personal automation projects (in progress)</span>
              </div>
              <div className="about-currently-item">
                <span className="ac-key">Studying</span>
                <span className="ac-val">Engineering Academies at Texas A&amp;M</span>
              </div>
              <div className="about-currently-item">
                <span className="ac-key">Stack</span>
                <span className="ac-val">Claude API · Cursor · automation tooling</span>
              </div>
              <div className="about-currently-item">
                <span className="ac-key">Based in</span>
                <span className="ac-val">McKinney, TX</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h2 className="reveal-up">About</h2>
            <p className="reveal-up">
              I grew up watching my family navigate a healthcare system that felt designed to lose people in the
              cracks. Complex processes, poor information flow, broken hand-offs. An engineer looks at that and sees
              fixable problems.
            </p>
            <p className="reveal-up">
              I&apos;m in the Texas A&amp;M Engineering Academy, majoring in Industrial and Systems Engineering, because ISE
              is specifically about making complex systems work — reducing waste, improving flow, designing processes
              that scale. That&apos;s what healthcare needs.
            </p>
            <p className="reveal-up">
              On the side, I&apos;m exploring AI and workflow automation through personal projects — applying the same
              systems thinking to tools and software. Nothing client-facing yet; mostly learning and building in public.
            </p>
            <p className="about-mission reveal-up">
              Long term: build a healthcare systems company that actually moves the needle.
            </p>
          </div>
        </div>

        <div className="about-stats bento-stats reveal-up">
          <div className="astat glass-card bento-feature">
            <span className="astat-val">4.0</span>
            <span className="astat-label">GPA</span>
            <span className="astat-note">Engineering coursework</span>
          </div>
          <div className="astat glass-card">
            <span className="astat-val">Top 6%</span>
            <span className="astat-label">Wharton Global</span>
          </div>
          <div className="astat glass-card">
            <span className="astat-val">CPhT</span>
            <span className="astat-label">Licensed</span>
          </div>
          <div className="astat glass-card">
            <span className="astat-val">ISEN</span>
            <span className="astat-label">Major</span>
          </div>
        </div>

        <div className="skills-block reveal-up">
          <div className="skills-head">
            <span className="skills-title">Tools &amp; stack</span>
            <span className="skills-note">What I build with day to day</span>
          </div>
          <div className="skills-grid">
            <span className="skill-chip">Python</span>
            <span className="skill-chip">Process improvement</span>
            <span className="skill-chip">Root cause analysis</span>
            <span className="skill-chip">Claude API</span>
            <span className="skill-chip">Operations leadership</span>
            <span className="skill-chip">Regulatory compliance</span>
            <span className="skill-chip">Data-driven decisions</span>
            <span className="skill-chip">Cross-functional coordination</span>
          </div>
        </div>
      </div>
    </section>
  );
}
