import React from 'react';
import '../styles/Home.css';
import siskaPortret from '../assets/images/Siska Greving 21-aangepast.jpg';
import overSiska from '../assets/images/over-siska-energetische-therapie.jpg';
import mijnMissie from '../assets/images/mijn-missie-energetisch-aangepast.jpg';
import wandeling from '../assets/images/therapeutische-wandeling.jpg';

function Home() {
  return (
    <div className="home-page">
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h2>Welkom bij Praktijkbasis</h2>
            <p>Energetische therapie met een spirituele basis</p>
            <button className="cta-button">Maak een afspraak</button>
          </div>
          <div className="hero-image">
            <img src={siskaPortret} alt="Siska Greving" />
          </div>
        </div>
      </section>

      <section id="over-mij" className="about-section">
        <div className="container">
          <h2>Over mij</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={overSiska} alt="Over Siska" />
            </div>
            <div className="about-text">
              <p>Mijn naam is Siska Greving en ik ben een energetisch therapeut met een spirituele basis. Ik help mensen om weer in balans te komen en hun eigen kracht te vinden.</p>
              <p>Met mijn achtergrond in spirituele therapie kan ik je helpen om blokkades op te lossen en je weer in verbinding te brengen met jezelf.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="therapie" className="therapy-section">
        <div className="container">
          <h2>Therapie</h2>
          <div className="therapy-content">
            <div className="therapy-text">
              <p>In mijn praktijk bied ik verschillende vormen van energetische therapie aan, altijd met een spirituele basis. Ik geloof dat het belangrijk is om te weten waar de bron van je therapie vandaan komt.</p>
              <p>Tijdens een sessie werken we samen aan het herstellen van je energetische balans en het oplossen van blokkades die je tegenhouden in je persoonlijke groei.</p>
            </div>
            <div className="therapy-image">
              <img src={mijnMissie} alt="Energetische Therapie" />
            </div>
          </div>
        </div>
      </section>

      <section id="wandelingen" className="walks-section">
        <div className="container">
          <h2>Therapeutische Wandelingen</h2>
          <div className="walks-content">
            <div className="walks-image">
              <img src={wandeling} alt="Therapeutische Wandeling" />
            </div>
            <div className="walks-text">
              <p>Naast therapiesessies in mijn praktijk, bied ik ook therapeutische wandelingen aan in de natuur. Tijdens deze wandelingen combineren we de helende kracht van de natuur met energetische therapie.</p>
              <p>De wandelingen vinden plaats in de prachtige omgeving van Drenthe en zijn geschikt voor iedereen die behoefte heeft aan rust, reflectie en heling.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Neem contact op</h3>
              <p><strong>Email:</strong> info@praktijkbasis.eu</p>
              <p><strong>Telefoon:</strong> 06-12345678</p>
              <p><strong>Adres:</strong> Praktijkstraat 1, 9400 AA Assen</p>
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
