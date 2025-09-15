import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/NewDesign.css';
import logoNieuw from '../assets/images/logo-nieuw.png';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect voor het detecteren van scrollen
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect voor het vergrendelen van de body scroll wanneer mobiel menu open is
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Helper functie om navigatie te sluiten na klikken op een link
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={closeNav} className="logo-link">
            <img src={logoNieuw} alt="Voor Jouw Succes Logo" className="logo" />
          </Link>
        </div>
        
        <button className="mobile-nav-toggle" onClick={toggleNav} aria-label="Toggle menu">
          <span className={`hamburger ${isNavOpen ? 'open' : ''}`}></span>
        </button>

        {/* Overlay voor mobiel menu */}
        {isNavOpen && (
          <div className={`mobile-nav-overlay ${isNavOpen ? 'open' : ''}`} onClick={closeNav}></div>
        )}

        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/over-mij" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Over Mij
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/diensten" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Diensten
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ai-implementatie" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                AI Oplossingen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/procesoptimalisatie" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Optimalisatie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/praktische-info" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
