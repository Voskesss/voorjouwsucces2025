import React from 'react';
import '../styles/Therapie.css';
import therapieImg from '../assets/images/mijn-missie-energetisch-aangepast.jpg';

function Therapie() {
  return (
    <div className="therapie-page">
      <section className="hero-section">
        <div className="container">
          <h1>Lichaamsgerichte Traumatherapie</h1>
          <div className="hero-content">
            <div className="hero-text">
              <p className="intro-text">
                In onze lichaamsgerichte traumatherapie staat jouw ervaring centraal. We beginnen altijd rustig en in overleg – jij bepaalt het tempo. Samen luisteren we naar jouw verhaal én naar wat je lichaam ons vertelt, zodat we stap voor stap kunnen werken aan verwerking en herstel.
              </p>
            </div>
            <div className="hero-image">
              <img src={therapieImg} alt="Lichaamsgerichte traumatherapie bij Praktijkbasis" />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-section">
        <div className="container">
          <h2>Wat is lichaamsgerichte traumatherapie?</h2>
          <div className="what-is-content">
            <p>
              Lichaamsgerichte traumatherapie is een vorm van therapie waarbij we niet alleen praten over wat je hebt meegemaakt, maar ook letten op de signalen van je lichaam. Trauma kan zich namelijk vastzetten in je lichaam en zich uiten in bijvoorbeeld spanning, pijn of vermoeidheid.
            </p>
            <p>
              Door technieken zoals ademhaling, beweging en het bewust voelen van emoties te oefenen, helpen we je lichaam stap voor stap om de spanning en pijn los te laten. Alles gebeurt in jouw tempo, en je hoeft niets te doen wat je niet wilt. Zo kun je op een veilige manier moeilijke ervaringen verwerken.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <h2>Onze aanpak en waarden</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Veiligheid voorop</h3>
              <p>Traumaverwerking vraagt om een veilige omgeving. Bij Praktijkbasis creëren we een ruimte waar je je geborgen en gerespecteerd voelt. Je grenzen worden altijd gerespecteerd.</p>
            </div>
            <div className="approach-card">
              <h3>Lichaam en geest verbinden</h3>
              <p>We werken vanuit het principe dat lichaam en geest onlosmakelijk verbonden zijn. Door naar beide te luisteren, ontstaat er ruimte voor diepe heling.</p>
            </div>
            <div className="approach-card">
              <h3>In jouw tempo</h3>
              <p>Ieder helingsproces is uniek. We volgen jouw tempo en passen de therapie aan op wat jij op dat moment aankunt en nodig hebt.</p>
            </div>
            <div className="approach-card">
              <h3>Compassie en begrip</h3>
              <p>Je wordt benaderd met oprechte compassie, zonder oordeel. Vanuit een christelijke basis geloven we in de waarde van ieder mens en de kracht van liefde in het helingsproces.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="session-section">
        <div className="container">
          <h2>Hoe gaat een sessie in zijn werk?</h2>
          <div className="session-content">
            <p>
              Een sessie duurt ongeveer een uur en vindt plaats in een rustige, comfortabele ruimte. We beginnen altijd met een check-in: hoe gaat het nu met je en wat heb je nodig? Daarna bepalen we samen de focus voor de sessie.
            </p>
            <p>
              Tijdens de sessie wisselen we af tussen gesprek en lichaamsgerichte oefeningen. Dit kunnen ademhalingsoefeningen zijn, aandacht richten op lichamelijke sensaties, of zachte bewegingsoefeningen. Je zit meestal op een stoel of mat, en alles gebeurt in overleg.
            </p>
            <p>
              We sluiten altijd af met een moment om te 'landen' en te bespreken hoe je de sessie hebt ervaren. Je krijgt soms ook oefeningen mee voor thuis, als je daar behoefte aan hebt.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Wat het je kan opleveren</h2>
          <div className="benefits-content">
            <ul className="benefits-list">
              <li>
                <strong>Innerlijke rust</strong> - Vermindering van stress, angst en spanning in het lichaam
              </li>
              <li>
                <strong>Verwerking van trauma</strong> - Een gezonde manier om pijnlijke ervaringen te verwerken
              </li>
              <li>
                <strong>Betere verbinding</strong> - Meer contact met je lichaam en je emoties
              </li>
              <li>
                <strong>Grenzen leren voelen</strong> - Herkennen wanneer iets te veel wordt en voor jezelf leren opkomen
              </li>
              <li>
                <strong>Meer balans</strong> - Een evenwichtiger leven waarin je meer kunt genieten
              </li>
              <li>
                <strong>Persoonlijke groei</strong> - Ontdekken van je eigen kracht en veerkracht
              </li>
            </ul>
            <p className="closing-text">
              Lichaamsgerichte traumatherapie kan helpen bij verschillende uitdagingen, zoals stress, angst, trauma, rouw, burn-out, en het verwerken van moeilijke levenservaringen. Iedereen is welkom, ongeacht geloof of achtergrond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Therapie;
