export default function Projects({ todoAppUrl }) {
  const todoLive = Boolean(todoAppUrl);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">04 — Projects</span>
          <div className="section-rule"></div>
        </div>

        <div className="project-index" id="projectIndex">
          <a
            href="#about"
            className="project-row reveal-up track-cta"
            data-track="Project Healthcare"
            data-title="Healthcare Systems"
            data-sub="ISE + Systems Design"
          >
            <span className="pr-num">01</span>
            <span className="pr-title">Healthcare Systems</span>
            <span className="pr-cat">Systems Design</span>
            <span className="pr-year">2026</span>
            <span className="pr-flag flag-future">Focus</span>
          </a>

          <a
            href="https://github.com/zaidmajkhan/lead-followup-agent"
            target="_blank"
            rel="noreferrer"
            className="project-row reveal-up track-cta"
            data-track="Project Lead Agent"
            data-title="AI Lead Follow-Up Agent"
            data-sub="Python · Claude API · In progress"
          >
            <span className="pr-num">02</span>
            <span className="pr-title">AI Lead Follow-Up Agent</span>
            <span className="pr-cat">Python · APIs</span>
            <span className="pr-year">2025</span>
            <span className="pr-flag flag-progress">In progress</span>
          </a>

          <a
            href={todoLive ? todoAppUrl : '#building'}
            id="todoAppProjectRow"
            className="project-row reveal-up track-cta"
            data-track="Project Todo App"
            data-title="AI Todo App"
            data-sub="FastAPI · SQLite · Claude API"
            {...(todoLive ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span className="pr-num">03</span>
            <span className="pr-title">AI Todo App</span>
            <span className="pr-cat">Full-stack</span>
            <span className="pr-year">2026</span>
            <span className={`pr-flag${todoLive ? ' flag-live' : ' flag-progress'}`} id="todoAppProjectFlag">
              {todoLive ? 'Live' : 'Deploying'}
            </span>
          </a>

          <a
            href="#experience"
            className="project-row reveal-up track-cta"
            data-track="Project CVS"
            data-title="CVS Pharmacy Workflow"
            data-sub="Process Mapping · 47% wait ↓"
          >
            <span className="pr-num">04</span>
            <span className="pr-title">CVS Pharmacy Workflow</span>
            <span className="pr-cat">Process Improvement</span>
            <span className="pr-year">2025</span>
            <span className="pr-flag flag-live">Live</span>
          </a>

          <a
            href="#credentials"
            className="project-row reveal-up"
            data-title="Wharton Investment Competition"
            data-sub="Portfolio Strategy · Top 6%"
          >
            <span className="pr-num">05</span>
            <span className="pr-title">Wharton Investment Competition</span>
            <span className="pr-cat">Portfolio Strategy</span>
            <span className="pr-year">2023</span>
            <span className="pr-flag flag-done">Top 6%</span>
          </a>
        </div>
      </div>

      <div className="project-preview" id="projectPreview" aria-hidden="true">
        <span className="pp-num"></span>
        <span className="pp-title"></span>
        <span className="pp-sub"></span>
      </div>
    </section>
  );
}
