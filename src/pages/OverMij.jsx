import React from 'react';
import '../styles/OverMij.css';
import overSiskaImg from '../assets/images/over-siska-energetische-therapie.jpg';
import siskaPortret from '../assets/images/Siska Greving 21-aangepast.jpg';

function OverMij() {
  return (
    <div className="over-mij-page">
      <div className="decorative-flower-2 animate-float" style={{top: '150px', right: '8%'}}></div>
      <div className="decorative-butterfly" style={{bottom: '30%', left: '5%'}}></div>
      <section className="hero-section">
        <div className="container">
          <h1>Over Siska</h1>
          <div className="hero-content">
            <div className="hero-image">
              <img src={siskaPortret} alt="Siska Greving, lichaamsgericht traumatherapeut" />
            </div>
            <div className="hero-text">
              <p className="intro-text">
                Mijn naam is Siska Greving. Als lichaamsgericht traumatherapeut geloof ik in de veerkracht van ieder mens. Vanuit een diep gewortelde overtuiging dat ieder mens waardevol en geliefd is, begeleid ik jongeren en volwassenen op hun weg naar herstel en balans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Mijn visie</h2>
              <p>
                Ik werk vanuit mijn christelijke levensovertuiging, wat voor mij betekent dat ik ieder mens zie als waardevol en geliefd. Deze overtuiging vormt de basis van mijn werk als lichaamsgericht traumatherapeut. Ik geloof dat echte balans ontstaat wanneer iemand leeft naar belangrijke waarden zoals liefde, innerlijke rust, gemeenschap, vertrouwen en verbondenheid.
              </p>
              <p>
                In mijn praktijk staat de mens als geheel centraal - lichaam, geest en ziel. Trauma kan zich vastzetten in het lichaam, en door aandachtig te luisteren naar zowel je verhaal als de signalen van je lichaam, kunnen we samen werken aan herstel en het vinden van balans.
              </p>
            </div>
            <div className="mission-image">
              <img src={overSiskaImg} alt="Siska Greving in praktijk" />
            </div>
          </div>
        </div>
      </section>

      <section className="background-section">
        <div className="container">
          <h2>Mijn achtergrond</h2>
          <div className="background-content">
            <p>
              Mijn weg naar het worden van lichaamsgericht traumatherapeut begon vanuit een persoonlijke zoektocht naar balans en betekenis. Ik heb ervaren hoe belangrijk het is om in verbinding te staan met jezelf, je lichaam en je omgeving. Deze ervaring heeft mij geïnspireerd om anderen te helpen bij hun eigen helingsproces.
            </p>
            <p>
              Ik ben professioneel opgeleid als lichaamsgericht traumatherapeut en blijf mij voortdurend ontwikkelen door middel van bijscholing en verdieping in nieuwe inzichten op het gebied van traumaverwerking en lichaamsgerichte therapie.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Mijn kernwaarden</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Veiligheid</h3>
              <p>Ik bied een veilige haven waar je verhaal welkom is. Vertrouwelijkheid, geborgenheid en gelijkwaardigheid staan centraal in mijn praktijk.</p>
            </div>
            <div className="value-card">
              <h3>Liefde & Compassie</h3>
              <p>Ik benader iedereen met liefde, respect en zachtheid. Ik werk vanuit oprechte compassie en zonder oordeel.</p>
            </div>
            <div className="value-card">
              <h3>Verbinding</h3>
              <p>Ik geloof in het belang van verbondenheid - zowel de verbinding met jezelf (lichaam en geest) als verbinding met anderen.</p>
            </div>
            <div className="value-card">
              <h3>Rust & Herstel</h3>
              <p>Mijn praktijk is een plek voor mensen die zoeken naar innerlijke rust en genezing van trauma. Er heerst een kalme sfeer waar tijd is voor herstel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container">
          <div className="closing-content">
            <h2>Mijn uitnodiging aan jou</h2>
            <p>
              Je bent van harte welkom bij Praktijkbasis. Of je nu worstelt met trauma, stress, of simpelweg op zoek bent naar meer balans in je leven - ik nodig je uit om samen te ontdekken wat jou kan helpen om weer in je kracht te komen.
            </p>
            <p className="quote">
              "Waar verhalen worden gedeeld, begint heling. Waar lichamen worden gehoord, ontstaat ruimte voor groei."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OverMij;
