import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';

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
              Digitaal gedoe?<br />
              <span className="accent">Ik los het op.</span>
            </h1>
            <p className="hero-lede">
              Ik ben Jos. Bedrijven bellen mij als er iets opgelost moet worden
              in hun digitale omgeving. Jij vertelt wat er knelt – ik regel de
              rest. In gewone taal.
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

          <div className="chat-card" aria-hidden="true">
            <span className="chat-title">Zo begint het meestal</span>
            <div className="bubble bubble--them">
              <span className="who">Ondernemer</span>
              Onze systemen praten niet met elkaar. We typen alles twee keer over…
            </div>
            <div className="bubble bubble--us">
              <span className="who">Jos</span>
              Herkenbaar – en oplosbaar. Zonder alles te hoeven vervangen.
              Zal ik laten zien hoe?
            </div>
            <div className="bubble bubble--them">
              <span className="who">Ondernemer</span>
              Graag. Maar ik ben geen techneut hè.
            </div>
            <div className="bubble bubble--us">
              <span className="who">Jos</span>
              Hoeft ook niet. Dat ben ik voor jou. 😉
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
              <h3>Jij kunt verder</h3>
              <p>
                Snel resultaat, en jij en je team kunnen er zelf mee werken.
                Geen afhankelijkheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft about-band">
        <div className="container">
          <div className="about-text">
            <span className="eyebrow">Wie je aan tafel krijgt</span>
            <h2>Oplossingen bedenken is mijn ding, mensen helpen is mijn drive</h2>
            <p>
              Twintig jaar ondernemer, altijd de persoon die gebeld wordt als er
              iets opgelost moet worden. De afgelopen jaren volledig gedoken in
              wat er nu kan met AI en slimme koppelingen – niet als hype, maar
              als gereedschap voor échte problemen.
            </p>
            <p>
              <strong>Mijn belofte:</strong> eerlijk advies in gewone taal.
              Als je iets niet nodig hebt, zeg ik dat gewoon.
            </p>
            <Link to="/over-mij" className="read-more">Lees mijn verhaal →</Link>
          </div>
          <ul className="value-list">
            <li>
              <span className="v-icon">🗣️</span>
              <div>
                <h3>Gewone taal</h3>
                <p>Je hoeft niets van techniek te weten. Dat is mijn werk, niet het jouwe.</p>
              </div>
            </li>
            <li>
              <span className="v-icon">🪜</span>
              <div>
                <h3>Klein beginnen</h3>
                <p>Snel resultaat, in jouw tempo verder. Geen trajecten van een half jaar.</p>
              </div>
            </li>
            <li>
              <span className="v-icon">🤝</span>
              <div>
                <h3>Eén aanspreekpunt</h3>
                <p>Van idee tot werkende oplossing – je hoeft nooit met een techneut te schakelen.</p>
              </div>
            </li>
          </ul>
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
