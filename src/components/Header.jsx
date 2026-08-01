import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-nieuw.png';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" onClick={closeNav} className="site-logo">
          <img src={logo} alt="Voor Jouw Succes" />
        </Link>

        <button
          className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Menu openen of sluiten"
          aria-expanded={isNavOpen}
        >
          <span></span>
        </button>

        {isNavOpen && <div className="nav-overlay" onClick={closeNav}></div>}

        <nav className={`site-nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" end onClick={closeNav} className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/oplossingen" onClick={closeNav} className={navLinkClass}>Oplossingen</NavLink></li>
            <li><NavLink to="/over-mij" onClick={closeNav} className={navLinkClass}>Over Jos</NavLink></li>
            <li className="nav-cta"><NavLink to="/contact" onClick={closeNav}>Vertel je vraagstuk</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
