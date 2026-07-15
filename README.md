# zaidmajkhan.github.io

Personal portfolio for **Zaid Khan** — Industrial & Systems Engineering @ Texas A&M.

**Live:** https://zaidmajkhan.github.io

Open to internships (Summer & Fall 2026) in healthcare operations, ISE, and technical program roles.

## Stack

- React 19 + Vite 6 + Tailwind CSS v4
- **Lenis** — smooth scroll
- **GSAP + ScrollTrigger** — hero / entrance motion
- **Three.js** — interest-led 3D wireforms
- **Rive** — vector motion marks
- Newsreader (display) + Figtree (sans)
- Nesteye-inspired cream `#f7e9dc` + forest `#002800`

## Develop

```bash
npm install
npm run dev
npm run build
```

Deploy: push to `main` — GitHub Actions builds and publishes to Pages.

## Config

Edit [`src/config/siteConfig.js`](src/config/siteConfig.js):

| Key | Purpose |
|-----|---------|
| `formspreeEndpoint` / `web3formsAccessKey` / `formsubmitEmail` | Contact form backends (first match wins) |
| `calBookingUrl` | Cal.com / Calendly “Book a call” CTAs |
| `newsletterUrl` | Buttondown (or equivalent) subscribe link |
| `todoAppUrl` | Live project URL when AI Todo App deploys |
| `resumeUrl` | PDF path under `public/assets/` |

3D vehicle models (Kenney Car Kit, CC0) live in `public/models/`.

Replace Rive files:

- `public/assets/motion.riv` — hero mark
- `public/assets/vehicles.riv` — optional motion marks

## Discoverability

Static SEO files live in `public/` (copied to the site root on build):

- `robots.txt`, `sitemap.xml`
- Open Graph / Twitter tags + JSON-LD Person schema in `index.html`
- Favicon + apple-touch-icon + OG image under `public/assets/`
- Plausible analytics (`script.tagged-events.js`) with CTA `data-track` events
