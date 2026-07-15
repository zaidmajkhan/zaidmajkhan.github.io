import { useMemo, useState, lazy, Suspense } from "react";
import siteConfig from "../config/siteConfig.js";

const SceneCanvas = lazy(() => import("./SceneCanvas.jsx"));

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
    <section id="contact" className="section scroll-mt-24">
      <div className="wrap">
        <div className="surface band-forest relative overflow-hidden p-5 sm:p-7 lg:p-9">
          <div
            className="motif-bleed pointer-events-none absolute -right-4 -top-6 hidden h-56 w-56 opacity-50 lg:block"
            aria-hidden="true"
          >
            <div className="scene-mount absolute inset-0">
              <Suspense fallback={null}>
                <SceneCanvas variant="process" tone="forest" compact className="h-full w-full" />
              </Suspense>
            </div>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:items-start">
            <aside>
              <p className="eyebrow reveal text-lime">06 — Contact</p>
              <h2 className="pin-title display-lg mt-3 text-cream">
                Let&apos;s talk internships
                <br />
                <span className="text-green">and what&apos;s next.</span>
              </h2>
              <p className="reveal body mt-4 max-w-md text-cream/70">
                Open to Summer & Fall 2026. Recruiters — LinkedIn is fastest. Weekday replies
                within 24h.
              </p>

              <div className="reveal mt-6 grid gap-2.5">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-cream/15 bg-cream/[0.04] px-4 py-3.5 transition hover:border-lime/40 hover:bg-cream/[0.07] track-cta"
                  data-track="LinkedIn Contact Card"
                >
                  <span>
                    <span className="block text-[0.65rem] font-extrabold tracking-[0.14em] text-cream/55 uppercase">
                      LinkedIn
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-cream">
                      Best for recruiters
                    </span>
                  </span>
                  <span className="text-lime">↗</span>
                </a>
                <a
                  href={mailto}
                  className="flex items-center justify-between rounded-xl border border-cream/15 bg-cream/[0.04] px-4 py-3.5 transition hover:border-lime/40 hover:bg-cream/[0.07] track-cta"
                  data-track="Email Contact Card"
                >
                  <span>
                    <span className="block text-[0.65rem] font-extrabold tracking-[0.14em] text-cream/55 uppercase">
                      Email
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-cream">{email}</span>
                  </span>
                  <span className="text-lime">↗</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex w-full items-center justify-between rounded-xl border border-cream/15 bg-cream/[0.04] px-4 py-3.5 text-left transition hover:border-lime/40 hover:bg-cream/[0.07]"
                >
                  <span>
                    <span className="block text-[0.65rem] font-extrabold tracking-[0.14em] text-cream/55 uppercase">
                      {copied ? "Copied" : "Copy email"}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-cream">{email}</span>
                  </span>
                  <span className="text-lime">⎘</span>
                </button>
              </div>
            </aside>

            <div className="reveal rounded-2xl border border-cream/15 bg-cream/[0.05] p-5 md:p-6">
              {success ? (
                <div className="flex min-h-72 flex-col justify-center">
                  <p className="eyebrow text-lime">Sent</p>
                  <h3 className="mt-3 font-display text-3xl leading-snug tracking-[-0.02em] text-cream md:text-4xl">
                    Message locked in.
                  </h3>
                  <p className="mt-3 max-w-sm text-cream/65">
                    I&apos;ll reply within 24 hours on weekdays.
                  </p>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-cream mt-6 w-fit track-cta"
                    data-track="LinkedIn After Submit"
                  >
                    Open LinkedIn ↗
                  </a>
                </div>
              ) : (
                <>
                  <p className="eyebrow text-lime">Or send a message</p>
                  <form className="mt-5 grid gap-3.5" onSubmit={onSubmit}>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <label className="grid gap-1.5">
                        <span className="form-label !text-cream/55">Name</span>
                        <input
                          className="form-input !border-cream/20 !bg-forest !text-cream placeholder:!text-cream/30 focus:!border-lime focus:!shadow-[0_0_0_3px_rgba(200,232,106,0.15)]"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Your name"
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="form-label !text-cream/55">Email</span>
                        <input
                          className="form-input !border-cream/20 !bg-forest !text-cream placeholder:!text-cream/30 focus:!border-lime focus:!shadow-[0_0_0_3px_rgba(200,232,106,0.15)]"
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          required
                          placeholder="you@company.com"
                        />
                      </label>
                    </div>
                    <div className="grid gap-1.5">
                      <span className="form-label !text-cream/55">Topic</span>
                      <div className="flex flex-wrap gap-2">
                        {TOPICS.map((t) => (
                          <button
                            key={t.value}
                            type="button"
                            className={`rounded-full border px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.08em] uppercase transition ${
                              topic === t.value
                                ? "border-lime bg-lime text-forest"
                                : "border-cream/20 bg-transparent text-cream/70 hover:border-cream/40"
                            }`}
                            onClick={() => setTopic(t.value)}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="grid gap-1.5">
                      <span className="form-label !text-cream/55">Message</span>
                      <textarea
                        className="form-input min-h-28 !border-cream/20 !bg-forest !text-cream placeholder:!text-cream/30 focus:!border-lime focus:!shadow-[0_0_0_3px_rgba(200,232,106,0.15)]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        maxLength={1000}
                        placeholder="Team, role, timeline…"
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-cream track-cta"
                      data-track="Contact Form Submit"
                      disabled={loading}
                    >
                      {loading ? "Sending…" : "Send message"}
                    </button>
                    {status ? <p className="text-sm text-red-300">{status}</p> : null}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
