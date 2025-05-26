import { useState } from 'react';
import '../styles/Header.css';
import logoNieuw from '../assets/images/logo-nieuw.png';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logoNieuw} alt="Praktijkbasis Logo" className="logo" />
          <h1>Praktijkbasis</h1>
        </div>
        
        <div className="mobile-nav-toggle" onClick={toggleNav}>
          <span className={`hamburger ${isNavOpen ? 'open' : ''}`}></span>
        </div>

        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" onClick={() => setIsNavOpen(false)}>Home</a></li>
            <li className="nav-item"><a href="#over-mij" onClick={() => setIsNavOpen(false)}>Over mij</a></li>
            <li className="nav-item"><a href="#therapie" onClick={() => setIsNavOpen(false)}>Therapie</a></li>
            <li className="nav-item"><a href="#wandelingen" onClick={() => setIsNavOpen(false)}>Wandelingen</a></li>
            <li className="nav-item"><a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
