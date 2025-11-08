import React from 'react';
import ThemeToggle from '../common/ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>Ryan</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Parcours</a></li>
          <li><a href="#passions">Passions</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </header>
  );
};

export default Header;
