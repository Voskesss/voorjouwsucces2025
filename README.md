# Website van Jos Klijnhout (Voor Jouw Succes)

Persoonlijke website van **Jos Klijnhout**: digitale oplossingen voor bedrijven, klein en groot, geschreven vanuit Jos zelf. Altijd vanuit het vraagstuk van de klant – de techniek volgt. Gebouwd met React en Vite.

## Positionering

- **Merkbelofte:** "Jouw probleem eerst. De techniek volgt."
- **Doelgroep:** bedrijven (MKB, klein en groot) die vooruit willen in hun digitale omgeving
- **Aanbod (in gewone taal):** AI-oplossingen bedenken, systemen koppelen (API's), systemen uitlezen, agents bouwen, digitale omgeving vernieuwen, sparringpartner
- **Toon:** oplossingsgericht, vanuit herkenning, zonder technisch jargon

## Projectstructuur

- `/src/main.jsx` – entry point, laadt `styles/site.css`
- `/src/App.jsx` – routing (`/`, `/oplossingen`, `/over-mij`, `/contact`; `/diensten` redirect naar `/oplossingen`)
- `/src/components/Header.jsx` – vaste header met navigatie en mobiel menu
- `/src/components/Footer.jsx` – footer
- `/src/components/seo/` – SEO-component, structured data (JSON-LD) en sitemap-generator
- `/src/pages/` – `Home`, `Oplossingen`, `OverMij`, `Contact`
- `/src/styles/site.css` – het complete design system (één stylesheet, kleuren uit het logo: paars `#430D7D` → magenta `#D60C7B`)
- `/src/assets/images/logo-nieuw.png` – het logo (dit blijft altijd behouden)

## Ontwikkeling

```bash
npm install     # dependencies installeren
npm run dev     # ontwikkelserver op http://localhost:5173/voorjouwsucces2025/
npm run lint    # eslint
npm run build   # productie-build naar /dist
npm run preview # gebouwde site lokaal bekijken
```

Sitemap opnieuw genereren na wijzigingen in de routes:

```bash
node src/components/seo/generateSitemap.js
```

## SEO & AI-vindbaarheid

- **Prerendering:** na `npm run build` draait automatisch `scripts/prerender.mjs` (postbuild). Elke route wordt als statische HTML in `dist/` gezet, zodat zoekmachines en AI-crawlers de volledige inhoud zien én directe links naar subpagina's werken op GitHub Pages (incl. `404.html`-fallback). Lokaal gebruikt het script de Chromium op `/opt/pw-browsers/chromium` of `CHROME_PATH`; op GitHub Actions het voorgeïnstalleerde Chrome.
- **Structured data:** JSON-LD voor organisatie, persoon en website (`SchemaMarkup`) plus een FAQPage-schema in de FAQ-component.
- **`public/llms.txt`:** samenvatting van het bedrijf voor AI-assistenten.
- **`public/robots.txt`:** alle crawlers welkom, AI-bots expliciet benoemd, verwijst naar de sitemap.
- **`public/sitemap.xml`:** te regenereren met `node src/components/seo/generateSitemap.js`.

## Deployment

De site wordt automatisch gedeployed naar GitHub Pages bij een push naar `main` (workflow: `.github/workflows/deploy.yml`).

- **URL:** https://voskesss.github.io/voorjouwsucces2025/
- **Base path:** `/voorjouwsucces2025/` (ingesteld in `vite.config.js`)

## Technische details

- **Framework:** React 19
- **Build tool:** Vite
- **Routing:** React Router DOM
- **Styling:** Vanilla CSS met design tokens in `site.css`
- **Deployment:** GitHub Pages via GitHub Actions

## Contact

info@voorjouwsucces.nl
