import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <h1>Ryan</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/passions">Passions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </header>
  );
};

export default Header;
