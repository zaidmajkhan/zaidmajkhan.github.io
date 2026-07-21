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

  const channels = [
    {
      key: "linkedin",
      label: "LinkedIn",
      detail: "Best for recruiters",
      href: siteConfig.linkedinUrl,
      external: true,
      track: "LinkedIn Contact Card",
    },
    {
      key: "email",
      label: "Email",
      detail: email,
      href: mailto,
      external: false,
      track: "Email Contact Card",
    },
  ];

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="wrap">
        <div className="surface band-forest relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:items-start">
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

              <div className="reveal mt-7 border-y border-cream/15">
                {channels.map((c) => (
                  <a
                    key={c.key}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="interactive-row group grid grid-cols-[1fr_auto] items-center gap-3 border-b border-cream/15 py-4 last:border-b-0 track-cta"
                    data-track={c.track}
                  >
                    <span>
                      <span className="block text-[0.62rem] font-extrabold tracking-[0.14em] text-cream/50 uppercase">
                        {c.label}
                      </span>
                      <span className="mt-1 block font-display text-lg tracking-[-0.02em] text-cream">
                        {c.detail}
                      </span>
                    </span>
                    <span className="text-sm font-bold tracking-[0.1em] text-lime uppercase opacity-70 transition group-hover:opacity-100">
                      Open ↗
                    </span>
                  </a>
                ))}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="interactive-row group grid w-full grid-cols-[1fr_auto] items-center gap-3 py-4 text-left"
                >
                  <span>
                    <span className="block text-[0.62rem] font-extrabold tracking-[0.14em] text-cream/50 uppercase">
                      {copied ? "Copied" : "Copy email"}
                    </span>
                    <span className="mt-1 block font-display text-lg tracking-[-0.02em] text-cream">
                      {email}
                    </span>
                  </span>
                  <span className="text-sm font-bold tracking-[0.1em] text-lime uppercase opacity-70 transition group-hover:opacity-100">
                    ⎘
                  </span>
                </button>
              </div>
            </aside>

            <div className="reveal rounded-2xl border border-cream/15 bg-cream/[0.06] p-5 md:p-6 lg:border-0 lg:bg-transparent lg:p-0 lg:pl-10 lg:border-l lg:border-cream/15 lg:rounded-none">
              {success ? (
                <div className="flex min-h-64 flex-col justify-center">
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
                  <p className="mt-2 max-w-sm text-sm text-cream/55">
                    Same note as LinkedIn — role, team, and timeline help most.
                  </p>
                  <form className="mt-6 grid gap-5" onSubmit={onSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="form-label !text-cream/55">Name</span>
                        <input
                          className="form-input form-input--on-forest"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Your name"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="form-label !text-cream/55">Email</span>
                        <input
                          className="form-input form-input--on-forest"
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          required
                          placeholder="you@company.com"
                        />
                      </label>
                    </div>
                    <div className="grid gap-2">
                      <span className="form-label !text-cream/55">Topic</span>
                      <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-cream/15 pb-3.5">
                        {TOPICS.map((t) => (
                          <button
                            key={t.value}
                            type="button"
                            className={`text-[0.68rem] font-bold tracking-[0.12em] uppercase transition ${
                              topic === t.value
                                ? "text-lime"
                                : "text-cream/45 hover:text-cream/75"
                            }`}
                            onClick={() => setTopic(t.value)}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="grid gap-2">
                      <span className="form-label !text-cream/55">Message</span>
                      <textarea
                        className="form-input form-input--on-forest min-h-32"
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
