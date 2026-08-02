import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-nieuw.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/">
              <img src={logo} alt="Voor Jouw Succes" className="footer-logo" />
            </Link>
            <p>
              Voor Jouw Succes helpt bedrijven – klein en groot – vooruit in hun
              digitale omgeving. Altijd vanuit één vraag: welk probleem lossen we
              voor jou op?
            </p>
          </div>

          <div>
            <h3>Menu</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/oplossingen">Oplossingen</Link></li>
              <li><Link to="/over-mij">Over Jos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:josklijnhout@hotmail.com">josklijnhout@hotmail.com</a></li>
              <li><a href="https://linkedin.com/in/josklijnhout" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://aibackoffice.nl" target="_blank" rel="noreferrer">aibackoffice.nl</a></li>
              <li>Heel Nederland, op locatie of online</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Voor Jouw Succes • Jouw probleem eerst, de techniek volgt</p>
      </div>
    </footer>
  );
}

export default Footer;
