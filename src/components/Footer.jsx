import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <img src="/images/logo-nieuw.png" alt="Praktijkbasis Logo" className="footer-logo" />
          <p>Praktijkbasis - Energetische therapie met een spirituele basis</p>
        </div>
        
        <div className="footer-links">
          <h3>Snelle Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#over-mij">Over mij</a></li>
            <li><a href="#therapie">Therapie</a></li>
            <li><a href="#wandelingen">Wandelingen</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@praktijkbasis.eu</p>
          <p>Telefoon: 06-12345678</p>
          <p>Adres: Praktijkstraat 1, 9400 AA Assen</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Praktijkbasis. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}

export default Footer;
