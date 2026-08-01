import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const Oplossingen = () => {
  return (
    <>
      <SEO
        title="Oplossingen - Voor Jouw Succes"
        description="Dit lost Voor Jouw Succes op: systemen die niet samenwerken, te veel handwerk, geen overzicht, vragen over AI, een verouderde website en het gemis van een sparringpartner."
        keywords="digitale oplossingen MKB, systemen koppelen, automatisering, AI advies, dashboards, website vernieuwen, sparringpartner ondernemers"
      />

      <div className="oplossingen-page">
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">Oplossingen</span>
            <h1>Dit los ik op</h1>
            <p>
              Herken het probleem, dan zie je meteen hoe we het aanpakken.
              Staat jouw vraag er niet bij? Juist dan wil ik hem horen.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-2">

              <div className="card solution-card" id="koppelen">
                <div className="sol-head">
                  <span className="sol-icon">🔗</span>
                  <h3>Systemen die met elkaar praten</h3>
                </div>
                <blockquote>
                  "Ons boekhoudpakket, de planning en het CRM zijn allemaal
                  eilandjes. We typen alles dubbel over."
                </blockquote>
                <ul>
                  <li>Ik laat je bestaande pakketten samenwerken via koppelingen</li>
                  <li>Gegevens komen vanzelf op de juiste plek terecht</li>
                  <li>Je hoeft niets te vervangen – we bouwen op wat er is</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> geen dubbel werk, minder fouten,
                  één kloppend geheel.
                </p>
              </div>

              <div className="card solution-card" id="automatiseren">
                <div className="sol-head">
                  <span className="sol-icon">🤖</span>
                  <h3>Handwerk dat vanzelf gaat</h3>
                </div>
                <blockquote>
                  "Elke week hetzelfde: offertes, facturen, planningen, mailtjes.
                  Daar gaat zóveel tijd in zitten."
                </blockquote>
                <ul>
                  <li>We kijken samen waar de tijd weglekt</li>
                  <li>Ik bouw digitale hulpjes (agents) die dat werk overnemen</li>
                  <li>Jij bepaalt wat ze mogen – jij houdt de controle</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> elke week uren terug voor werk dat
                  er écht toe doet.
                </p>
              </div>

              <div className="card solution-card" id="inzicht">
                <div className="sol-head">
                  <span className="sol-icon">📊</span>
                  <h3>Je cijfers eindelijk zichtbaar</h3>
                </div>
                <blockquote>
                  "Er zit van alles in onze systemen, maar niemand kan er iets
                  mee. We beslissen op gevoel."
                </blockquote>
                <ul>
                  <li>Ik lees je bestaande systemen uit</li>
                  <li>Overzichten en dashboards in taal die iedereen snapt</li>
                  <li>Actuele cijfers in plaats van achteraf terugkijken</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> je ziet wat er in je bedrijf
                  gebeurt – en stuurt op feiten.
                </p>
              </div>

              <div className="card solution-card" id="ai">
                <div className="sol-head">
                  <span className="sol-icon">💡</span>
                  <h3>AI die bij jouw bedrijf past</h3>
                </div>
                <blockquote>
                  "Iedereen roept AI, maar ik heb geen idee wat er voor ons
                  nuttig is – en wat gewoon hype is."
                </blockquote>
                <ul>
                  <li>We beginnen bij jouw werk, niet bij de tools</li>
                  <li>Ik laat concreet zien waar AI jou tijd of geld oplevert</li>
                  <li>Eerlijk advies – ook over wat je níet moet doen</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> AI die echt werk verzet in jouw
                  bedrijf, geen speeltje.
                </p>
              </div>

              <div className="card solution-card" id="website">
                <div className="sol-head">
                  <span className="sol-icon">🌐</span>
                  <h3>Vindbaar voor mensen én AI</h3>
                </div>
                <blockquote>
                  "Onze website stamt uit een andere tijd. Klanten zoeken via
                  Google en ChatGPT – en vinden ons niet."
                </blockquote>
                <ul>
                  <li>Bestaand verbeteren of nieuw bouwen – wat het beste past</li>
                  <li>Vindbaar in Google én voor AI-assistenten zoals ChatGPT</li>
                  <li>Zo gebouwd dat je er zelf mee uit de voeten kunt</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> een digitale omgeving die klanten
                  oplevert in plaats van tegenwerkt.
                </p>
              </div>

              <div className="card solution-card" id="sparren">
                <div className="sol-head">
                  <span className="sol-icon">🧭</span>
                  <h3>Een sparringpartner die meedenkt</h3>
                </div>
                <blockquote>
                  "Ik voel dat we digitaal een slag moeten maken, maar ik mis
                  iemand om het mee door te denken."
                </blockquote>
                <ul>
                  <li>Samen vooruitkijken: waar wil je naartoe?</li>
                  <li>Twintig jaar ondernemerservaring aan tafel</li>
                  <li>Een behapbaar plan in kleine stappen, in jouw tempo</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> richting en rust – je weet wat de
                  slimme volgende stap is.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Zo simpel werkt het</span>
              <h2>Drie stappen, geen gedoe</h2>
            </div>
            <div className="steps steps--three">
              <div className="step">
                <span className="step-num">1</span>
                <h3>Jij vertelt</h3>
                <p>Wat knelt er? In je eigen woorden. Gratis en vrijblijvend.</p>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <h3>Ik los het op</h3>
                <p>Ik bedenk en bouw de oplossing – techniek achter de schermen.</p>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <h3>Jij kunt verder</h3>
                <p>Snel resultaat, en je team kan er zelfstandig mee werken.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Staat jouw vraagstuk er niet bij?</h2>
            <p>
              Des te beter – nieuwe problemen oplossen is precies waar ik blij
              van word. Vertel wat er speelt en ik denk gratis met je mee.
            </p>
            <Link to="/contact" className="btn btn-light">Vertel wat er knelt</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Oplossingen;
