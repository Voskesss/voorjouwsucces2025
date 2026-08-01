import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const Oplossingen = () => {
  return (
    <>
      <SEO
        title="Oplossingen - Voor Jouw Succes"
        description="Digitale oplossingen voor MKB, vanuit jouw vraagstuk: AI-oplossingen bedenken, systemen koppelen en uitlezen, agents bouwen en je digitale omgeving vernieuwen."
        keywords="digitale oplossingen MKB, systemen koppelen, API koppeling, systemen uitlezen, AI agents bouwen, automatisering, digitale omgeving vernieuwen"
      />

      <div className="oplossingen-page">
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">Oplossingen</span>
            <h1>Begin bij het probleem, niet bij de techniek</h1>
            <p>
              Geen diensten uit een folder. Hieronder zie je de vraagstukken waarmee
              bedrijven bij me aankloppen – en hoe we die samen oplossen. Staat jouw
              vraag er niet bij? Juist dan wil ik hem horen.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-2">

              <div className="card solution-card">
                <div className="sol-head">
                  <span className="sol-icon">🔗</span>
                  <h3>Systemen die met elkaar praten</h3>
                </div>
                <blockquote>
                  "Ons boekhoudpakket, de planning en het CRM zijn allemaal eilandjes.
                  We typen alles dubbel over."
                </blockquote>
                <ul>
                  <li>Ik breng in kaart welke systemen je hebt en wat ze moeten uitwisselen</li>
                  <li>Via slimme koppelingen (API's) laat ik ze samenwerken</li>
                  <li>Je hoeft niet alles te vervangen – we bouwen op wat er is</li>
                  <li>Gegevens komen vanzelf op de juiste plek terecht</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> geen dubbel werk meer, minder fouten en
                  één kloppend geheel.
                </p>
              </div>

              <div className="card solution-card">
                <div className="sol-head">
                  <span className="sol-icon">🤖</span>
                  <h3>Agents die werk uit handen nemen</h3>
                </div>
                <blockquote>
                  "Elke week dezelfde handelingen: offertes, planningen, mailtjes.
                  Daar gaat zóveel tijd in zitten."
                </blockquote>
                <ul>
                  <li>We kijken samen waar de tijd weglekt</li>
                  <li>Ik bouw digitale hulpjes (agents) die taken zelfstandig uitvoeren</li>
                  <li>Van vragen beantwoorden tot gegevens verwerken en acties uitzetten</li>
                  <li>Jij bepaalt wat ze wel en niet mogen – jij houdt de controle</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> elke week uren terug voor werk dat er
                  écht toe doet.
                </p>
              </div>

              <div className="card solution-card">
                <div className="sol-head">
                  <span className="sol-icon">📊</span>
                  <h3>Inzicht uit je eigen systemen</h3>
                </div>
                <blockquote>
                  "Er zit van alles in onze systemen, maar niemand kan er iets mee.
                  We beslissen op gevoel."
                </blockquote>
                <ul>
                  <li>Ik lees je bestaande systemen uit en haal eruit wat erin zit</li>
                  <li>Overzichten en dashboards in taal die iedereen snapt</li>
                  <li>Actuele cijfers in plaats van achteraf terugkijken</li>
                  <li>Sturen op feiten in plaats van op onderbuik</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> je ziet eindelijk wat er in je bedrijf
                  gebeurt – en kunt daarop sturen.
                </p>
              </div>

              <div className="card solution-card">
                <div className="sol-head">
                  <span className="sol-icon">💡</span>
                  <h3>AI die bij jouw bedrijf past</h3>
                </div>
                <blockquote>
                  "Iedereen roept AI, maar ik heb geen idee wat er voor ons nuttig is
                  – en wat gewoon hype is."
                </blockquote>
                <ul>
                  <li>We beginnen bij jouw processen, niet bij de tools</li>
                  <li>Ik laat concreet zien waar AI jou tijd of geld oplevert</li>
                  <li>Eerlijk advies: ook over wat je níet moet doen</li>
                  <li>Van eerste experiment tot oplossing die dagelijks draait</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> AI die echt werk verzet in jouw bedrijf,
                  geen speeltje.
                </p>
              </div>

              <div className="card solution-card">
                <div className="sol-head">
                  <span className="sol-icon">🌐</span>
                  <h3>Een digitale omgeving van nu</h3>
                </div>
                <blockquote>
                  "Onze website en tools stammen uit een andere tijd. Het remt ons
                  – en klanten zien het ook."
                </blockquote>
                <ul>
                  <li>Bestaand verbeteren of nieuw bouwen – wat het beste past</li>
                  <li>Website, klantportaal of interne tools, op maat</li>
                  <li>Vindbaar voor klanten én voor AI-assistenten zoals ChatGPT</li>
                  <li>Zo gebouwd dat je er zelf mee uit de voeten kunt</li>
                </ul>
                <p className="sol-result">
                  <strong>Resultaat:</strong> een digitale omgeving die meewerkt in
                  plaats van tegenwerkt.
                </p>
              </div>

              <div className="card solution-card">
                <div className="sol-head">
                  <span className="sol-icon">🧭</span>
                  <h3>Een sparringpartner die meedenkt</h3>
                </div>
                <blockquote>
                  "Ik voel dat we digitaal een slag moeten maken, maar ik mis iemand
                  om het mee door te denken."
                </blockquote>
                <ul>
                  <li>Samen vooruitkijken: waar wil je met je bedrijf naartoe?</li>
                  <li>Twintig jaar ondernemerservaring aan tafel</li>
                  <li>Een behapbaar plan in kleine stappen, in jouw tempo</li>
                  <li>Eén aanspreekpunt van idee tot werkende oplossing</li>
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
              <span className="eyebrow">Werkwijze</span>
              <h2>Zo pakken we het aan</h2>
            </div>
            <div className="steps">
              <div className="step">
                <span className="step-num">1</span>
                <h3>Jouw vraagstuk op tafel</h3>
                <p>Gratis kennismaking. Jij vertelt wat er knelt, ik luister en denk direct mee.</p>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <h3>Oplossing in gewone taal</h3>
                <p>Je hoort precies wat we gaan doen en wat het oplevert. Geen jargon, geen dikke rapporten.</p>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <h3>Bouwen en koppelen</h3>
                <p>Ik bouw en test in kleine stappen met snel resultaat. Techniek achter de schermen.</p>
              </div>
              <div className="step">
                <span className="step-num">4</span>
                <h3>Jij verder, met grip</h3>
                <p>Jij en je team kunnen er zelfstandig mee verder. Geen afhankelijkheid.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Staat jouw vraagstuk er niet bij?</h2>
            <p>
              Des te beter – nieuwe problemen oplossen is precies waar ik blij van
              word. Vertel wat er speelt en ik denk gratis met je mee.
            </p>
            <Link to="/contact" className="btn btn-light">Vertel je vraagstuk</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Oplossingen;
