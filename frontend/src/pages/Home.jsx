import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Home.css';

const Home = () => {
  useDocumentTitle('Accueil');

  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Développeur passionné par les nouvelles technologies</p>
      </section>
    </div>
  );
};

export default Home;
