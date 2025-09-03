import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
            alt="Professional business coaching session"
            className="hero-bg-image"
          />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">VOOR JOUW<br />SUCCES</h1>
            <p className="hero-subtitle">Ondernemers sparringpartner & meewerkend adviseur</p>
            <div className="hero-cta-container">
              <Link to="/diensten" className="hero-cta">Ontdek hoe ik jou kan helpen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="personal-story">
        <div className="container">
          <h2>Mijn Verhaal</h2>
          <div className="story-layout">
            <div className="story-content">
              <p>
                Na jaren van hard werken als ondernemer kwam ik op een punt waar ik fysiek en mentaal 
                niet meer kon. Ik wilde meer tijd met mijn kinderen en heb daarom samen met mijn compagnons 
                ons bedrijf verkocht.
              </p>
              <p>
                Wat volgde was een bewuste keuze: investeren in mezelf. Ik deed een coaching opleiding 
                en verdiepte me in mijn grootste passie - programmeren. Alleen nu met AI, wat het allemaal 
                nog veel leuker en krachtiger maakt.
              </p>
              <p>
                Ik ben pragmatisch ingesteld, een verbinder, maar wel puur en oprecht. Eerlijkheid staat 
                bij mij voorop. Nu wil ik deze ervaring en kennis gebruiken om andere ondernemers te helpen.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional entrepreneur portrait"
                className="story-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Hoe Ik Jou Kan Helpen</h2>
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon">🤝</div>
              <h3>Strategisch Sparren</h3>
              <p>Voor ondernemers die vastlopen of even geen uitweg zien. Samen kijken we naar nieuwe perspectieven en praktische oplossingen.</p>
              <Link to="/diensten" className="service-link">Meer over sparren →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Procesinrichting</h3>
              <p>Hoe kun je je tijd beter verdelen? Hoe laat je de zaak voor jou werken in plaats van andersom? Praktische procesoptimalisatie.</p>
              <Link to="/diensten" className="service-link">Meer over processen →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI & Digitalisering</h3>
              <p>Overschakelen naar AI of inzicht krijgen in de mogelijkheden? Ik help je stap voor stap met praktische implementatie.</p>
              <Link to="/diensten" className="service-link">Meer over AI →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Mijn Doel: Dichter Bij Jezelf</h2>
              <p>
                Ik wil ondernemers begeleiden die vastlopen in hun eigen organisatie, soms even geen uitweg zien, 
                of inzichten willen krijgen hoe ze hun tijd beter kunnen verdelen.
              </p>
              <p>
                Mijn doel is dat mensen weer dichter bij zichzelf kunnen komen, vanuit hun hart keuzes gaan maken 
                en met meer afstand kunnen kijken naar hun bedrijf en hun eigen rol.
              </p>
              <p>
                Of je nu een grotere organisatie hebt of eenpitter bent - samen kijken we waar we de druk van de 
                ketel af kunnen halen, hoe je het beter kunt organiseren, wat efficiënter kan en eventueel met AI.
              </p>
              <Link to="/over-mij" className="read-more">Meer over mijn aanpak →</Link>
            </div>
            <div className="about-visual">
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Business coaching and strategy session"
                  className="about-photo"
                />
              </div>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">20+ jaar</div>
                  <div className="timeline-title">Ondernemerservaring</div>
                  <div className="timeline-desc">Medeeigenaar facility management bedrijf</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">Recent</div>
                  <div className="timeline-title">Coaching & AI</div>
                  <div className="timeline-desc">Coaching opleiding & AI-programmering</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">Nu</div>
                  <div className="timeline-title">Voor Jouw Succes</div>
                  <div className="timeline-desc">Sparringpartner & meewerkend adviseur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2>Waarom Samenwerken Met Mij?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">💪</div>
              <h3>Ervaren Ondernemer</h3>
              <p>Ik weet hoe het voelt om vast te lopen, de druk te voelen en te zoeken naar oplossingen. Ik ben er zelf geweest.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💖</div>
              <h3>Puur & Oprecht</h3>
              <p>Eerlijkheid staat voorop. Ik ben een verbinder die pragmatisch te werk gaat, zonder poespas of mooie verhalen.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h3>Sparringpartner</h3>
              <p>Geen externe consultant, maar iemand die echt meedenkt, ruggenspraak geeft en praktische oplossingen biedt.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>Praktische Focus</h3>
              <p>Van coaching tot AI-implementatie - alles gericht op concrete resultaten en meer rust in jouw bedrijf.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <h2>Hoe Ik Werk</h2>
          <div className="approach-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Echt Luisteren</h3>
              <p>Waar loop je tegenaan? Wat houdt je bezig? Ik luister naar je verhaal zonder oordeel, met oprechte interesse.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Samen Ontdekken</h3>
              <p>We kijken samen naar je situatie. Wat zijn de echte uitdagingen? Waar liggen kansen die je misschien nog niet ziet?</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Praktisch Aanpakken</h3>
              <p>Geen lange theoretische verhalen, maar concrete stappen. Ik help mee met uitvoering waar nodig.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Duurzaam Resultaat</h3>
              <p>Het doel: dat je weer dichter bij jezelf komt en met meer afstand naar je bedrijf kunt kijken.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Zullen We Eens Praten?</h2>
            <p>
              Loop je vast? Zoek je een sparringpartner? Of ben je gewoon nieuwsgierig naar de mogelijkheden? 
              Laten we een vrijblijvend gesprek plannen. Geen verplichtingen, gewoon een eerlijk gesprek 
              over jouw situatie en hoe ik je misschien kan helpen.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Plan een vrijblijvend gesprek</Link>
              <Link to="/diensten" className="cta-button secondary">Bekijk wat ik doe</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
