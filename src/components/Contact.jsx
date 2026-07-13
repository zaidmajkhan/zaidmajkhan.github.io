import { useState } from 'react';
import siteConfig from '../config/siteConfig.js';

function getBackend() {
  if (siteConfig.formspreeEndpoint) return 'formspree';
  if (siteConfig.web3formsAccessKey) return 'web3forms';
  if (siteConfig.formsubmitEmail) return 'formsubmit';
  return null;
}

export default function Contact() {
  const email = siteConfig.contactEmail || siteConfig.formsubmitEmail || 'zaidmajkhan@gmail.com';
  const linkedin = siteConfig.linkedinUrl || 'https://linkedin.com/in/zaidmajkhan';
  const phone = siteConfig.phone || '';
  const backend = getBackend();

  const mailtoSubject = encodeURIComponent('Internship inquiry — Zaid Khan');
  const mailtoBody = encodeURIComponent(
    "Hi Zaid,\n\nI'm reaching out about:\n\n[Role / team / timeline]\n\nBest,\n[Your name]"
  );
  const mailtoHref = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const [topic, setTopic] = useState('recruiter');
  const [name, setName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(
    backend ? '' : 'Use LinkedIn or email above — form backend not configured yet.'
  );
  const [statusError, setStatusError] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Copy email');
  const [copied, setCopied] = useState(false);

  const messageLen = message.length;
  const charCountClass = messageLen > 900 ? 'form-char-count near-limit' : 'form-char-count';

  function handleTopicPill(value) {
    setTopic(value);
  }

  function handleCopyEmail() {
    function done() {
      setCopyLabel('Copied!');
      setCopied(true);
      setTimeout(() => {
        setCopyLabel('Copy email');
        setCopied(false);
      }, 2000);
    }

    function fallback() {
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(done).catch(fallback);
    } else {
      fallback();
    }

    if (window.plausible) window.plausible('Copy Email');
  }

  function showSuccess() {
    setSuccess(true);
    if (window.plausible) window.plausible('Contact Form Success');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!backend) return;

    setLoading(true);
    setFormStatus('');
    setStatusError(false);

    const data = {
      name,
      email: formEmail,
      inquiry_type: topic,
      message,
      _gotcha: honeypot,
    };

    let promise;

    if (backend === 'formspree') {
      promise = fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          inquiry_type: data.inquiry_type,
          message: data.message,
          _subject: `Portfolio: ${data.inquiry_type || 'inquiry'} from ${data.name}`,
        }),
      });
    } else if (backend === 'web3forms') {
      promise = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: siteConfig.web3formsAccessKey,
          name: data.name,
          email: data.email,
          subject: `Portfolio: ${data.inquiry_type || 'inquiry'} from ${data.name}`,
          message: data.message,
          inquiry_type: data.inquiry_type,
          from_name: 'zaidmajkhan.github.io',
        }),
      });
    } else {
      promise = fetch(`https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.formsubmitEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          inquiry_type: data.inquiry_type,
          message: data.message,
          _subject: 'New inquiry from zaidmajkhan.github.io',
          _captcha: 'false',
        }),
      });
    }

    try {
      const r = await promise;
      if (!r.ok) throw new Error('fail');
      const res = await r.json().catch(() => ({}));
      if (backend === 'web3forms' && res.success === false) throw new Error('fail');
      showSuccess();
    } catch {
      setFormStatus(`Couldn't send — try LinkedIn or email ${email} directly.`);
      setStatusError(true);
    } finally {
      setLoading(false);
    }
  }

  const topics = [
    { value: 'recruiter', label: 'Internship / recruiting' },
    { value: 'collab', label: 'Collaboration' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">06 — Contact</span>
          <div className="section-rule"></div>
        </div>

        <div className="contact-panel glass-card reveal-up">
          <div className="contact-panel-grid">
            <aside className="contact-aside">
              <h2 className="contact-panel-title">Let&apos;s connect</h2>
              <p className="contact-panel-sub">
                Open to internships in ISE, healthcare ops, and process design for Summer &amp; Fall 2026. Recruiters
                usually reach out on LinkedIn — I reply within 24 hours on weekdays.
              </p>

              <div className="contact-quick">
                <a
                  href={linkedin}
                  id="contactLinkedinCard"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-quick-card contact-quick-card--primary track-cta"
                  data-track="LinkedIn Contact Card"
                >
                  <span className="cqc-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span className="cqc-body">
                    <span className="cqc-label">Message on LinkedIn</span>
                    <span className="cqc-hint">Best for recruiters</span>
                  </span>
                  <span className="cqc-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href={mailtoHref} id="contactMailto" className="contact-quick-card track-cta" data-track="Email Contact Card">
                  <span className="cqc-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <span className="cqc-body">
                    <span className="cqc-label">Email directly</span>
                    <span className="cqc-hint">Pre-filled subject line</span>
                  </span>
                  <span className="cqc-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  className="contact-quick-card resume-link track-cta"
                  data-track="Resume Contact Card"
                  download="Zaid-Khan-Resume.pdf"
                >
                  <span className="cqc-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M12 3v12m0 0l4-4m-4 4l-4-4" />
                      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                    </svg>
                  </span>
                  <span className="cqc-body">
                    <span className="cqc-label">Download resume</span>
                    <span className="cqc-hint">PDF · one click</span>
                  </span>
                  <span className="cqc-arrow" aria-hidden="true">
                    ↓
                  </span>
                </a>
              </div>

              <div className="contact-direct">
                <button
                  type="button"
                  className={`contact-copy-btn${copied ? ' copied' : ''}`}
                  id="copyEmailBtn"
                  onClick={handleCopyEmail}
                >
                  <span className="copy-label">{copyLabel}</span>
                  <span className="copy-value">{email}</span>
                </button>
                {phone ? (
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="contact-chip" id="contactPhoneChip">
                    {phone}
                  </a>
                ) : (
                  <a href="#" className="contact-chip" id="contactPhoneChip" hidden></a>
                )}
                <a
                  href={siteConfig.githubUrl}
                  className="contact-chip track-cta"
                  data-track="GitHub Contact"
                  id="contactGithubChip"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <p className="contact-meta">McKinney, TX · Texas A&amp;M Engineering Academies</p>
            </aside>

            <div className="contact-form-col">
              <div className="contact-form-header">
                <span className="contact-form-eyebrow">Or send a message</span>
                <p className="contact-form-lead">Form goes straight to my inbox — no account needed on your end.</p>
              </div>

              <div className="contact-form-wrap" id="contactFormWrap" hidden={success}>
                <form className="contact-form" id="contactForm" method="POST" noValidate onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="_gotcha"
                    className="form-honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                  <input type="hidden" id="contactType" name="inquiry_type" value={topic} />

                  <div className="form-row form-row--split">
                    <div className="form-field">
                      <label className="form-label" htmlFor="contactName">
                        Name
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="contactName"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="contactEmail">
                        Email
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        id="contactEmail"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <span className="form-label">Topic</span>
                    <div className="topic-pills" role="group" aria-label="Inquiry topic">
                      {topics.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          className={`topic-pill${topic === t.value ? ' active' : ''}`}
                          data-value={t.value}
                          aria-pressed={topic === t.value}
                          onClick={() => handleTopicPill(t.value)}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-label-row">
                      <label className="form-label" htmlFor="contactMessage">
                        Message
                      </label>
                      <span className={charCountClass} id="messageCharCount">
                        {messageLen} / 1000
                      </span>
                    </div>
                    <textarea
                      className="form-input form-textarea"
                      id="contactMessage"
                      name="message"
                      rows={4}
                      required
                      maxLength={1000}
                      placeholder="Team, role, timeline — whatever helps me reply faster."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn primary form-submit track-cta${loading ? ' loading' : ''}`}
                    data-track="Contact Form Submit"
                    disabled={!backend || loading}
                  >
                    <span className="btn-spinner" hidden={!loading} aria-hidden="true"></span>
                    <span className="btn-label">{loading ? 'Sending…' : 'Send message'}</span>
                  </button>
                  <p
                    className={`form-note small${statusError ? ' form-note--error' : ' muted'}`}
                    id="formStatus"
                    role="status"
                    aria-live="polite"
                  >
                    {formStatus}
                  </p>
                </form>
              </div>

              <div className="contact-success" id="contactSuccess" hidden={!success}>
                <div className="contact-success-icon" aria-hidden="true">
                  ✓
                </div>
                <h3 className="contact-success-title">Message sent</h3>
                <p className="contact-success-text">
                  Thanks — I&apos;ll get back to you within 24 hours on weekdays. For faster replies, LinkedIn works too.
                </p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost track-cta"
                  data-track="LinkedIn After Submit"
                >
                  Open LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
