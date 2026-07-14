import { useMemo, useState } from "react";
import siteConfig from "../config/siteConfig.js";

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

export default function Contact() {
  const email = siteConfig.contactEmail || siteConfig.formsubmitEmail;
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Internship inquiry — Zaid Khan");
    const body = encodeURIComponent("Hi Zaid,\n\nI'm reaching out about:\n\n[Role / team / timeline]\n\nBest,\n");
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
        res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.formsubmitEmail)}`, {
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
        });
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
    <section id="contact" className="section scroll-mt-24 border-t border-line bg-ink">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <aside>
            <p className="eyebrow reveal">06 — Contact</p>
            <h2 className="pin-title display-lg mt-4 text-soft">
              Always
              <br />
              <span className="text-green">bringing it.</span>
            </h2>
            <p className="reveal body mt-6 max-w-md">
              Open to internships Summer & Fall 2026. Recruiters — LinkedIn is fastest. I reply
              within 24h on weekdays.
            </p>

            <div className="reveal mt-8 grid gap-3">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-line px-5 py-4 transition hover:border-green track-cta"
                data-track="LinkedIn Contact Card"
              >
                <span>
                  <span className="block text-xs font-semibold tracking-[0.12em] uppercase">LinkedIn</span>
                  <span className="mt-1 block text-sm text-mute">Best for recruiters</span>
                </span>
                <span className="text-green">↗</span>
              </a>
              <a
                href={mailto}
                className="flex items-center justify-between border border-line px-5 py-4 transition hover:border-green track-cta"
                data-track="Email Contact Card"
              >
                <span>
                  <span className="block text-xs font-semibold tracking-[0.12em] uppercase">Email</span>
                  <span className="mt-1 block text-sm text-mute">{email}</span>
                </span>
                <span className="text-green">↗</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center justify-between border border-line px-5 py-4 text-left transition hover:border-green"
              >
                <span>
                  <span className="block text-xs font-semibold tracking-[0.12em] uppercase">
                    {copied ? "Copied" : "Copy email"}
                  </span>
                  <span className="mt-1 block text-sm text-mute">{email}</span>
                </span>
                <span className="text-green">⎘</span>
              </button>
            </div>
          </aside>

          <div className="reveal border border-line bg-panel p-6 md:p-8">
            {success ? (
              <div className="flex min-h-80 flex-col justify-center">
                <p className="eyebrow">Sent</p>
                <h3 className="mt-4 font-display text-4xl tracking-[-0.03em] text-soft">
                  Message locked in.
                </h3>
                <p className="mt-4 max-w-sm text-mute">I&apos;ll reply within 24 hours on weekdays.</p>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-green mt-8 w-fit track-cta"
                  data-track="LinkedIn After Submit"
                >
                  Open LinkedIn ↗
                </a>
              </div>
            ) : (
              <>
                <p className="eyebrow">Or send a message</p>
                <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="form-label">Name</span>
                      <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
                    </label>
                    <label className="grid gap-2">
                      <span className="form-label">Email</span>
                      <input className="form-input" type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required placeholder="you@company.com" />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <span className="form-label">Topic</span>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          className={`topic${topic === t.value ? " active" : ""}`}
                          onClick={() => setTopic(t.value)}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="grid gap-2">
                    <span className="form-label">Message</span>
                    <textarea
                      className="form-input min-h-28"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      maxLength={1000}
                      placeholder="Team, role, timeline…"
                    />
                  </label>
                  <button type="submit" className="btn btn-green track-cta" data-track="Contact Form Submit" disabled={loading}>
                    {loading ? "Sending…" : "Send message"}
                  </button>
                  {status ? <p className="text-sm text-red-400">{status}</p> : null}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
