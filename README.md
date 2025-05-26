# Praktijk basSIS Website

Dit is de website voor Praktijk basSIS, een praktijk voor lichaamsgerichte traumatherapie met een christelijke basis in Havelte, Drenthe. De website is gebouwd met React en Vite.

## Belangrijke informatie

### Naamgeving

De naam van de praktijk moet altijd geschreven worden als **Praktijk basSIS** (met SIS in hoofdletters, verwijzend naar de naam Siska, en 'Praktijk' en 'bas' als losse woorden).

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
- `/src/pages/OverMij.jsx`: Pagina over Siska Greving
- `/src/pages/Therapie.jsx`: Informatie over lichaamsgerichte traumatherapie
- `/src/pages/Wandelingen.jsx`: Informatie over therapeutische wandelingen
- `/src/pages/Contact.jsx`: Contactgegevens en contactformulier
- `/src/pages/PraktischeInfo.jsx`: Praktische informatie zoals locatie en tarieven
- `/src/pages/FAQ.jsx`: Veelgestelde vragen

#### Styling

- `/src/styles/theme.css`: Basisstijlen en variabelen (kleuren, lettertypes)
- `/src/styles/Home.css`: Stijlen voor de homepage
- `/src/styles/decorative.css`: Stijlen voor decoratieve elementen
- `/src/styles/Header.css`: Stijlen voor de header
- `/src/styles/Footer.css`: Stijlen voor de footer

## Hoe wijzigingen aan te brengen

### Naam van de praktijk wijzigen

Als de naam van de praktijk moet worden gewijzigd, moeten de volgende bestanden worden aangepast:

1. `/src/components/seo/seoConfig.js`: Wijzig `SITE_NAME`
2. `/src/components/Header.jsx`: Wijzig de alt-tekst van het logo
3. `/src/components/Footer.jsx`: Wijzig alle verwijzingen naar de praktijknaam
4. `/src/pages/*.jsx`: Wijzig alle verwijzingen naar de praktijknaam in alle pagina's

### Inhoud van pagina's wijzigen

Elke pagina heeft zijn eigen bestand in de `/src/pages` map. Om de inhoud van een pagina te wijzigen, open je het betreffende bestand en pas je de tekst aan.

### Styling wijzigen

De stijlen zijn verdeeld over verschillende CSS-bestanden in de `/src/styles` map. Elke pagina of component heeft zijn eigen CSS-bestand.

- Algemene stijlen en variabelen staan in `/src/styles/theme.css`
- Stijlen voor de homepage staan in `/src/styles/Home.css`
- Stijlen voor decoratieve elementen staan in `/src/styles/decorative.css`

### Afbeeldingen toevoegen of wijzigen

1. Plaats nieuwe afbeeldingen in de map `/src/assets/images`
2. Voor decoratieve achtergrondafbeeldingen, gebruik de map `/src/assets/images/decorative`
3. Importeer de afbeelding in het betreffende component met `import afbeeldingNaam from '../pad/naar/afbeelding.jpg'`

## Ontwikkeling

### Lokaal starten

```bash
npm run dev
```

### Bouwen voor productie

```bash
npm run build
```

### Deployment

De website wordt gedeployed op GitHub Pages. De build-configuratie is ingesteld om de website te deployen naar de `/praktijkbasis` submap.
