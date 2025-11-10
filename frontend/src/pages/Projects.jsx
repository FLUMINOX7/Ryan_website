import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Projects.css';

const Projects = () => {
  useDocumentTitle('Mes Projets');

  return (
    <section className="projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <p>Liste des projets à venir...</p>
      </div>
    </section>
  );
};

export default Projects;
