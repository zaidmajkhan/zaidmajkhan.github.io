# zaidmajkhan.github.io
# Zaid Khan — Personal Website

Personal portfolio for Zaid Khan. ISEN student at Texas A&M, open to internships in healthcare ops and systems engineering.

**Live site:** https://zaidmajkhan.github.io

## About

Freshman at Texas A&M Engineering Academy targeting Industrial & Systems Engineering. CPhT at CVS Health. Long game: healthcare systems. Side projects in AI/automation — nothing client-facing yet.

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
├── index.html          # Main portfolio (internship-first)
├── styles.css          # Shared styles
├── site-config.js      # URLs, analytics domain, form email
├── robots.txt
├── sitemap.xml
├── assets/             # Favicon, OG image, resume PDF, icons
└── blog/               # Build log (3 posts)
```

## Third-Party Setup

Edit [`site-config.js`](site-config.js) to connect your accounts:

| Key | Purpose |
|-----|---------|
| `formsubmitEmail` | Contact form delivery email |
| `plausibleDomain` | Plausible Analytics domain |
| `newsletterUrl` | Buttondown (or other) newsletter |
| `githubUrl` / `twitterUrl` | Social profile links |
| `resumeUrl` | Path to downloadable resume PDF |
| `todoAppUrl` | Live todo app URL (Render/Railway) — card + project row link when set |

**Architecture:** This site is static GitHub Pages only. Full-stack apps (FastAPI, SQLite, Claude API) deploy separately — never embed API keys in frontend JS. Set `todoAppUrl` in config when the todo app is live.

## Changelog

- `v1.0` — Initial upload
- `v2.0` — Full redesign with GSAP animations
- `v3.0` — SEO, analytics, blog, contact form
- `v3.1` — Internship-first positioning + resume download
- `v3.2` — Removed unbuilt Majeed/client claims; placeholders for personal projects
