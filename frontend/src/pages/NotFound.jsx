import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page introuvable</h1>
        <p className="error-message">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="error-actions">
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
          <Link to="/contact" className="btn-secondary">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
