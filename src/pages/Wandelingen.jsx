import React from 'react';
import '../styles/Wandelingen.css';
import wandelingImg from '../assets/images/therapeutische-wandeling.jpg';

function Wandelingen() {
  return (
    <div className="wandelingen-page">
      <section className="hero-section">
        <div className="container">
          <h1>Therapeutische Wandelingen</h1>
          <div className="hero-content">
            <div className="hero-image">
              <img src={wandelingImg} alt="Therapeutische wandeling in de natuur van Drenthe" />
            </div>
            <div className="hero-text">
              <p className="intro-text">
                De natuur heeft een helende kracht die we kunnen benutten in het therapeutische proces. Tijdens onze wandelingen in de prachtige omgeving van Drenthe combineren we de rust van de natuur met lichaamsgerichte traumatherapie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>De kracht van wandelen in de natuur</h2>
          <div className="benefits-content">
            <p>
              Wandelen in de natuur heeft op zichzelf al een positief effect op ons welzijn. Het verlaagt stress, verbetert onze stemming en helpt ons om uit ons hoofd te komen en meer in ons lichaam te zijn. De natuur biedt een kalmerende omgeving die uitnodigt tot reflectie en bewustwording.
            </p>
            <p>
              Wanneer we deze natuurlijke helende kracht combineren met lichaamsgerichte traumatherapie, ontstaat er een unieke setting waarin trauma kan worden verwerkt en innerlijke rust kan worden gevonden. De natuur wordt een bondgenoot in het helingsproces.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <h2>Hoe gaat een therapeutische wandeling in zijn werk?</h2>
          <div className="approach-content">
            <p>
              Een therapeutische wandeling duurt ongeveer 1,5 tot 2 uur en vindt plaats in de natuurgebieden rondom Havelte in Drenthe. We wandelen in een rustig tempo en wisselen af tussen wandelen, stilstaan en oefeningen doen.
            </p>
            <p>
              Tijdens de wandeling kunnen verschillende therapeutische elementen aan bod komen:
            </p>
            <ul className="approach-list">
              <li>
                <strong>Mindful wandelen</strong> - Bewust aandacht geven aan je stappen, je ademhaling en wat je ziet, hoort en voelt in de natuur
              </li>
              <li>
                <strong>Lichaamsgerichte oefeningen</strong> - Eenvoudige oefeningen om contact te maken met je lichaam en spanning los te laten
              </li>
              <li>
                <strong>Reflectiemomenten</strong> - Stilstaan bij wat er in je opkomt en dit delen als je daar behoefte aan hebt
              </li>
              <li>
                <strong>Natuurlijke metaforen</strong> - De natuur biedt vaak prachtige metaforen voor ons eigen leven en groeiproces
              </li>
            </ul>
            <p>
              De wandelingen zijn altijd afgestemd op jouw behoeften en mogelijkheden. We passen het tempo en de intensiteit aan op wat voor jou prettig is.
            </p>
          </div>
        </div>
      </section>

      <section className="for-whom-section">
        <div className="container">
          <h2>Voor wie zijn de therapeutische wandelingen?</h2>
          <div className="for-whom-content">
            <p>
              De therapeutische wandelingen zijn geschikt voor iedereen die:
            </p>
            <ul className="for-whom-list">
              <li>Behoefte heeft aan rust en reflectie in een natuurlijke omgeving</li>
              <li>Lichaamsgerichte traumatherapie wil ervaren in een andere setting dan de praktijkruimte</li>
              <li>Vastloopt in het 'praten over' en meer wil ervaren en voelen</li>
              <li>Energie wil opdoen en zich wil verbinden met de helende kracht van de natuur</li>
              <li>Moeite heeft om in een traditionele therapiesetting tot rust te komen</li>
            </ul>
            <p>
              De wandelingen kunnen een aanvulling zijn op individuele therapiesessies, maar kunnen ook op zichzelf staand worden gevolgd.
            </p>
          </div>
        </div>
      </section>

      <section className="practical-section">
        <div className="container">
          <h2>Praktische informatie</h2>
          <div className="practical-content">
            <div className="practical-item">
              <h3>Locatie</h3>
              <p>De wandelingen vinden plaats in de natuurgebieden rondom Havelte, Drenthe. De exacte startlocatie wordt bij het maken van een afspraak doorgegeven.</p>
            </div>
            <div className="practical-item">
              <h3>Duur en kosten</h3>
              <p>Een therapeutische wandeling duurt ongeveer 1,5 tot 2 uur. De kosten zijn vergelijkbaar met een reguliere therapiesessie. Zie de pagina 'Praktische informatie' voor actuele tarieven.</p>
            </div>
            <div className="practical-item">
              <h3>Kleding en voorbereiding</h3>
              <p>Draag comfortabele kleding die past bij het weer en goede wandelschoenen. Neem eventueel wat water mee. Verder is er geen speciale voorbereiding nodig.</p>
            </div>
            <div className="practical-item">
              <h3>Afspraak maken</h3>
              <p>Je kunt een afspraak maken via de contactpagina of door direct contact op te nemen via telefoon of e-mail.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wandelingen;
