import { useMemo, useState } from "react";
import siteConfig from "../config/siteConfig.js";

const TOPICS = [
  { value: "recruiter", label: "Internship / recruiting" },
  { value: "collab", label: "Collaboration" },
  { value: "other", label: "Other" },
];

function getBackend() {
  if (siteConfig.formspreeEndpoint) return "formspree";
  if (siteConfig.web3formsAccessKey) return "web3forms";
  if (siteConfig.formsubmitEmail) return "formsubmit";
  return null;
}

export default function Contact() {
  const email = siteConfig.contactEmail || siteConfig.formsubmitEmail;
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Internship inquiry — Zaid Khan");
    const body = encodeURIComponent(
      "Hi Zaid,\n\nI'm reaching out about:\n\n[Role / team / timeline]\n\nBest,\n[Your name]"
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
      setTimeout(() => setCopied(false), 1800);
      if (window.plausible) window.plausible("Copy Email");
    } catch {
      /* ignore */
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const backend = getBackend();
    if (!backend) {
      setStatus("Use LinkedIn or email — form backend not configured yet.");
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
          body: JSON.stringify({
            name,
            email: formEmail,
            inquiry_type: topic,
            message,
            _subject: `Portfolio: ${topic} from ${name}`,
          }),
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
            inquiry_type: topic,
          }),
        });
        const data = await res.json();
        if (!res.ok || data.success === false) throw new Error("fail");
        setSuccess(true);
        if (window.plausible) window.plausible("Contact Form Success");
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
          }
        );
      }
      if (!res.ok) throw new Error("fail");
      setSuccess(true);
      if (window.plausible) window.plausible("Contact Form Success");
    } catch {
      setStatus(`Couldn't send — try LinkedIn or email ${email} directly.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-forest text-cream">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <aside>
            <p className="eyebrow text-lime">06 — Contact</p>
            <h2 className="heading-lg mt-5 text-cream">Let&apos;s connect.</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/65">
              Open to internships in ISE, healthcare ops, and process design for Summer & Fall
              2026. Recruiters usually message on LinkedIn — I reply within 24 hours on weekdays.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 transition hover:bg-cream/10 track-cta"
                data-track="LinkedIn Contact Card"
              >
                <span>
                  <span className="block text-sm font-extrabold tracking-[0.08em] uppercase">
                    Message on LinkedIn
                  </span>
                  <span className="mt-1 block text-sm text-cream/55">Best for recruiters</span>
                </span>
                <span className="text-lime">↗</span>
              </a>
              <a
                href={mailto}
                className="group flex items-center justify-between rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 transition hover:bg-cream/10 track-cta"
                data-track="Email Contact Card"
              >
                <span>
                  <span className="block text-sm font-extrabold tracking-[0.08em] uppercase">
                    Email directly
                  </span>
                  <span className="mt-1 block text-sm text-cream/55">{email}</span>
                </span>
                <span className="text-lime">↗</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center justify-between rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 text-left transition hover:bg-cream/10"
              >
                <span>
                  <span className="block text-sm font-extrabold tracking-[0.08em] uppercase">
                    {copied ? "Copied" : "Copy email"}
                  </span>
                  <span className="mt-1 block text-sm text-cream/55">{email}</span>
                </span>
                <span className="text-lime">⎘</span>
              </button>
            </div>
          </aside>

          <div className="rounded-[1.5rem] border border-cream/15 bg-cream p-6 text-forest md:p-8">
            {success ? (
              <div className="flex min-h-[22rem] flex-col items-start justify-center">
                <p className="eyebrow text-moss">Sent</p>
                <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em]">Message received.</h3>
                <p className="mt-4 max-w-sm text-muted">
                  I&apos;ll reply within 24 hours on weekdays. For faster turns, LinkedIn works too.
                </p>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-forest mt-8 track-cta"
                  data-track="LinkedIn After Submit"
                >
                  Open LinkedIn ↗
                </a>
              </div>
            ) : (
              <>
                <p className="eyebrow text-moss">Or send a message</p>
                <p className="mt-3 text-sm text-muted">Straight to my inbox — no account needed.</p>
                <form className="mt-7 grid gap-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="form-field">
                      <label className="form-label" htmlFor="contactName">
                        Name
                      </label>
                      <input
                        id="contactName"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="contactEmail">
                        Email
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        className="form-input"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <span className="form-label">Topic</span>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          className={`topic-pill${topic === t.value ? " active" : ""}`}
                          onClick={() => setTopic(t.value)}
                          aria-pressed={topic === t.value}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-field">
                    <div className="flex items-baseline justify-between gap-3">
                      <label className="form-label" htmlFor="contactMessage">
                        Message
                      </label>
                      <span className="text-[0.7rem] text-muted">{message.length} / 1000</span>
                    </div>
                    <textarea
                      id="contactMessage"
                      className="form-input form-textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      maxLength={1000}
                      placeholder="Team, role, timeline — whatever helps me reply faster."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-forest track-cta"
                    data-track="Contact Form Submit"
                    disabled={loading}
                  >
                    {loading ? "Sending…" : "Send message"}
                  </button>
                  {status ? <p className="text-sm text-red-700">{status}</p> : null}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
