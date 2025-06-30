import React from 'react';
import SEO from '../components/seo/SEO';
import '../styles/Diensten.css';

const Diensten = () => {
  return (
    <>
      <SEO 
        title="Diensten - Voor Jouw Succes"
        description="AI-implementatie, procesoptimalisatie en organisatieontwikkeling voor maatschappelijke organisaties. Samen bouwen aan meer impact en efficiëntie."
        keywords="AI implementatie, procesoptimalisatie, organisatieontwikkeling, maatschappelijke organisaties, coaching, projectbegeleiding"
      />
      
      <div className="diensten-page">
        <div className="container">
          <div className="hero-section">
            <h1>Onze Diensten</h1>
            <p className="hero-subtitle">
              Samen bouwen aan jouw organisatie-ambities met praktische AI-oplossingen en bewezen procesoptimalisatie
            </p>
          </div>

          <div className="diensten-grid">
            <div className="dienst-card featured">
              <div className="dienst-icon">🤖</div>
              <h2>AI-Implementatie</h2>
              <p>
                Praktische AI-oplossingen die echt werken voor maatschappelijke organisaties. 
                Van automatisering van administratieve taken tot slimme data-analyse voor betere besluitvorming.
              </p>
              <ul>
                <li>AI-strategie ontwikkeling</li>
                <li>Proces-automatisering</li>
                <li>Data-analyse en rapportage</li>
                <li>Chatbots en klantenservice</li>
                <li>Implementatie en training</li>
              </ul>
              <a href="/ai-implementatie" className="dienst-link">Meer over AI →</a>
            </div>

            <div className="dienst-card">
              <div className="dienst-icon">⚙️</div>
              <h2>Procesoptimalisatie</h2>
              <p>
                20 jaar ervaring in facility management en organisatie-efficiëntie. 
                We kijken samen naar jullie werkprocessen en maken ze slimmer, leuker en effectiever.
              </p>
              <ul>
                <li>Proces-analyse en mapping</li>
                <li>Workflow optimalisatie</li>
                <li>Digitalisering van processen</li>
                <li>Efficiency verbetering</li>
                <li>Change management</li>
              </ul>
              <a href="/procesoptimalisatie" className="dienst-link">Meer over processen →</a>
            </div>

            <div className="dienst-card">
              <div className="dienst-icon">🎯</div>
              <h2>Strategisch Partnerschap</h2>
              <p>
                Geen externe consultant die komt vertellen wat je moet doen. 
                Ik word onderdeel van jullie team en werk samen aan jullie ambities en doelen.
              </p>
              <ul>
                <li>Project-gebaseerde samenwerking</li>
                <li>Team coaching tijdens projecten</li>
                <li>Strategische advisering</li>
                <li>Interim management</li>
                <li>Lange-termijn partnerships</li>
              </ul>
            </div>

            <div className="dienst-card">
              <div className="dienst-icon">👥</div>
              <h2>Organisatieontwikkeling</h2>
              <p>
                Teams die beter samenwerken, processen die soepeler lopen, en organisaties die meer impact maken. 
                Coaching en ontwikkeling als onderdeel van concrete projecten.
              </p>
              <ul>
                <li>Team effectiviteit</li>
                <li>Communicatie verbetering</li>
                <li>Leiderschapsontwikkeling</li>
                <li>Cultuurverandering</li>
                <li>Conflictoplossing</li>
              </ul>
            </div>
          </div>

          <div className="aanpak-section">
            <h2>Onze Aanpak</h2>
            <div className="aanpak-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Luisteren & Begrijpen</h3>
                <p>We beginnen altijd met jullie verhaal. Wat zijn jullie ambities? Waar lopen jullie tegenaan? Wat willen jullie bereiken?</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Samen Plannen</h3>
                <p>Op basis van jullie doelen maken we samen een plan. Geen standaard oplossingen, maar maatwerk dat past bij jullie organisatie.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Samen Uitvoeren</h3>
                <p>Ik word onderdeel van jullie team. We werken samen aan de uitvoering, met coaching en begeleiding als natuurlijk onderdeel.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Samen Groeien</h3>
                <p>Het doel is dat jullie zelfstandig verder kunnen. Ik zorg voor kennisoverdracht en duurzame verandering.</p>
              </div>
            </div>
          </div>

          <div className="waarom-section">
            <h2>Waarom Voor Jouw Succes?</h2>
            <div className="waarom-grid">
              <div className="waarom-item">
                <h3>🏢 Ondernemerservaring</h3>
                <p>20 jaar ervaring als medeeigenaar van Infacilities en TFM. Ik begrijp hoe organisaties werken.</p>
              </div>
              <div className="waarom-item">
                <h3>🤖 AI-Expertise</h3>
                <p>2 jaar intensief bezig geweest met AI-programmeren en implementatie. Praktische ervaring, geen theorie.</p>
              </div>
              <div className="waarom-item">
                <h3>💝 Maatschappelijke Focus</h3>
                <p>Gereduceerde tarieven voor maatschappelijke organisaties. Jullie impact is mijn motivatie.</p>
              </div>
              <div className="waarom-item">
                <h3>🎯 Resultaatgericht</h3>
                <p>Geen eindeloze trajecten. We werken samen aan concrete doelen en meetbare resultaten.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Klaar om samen te bouwen aan jullie succes?</h2>
            <p>Laten we een gesprek plannen om te kijken hoe we jullie organisatie kunnen helpen groeien.</p>
            <a href="/contact" className="cta-button">Plan een gesprek</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diensten;
