import React from 'react';
import './Header.css';

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
