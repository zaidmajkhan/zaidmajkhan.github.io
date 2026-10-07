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

cpSync(join(root, "public", "assets"), assets, { recursive: true });

for (const name of readdirSync(assets)) {
  if (/^index-.*\.(js|css)$/.test(name)) {
    rmSync(join(assets, name), { force: true });
  }
}
for (const name of readdirSync(join(dist, "assets"))) {
  if (/^index-.*\.(js|css)$/.test(name)) {
    cpSync(join(dist, "assets", name), join(assets, name));
  }
}

cpSync(join(dist, "index.html"), join(root, "index.html"));
console.log("Synced dist → root index.html + assets/ for GitHub Pages");
