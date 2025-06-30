import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">VOOR JOUW<br />SUCCES</h1>
            <p className="hero-subtitle">Strategie en uitvoering voor maatschappelijke impact</p>
            <div className="hero-cta-container">
              <Link to="/diensten" className="hero-cta">Wat wij voor jou doen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Hoe We Jouw Organisatie Helpen</h2>
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon">🤖</div>
              <h3>AI-Implementatie</h3>
              <p>Praktische AI-oplossingen die echt werken. Van automatisering tot slimme data-analyse.</p>
              <Link to="/ai-implementatie" className="service-link">Meer over AI →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Procesoptimalisatie</h3>
              <p>20 jaar ervaring in het stroomlijnen van organisaties. Samen maken we jullie werk efficiënter.</p>
              <Link to="/procesoptimalisatie" className="service-link">Meer over processen →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Strategisch Partnerschap</h3>
              <p>Geen externe consultant, maar een partner die meedenkt en meewerkt aan jullie ambities.</p>
              <Link to="/diensten" className="service-link">Alle diensten →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Van Ondernemer naar Maatschappelijke Impact</h2>
              <p>
                Na 20 jaar als medeeigenaar van Infacilities en TFM, en een intensieve reis van zelfontplooiing 
                en coaching-opleiding, heb ik de afgelopen 2 jaar me verdiept in AI-programmering.
              </p>
              <p>
                Nu wil ik mijn ondernemersmind, coaching-vaardigheden en AI-kennis inzetten voor organisaties 
                die echt impact maken. Tegen gereduceerde tarieven, zodat jullie budget kan gaan naar wat er echt toe doet.
              </p>
              <Link to="/over-mij" className="read-more">Mijn verhaal →</Link>
            </div>
            <div className="about-visual">
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2004-2024</div>
                  <div className="timeline-title">Facility Management</div>
                  <div className="timeline-desc">Medeeigenaar Infacilities & TFM</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022-2024</div>
                  <div className="timeline-title">AI & Coaching</div>
                  <div className="timeline-desc">Zelfontplooiing & AI-programmeren</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-title">Voor Jouw Succes</div>
                  <div className="timeline-desc">Maatschappelijke impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2>Waarom Voor Jouw Succes?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🏢</div>
              <h3>Ondernemerservaring</h3>
              <p>20 jaar ervaring in het leiden en optimaliseren van organisaties. Ik begrijp hoe bedrijven werken.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤖</div>
              <h3>AI-Expertise</h3>
              <p>2 jaar intensief bezig geweest met AI-programmering. Praktische ervaring, geen theoretische kennis.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💝</div>
              <h3>Maatschappelijke Missie</h3>
              <p>Gereduceerde tarieven voor non-profits en maatschappelijke organisaties. Jullie impact is mijn motivatie.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h3>Partnerschap</h3>
              <p>Geen externe consultant die komt vertellen wat je moet doen. Ik word onderdeel van jullie team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <h2>Onze Aanpak</h2>
          <div className="approach-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Luisteren</h3>
              <p>We beginnen met jullie verhaal. Wat zijn jullie ambities? Waar lopen jullie tegenaan?</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Samen Plannen</h3>
              <p>Op basis van jullie doelen maken we samen een plan dat past bij jullie organisatie.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Samen Uitvoeren</h3>
              <p>Ik word onderdeel van jullie team en we werken samen aan concrete resultaten.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Samen Groeien</h3>
              <p>Het doel is dat jullie zelfstandig verder kunnen met duurzame verandering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Klaar om samen te bouwen aan jullie succes?</h2>
            <p>
              Laten we een gesprek plannen om te kijken hoe AI en procesoptimalisatie 
              jullie organisatie kunnen helpen meer impact te maken.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Plan een gesprek</Link>
              <Link to="/diensten" className="cta-button secondary">Bekijk onze diensten</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
