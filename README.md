# zaidmajkhan.github.io

Personal portfolio for **Zaid Khan** — ISEN @ Texas A&M, open to internships in healthcare ops and systems engineering.

**Live site:** https://zaidmajkhan.github.io

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v4** (with legacy styles for animations)
- **GSAP** — scroll animations, intro, smooth scroll
- **Three.js** — hero 3D wireframe scene
- **Plausible** — privacy-friendly analytics
- **GitHub Actions** — builds `dist/` and deploys to Pages

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Project structure

```
/
├── index.html              # Vite entry (meta, OG, JSON-LD)
├── package.json
├── vite.config.js
├── public/                 # Static assets (copied to dist/)
│   ├── assets/             # favicon, OG image, resume PDF
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css           # Tailwind + legacy styles
    ├── config/siteConfig.js
    ├── components/       # React sections
    ├── hooks/              # theme, GSAP animations
    └── lib/scene3d.js      # Three.js hero
```

## Config

Edit [`src/config/siteConfig.js`](src/config/siteConfig.js):

| Key | Purpose |
|-----|---------|
| `formspreeEndpoint` / `web3formsAccessKey` / `formsubmitEmail` | Contact form backend |
| `todoAppUrl` | Live todo app URL when deployed |
| `resumeUrl` | Resume PDF path |
| `githubUrl` / `linkedinUrl` / `twitterUrl` | Social links |

Full-stack apps (FastAPI, SQLite, Claude API) deploy separately — never embed API keys in this frontend.
