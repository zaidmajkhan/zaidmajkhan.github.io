export default function Building({ todoAppUrl }) {
  const todoLive = Boolean(todoAppUrl);

  return (
    <section className="section alt" id="building">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">03 — Building</span>
          <div className="section-rule"></div>
        </div>

        <div className="services-header">
          <h2 className="services-heading">
            <div className="clip-wrap">
              <span className="clip-inner">Personal</span>
            </div>
            <div className="clip-wrap">
              <span className="clip-inner clip-inner--accent">Projects</span>
            </div>
          </h2>
          <div className="services-right reveal-up">
            <p className="services-sub">
              Side projects exploring AI and full-stack tooling — each app deployed separately from this static site.
              No client work; cards update when something ships live.
            </p>
            <a
              href="https://github.com/zaidmajkhan"
              target="_blank"
              rel="noreferrer"
              className="btn primary track-cta"
              data-track="GitHub Building"
            >
              View GitHub
            </a>
            <div className="services-stack-note">// personal builds · not client-facing</div>
          </div>
        </div>

        <div className="service-list service-bento">
          <div className="service-item glass-card reveal-up">
            <div className="service-num">01</div>
            <div className="service-content">
              <div className="service-head">
                <h3>AI Lead Follow-Up Agent</h3>
                <span className="service-tag">In progress</span>
              </div>
              <p>
                <span>
                  Python agent using Claude API + Gmail — ingests lead data, generates outreach, tracks sends. Active
                  repo on GitHub; still iterating on reliability and edge cases.
                </span>
              </p>
            </div>
          </div>

          <div className="service-item glass-card reveal-up">
            <div className="service-num">02</div>
            <div className="service-content">
              <div className="service-head">
                <h3>AI Todo App</h3>
                <span className="service-tag" id="todoAppTag">
                  {todoLive ? 'Live' : 'Deploying'}
                </span>
              </div>
              <p>
                <span>
                  Full-stack todo app — FastAPI backend, SQLite, Claude API on the server only. This portfolio stays on
                  GitHub Pages; the app deploys separately (Render or Railway). API keys never touch frontend JS.
                </span>
              </p>
              {todoLive ? (
                <a
                  href={todoAppUrl}
                  id="todoAppLink"
                  className="building-link track-cta"
                  data-track="Todo App Live"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live app ↗
                </a>
              ) : (
                <>
                  <a
                    href="#"
                    id="todoAppLink"
                    className="building-link track-cta"
                    data-track="Todo App Live"
                    target="_blank"
                    rel="noreferrer"
                    hidden
                  >
                    Open live app ↗
                  </a>
                  <span className="building-soon" id="todoAppSoon">
                    Live link when deployed
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="service-item glass-card reveal-up">
            <div className="service-num">03</div>
            <div className="service-content">
              <div className="service-head">
                <h3>Healthcare Workflow Tools</h3>
                <span className="service-tag">Planned</span>
              </div>
              <p>
                <span>
                  Placeholder — exploring process-mapping tools inspired by pharmacy ops experience. Goal: model
                  hand-offs and bottlenecks in clinical workflows. Not started yet.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="placeholder-note reveal-up glass-card">
          <span className="contact-type-label">Note</span>
          <p>
            Static portfolio here; full-stack apps link out to their own hosts. Project cards flip to live links once
            deployed.
          </p>
        </div>
      </div>
    </section>
  );
}
