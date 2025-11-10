import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  useDocumentTitle('Mes Projets');

  // Trier les projets par date décroissante (plus récent en premier)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Mes Projets</h2>
          <p className="projects-intro">
            Découvrez mes réalisations et projets personnels. 
            Chaque projet représente une étape de mon apprentissage et de ma passion pour le développement.
          </p>
        </div>
        
        <div className="projects-grid">
          {sortedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {sortedProjects.length === 0 && (
          <div className="no-projects">
            <p>Aucun projet pour le moment. Revenez bientôt !</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
