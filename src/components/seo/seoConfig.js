/**
 * SEO-configuratie voor de website van Jos Klijnhout
 */

// Basis website informatie
export const SITE_NAME = 'Jos Klijnhout';
export const SITE_URL = 'https://voskesss.github.io/voorjouwsucces2025';
export const SITE_DESCRIPTION = 'Ik ben Jos Klijnhout, de AI-duizendpoot voor bedrijven, klein en groot. Ik bedenk en bouw AI-oplossingen, koppelingen, automatisering en websites - en help je op weg zodat je zelf verder kunt, of blijf je vaste partner.';
export const SITE_KEYWORDS = 'jos klijnhout, digitale oplossingen MKB, AI oplossingen, systemen koppelen, API koppelingen, systemen uitlezen, agents bouwen, automatisering, sparringpartner ondernemers';
export const SITE_AUTHOR = 'Jos Klijnhout';
export const SITE_LANGUAGE = 'nl';

// Social media
export const SOCIAL_MEDIA = {
  facebook: '',  // Vul aan indien beschikbaar
  instagram: '', // Vul aan indien beschikbaar
  linkedin: 'https://www.linkedin.com/in/josklijnhout/',
};

// Structured data (JSON-LD) voor lokaal bedrijf
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': SITE_NAME,
  'description': SITE_DESCRIPTION,
  'image': `${SITE_URL}/images/logo-nieuw.png`,
  'url': SITE_URL,
  'email': 'josklijnhout@hotmail.com',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Oosterbeek',
    'addressCountry': 'NL'
  },
  'serviceType': [
    'AI-oplossingen op maat',
    'Systemen koppelen (API-verbindingen)',
    'Systemen uitlezen en inzicht',
    'Agents en automatisering',
    'Digitale omgeving vernieuwen',
    'Sparringpartner voor ondernemers'
  ],
  'areaServed': 'Nederland',
  'sameAs': Object.values(SOCIAL_MEDIA).filter(Boolean)
});

// Structured data (JSON-LD) voor de website als geheel
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'url': SITE_URL,
  'name': SITE_NAME,
  'description': SITE_DESCRIPTION,
  'inLanguage': SITE_LANGUAGE
});

// Structured data (JSON-LD) voor een persoon (Jos Klijnhout)
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': SITE_AUTHOR,
  'jobTitle': 'AI-duizendpoot voor bedrijven: oplossingsdenker, bouwer en sparringpartner',
  'description': 'Oplossingen bedenken is mijn ding, mensen helpen is mijn drive. Als AI-duizendpoot help ik bedrijven op weg zodat ze zelfstandig verder kunnen - of ik blijf als vaste partner betrokken.',
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
