import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === parseInt(id));
  const galleryImages = (
    project?.detailImages && project.detailImages.length > 0
      ? project.detailImages
      : [project?.detailImage || project?.coverImage || project?.image]
  ).filter(Boolean);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentImage = galleryImages[currentImageIndex];
  const hasPreviousImage = currentImageIndex > 0;
  const hasNextImage = currentImageIndex < galleryImages.length - 1;
  
  useDocumentTitle(project ? project.title : 'Projet introuvable');

  if (!project) {
    return (
      <section className="project-detail">
        <div className="container">
          <div className="project-not-found">
            <h2>Projet introuvable</h2>
            <p>Désolé, ce projet n'existe pas ou a été supprimé.</p>
            <Link to="/projects" className="back-button">
              Retour aux projets
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getStatusLabel = (status) => {
    return status === 'terminé' ? 'Terminé' : 'En cours';
  };

  const getStatusClass = (status) => {
    return status === 'terminé' ? 'status-completed' : 'status-in-progress';
  };

  return (
    <section className="project-detail">
      <div className="container">
        <button onClick={() => navigate('/projects')} className="back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour aux projets
        </button>

        <div className="project-detail-header">
          <div className="project-meta">
            <span className="project-date">{formatDate(project.date)}</span>
            <span className={`status-tag ${getStatusClass(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-tagline">{project.shortDescription}</p>
        </div>

        <div className="project-detail-image">
          {galleryImages.length > 0 && currentImage && (
            <>
              {hasPreviousImage && (
                <button
                  type="button"
                  className="image-nav-button image-nav-left"
                  aria-label="Image précédente"
                  onClick={() => setCurrentImageIndex((prev) => prev - 1)}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}

              <img 
                src={currentImage}
                alt={galleryImages.length > 1 ? `${project.title} - image ${currentImageIndex + 1}` : project.title}
              />

              {hasNextImage && (
                <button
                  type="button"
                  className="image-nav-button image-nav-right"
                  aria-label="Image suivante"
                  onClick={() => setCurrentImageIndex((prev) => prev + 1)}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}

              {galleryImages.length > 1 && (
                <div className="image-index-indicator">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              )}
            </>
          )}
        </div>

        <div className="project-detail-content">
          <div className="project-main-content">
            <h2>À propos du projet</h2>
            <p className="project-full-description">{project.fullDescription}</p>

            <h3>Technologies utilisées</h3>
            <div className="technologies-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-sidebar">
            <div className="project-links">
              <h3>Liens</h3>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Voir sur GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Voir la démo
                </a>
              )}
              {!project.github && !project.demo && (
                <p className="no-links">Liens non disponibles pour ce projet</p>
              )}
            </div>

            <div className="project-info-box">
              <h3>Informations</h3>
              <div className="info-item">
                <span className="info-label">Statut</span>
                <span className={`info-value status-value ${getStatusClass(project.status)}`}>
                  {getStatusLabel(project.status)}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Date de création</span>
                <span className="info-value">{formatDate(project.date)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Technologies</span>
                <span className="info-value">{project.technologies.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
