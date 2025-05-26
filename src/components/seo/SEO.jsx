import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// SEO-configuratie voor elke pagina
const seoConfig = {
  // Startpagina
  '/': {
    title: 'Praktijkbasis - Lichaamsgerichte traumatherapie met een christelijke basis',
    description: 'Welkom bij Praktijkbasis - een plek van rust en herstel. Lichaamsgerichte traumatherapie met een christelijke basis in Havelte, Drenthe.',
    keywords: 'praktijkbasis, lichaamsgerichte traumatherapie, christelijke basis, Siska Greving, balans, rust, herstel, trauma, Havelte',
    ogImage: '/images/Siska Greving 21-aangepast.jpg',
  },
  // Over mij pagina
  '/over-mij': {
    title: 'Over Siska Greving - Lichaamsgericht Traumatherapeut | Praktijkbasis',
    description: 'Maak kennis met Siska Greving, lichaamsgericht traumatherapeut met een christelijke basis bij Praktijkbasis in Havelte, Drenthe.',
    keywords: 'Siska Greving, lichaamsgericht traumatherapeut, christelijke basis, praktijkbasis, over mij, persoonlijke groei',
    ogImage: '/images/over-siska-energetische-therapie.jpg',
  },
  // Therapie pagina
  '/therapie': {
    title: 'Lichaamsgerichte Traumatherapie - Vind Balans en Herstel | Praktijkbasis',
    description: 'Ontdek lichaamsgerichte traumatherapie bij Praktijkbasis in Havelte. Werk aan innerlijke rust, herstel van trauma en vind balans in je leven.',
    keywords: 'lichaamsgerichte traumatherapie, christelijke basis, traumaverwerking, innerlijke rust, balans, praktijkbasis, Havelte',
    ogImage: '/images/mijn-missie-energetisch-aangepast.jpg',
  },
  // Wandelingen pagina
  '/wandelingen': {
    title: 'Therapeutische Wandelingen in de Natuur | Praktijkbasis Havelte',
    description: 'Therapeutische wandelingen in de natuur van Drenthe. Combineer de helende kracht van de natuur met lichaamsgerichte traumatherapie.',
    keywords: 'therapeutische wandelingen, natuur, Drenthe, lichaamsgerichte traumatherapie, praktijkbasis, Havelte, herstel',
    ogImage: '/images/therapeutische-wandeling.jpg',
  },
  // Contact pagina
  '/contact': {
    title: 'Contact - Maak een Afspraak | Praktijkbasis Havelte',
    description: 'Neem contact op met Praktijkbasis voor lichaamsgerichte traumatherapie in Havelte, Drenthe. Maak een afspraak met Siska Greving.',
    keywords: 'contact, afspraak maken, praktijkbasis, Siska Greving, lichaamsgerichte traumatherapie, Havelte, Drenthe',
    ogImage: '/images/Siska Greving 21-aangepast.jpg',
  },
  // Praktische informatie pagina
  '/praktische-info': {
    title: 'Praktische Informatie - Locatie, Tarieven & Meer | Praktijkbasis',
    description: 'Praktische informatie over Praktijkbasis in Havelte. Locatie, tarieven, vergoedingen en alles wat je moet weten voor je eerste afspraak.',
    keywords: 'praktische informatie, locatie, tarieven, vergoedingen, afspraak, praktijkbasis, Havelte, lichaamsgerichte traumatherapie',
    ogImage: '/images/Siska Greving 21-aangepast.jpg',
  },
  // FAQ pagina
  '/faq': {
    title: 'Veelgestelde Vragen over Lichaamsgerichte Traumatherapie | Praktijkbasis',
    description: 'Antwoorden op veelgestelde vragen over lichaamsgerichte traumatherapie bij Praktijkbasis in Havelte. Wat kun je verwachten tijdens een sessie?',
    keywords: 'veelgestelde vragen, FAQ, lichaamsgerichte traumatherapie, praktijkbasis, wat te verwachten, sessie, Havelte',
    ogImage: '/images/Siska Greving 21-aangepast.jpg',
  },
};

// Standaard SEO-configuratie als fallback
const defaultSeo = {
  title: 'Praktijkbasis - Lichaamsgerichte traumatherapie met een christelijke basis',
  description: 'Praktijkbasis - Lichaamsgerichte traumatherapie met een christelijke basis in Havelte, Drenthe. Siska Greving helpt mensen om weer in balans te komen en rust te vinden.',
  keywords: 'praktijkbasis, lichaamsgerichte traumatherapie, christelijke basis, Siska Greving, balans, rust, herstel, trauma, Havelte, Drenthe',
  ogImage: '/images/Siska Greving 21-aangepast.jpg',
  siteUrl: 'https://praktijkbasis.eu',
};

/**
 * SEO-component voor dynamische SEO-optimalisatie
 * @param {Object} props - Component props
 * @param {string} props.title - Aangepaste titel (overschrijft configuratie)
 * @param {string} props.description - Aangepaste beschrijving (overschrijft configuratie)
 * @param {string} props.keywords - Aangepaste keywords (overschrijft configuratie)
 * @param {string} props.ogImage - Aangepaste OG-afbeelding (overschrijft configuratie)
 */
const SEO = ({
  title: customTitle,
  description: customDescription,
  keywords: customKeywords,
  ogImage: customOgImage,
}) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Haal SEO-configuratie op voor huidige pagina of gebruik standaard
  const pageSeo = seoConfig[path] || defaultSeo;
  
  // Combineer pagina-configuratie met aangepaste props
  const title = customTitle || pageSeo.title;
  const description = customDescription || pageSeo.description;
  const keywords = customKeywords || pageSeo.keywords;
  const ogImage = customOgImage || pageSeo.ogImage;
  const canonicalUrl = `${defaultSeo.siteUrl}${path}`;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', `${defaultSeo.siteUrl}${ogImage}`, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = canonicalUrl;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    }
  }, [path, title, description, keywords, ogImage, canonicalUrl]);
  
  // Helper functie om meta tags bij te werken of aan te maken
  const updateMetaTag = (name, content, attributeName = 'name') => {
    let metaTag = document.querySelector(`meta[${attributeName}="${name}"]`);
    
    if (metaTag) {
      metaTag.content = content;
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attributeName, name);
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };
  
  // Deze component rendert niets zichtbaars
  return null;
};

export default SEO;
