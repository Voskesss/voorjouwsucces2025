# Voor Jouw Succes Website

Dit is de website voor Voor Jouw Succes, een coaching en begeleiding praktijk. De website is gebouwd met React en Vite.

## Projectstructuur

### Hoofdmappen

- `/src`: Bevat alle broncode van de website
  - `/src/assets`: Afbeeldingen en andere statische bestanden
    - `/src/assets/images`: Alle afbeeldingen
    - `/src/assets/images/decorative`: Decoratieve achtergrondafbeeldingen
  - `/src/components`: Herbruikbare React-componenten
  - `/src/pages`: Pagina-componenten voor elke route
  - `/src/styles`: CSS-bestanden voor styling
  - `/src/App.jsx`: Hoofdcomponent met routing
  - `/src/main.jsx`: Entry point van de applicatie

### Belangrijke bestanden

#### Configuratie

- `/src/components/seo/seoConfig.js`: Bevat de SEO-configuratie, inclusief de naam van de website en andere metadata
- `/index.html`: Basis HTML-bestand met meta tags

#### Componenten

- `/src/components/Header.jsx`: De navigatiebalk bovenaan elke pagina
- `/src/components/Footer.jsx`: De footer onderaan elke pagina
- `/src/components/seo/SEO.jsx`: Component voor het beheren van SEO-tags

#### Pagina's

- `/src/pages/Home.jsx`: Homepage met hero-sectie en introductie
- `/src/pages/OverMij.jsx`: Pagina over de coach
- `/src/pages/Diensten.jsx`: Informatie over coaching diensten
- `/src/pages/Contact.jsx`: Contactgegevens en contactformulier
- `/src/pages/PraktischeInfo.jsx`: Praktische informatie zoals locatie en tarieven

#### Styling

- `/src/styles/theme.css`: Basisstijlen en variabelen (kleuren, lettertypes)
- `/src/styles/Home.css`: Stijlen voor de homepage

## Ontwikkeling

### Vereisten

- Node.js (versie 18 of hoger)
- npm of yarn

### Lokaal ontwikkelen

```bash
# Installeer dependencies
npm install

# Start ontwikkelserver
npm run dev
```

## Deployment

Deze website wordt automatisch gedeployed naar GitHub Pages wanneer er wijzigingen worden gepusht naar de `main` branch. De deployment wordt afgehandeld door GitHub Actions.

### Deployment configuratie

- **GitHub Pages URL**: https://voskesss.github.io/voorjouwsucces2025/
- **Base URL**: `/voorjouwsucces2025/`
- **Workflow**: `.github/workflows/deploy.yml`

### Handmatig deployen

Je kunt ook handmatig een deployment starten door naar de GitHub repository te gaan, naar de Actions tab te navigeren, en de workflow "Deploy to GitHub Pages" te selecteren en op "Run workflow" te klikken.

### Installatie

```bash
# Kloon de repository
git clone https://github.com/Voskesss/voorjouwsucces2025.git

# Navigeer naar de projectmap
cd voorjouwsucces2025

# Installeer dependencies
npm install
```

### Development server starten

```bash
npm run dev
```

De website is dan beschikbaar op `http://localhost:5173`

### Build voor productie

```bash
npm run build
```

### Deploy naar GitHub Pages

```bash
npm run deploy
```

## Technische details

- **Framework**: React 19
- **Build tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Vanilla CSS met CSS variabelen
- **Deployment**: GitHub Pages

## Contact

Voor vragen over de website, neem contact op via de contactpagina op de website.
