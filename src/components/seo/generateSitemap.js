/**
 * Script om een XML-sitemap te genereren voor betere indexering door zoekmachines
 */

import fs from 'fs';
import path from 'path';

// Configuratie
const SITE_URL = 'https://praktijkbasis.eu';
const OUTPUT_PATH = path.resolve(process.cwd(), 'public', 'sitemap.xml');

// Lijst met alle pagina's van de website
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/over-mij', priority: '0.8', changefreq: 'monthly' },
  { url: '/therapie', priority: '0.8', changefreq: 'monthly' },
  { url: '/wandelingen', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
];

// Genereer de XML-sitemap
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Voeg elke pagina toe aan de sitemap
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Schrijf de sitemap naar een bestand
const writeSitemap = () => {
  const sitemap = generateSitemap();
  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap gegenereerd op ${OUTPUT_PATH}`);
};

// Voer het script uit als het direct wordt aangeroepen
if (require.main === module) {
  writeSitemap();
}

export { generateSitemap, writeSitemap };
