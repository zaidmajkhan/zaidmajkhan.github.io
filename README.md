# zaidmajkhan.github.io
# Zaid Khan — Personal Website

Personal portfolio and founder site for Zaid Khan. Engineering student, founder, and systems thinker.

**Live site:** https://zaidmajkhan.github.io

## About

Freshman at Texas A&M Engineering Academy targeting Industrial & Systems Engineering. Building AI automation for small businesses through **Majeed**. Long game: healthcare systems.

## Built With

- HTML, CSS & vanilla JavaScript
- GSAP animations (ScrollTrigger, ScrollToPlugin)
- Ambient gradient background
- Plausible Analytics (privacy-friendly)
- Formsubmit.co contact form
- Deployed on GitHub Pages

## Site Structure

```
/
├── index.html          # Main portfolio + Majeed services landing
├── styles.css          # Shared styles
├── site-config.js      # URLs, analytics domain, form email, booking link
├── robots.txt
├── sitemap.xml
├── assets/             # Favicon, OG image, resume PDF, icons
└── blog/               # Build log (3 starter posts)
```

## Credentials

- 4.0 GPA — Texas A&M Engineering Academy
- Top 6% — Wharton Global Investment Competition (~4,000 teams)
- CVS Certified Pharmacy Technician
- Anthropic AI Certification — in progress

## Third-Party Setup

Edit [`site-config.js`](site-config.js) to connect your accounts:

| Key | Purpose |
|-----|---------|
| `calBookingUrl` | Cal.com intro call link |
| `formsubmitEmail` | Contact form delivery email |
| `plausibleDomain` | Plausible Analytics domain |
| `newsletterUrl` | Buttondown (or other) newsletter |
| `githubUrl` / `twitterUrl` | Social profile links |

**Plausible:** Add your site at [plausible.io](https://plausible.io) — the script is already in `index.html`.

**Contact form:** Uses [Formsubmit.co](https://formsubmit.co) with your email. First submission triggers a confirmation email from Formsubmit.

**Cal.com:** Create a free booking page and paste the URL into `site-config.js`.

## Changelog

- `v1.0` — Initial upload
- `v1.1` — Added CNAME for custom domain
- `v2.0` — Full redesign: gold/black theme, GSAP animations, particle network, new sections
- `v2.1` — Restored site after merge conflict
- `v2.2` — Cleaned repo, removed editor config folders
- `v2.3` — Updated README
- `v3.0` — Attraction layer: SEO/OG, analytics, case study, testimonials, FAQ, pricing, contact form, booking CTAs, blog, newsletter
- `v3.1` — Internship-first positioning: resume download, recruiter CTAs, resume-accurate experience, project reorder
