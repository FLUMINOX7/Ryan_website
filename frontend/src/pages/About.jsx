import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './About.css';

const About = () => {
  useDocumentTitle('À propos');

  return (
    <section className="about">
      <div className="container">
        <h2>À propos de moi</h2>
        <p>Présentation à compléter...</p>
      </div>
    </section>
  );
};

export default About;
