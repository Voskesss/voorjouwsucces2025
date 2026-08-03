import React from 'react';

// Zwevende decoratieve vormen in merkkleuren. Puur visueel (aria-hidden);
// de beweging stopt automatisch bij prefers-reduced-motion.
function FloatShapes({ variant = 'light' }) {
  return (
    <div className={`float-shapes float-shapes--${variant}`} aria-hidden="true">
      <span className="fs fs-circle fs-1"></span>
      <span className="fs fs-ring fs-2"></span>
      <span className="fs fs-plus fs-3"></span>
      <span className="fs fs-dot fs-4"></span>
      <span className="fs fs-star fs-5"></span>
      <span className="fs fs-ring fs-6"></span>
      <span className="fs fs-dot fs-7"></span>
    </div>
  );
}

export default FloatShapes;
