import React from 'react';

// Echte, gebouwde oplossingen. Eén lijst, gebruikt op meerdere pagina's.
const voorbeelden = [
  {
    icon: '🎙️',
    tag: 'WhatsApp + AI',
    title: 'Offerte inspreken via WhatsApp',
    text: 'Onderweg een spraakbericht insturen: "offerte voor die klus van vanmorgen…" AI zet het om naar een nette offerte in de eigen huisstijl, klaar om te versturen. Van spraakbericht naar offerte in één minuut.',
    featured: true,
  },
  {
    icon: '🧠',
    tag: 'WhatsApp + AI',
    title: 'Kennisbank van het hele team',
    text: 'Medewerkers delen hun dag en ervaringen gewoon via WhatsApp. Collega\'s stellen daar ook hun vragen – en krijgen direct antwoord uit alle verzamelde kennis. Zo blijft ervaring in het bedrijf, ook als iemand vertrekt.',
    featured: true,
  },
  {
    icon: '📅',
    tag: 'Automatisering',
    title: 'Planningen die zichzelf bijwerken',
    text: 'Planning gekoppeld aan de systemen eromheen: wijzigt er iets, dan schuift de planning automatisch mee en weet iedereen waar hij aan toe is.',
  },
  {
    icon: '🔗',
    tag: 'Koppelingen',
    title: 'Pakketten die samenwerken',
    text: 'Koppelingen (API\'s) tussen boekhouding, planning en andere systemen, zodat gegevens vanzelf op de juiste plek komen. Nooit meer dubbel overtypen.',
  },
  {
    icon: '⚙️',
    tag: 'Workflows',
    title: 'Standaardwerk dat vanzelf loopt',
    text: 'Terugkerende werkzaamheden – van facturen tot follow-upmailtjes – vastgelegd in slimme workflows die het werk zelfstandig afhandelen.',
  },
  {
    icon: '🌐',
    tag: 'Website',
    title: 'WordPress-website verbeterd',
    text: 'Bestaande WordPress-sites sneller, veiliger en beter vindbaar gemaakt – voor Google én voor AI-assistenten. Geen nieuwe site nodig, gewoon beter maken wat er is.',
  },
  {
    icon: '🤖',
    tag: 'Website + AI',
    title: 'Website die je bijhoudt via AI',
    text: 'Nieuwe website gekoppeld aan GitHub en Claude: teksten aanpassen of een pagina toevoegen doe je door het gewoon aan de AI te vragen. Geen webbouwer meer nodig voor elke wijziging. Deze site werkt precies zo.',
  },
  {
    icon: '🧩',
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
          <span className="eyebrow">Uit de praktijk</span>
          <h2>Echt gemaakt, echt in gebruik</h2>
          <p>
            Geen mooie beloftes maar dingen die al draaien bij bedrijven.
            Een greep uit wat ik gebouwd heb.
          </p>
        </div>

        <div className="grid-3 ex-grid">
          {voorbeelden.map((v) => (
            <div className={`card ex-card${v.featured ? ' ex-card--featured' : ''}`} key={v.title}>
              <div className="ex-top">
                <span className="ex-icon">{v.icon}</span>
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
