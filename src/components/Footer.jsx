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
            <img src={logoNieuw} alt="Voor Jouw Succes Logo" className="footer-logo" />
          </Link>
          <p>Voor Jouw Succes biedt strategie en uitvoering voor maatschappelijke organisaties die meer impact willen maken. Met AI-implementatie en procesoptimalisatie helpen we jouw organisatie vooruit.</p>
        </div>
        
        <div className="footer-links">
          <h3>Snelle Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/over-mij">Over Mij</Link></li>
            <li><Link to="/diensten">Diensten</Link></li>
            <li><Link to="/ai-implementatie">AI-Implementatie</Link></li>
            <li><Link to="/procesoptimalisatie">Procesoptimalisatie</Link></li>
            <li><Link to="/praktische-info">Praktische Info</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@voorjouwsucces.nl</p>
          <p>Telefoon: 06-12345678</p>
          <p>Adres: Kantoor aan huis</p>
          <p>KvK: 12345678</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Voor Jouw Succes | AI & Organisatieontwikkeling | Alle rechten voorbehouden</p>
      </div>
    </footer>
  );
}

export default Footer;
