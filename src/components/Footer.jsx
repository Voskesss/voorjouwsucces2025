import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logoNieuw from '../assets/images/logo-nieuw.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <Link to="/">
            <img src={logoNieuw} alt="Praktijkbasis Logo" className="footer-logo" />
          </Link>
          <p>Praktijkbasis - Energetische therapie met een spirituele basis</p>
        </div>
        
        <div className="footer-links">
          <h3>Snelle Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/over-mij">Over Siska</Link></li>
            <li><Link to="/therapie">Traumatherapie</Link></li>
            <li><Link to="/wandelingen">Wandelingen</Link></li>
            <li><Link to="/praktische-info">Praktische Info</Link></li>
            <li><Link to="/faq">Veelgestelde Vragen</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
