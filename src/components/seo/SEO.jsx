import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// SEO-configuratie voor elke pagina
const seoConfig = {
  // Startpagina
  '/': {
    title: 'Jos Klijnhout - Iets met AI, maar waar begin je?',
    description: 'Ik ben Jos Klijnhout: ik bedenk en bouw AI-oplossingen, koppelingen, automatisering en websites voor bedrijven, klein en groot. Ik help je op weg zodat je zelf verder kunt - of blijf je vaste partner.',
    keywords: 'jos klijnhout, digitale oplossingen MKB, AI oplossingen, systemen koppelen, agents bouwen, automatisering, oplossingen bedenken',
    ogImage: '/images/logo-nieuw.png',
  },
  // Over mij pagina
  '/over-mij': {
    title: 'Over Mij - Oplossingen Bedenken is Mijn Ding | Jos Klijnhout',
    description: 'Jos Klijnhout uit Oosterbeek: 20 jaar ondernemer (facilitaire organisatie van 14 naar 350 medewerkers), 30 jaar techniek, 5 jaar dagelijks AI met drie eigen platforms. Geen adviseur die een rapport achterlaat - hij bouwt het ook.',
    keywords: 'Jos Klijnhout, over jos, oplossingsdenker, sparringpartner ondernemers, AI duizendpoot',
    ogImage: '/images/logo-nieuw.png',
  },
  // Oplossingen pagina
  '/oplossingen': {
    title: 'Oplossingen - Begin bij het Probleem, Niet bij de Techniek | Jos Klijnhout',
    description: 'Digitale oplossingen vanuit jouw vraagstuk: systemen die met elkaar praten, agents die werk uit handen nemen, inzicht uit je eigen data en AI die bij jouw bedrijf past.',
    keywords: 'oplossingen MKB, systemen koppelen, API koppelingen, agents bouwen, systemen uitlezen, AI implementatie, jos klijnhout',
    ogImage: '/images/logo-nieuw.png',
  },
  // Contact pagina
  '/contact': {
    title: 'Contact - Vertel Me Je Verhaal | Jos Klijnhout',
    description: 'Vertel Jos waar je tegenaan loopt. Een kennismakingsgesprek is gratis en vrijblijvend, en je krijgt altijd minstens één idee waar je meteen wat aan hebt.',
    keywords: 'contact, kennismaking, gratis gesprek, jos klijnhout',
    ogImage: '/images/logo-nieuw.png',
  },
};

// Standaard SEO-configuratie als fallback
const defaultSeo = {
  title: 'Jos Klijnhout - De AI-duizendpoot die jouw bedrijf mist',
  description: 'Ik ben Jos Klijnhout, de AI-duizendpoot voor bedrijven, klein en groot. Digitale problemen opgelost in gewone taal, zonder technisch verhaal.',
  keywords: 'jos klijnhout, AI duizendpoot, digitale oplossingen MKB, oplossingen bedenken, automatisering',
  ogImage: '/images/logo-nieuw.png',
  siteUrl: 'https://voskesss.github.io/voorjouwsucces2025',
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
