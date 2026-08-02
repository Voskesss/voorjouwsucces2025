import React from 'react';

const words = [
  'Tijd terug',
  'Kennis ontsloten',
  'Systemen die praten',
  'Mensen die meegaan',
  'AI in de praktijk',
  'Eerst het werk, dan de techniek',
];

// Doorlopende tekstband tussen secties: bindt de blokken visueel aan elkaar.
// De inhoud staat er twee keer in voor een naadloze loop; de tweede keer
// verborgen voor screenreaders.
function Marquee() {
  const line = words.map((w) => (
    <span key={w}>{w}<em aria-hidden="true"> • </em></span>
  ));
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        <div className="marquee-group">{line}</div>
        <div className="marquee-group" aria-hidden="true">{line}</div>
      </div>
    </div>
  );
}

export default Marquee;
