import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logoNieuw from '../assets/images/logo-nieuw.png';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Helper functie om navigatie te sluiten na klikken op een link
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={closeNav}>
            <img src={logoNieuw} alt="Praktijkbasis Logo" className="logo" />
          </Link>
          <h1>Praktijkbasis - Energetische Therapie</h1>
        </div>
        
        <div className="mobile-nav-toggle" onClick={toggleNav}>
          <span className={`hamburger ${isNavOpen ? 'open' : ''}`}></span>
        </div>

        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/over-mij" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Over Siska
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/therapie" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Traumatherapie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wandelingen" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Wandelingen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/praktische-info" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                Praktische Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq" onClick={closeNav} className={({ isActive }) => isActive ? 'active' : ''}>
                FAQ
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
