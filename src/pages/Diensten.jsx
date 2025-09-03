import React from 'react';
import SEO from '../components/seo/SEO';
import '../styles/Diensten.css';

const Diensten = () => {
  return (
    <>
      <SEO 
        title="Diensten - Voor Jouw Succes"
        description="Ondernemers sparringpartner & meewerkend adviseur. Advies én uitvoering voor groei, efficiëntie en meer rust in je bedrijf."
        keywords="ondernemers sparringpartner, meewerkend adviseur, procesinrichting, strategisch sparren, AI implementatie, digitalisering, MKB"
      />
      
      <div className="diensten-page">
        <div className="diensten-hero">
          <div className="diensten-hero-content">
            <h1>Voor Jouw Succes</h1>
            <p>
              Ik help ondernemers groeien, problemen oplossen en meer rust creëren – met advies én uitvoering.
            </p>
          </div>
        </div>
        <div className="diensten-content">
          <div className="diensten-container">
            <div className="diensten-grid">
              <div className="dienst-card featured">
                <div className="dienst-icon">💼</div>
                <h2>Strategisch Sparren</h2>
                <p>
                  Als ervaren ondernemer help ik je uitdagen, nieuwe kansen te zien en betere beslissingen te nemen. 
                  Geen theoretische verhalen, maar praktische inzichten die direct toepasbaar zijn.
                </p>
                <ul>
                  <li>Bedrijfsstrategie ontwikkeling</li>
                  <li>Groeiplannen maken en uitvoeren</li>
                  <li>Nieuwe marktkansen identificeren</li>
                  <li>Besluitvorming verbeteren</li>
                  <li>Ondernemersuitdagingen oplossen</li>
                </ul>
                <a href="/strategisch-sparren" className="dienst-link">Meer over strategisch sparren →</a>
              </div>

              <div className="dienst-card">
                <div className="dienst-icon">⚙️</div>
                <h2>Procesinrichting</h2>
                <p>
                  Met 20+ jaar ervaring help ik je efficiënter werken en minder chaos creëren. 
                  We maken je werkprocessen slimmer, leuker en effectiever.
                </p>
                <ul>
                  <li>Proces-analyse en optimalisatie</li>
                  <li>Workflow verbetering</li>
                  <li>Digitalisering van processen</li>
                  <li>Efficiency verhoging</li>
                  <li>Structuur aanbrengen</li>
                </ul>
                <a href="/procesinrichting" className="dienst-link">Meer over procesinrichting →</a>
              </div>

              <div className="dienst-card">
                <div className="dienst-icon">👥</div>
                <h2>Personeelsvraagstukken</h2>
                <p>
                  Ik help je bij werving, motivatie en structuur van je team. 
                  Samen zorgen we voor een betere werksfeer en hogere productiviteit.
                </p>
                <ul>
                  <li>Wervingsstrategieën</li>
                  <li>Teamontwikkeling</li>
                  <li>Motivatie en betrokkenheid</li>
                  <li>Leiderschapsontwikkeling</li>
                  <li>Organisatiestructuur verbeteren</li>
                </ul>
                <a href="/personeelsvraagstukken" className="dienst-link">Meer over personeelsvraagstukken →</a>
              </div>

              <div className="dienst-card">
                <div className="dienst-icon">🤖</div>
                <h2>AI & Digitalisering</h2>
                <p>
                  Praktische AI-oplossingen en digitalisering die echt werken voor jouw bedrijf. 
                  Kansen benutten en tijd besparen zonder ingewikkelde technische kennis.
                </p>
                <ul>
                  <li>AI-implementatie voor MKB</li>
                  <li>Procesautomatisering</li>
                  <li>Digitale werkstromen</li>
                  <li>Slimme tools selecteren</li>
                  <li>Training en implementatie</li>
                </ul>
                <a href="/ai-digitalisering" className="dienst-link">Meer over AI & digitalisering →</a>
              </div>
            </div>

            <div className="aanpak-section">
              <h2>Hoe Ik Werk</h2>
              <div className="aanpak-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Kennismaking & Analyse</h3>
                  <p>We beginnen met jouw verhaal en uitdagingen. Wat wil je bereiken? Waar loop je tegenaan? Wat heeft prioriteit?</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Praktisch Plan</h3>
                  <p>Samen maken we een concreet plan met directe actiepunten. Geen dikke rapporten, maar praktische stappen die direct resultaat opleveren.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Advies & Uitvoering</h3>
                  <p>Ik werk per dagdeel bij jou op locatie of online. Niet alleen adviseren, maar ook daadwerkelijk meewerken aan de uitvoering.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Zichtbare Resultaten</h3>
                  <p>Direct resultaat in de praktijk. Geen langdurige trajecten verplicht, maar wel vaste dagen per week mogelijk als dat gewenst is.</p>
                </div>
              </div>
            </div>

            <div className="waarom-section">
              <h2>Waarom Voor Jouw Succes?</h2>
              <div className="waarom-grid">
                <div className="waarom-item">
                  <h3>🏢 20+ Jaar Ondernemer</h3>
                  <p>Ervaring als medeeigenaar van Infacilities en TFM. Ik begrijp de uitdagingen van ondernemers van binnenuit.</p>
                </div>
                <div className="waarom-item">
                  <h3>⚙️ Praktisch & Hands-on</h3>
                  <p>Niet alleen adviseren, maar ook daadwerkelijk meewerken. Directe resultaten in plaats van dikke rapporten.</p>
                </div>
                <div className="waarom-item">
                  <h3>🔄 Strategie & Uitvoering</h3>
                  <p>Ik kan schakelen tussen strategisch denken en praktische uitvoering. Visie omzetten in concrete acties.</p>
                </div>
                <div className="waarom-item">
                  <h3>🤖 Digitale Expertise</h3>
                  <p>Praktische ervaring met AI en digitalisering voor MKB. Technologie toegankelijk maken zonder jargon.</p>
                </div>
              </div>
            </div>

            <div className="diensten-contact-cta">
              <div className="contact-cta-content">
                <h2>Klaar om samen te bouwen aan jouw succes?</h2>
                <p>Laten we een vrijblijvend gesprek plannen om te kijken hoe ik jouw bedrijf kan helpen groeien.</p>
                <a href="/contact" className="contact-cta-button">Plan een kennismaking</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diensten;
