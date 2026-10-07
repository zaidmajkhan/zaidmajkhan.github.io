/**
 * Copy Vite dist → repo root so GitHub Pages "Deploy from a branch / main"
 * can serve the production site (legacy Pages ignores the Actions artifact).
 */
import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const assets = join(root, "assets");

mkdirSync(assets, { recursive: true });

// Static files from public/assets (favicons, resume, etc.)
cpSync(join(root, "public", "assets"), assets, { recursive: true });

// Drop prior hashed JS/CSS bundles (keep static names like favicon.svg)
for (const name of readdirSync(assets)) {
  if (/\.(js|css)$/.test(name)) {
    rmSync(join(assets, name), { force: true });
  }
}

// Copy every Vite-emitted JS/CSS chunk (index + lazy splits)
for (const name of readdirSync(join(dist, "assets"))) {
  if (/\.(js|css)$/.test(name)) {
    cpSync(join(dist, "assets", name), join(assets, name));
  }
}

cpSync(join(dist, "index.html"), join(root, "index.html"));
console.log("Synced dist → root index.html + assets/ for GitHub Pages");
