import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const projectCover = project.coverImage || project.image;

  const getStatusLabel = (status) => {
    return status === 'terminé' ? 'Terminé' : 'En cours';
  };

  const getStatusClass = (status) => {
    return status === 'terminé' ? 'status-completed' : 'status-in-progress';
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        {projectCover && (
          <img 
            src={projectCover}
            alt={project.title}
            className="project-image"
          />
        )}
        <span className={`status-badge ${getStatusClass(project.status)}`}>
          {getStatusLabel(project.status)}
        </span>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-short-description">{project.shortDescription}</p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge more">+{project.technologies.length - 3}</span>
          )}
        </div>
        
        <Link to={`/projects/${project.id}`} className="discover-button">
          Découvrir le projet
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
