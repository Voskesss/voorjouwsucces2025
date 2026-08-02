import React from 'react';
import Icon from './Icons';

// Voorbeelden om te prikkelen: deels gebouwd, deels ideeën die klaarliggen.
// Bewust geen klant-claims: het gaat erom te laten zien wat er kan.
const voorbeelden = [
  {
    icon: 'mic',
    tag: 'WhatsApp + AI',
    title: 'Offerte inspreken via WhatsApp',
    text: 'Onderweg een spraakbericht insturen: "offerte voor die klus van vanmorgen…" AI zet het om naar een nette offerte in de eigen huisstijl, klaar om te versturen. Van spraakbericht naar offerte in één minuut.',
    featured: true,
  },
  {
    icon: 'chat',
    tag: 'WhatsApp + AI',
    title: 'Kennisbank van het hele team',
    text: 'Medewerkers delen hun dag en ervaringen gewoon via WhatsApp. Collega\'s stellen daar ook hun vragen – en krijgen direct antwoord uit alle verzamelde kennis. Zo blijft ervaring in het bedrijf, ook als iemand vertrekt.',
    featured: true,
  },
  {
    icon: 'calendar',
    tag: 'Automatisering',
    title: 'Planningen die zichzelf bijwerken',
    text: 'Planning gekoppeld aan de systemen eromheen: wijzigt er iets, dan schuift de planning automatisch mee en weet iedereen waar hij aan toe is.',
  },
  {
    icon: 'link',
    tag: 'Koppelingen',
    title: 'Pakketten die samenwerken',
    text: 'Koppelingen (API\'s) tussen boekhouding, planning en andere systemen, zodat gegevens vanzelf op de juiste plek komen. Nooit meer dubbel overtypen.',
  },
  {
    icon: 'workflow',
    tag: 'Workflows',
    title: 'Standaardwerk dat vanzelf loopt',
    text: 'Terugkerende werkzaamheden – van facturen tot follow-upmailtjes – vastgelegd in slimme workflows die het werk zelfstandig afhandelen.',
  },
  {
    icon: 'globe',
    tag: 'Website',
    title: 'WordPress-website verbeterd',
    text: 'Bestaande WordPress-sites sneller, veiliger en beter vindbaar gemaakt – voor Google én voor AI-assistenten. Geen nieuwe site nodig, gewoon beter maken wat er is.',
  },
  {
    icon: 'sparkles',
    tag: 'Website + AI',
    title: 'Website die je bijhoudt via AI',
    text: 'Nieuwe website gekoppeld aan GitHub en Claude: teksten aanpassen of een pagina toevoegen doe je door het gewoon aan de AI te vragen. Geen webbouwer meer nodig voor elke wijziging. Deze site werkt precies zo – dat kan ik dus bewijzen.',
  },
  {
    icon: 'grid',
    tag: 'Maatwerk',
    title: 'Kleine apps op maat',
    text: 'Handige applicaties voor dingen waar geen standaardpakket voor bestaat – precies passend bij hoe het bedrijf werkt, zonder ballast.',
  },
];

function Voorbeelden() {
  return (
    <section className="section section--soft" id="voorbeelden">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kijk eens wat er kan</span>
          <h2>Dit kan er tegenwoordig gewoon</h2>
          <p>
            Een greep uit wat ik bouw – deels al gemaakt, deels ideeën die
            klaarliggen om voor jóu op maat gebouwd te worden. Zit er iets bij
            waarvan je denkt "dat wil ik ook"? Dan praten we verder.
          </p>
        </div>

        <div className="grid-3 ex-grid">
          {voorbeelden.map((v) => (
            <div className={`card ex-card${v.featured ? ' ex-card--featured' : ''}`} key={v.title}>
              <div className="ex-top">
                <span className="icon-chip"><Icon name={v.icon} /></span>
                <span className="ex-tag">{v.tag}</span>
              </div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Voorbeelden;
