import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/seo/SEO'
import SchemaMarkup from './components/seo/SchemaMarkup'

// Pagina's importeren
import Home from './pages/Home'
import OverMij from './pages/OverMij'
import Oplossingen from './pages/Oplossingen'
import Contact from './pages/Contact'


// Laat kaarten en tekstblokken speels binnenkomen tijdens het scrollen.
// De klassen worden pas via JS toegevoegd, zodat de inhoud zonder JS
// (en voor crawlers) altijd gewoon zichtbaar is.
function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll(
      '.card, .step, .faq-item, .section-head, .narrative > *, .prose > *, .value-list li'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 5) * 70}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

// Scrolt bij navigatie naar boven, of naar het anker als er een #id in de URL staat
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// 404 Pagina component
const NotFound = () => (
  <div className="container not-found">
    <h1>Pagina Niet Gevonden</h1>
    <p>De pagina die je zoekt bestaat niet. Ga terug naar de <Link to="/">homepage</Link>.</p>
  </div>
);

function App() {
  // Bepaal de basename op basis van de omgeving
  // In productie (GitHub Pages) gebruiken we /voorjouwsucces2025 als basename
  // Lokaal controleren we of we in de ontwikkelomgeving zitten
  const isLocalVoorJouwSucces = window.location.pathname.startsWith('/voorjouwsucces2025');
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basename = isGitHubPages || isLocalVoorJouwSucces ? '/voorjouwsucces2025' : '';

  return (
    <Router basename={basename}>
      <div className="app">
        <ScrollManager />
        <ScrollReveal />
        <Header />
        <main className="main-content">
          <SEO />
          <SchemaMarkup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<OverMij />} />
            <Route path="/oplossingen" element={<Oplossingen />} />
            <Route path="/diensten" element={<Navigate to="/oplossingen" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
