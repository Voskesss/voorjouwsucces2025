import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import Voorbeelden from '../components/Voorbeelden';
import Icon from '../components/Icons';

const problemChips = [
  { label: 'Systemen werken niet samen', to: '/oplossingen#koppelen' },
  { label: 'Te veel handwerk', to: '/oplossingen#automatiseren' },
  { label: 'Geen overzicht', to: '/oplossingen#inzicht' },
  { label: 'Wat moet ik met AI?', to: '/oplossingen#ai' },
  { label: 'Website is verouderd', to: '/oplossingen#website' },
  { label: 'Niemand om mee te sparren', to: '/oplossingen#sparren' },
];

function Home() {
  return (
    <div className="home-page">

      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="eyebrow">Voor bedrijven, klein én groot</span>
            <h1>
              De AI-duizendpoot<br />
              <span className="accent">die jouw bedrijf mist.</span>
            </h1>
            <p className="hero-lede">
              Ik ben Jos Klijnhout. Ik regel alles wat digitaal moet gebeuren in
              jouw bedrijf – van slimme AI en koppelingen tot je website. Ik help
              je op weg zodat je zelf verder kunt, of ik blijf gewoon je vaste
              partner. Jij kiest.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Vertel wat er knelt</Link>
              <Link to="/oplossingen" className="btn btn-ghost">Bekijk wat ik oplos</Link>
            </div>
            <div className="chip-row" aria-label="Veelvoorkomende problemen">
              {problemChips.map((chip) => (
                <Link key={chip.label} to={chip.to} className="chip">
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame photo-frame--hero">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                alt="In gesprek aan tafel over wat er beter kan in het bedrijf"
                loading="eager"
              />
            </div>
            <div className="float-chat" aria-hidden="true">
              <div className="bubble bubble--them">
                <span className="who">Ondernemer</span>
                Onze systemen praten niet met elkaar…
              </div>
              <div className="bubble bubble--us">
                <span className="who">Jos</span>
                Herkenbaar – en oplosbaar. Zal ik laten zien hoe?
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Herken je dit?</span>
            <h2>Dit los ik op</h2>
            <p>Klik op wat jij herkent en zie meteen hoe we het aanpakken.</p>
          </div>

          <div className="grid-3">
            <Link to="/oplossingen#koppelen" className="card problem-card">
              <h3>"Onze systemen praten niet met elkaar"</h3>
              <p>Alles dubbel invoeren, fouten overal.</p>
              <span className="solves">Ik laat je systemen samenwerken →</span>
            </Link>
            <Link to="/oplossingen#automatiseren" className="card problem-card">
              <h3>"We doen zóveel met de hand"</h3>
              <p>Offertes, facturen, mailtjes – elke week hetzelfde.</p>
              <span className="solves">Ik laat dat werk vanzelf lopen →</span>
            </Link>
            <Link to="/oplossingen#ai" className="card problem-card">
              <h3>"Iedereen roept AI, maar wat heb ík eraan?"</h3>
              <p>Kansen zat, maar wat is nuttig en wat is hype?</p>
              <span className="solves">Ik laat zien wat AI jou oplevert →</span>
            </Link>
            <Link to="/oplossingen#inzicht" className="card problem-card">
              <h3>"We beslissen op onderbuikgevoel"</h3>
              <p>De cijfers zitten in je systemen, maar niemand ziet ze.</p>
              <span className="solves">Ik maak je cijfers zichtbaar →</span>
            </Link>
            <Link to="/oplossingen#website" className="card problem-card">
              <h3>"Onze website is verouderd"</h3>
              <p>Klanten zoeken via Google én AI – en vinden jou niet.</p>
              <span className="solves">Ik maak je weer vindbaar →</span>
            </Link>
            <Link to="/oplossingen#sparren" className="card problem-card">
              <h3>"Ik mis iemand die meedenkt"</h3>
              <p>Digitaal moet er iets gebeuren, maar wat eerst?</p>
              <span className="solves">Ik denk en werk met je mee →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Zo simpel werkt het</span>
            <h2>Drie stappen, geen gedoe</h2>
          </div>

          <div className="steps steps--three">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Jij vertelt</h3>
              <p>
                Wat knelt er? Gewoon in je eigen woorden, bij de koffie of online.
                Gratis en vrijblijvend.
              </p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Ik los het op</h3>
              <p>
                Ik bedenk en bouw de oplossing. Jij hoort in gewone taal wat we
                doen en wat het oplevert.
              </p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Jij kiest hoe verder</h3>
              <p>
                Zelfstandig verder met wat ik je heb aangereikt, of ik blijf je
                vaste partner. Allebei prima.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Voorbeelden />

      <section className="section about-band">
        <div className="container">
          <div className="about-text">
            <span className="eyebrow">Wie je aan tafel krijgt</span>
            <h2>Geen bureau. Gewoon Jos.</h2>
            <p>
              Bij mij krijg je geen accountmanager, geen ticketsysteem en geen
              wisselende gezichten. Je belt of appt met mij – degene die het ook
              écht bouwt. Twintig jaar ondernemer, dus ik weet hoe jouw week
              eruitziet en dat het aan het eind van de maand moet kloppen.
            </p>
            <p>
              En dit vind ik zelf het belangrijkste: <strong>ik maak mezelf
              misbaar</strong>. Ik help je op weg zodat jij en je team er
              zelfstandig mee verder kunnen. Wil je liever dat ik betrokken
              blijf als vaste partner? Ook prima. Jij kiest, niet ik.
            </p>
            <p className="signature">— Jos</p>
            <Link to="/over-mij" className="read-more">Lees mijn verhaal →</Link>
          </div>
          <div className="about-side">
            <div className="photo-frame photo-frame--portrait">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Samen aan tafel: meedenken en meteen aanpakken"
                loading="lazy"
              />
            </div>
            <ul className="value-list">
              <li>
                <span className="icon-chip"><Icon name="chat" /></span>
                <div>
                  <h3>Gewone taal</h3>
                  <p>Je hoeft niets van techniek te weten. Dat is mijn werk, niet het jouwe.</p>
                </div>
              </li>
              <li>
                <span className="icon-chip"><Icon name="steps" /></span>
                <div>
                  <h3>Klein beginnen</h3>
                  <p>Snel resultaat, in jouw tempo verder. Geen trajecten van een half jaar.</p>
                </div>
              </li>
              <li>
                <span className="icon-chip"><Icon name="user" /></span>
                <div>
                  <h3>Eén aanspreekpunt</h3>
                  <p>Van idee tot werkende oplossing – je schakelt altijd met mij.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Faq />

      <section className="cta-band">
        <div className="container">
          <h2>Waar loop jij tegenaan?</h2>
          <p>
            Mail me wat er knelt – in je eigen woorden, het hoeft geen net
            verhaal te zijn. Je krijgt altijd minstens één idee waar je meteen
            wat aan hebt.
          </p>
          <Link to="/contact" className="btn btn-light">Plan een gratis kennismaking</Link>
          <p className="cta-note">
            Geen verkooppraatje. Als ik denk dat je iets niet nodig hebt, zeg ik dat gewoon.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
