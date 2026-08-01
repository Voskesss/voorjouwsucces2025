/**
 * Prerendert de gebouwde site naar statische HTML per route.
 *
 * Waarom: de site is een React-app; zonder prerendering zien zoekmachines en
 * AI-crawlers een lege pagina. Dit script draait na `npm run build` (postbuild),
 * opent elke route in een headless browser en schrijft de gerenderde HTML naar
 * dist/<route>/index.html. Daarnaast wordt dist/404.html aangemaakt zodat
 * directe links naar onbekende paden op GitHub Pages de app laden.
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { chromium } from 'playwright-core';

const BASE_PATH = '/voorjouwsucces2025';
const PORT = 4999;
const ROUTES = ['/', '/oplossingen', '/over-mij', '/contact'];
const DIST = path.resolve(process.cwd(), 'dist');

// Vind een bruikbare browser: lokaal (CHROME_PATH of pw-browsers), anders het
// op GitHub Actions voorgeïnstalleerde Chrome-kanaal.
function launchOptions() {
  const candidates = [
    process.env.CHROME_PATH,
    '/opt/pw-browsers/chromium',
  ].filter(Boolean);
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      return { executablePath: p, args: ['--no-sandbox'] };
    }
  }
  return { channel: 'chrome', args: ['--no-sandbox'] };
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let ready = false;
    const onData = (data) => {
      if (!ready && data.toString().includes(String(PORT))) {
        ready = true;
        resolve(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('error', reject);
    proc.on('exit', (code) => {
      if (!ready) reject(new Error(`vite preview stopte met code ${code}`));
    });
    setTimeout(() => {
      if (!ready) reject(new Error('vite preview startte niet binnen 15s'));
    }, 15000);
  });
}

const shellHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const preview = await startPreview();
try {
  const browser = await chromium.launch(launchOptions());
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${BASE_PATH}${route === '/' ? '/' : route}`;
    await page.goto(url, { waitUntil: 'networkidle' });
    const html = await page.content();

    const outDir = route === '/' ? DIST : path.join(DIST, route.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), '<!doctype html>\n' + html.replace(/^<!doctype html>/i, '').trimStart());
    console.log(`prerendered ${route} -> ${path.relative(process.cwd(), path.join(outDir, 'index.html'))}`);
  }

  await browser.close();
} finally {
  preview.kill();
}

// SPA-fallback voor onbekende paden op GitHub Pages
fs.writeFileSync(path.join(DIST, '404.html'), shellHtml);
console.log('wrote dist/404.html (SPA-fallback)');

// Expliciet afsluiten: de preview-server houdt de event loop anders in leven
process.exit(0);
