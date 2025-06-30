/**
 * SEO-configuratie voor de Voor Jouw Succes website
 */

// Basis website informatie
export const SITE_NAME = 'Voor Jouw Succes';
export const SITE_URL = 'https://voskesss.github.io/voorjouwsucces2025';
export const SITE_DESCRIPTION = 'AI-gedreven organisatieontwikkeling voor maatschappelijke organisaties. Samen bouwen aan efficiëntere processen, betere teams en meer impact met praktische AI-oplossingen.';
export const SITE_KEYWORDS = 'AI implementatie, maatschappelijke organisaties, procesoptimalisatie, organisatieontwikkeling, coaching, non-profit, AI-oplossingen, teamontwikkeling, projectbegeleiding, facility management, digitale transformatie';
export const SITE_AUTHOR = 'Jos Klijnhout';
export const SITE_LANGUAGE = 'nl';

// Social media
export const SOCIAL_MEDIA = {
  facebook: '',  // Vul aan indien beschikbaar
  instagram: '', // Vul aan indien beschikbaar
  linkedin: '',  // Vul aan indien beschikbaar
};

// Structured data (JSON-LD) voor lokaal bedrijf
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': SITE_NAME,
  'description': SITE_DESCRIPTION,
  'image': `${SITE_URL}/images/logo.png`,
  'url': SITE_URL,
  'telephone': '06-12345678', // Vervang door het juiste telefoonnummer
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Nederland',
    'addressCountry': 'NL'
  },
  'serviceType': ['AI Implementatie', 'Organisatieontwikkeling', 'Procesoptimalisatie', 'Coaching'],
  'areaServed': 'Nederland',
  'priceRange': '€€',
  'sameAs': Object.values(SOCIAL_MEDIA).filter(Boolean)
});

// Structured data (JSON-LD) voor de website als geheel
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'url': SITE_URL,
  'name': SITE_NAME,
  'description': SITE_DESCRIPTION,
  'inLanguage': SITE_LANGUAGE,
  'potentialAction': {
    '@type': 'SearchAction',
    'target': `${SITE_URL}/zoeken?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
});

// Structured data (JSON-LD) voor een persoon (Jos Klijnhout)
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': SITE_AUTHOR,
  'jobTitle': 'AI Implementatie Specialist',
  'description': 'AI implementatie specialist met focus op maatschappelijke organisaties',
  'image': `${SITE_URL}/images/Jos Klijnhout.jpg`,
  'url': SITE_URL,
  'sameAs': Object.values(SOCIAL_MEDIA).filter(Boolean),
  'worksFor': {
    '@type': 'Organization',
    'name': SITE_NAME
  }
});

// Functie om alle schema's te combineren
export const getAllSchemas = () => [
  getWebsiteSchema(),
  getLocalBusinessSchema(),
  getPersonSchema()
];

// Functie om schema's om te zetten naar een JSON-string voor gebruik in script tag
export const getSchemasJsonLd = () => JSON.stringify(getAllSchemas());
