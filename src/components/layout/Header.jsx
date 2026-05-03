import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? (
          <span className="close-arrow">←</span>
        ) : (
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>MARIA PAUL Ryan</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
          <li><Link to="/passions" onClick={closeMenu}>Passions</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
