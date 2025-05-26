import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import siskaPortret from '../assets/images/Siska Greving 21-aangepast.jpg';
import overSiska from '../assets/images/over-siska-energetische-therapie.jpg';
import mijnMissie from '../assets/images/mijn-missie-energetisch-aangepast.jpg';
import wandeling from '../assets/images/therapeutische-wandeling.jpg';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h2>Welkom bij Praktijkbasis</h2>
            <p>Een plek van rust en herstel</p>
            <p className="subtitle">Lichaamsgerichte traumatherapie met een christelijke basis</p>
            <Link to="/contact" className="cta-button">Maak een afspraak</Link>
          </div>
          <div className="hero-image">
            <img src={siskaPortret} alt="Siska Greving, lichaamsgericht traumatherapeut" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Over Siska</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={overSiska} alt="Siska Greving, lichaamsgericht traumatherapeut" />
            </div>
            <div className="about-text">
              <p>Mijn naam is Siska Greving en ik ben een lichaamsgericht traumatherapeut met een christelijke basis. Ik help mensen om weer in balans te komen en rust te vinden in een veilige omgeving.</p>
              <p>Vanuit een diep gewortelde overtuiging dat ieder mens waardevol en geliefd is, begeleid ik jongeren en volwassenen op hun weg naar herstel en balans.</p>
              <Link to="/over-mij" className="read-more">Lees meer over mij</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="therapy-section">
        <div className="container">
          <h2>Lichaamsgerichte Traumatherapie</h2>
          <div className="therapy-content">
            <div className="therapy-text">
              <p>In mijn praktijk bied ik lichaamsgerichte traumatherapie aan. Tijdens de sessies luister ik niet alleen naar jouw verhaal, maar ook naar de taal van je lichaam – zo ontdekken we samen wat je nodig hebt om te helen.</p>
              <p>We werken in een veilige omgeving aan het verwerken van trauma, het vinden van innerlijke rust en het herstellen van balans in je leven. Alles gebeurt in jouw tempo en met respect voor jouw grenzen.</p>
              <Link to="/therapie" className="read-more">Lees meer over de therapie</Link>
            </div>
            <div className="therapy-image">
              <img src={mijnMissie} alt="Lichaamsgerichte Traumatherapie" />
            </div>
          </div>
        </div>
      </section>

      <section className="walks-section">
        <div className="container">
          <h2>Therapeutische Wandelingen</h2>
          <div className="walks-content">
            <div className="walks-image">
              <img src={wandeling} alt="Therapeutische Wandeling in Drenthe" />
            </div>
            <div className="walks-text">
              <p>Naast therapiesessies in mijn praktijk, bied ik ook therapeutische wandelingen aan in de natuur. Tijdens deze wandelingen combineren we de helende kracht van de natuur met lichaamsgerichte traumatherapie.</p>
              <p>De wandelingen vinden plaats in de prachtige omgeving van Drenthe en zijn geschikt voor iedereen die behoefte heeft aan rust, reflectie en heling in een natuurlijke omgeving.</p>
              <Link to="/wandelingen" className="read-more">Lees meer over de wandelingen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Neem contact op</h3>
              <p><strong>Email:</strong> info@praktijkbasis.eu</p>
              <p><strong>Telefoon:</strong> 06-12345678</p>
              <p><strong>Adres:</strong> Praktijkstraat 1, 7971 XX Havelte</p>
              <Link to="/contact" className="read-more">Meer contactinformatie</Link>
            </div>
            <div className="contact-form">
              <h3>Stuur een bericht</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Naam</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Bericht</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Versturen</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
