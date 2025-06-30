import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// SEO-configuratie voor elke pagina
const seoConfig = {
  // Startpagina
  '/': {
    title: 'Voor Jouw Succes - Coaching en Begeleiding voor Ondernemers',
    description: 'Welkom bij Voor Jouw Succes - Professionele coaching en begeleiding voor ondernemers die willen groeien en hun doelen willen bereiken.',
    keywords: 'voor jouw succes, coaching, ondernemerscoaching, begeleiding, business coaching, groei, ondernemers',
    ogImage: '/images/home-hero.jpg',
  },
  // Over mij pagina
  '/over-mij': {
    title: 'Over Mij - Jouw Coach voor Ondernemerssucces | Voor Jouw Succes',
    description: 'Maak kennis met de coach achter Voor Jouw Succes. Persoonlijke begeleiding voor ondernemers die willen groeien en hun doelen willen bereiken.',
    keywords: 'over mij, coach, ondernemerscoach, voor jouw succes, persoonlijke groei, ondernemerschap',
    ogImage: '/images/over-mij.jpg',
  },
  // Diensten pagina
  '/diensten': {
    title: 'Diensten - Coaching en Begeleiding op Maat | Voor Jouw Succes',
    description: 'Ontdek de verschillende coaching en begeleidingsdiensten van Voor Jouw Succes. Op maat gemaakte trajecten voor jouw specifieke situatie.',
    keywords: 'diensten, coaching, begeleiding, ondernemerscoaching, business coaching, voor jouw succes',
    ogImage: '/images/diensten.jpg',
  },
  // AI Implementatie pagina
  '/ai-implementatie': {
    title: 'AI-Implementatie voor Maatschappelijke Organisaties | Voor Jouw Succes',
    description: 'Specialistische begeleiding bij het implementeren van AI in maatschappelijke organisaties. Ontdek hoe AI jouw organisatie kan versterken.',
    keywords: 'AI implementatie, kunstmatige intelligentie, maatschappelijke organisaties, digitale transformatie, voor jouw succes',
    ogImage: '/images/ai-implementatie.jpg',
  },
  // Procesoptimalisatie pagina
  '/procesoptimalisatie': {
    title: 'Procesoptimalisatie - Efficiënter Werken | Voor Jouw Succes',
    description: 'Optimaliseer je bedrijfsprocessen en werk efficiënter met de begeleiding van Voor Jouw Succes. Verhoog je productiviteit en verlaag kosten.',
    keywords: 'procesoptimalisatie, efficiënter werken, bedrijfsprocessen, workflow, productiviteit, voor jouw succes',
    ogImage: '/images/procesoptimalisatie.jpg',
  },
  // Contact pagina
  '/contact': {
    title: 'Contact - Neem Contact Op | Voor Jouw Succes',
    description: 'Neem contact op met Voor Jouw Succes voor meer informatie over coaching en begeleiding. Samen werken we aan jouw succes.',
    keywords: 'contact, afspraak maken, voor jouw succes, coaching, begeleiding, ondernemerscoaching',
    ogImage: '/images/contact.jpg',
  },
  // Praktische informatie pagina
  '/praktische-info': {
    title: 'Praktische Informatie - Werkwijze & Tarieven | Voor Jouw Succes',
    description: 'Praktische informatie over Voor Jouw Succes. Werkwijze, tarieven en alles wat je moet weten voordat we samen aan de slag gaan.',
    keywords: 'praktische informatie, werkwijze, tarieven, coaching, voor jouw succes',
    ogImage: '/images/praktische-info.jpg',
  },
};

// Standaard SEO-configuratie als fallback
const defaultSeo = {
  title: 'Voor Jouw Succes - Coaching en Begeleiding voor Ondernemers',
  description: 'Voor Jouw Succes biedt professionele coaching en begeleiding voor ondernemers die willen groeien en hun doelen willen bereiken.',
  keywords: 'voor jouw succes, coaching, ondernemerscoaching, begeleiding, business coaching, groei, ondernemers',
  ogImage: '/images/home-hero.jpg',
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
