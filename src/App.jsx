import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/seo/SEO'
import SchemaMarkup from './components/seo/SchemaMarkup'

// Pagina's importeren
import Home from './pages/Home'
import OverMij from './pages/OverMij'
import Therapie from './pages/Therapie'
import Wandelingen from './pages/Wandelingen'
import PraktischeInfo from './pages/PraktischeInfo'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Ervaringen from './pages/Ervaringen'

import './App.css'

// 404 Pagina component
const NotFound = () => (
  <div className="container">
    <h1>Pagina Niet Gevonden</h1>
    <p>De pagina die je zoekt bestaat niet. Ga terug naar de <Link to="/">homepage</Link>.</p>
  </div>
);

function App() {
  // Bepaal de basename op basis van de omgeving
  // In productie (GitHub Pages) gebruiken we /praktijkbasis als basename
  // Lokaal controleren we of we in de ontwikkelomgeving zitten
  // Als we lokaal draaien op /praktijkbasis, dan gebruiken we dat als basename
  const isLocalPraktijkbasis = window.location.pathname.startsWith('/praktijkbasis');
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basename = isGitHubPages || isLocalPraktijkbasis ? '/praktijkbasis' : '';
  
  return (
    <Router basename={basename}>
      <div className="app">
        <Header />
        <main className="main-content">
          <SEO />
          <SchemaMarkup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<OverMij />} />
            <Route path="/therapie" element={<Therapie />} />
            <Route path="/wandelingen" element={<Wandelingen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/praktische-info" element={<PraktischeInfo />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ervaringen" element={<Ervaringen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
