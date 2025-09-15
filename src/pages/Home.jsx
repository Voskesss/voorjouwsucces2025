import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewDesign.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1>
                Van <span className="hero-highlight">Vastlopen</span> naar <span className="hero-highlight">Floreren</span>
              </h1>
              <p className="hero-subtitle">
                Ontdek je authentieke zelf, transformeer belemmerende overtuigingen, 
                en creëer een leven vol betekenis en voldoening door Het Complete Succes Framework.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Jaren Ervaring</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Ondernemers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Authentieke Jij</span>
                </div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Start Je Transformatie
                </Link>
                <Link to="/diensten" className="btn btn-secondary">
                  Ontdek Het Framework
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professionele coach"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="framework-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">🎯 Geïntegreerde Aanpak</div>
            <h2 className="section-title">Het Complete Succes Framework</h2>
            <p className="section-description">
              Een holistische benadering die inzichten combineert van Adam Leipzig (levensdoel), 
              Simon Sinek (leiderschap) en quantum-geïnspireerde energieprincipes voor 
              duurzame transformatie van zowel persoon als organisatie.
            </p>
          </div>
          
          <div className="framework-approach">
            <strong>Vanuit de basis werken, alle facetten kunnen aanraken:</strong> Van coaching en mindset 
            tot procesoptimalisatie, van financiële structuren tot AI-implementatie. 
            Samen bepalen we waar je staat en welke expertise nodig is - 
            met of zonder hulp van specialisten uit mijn netwerk.
          </div>

          <div className="framework-grid">
            <div className="framework-item">
              <div className="framework-icon">🎯</div>
              <h3>Authentiek Levensdoel</h3>
              <p>Ontdek wie je werkelijk bent en wat je unieke bijdrage aan de wereld is</p>
            </div>
            <div className="framework-item">
              <div className="framework-icon">💪</div>
              <h3>Effectief Leiderschap</h3>
              <p>Ontwikkel vaardigheden om jezelf en anderen te inspireren en te leiden</p>
            </div>
            <div className="framework-item">
              <div className="framework-icon">⚡</div>
              <h3>Innerlijke Energie</h3>
              <p>Optimaliseer je energiemanagement voor duurzame prestaties</p>
            </div>
            <div className="framework-item">
              <div className="framework-icon">🦋</div>
              <h3>Bewuste Transformatie</h3>
              <p>Transformeer van angst naar liefde, van beperking naar mogelijkheid</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">De Vier Pijlers van Transformatie</h2>
            <p className="section-description">
              Een gestructureerde aanpak die je stap voor stap begeleidt naar authentiek succes en persoonlijke vervulling.
            </p>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-number">1</div>
              <h3>Doel & Richting</h3>
              <p>Gebaseerd op Adam Leipzig's 5 levensdoelvragen en Simon Sinek's waarom-filosofie.</p>
              <ul className="pillar-features">
                <li>Ontdek je authentieke levensdoel</li>
                <li>Definieer je unieke bijdrage</li>
                <li>Creëer een duidelijke visie</li>
                <li>Stel betekenisvolle doelen</li>
              </ul>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">2</div>
              <h3>Actie & Leiderschap</h3>
              <p>Implementeer Simon Sinek's 5 regels voor effectief leiderschap in je dagelijks leven.</p>
              <ul className="pillar-features">
                <li>Ontwikkel leiderschapsvaardigheden</li>
                <li>Neem bewuste actie</li>
                <li>Bouw vertrouwen en invloed op</li>
                <li>Inspireer jezelf en anderen</li>
              </ul>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">3</div>
              <h3>Energie & Mindset</h3>
              <p>Beheer je innerlijke staat en optimaliseer je energieniveau voor duurzame prestaties.</p>
              <ul className="pillar-features">
                <li>Energiemanagement technieken</li>
                <li>Mindset transformatie</li>
                <li>Stress en burn-out preventie</li>
                <li>Flow-state cultivatie</li>
              </ul>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">4</div>
              <h3>Bewustzijn & Transformatie</h3>
              <p>Geïnspireerd door quantum-bewustzijn en near-death experience inzichten.</p>
              <ul className="pillar-features">
                <li>Van angst naar liefde</li>
                <li>Bewustzijnsontwikkeling</li>
                <li>Spirituele groei</li>
                <li>Authentieke zelfexpressie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Voor Wie Is Dit Framework?</h2>
            <p className="section-description">
              Dit framework is speciaal ontwikkeld voor ondernemers en individuen die klaar zijn 
              voor echte transformatie en authentiek succes willen creëren.
            </p>
          </div>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">🚀</div>
              <h3>Startende Ondernemers</h3>
              <p>
                Je wilt een bedrijf starten dat aansluit bij je authentieke zelf en 
                betekenisvol werk doen dat impact heeft.
              </p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🔄</div>
              <h3>Ondernemers in Transitie</h3>
              <p>
                Je bent toe aan een nieuwe fase in je ondernemerschap en wilt 
                bewuster keuzes maken die aansluiten bij wie je werkelijk bent.
              </p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🧩</div>
              <h3>Vastgelopen Ondernemers</h3>
              <p>
                Je voelt je gevangen in je eigen succes en wilt weer passie en 
                voldoening vinden in je werk en leven.
              </p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🔍</div>
              <h3>Zoekende Individuen</h3>
              <p>
                Je bent op zoek naar je levensdoel en wilt een leven creëren 
                dat echt bij je past en vervulling brengt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="transformation-journey">
        <div className="container">
          <h2>Jouw Transformatie Reis</h2>
          <div className="journey-content">
            <div className="journey-text">
              <h3>Van Overleven naar Floreren</h3>
              <p>
                De meeste mensen leven vanuit angst - angst om te falen, niet goed genoeg te zijn, 
                of niet geaccepteerd te worden. Dit framework helpt je transformeren naar een leven 
                vanuit liefde, authenticiteit en doel.
              </p>
              <div className="transformation-points">
                <div className="point">
                  <span className="point-before">😰 Angst voor falen</span>
                  <span className="point-arrow">→</span>
                  <span className="point-after">🎆 Moed om te groeien</span>
                </div>
                <div className="point">
                  <span className="point-before">😕 Externe validatie zoeken</span>
                  <span className="point-arrow">→</span>
                  <span className="point-after">💪 Innerlijke zekerheid</span>
                </div>
                <div className="point">
                  <span className="point-before">😵‍💫 Uitgeput en leeg</span>
                  <span className="point-arrow">→</span>
                  <span className="point-after">⚡ Energie en vitaliteit</span>
                </div>
                <div className="point">
                  <span className="point-before">🌫️ Verward over richting</span>
                  <span className="point-arrow">→</span>
                  <span className="point-after">🎯 Helder doel en focus</span>
                </div>
              </div>
            </div>
            <div className="journey-image">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Transformatie en groei"
                className="journey-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Mijn Missie: Jouw Authentieke Zelf Bevrijden</h2>
              <p>
                Na mijn eigen transformatie - van uitgeput ondernemer naar bewust coach - 
                weet ik hoe het voelt om gevangen te zitten in je eigen succes.
              </p>
              <p>
                Ik help mensen ontdoen van belemmerende overtuigingen en obstakels. 
                Vanuit het Complete Succes Framework kijk ik naar alle aspecten: 
                van mindset tot processen, van financiën tot technologie.
              </p>
              <p>
                <strong>Mijn aanpak:</strong> Eerst bepalen we samen waar je staat en welke knoppen 
                er gedraaid moeten worden. Dan stellen we het juiste team samen - 
                met of zonder hulp van specialisten uit mijn netwerk.
              </p>
              <div className="mission-approach">
                <div className="approach-item">
                  <span className="approach-icon">👁️</span>
                  <span>Kijken naar jezelf én je processen</span>
                </div>
                <div className="approach-item">
                  <span className="approach-icon">🤖</span>
                  <span>AI inzetten voor efficiëntie</span>
                </div>
                <div className="approach-item">
                  <span className="approach-icon">❤️</span>
                  <span>Meer voldoening en flow creëren</span>
                </div>
                <div className="approach-item">
                  <span className="approach-icon">🤝</span>
                  <span>Samenwerken met experts waar nodig</span>
                </div>
              </div>
              <Link to="/over-mij" className="read-more">Mijn verhaal →</Link>
            </div>
            <div className="mission-visual">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Jos Klijnhout - Coach en Ondernemer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="results-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Wat Je Kunt Verwachten</h2>
            <p className="section-description">
              Concrete resultaten die je kunt verwachten na het doorlopen van Het Complete Succes Framework.
            </p>
          </div>
          <div className="results-grid">
            <div className="result-item">
              <div className="result-icon">🎯</div>
              <h3>Helderheid in Doel & Richting</h3>
              <p>Ontdek je authentieke levensdoel en creëer een duidelijk pad naar succes.</p>
            </div>
            <div className="result-item">
              <div className="result-icon">⚡</div>
              <h3>Meer Energie & Vitaliteit</h3>
              <p>Leer je innerlijke staat te beheren voor optimale prestaties en welzijn.</p>
            </div>
            <div className="result-item">
              <div className="result-icon">💪</div>
              <h3>Effectief Leiderschap</h3>
              <p>Ontwikkel vaardigheden om jezelf en anderen te inspireren en te leiden.</p>
            </div>
            <div className="result-item">
              <div className="result-icon">🦋</div>
              <h3>Bewuste Transformatie</h3>
              <p>Doorbreek belemmerende patronen en leef vanuit authenticiteit en vertrouwen.</p>
            </div>
            <div className="result-item">
              <div className="result-icon">⚙️</div>
              <h3>Geoptimaliseerde Processen</h3>
              <p>Efficiëntere bedrijfsvoering door slimme procesoptimalisatie en AI-integratie.</p>
            </div>
            <div className="result-item">
              <div className="result-icon">🤝</div>
              <h3>Expert Ondersteuning</h3>
              <p>Toegang tot mijn netwerk van specialisten voor financiën, technologie en leadership.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="implementation-section">
        <div className="container">
          <h2>Het 8-Weken Transformatie Programma</h2>
          <p className="implementation-intro">
            Een gestructureerde reis door alle vier de pijlers, 
            met praktische implementatie en duurzame resultaten.
          </p>
          <div className="implementation-timeline">
            <div className="timeline-phase">
              <div className="phase-weeks">Week 1-2</div>
              <h3>Doel Ontdekking</h3>
              <ul>
                <li>Beantwoord de 5 levensdoelvragen</li>
                <li>Test je elevator pitch</li>
                <li>Identificeer je authentieke doelgroep</li>
              </ul>
            </div>
            <div className="timeline-phase">
              <div className="phase-weeks">Week 3-4</div>
              <h3>Leadership Development</h3>
              <ul>
                <li>Oefen met "laatst spreken"</li>
                <li>Implementeer dagelijks helpen van anderen</li>
                <li>Neem bewust verantwoordelijkheid</li>
              </ul>
            </div>
            <div className="timeline-phase">
              <div className="phase-weeks">Week 5-6</div>
              <h3>Energie Optimalisatie</h3>
              <ul>
                <li>Start dagelijkse energie-routine</li>
                <li>Evalueer en optimaliseer je omgeving</li>
                <li>Focus op authentieke verlangens</li>
              </ul>
            </div>
            <div className="timeline-phase">
              <div className="phase-weeks">Week 7-8</div>
              <h3>Volledige Integratie</h3>
              <ul>
                <li>Combineer alle elementen</li>
                <li>Evalueer voortgang en resultaten</li>
                <li>Plan voor lange-termijn groei</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Klaar om van Vastlopen naar Floreren te gaan?</h2>
            <p>
              Het Complete Succes Framework wacht op je. Begin vandaag nog je reis naar 
              authentiek succes, persoonlijke vervulling en betekenisvol ondernemerschap.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Je Transformatie
              </Link>
              <Link to="/diensten" className="btn btn-secondary">
                Ontdek Het Framework
              </Link>
            </div>
            <div className="cta-guarantee">
              <strong>Mijn belofte:</strong> Als je niet volledig tevreden bent na ons eerste gesprek, 
              betaal je niets. Ik geloof in de kracht van authentieke transformatie.
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">Klaar voor Transformatie?</div>
            <h2>Begin Je Reis naar Authentiek Succes</h2>
            <p>
              Het Complete Succes Framework wacht op je. Of je nu vastloopt, in transitie bent, 
              of gewoon weet dat er meer mogelijk is - dit is je moment om te kiezen voor 
              een leven vol betekenis, energie en authentieke voldoening.
            </p>
            <div className="cta-promise">
              <div className="promise">
                <span className="promise-check">✓</span>
                <span>Ontdek je authentieke levensdoel</span>
              </div>
              <div className="promise">
                <span className="promise-check">✓</span>
                <span>Transformeer belemmerende overtuigingen</span>
              </div>
              <div className="promise">
                <span className="promise-check">✓</span>
                <span>Creëer duurzame energie en vitaliteit</span>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                <span>Start Je Transformatie</span>
                <span className="button-subtitle">Vrijblijvend kennismakingsgesprek</span>
              </Link>
              <Link to="/framework" className="cta-button secondary">
                <span>Leer Meer Over Het Framework</span>
                <span className="button-subtitle">Diepgaande uitleg van alle 4 pijlers</span>
              </Link>
            </div>
            <div className="cta-guarantee">
              💯 <strong>Garantie:</strong> Als je na ons gesprek niet geïnspireerd bent, 
              dan is dit framework niet voor jou - en dat is oké.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
