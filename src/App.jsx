import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Localisation from './components/Localisation';
import Horaires from './components/Horaires';
import Tarifs from './components/Tarifs';
import Contact from './components/Contact';
import Conditions from './components/Conditions';
import Shop from './components/Shop';
import logo from './media/logo1.png';
import Actu from './components/Actu';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePhoneButtonClick = () => {
    window.location.href = 'tel:0636105816';
  };

  return (
    <Router>
      <div>
        <header>
          <img src={logo} alt="Logo Santosha Yoga" className="logoSite" />
        </header>

        <div className='menuMobile'>
        <button
            id="btn_menu"
            onClick={handlePhoneButtonClick}
            className="phoneButton"
          >
          📞
        </button>
        <button
            id="btn_menu"
            onClick={toggleMenu}
            className="burgerButton"
          >
          ☰
        </button>
        </div>

        <nav className={`menu-container ${menuOpen ? 'menu-open' : ''}`}>
          <ul className="menu-list">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                accueil
              </Link>
            </li>
            <li>
              <Link to="/presentation" onClick={() => setMenuOpen(false)}>
                Présentation
              </Link>
            </li>
            <li>
              <Link to="/localisation" onClick={() => setMenuOpen(false)}>
                Le lieu
              </Link>
            </li>
            <li>
              <Link to="/horaires" onClick={() => setMenuOpen(false)}>
                Les horaires
              </Link>
            </li>
            <li>
              <Link to="/tarifs" onClick={() => setMenuOpen(false)}>
                Les tarifs
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={() => setMenuOpen(false)}>
                Boutique
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>

        {menuOpen && (
          <nav className="menu_mobile">
  
            <ul>
              <li><Link to="/" onClick={toggleMenu}><p>ACCUEIL</p></Link></li>
              <li><Link to="/presentation" onClick={toggleMenu}><p>PRÉSENTATION</p></Link></li>
              <li><Link to="/localisation" onClick={toggleMenu}><p>LE LIEU</p></Link></li>
              <li><Link to="/horaires" onClick={toggleMenu}><p>LES HORAIRES</p></Link></li>
              <li><Link to="/tarifs" onClick={toggleMenu}><p>LES TARIFS</p></Link></li>
              <li><Link to="/shop" onClick={toggleMenu}><p>BOUTIQUE</p></Link></li>
              <li><Link to="/contact" onClick={toggleMenu}><p>NOUS CONTACTER</p></Link></li>
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/horaires" element={<Horaires />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/actu" element={<Actu />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;