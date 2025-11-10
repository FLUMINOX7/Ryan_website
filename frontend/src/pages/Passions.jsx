import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import PassionItem from '../components/passions/PassionItem';
import { passions } from '../data/passions';
import './Passions.css';

const Passions = () => {
  useDocumentTitle('Mes Passions');

  return (
    <section className="passions">
      <div className="container">
        <div className="passions-header">
          <h2>Mes Passions</h2>
          <p className="passions-intro">
            Ce qui me motive et me pousse à me dépasser chaque jour. 
            Cliquez sur chaque passion pour en découvrir plus sur mon parcours et mes compétences.
          </p>
        </div>
        
        <div className="passions-list">
          {passions.map((passion, index) => (
            <PassionItem key={passion.id} passion={passion} index={index} />
          ))}
        </div>
        
        {passions.length === 0 && (
          <div className="no-passions">
            <p>Aucune passion pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Passions;
