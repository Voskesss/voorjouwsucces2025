import React from 'react';
import { getAllSchemas } from './seoConfig';

/**
 * Component voor het toevoegen van structured data (JSON-LD) aan de website
 * Dit verbetert de SEO en zorgt voor rijke zoekresultaten in Google
 */
const SchemaMarkup = () => {
  const schemas = getAllSchemas();
  const jsonLd = JSON.stringify(schemas);

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default SchemaMarkup;
