import { useEffect, useMemo, useState } from "react";
import siteConfig from "../../config/siteConfig.js";
import {
  ABOUT,
  CREDENTIALS,
  DESTINATIONS,
  EXPERIENCE,
  PROJECTS,
  STATS,
} from "../../config/destinations.js";

const TOPICS = [
  { value: "recruiter", label: "Internship" },
  { value: "collab", label: "Collab" },
  { value: "other", label: "Other" },
];

function getBackend() {
  if (siteConfig.formspreeEndpoint) return "formspree";
  if (siteConfig.web3formsAccessKey) return "web3forms";
  if (siteConfig.formsubmitEmail) return "formsubmit";
  return null;
}

function PanelChrome({ dest, onClose, children }) {
  return (
    <div className="dest-panel" role="dialog" aria-modal="true" aria-labelledby="dest-panel-title">
      <div className="dest-panel__bar">
        <div>
          <p className="dest-panel__eyebrow">Destination locked</p>
          <h2 id="dest-panel-title" className="dest-panel__title">
            {dest.label}
          </h2>
          <p className="dest-panel__sub">{dest.subtitle}</p>
        </div>
        <button type="button" className="dest-panel__close" onClick={onClose} aria-label="Return to map">
          DISMISS
        </button>
      </div>
      <div className="dest-panel__body">{children}</div>
    </div>
  );
}

function OriginPanel() {
  return (
    <>
      <p className="dest-lede">{ABOUT.body}</p>
      <div className="dest-stats">
        {STATS.map((s) => (
          <div key={s.label} className="dest-stat">
            <span className="dest-stat__val">{s.val}</span>
            <span className="dest-stat__label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="dest-list">
        {ABOUT.currently.map(([k, t, d]) => (
          <article key={k} className="dest-row">
            <span className="dest-row__key">{k}</span>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="dest-skills">
        {ABOUT.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </>
  );
}

function LabsPanel() {
  return (
    <>
      <p className="dest-lede">
        Research labs, pharmacy floors, shipped software — every role is practice in mapping how
        systems behave under constraint.
      </p>
      <div className="dest-list">
        {EXPERIENCE.map((item, i) => (
          <article key={item.title} className="dest-row dest-row--stack">
            <div className="dest-row__meta">
              <span className="dest-row__key">{item.date}</span>
              <span className="dest-row__type">{item.type}</span>
            </div>
            <div>
              <h3>
                <span className="dest-num">{String(i + 1).padStart(2, "0")}</span> {item.title}
              </h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function SystemsPanel() {
  return (
    <>
      <p className="dest-lede">
        A shipped Python agent, human-centered lab research, and process work under real patient
        load.
      </p>
      <div className="dest-list">
        {PROJECTS.map((p) => (
          <article key={p.num} className="dest-row dest-row--project">
            <span className="dest-num">{p.num}</span>
            <div className="flex-1">
              <div className="dest-row__head">
                <h3>{p.title}</h3>
                <span
                  className={`chip ${
                    p.tag === "Shipped" || p.tag === "Live" || p.tag === "Active"
                      ? "chip--shipped"
                      : p.tag === "Top 6%"
                        ? "chip--top6"
                        : ""
                  }`}
                >
                  {p.tag}
                </span>
              </div>
              <p className="dest-row__cat">{p.cat}</p>
              <p>{p.body}</p>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer" className="dest-link">
                  Open on GitHub ↗
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <a
        href={siteConfig.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-cyan track-cta"
        data-track="GitHub Systems"
      >
        View GitHub
      </a>
    </>
  );
}

function TriumphPanel() {
  return (
    <>
      <p className="dest-lede">Proof, not posture — licenses, fellowships, and competition results.</p>
      <div className="dest-stats">
        {STATS.map((s) => (
          <div key={s.label} className="dest-stat">
            <span className="dest-stat__val">{s.val}</span>
            <span className="dest-stat__label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="dest-list">
        {CREDENTIALS.map((c) => (
          <article key={c.title} className="dest-row">
            <span className="dest-row__key">{c.year}</span>
            <div>
              <div className="dest-row__head">
                <h3>{c.title}</h3>
                <span className="chip">{c.badge}</span>
              </div>
              <p>{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function SignalPanel() {
  const email = siteConfig.contactEmail || siteConfig.formsubmitEmail;
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Internship inquiry — Zaid Khan");
    const body = encodeURIComponent(
      "Hi Zaid,\n\nI'm reaching out about:\n\n[Role / team / timeline]\n\nBest,\n",
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email]);

  const [topic, setTopic] = useState("recruiter");
  const [name, setName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const backend = getBackend();
    if (!backend) {
      setStatus("Use LinkedIn or email — form backend not configured.");
      return;
    }
    setLoading(true);
    setStatus("");
    try {
      let res;
      if (backend === "formspree") {
        res = await fetch(siteConfig.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email: formEmail, inquiry_type: topic, message }),
        });
      } else if (backend === "web3forms") {
        res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: siteConfig.web3formsAccessKey,
            name,
            email: formEmail,
            subject: `Portfolio: ${topic} from ${name}`,
            message,
          }),
        });
        const data = await res.json();
        if (!res.ok || data.success === false) throw new Error("fail");
        setSuccess(true);
        return;
      } else {
        res = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.formsubmitEmail)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name,
              email: formEmail,
              inquiry_type: topic,
              message,
              _subject: "New inquiry from zaidmajkhan.github.io",
              _captcha: "false",
            }),
          },
        );
      }
      if (!res.ok) throw new Error("fail");
      setSuccess(true);
      if (window.plausible) window.plausible("Contact Form Success");
    } catch {
      setStatus(`Couldn't send — email ${email} directly.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <p className="dest-lede">
        Open to Summer & Fall 2026 — software engineering, applied AI, and ISE roles. Recruiters —
        LinkedIn is fastest. Weekday replies within 24h.
      </p>
      <div className="dest-channels">
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="dest-channel track-cta"
          data-track="LinkedIn Contact Card"
        >
          <span>LinkedIn</span>
          <strong>Best for recruiters</strong>
        </a>
        <a href={mailto} className="dest-channel track-cta" data-track="Email Contact Card">
          <span>Email</span>
          <strong>{email}</strong>
        </a>
        <button type="button" className="dest-channel" onClick={copyEmail}>
          <span>{copied ? "Copied" : "Copy email"}</span>
          <strong>{email}</strong>
        </button>
      </div>

      {success ? (
        <div className="dest-success">
          <p className="dest-panel__eyebrow">Sent</p>
          <h3>Message locked in.</h3>
          <p>I&apos;ll reply within 24 hours on weekdays.</p>
        </div>
      ) : (
        <form className="dest-form" onSubmit={onSubmit}>
          <div className="dest-form__grid">
            <label>
              <span>Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required
                placeholder="you@company.com"
              />
            </label>
          </div>
          <div className="dest-topics">
            {TOPICS.map((t) => (
              <button
                key={t.value}
                type="button"
                className={topic === t.value ? "is-on" : ""}
                onClick={() => setTopic(t.value)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <label>
            <span>Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={1000}
              placeholder="Team, role, timeline…"
            />
          </label>
          <button type="submit" className="btn btn-cyan track-cta" data-track="Contact Form Submit" disabled={loading}>
            {loading ? "Sending…" : "Send message"}
          </button>
          {status ? <p className="dest-form__error">{status}</p> : null}
        </form>
      )}
    </>
  );
}

export default function DestinationPanel({ activeId, onClose }) {
  const dest = DESTINATIONS.find((d) => d.id === activeId);

  useEffect(() => {
    if (!activeId) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, onClose]);

  if (!dest || dest.external) return null;

  let body = null;
  if (dest.id === "origin") body = <OriginPanel />;
  else if (dest.id === "labs") body = <LabsPanel />;
  else if (dest.id === "systems") body = <SystemsPanel />;
  else if (dest.id === "triumph") body = <TriumphPanel />;
  else if (dest.id === "signal") body = <SignalPanel />;

  return (
    <div className="dest-panel-shell">
      <button type="button" className="dest-panel-backdrop" aria-label="Close destination" onClick={onClose} />
      <PanelChrome dest={dest} onClose={onClose}>
        {body}
      </PanelChrome>
    </div>
  );
}
