import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { homeData } from '../data/home';
import { projects } from '../data/projects';
import './Home.css';

const Home = () => {
  useDocumentTitle('Accueil');

  // Get featured projects (most recent ones with status 'terminé')
  const featuredProjects = projects
    .filter(p => p.status === 'terminé')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-greeting">{homeData.hero.greeting}</p>
            <h1 className="hero-name">
              {homeData.hero.name}
              <span className="wave">👋</span>
            </h1>
            <h2 className="hero-tagline">{homeData.hero.tagline}</h2>
            <p className="hero-description">{homeData.hero.description}</p>
            
            <div className="hero-cta">
              <Link to={homeData.hero.cta.primary.link} className="cta-btn primary">
                {homeData.hero.cta.primary.text}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to={homeData.hero.cta.secondary.link} className="cta-btn secondary">
                {homeData.hero.cta.secondary.text}
              </Link>
            </div>
          </div>
          
          <div className="hero-illustration">
            <div className="floating-card card-1">💻</div>
            <div className="floating-card card-2">🚀</div>
            <div className="floating-card card-3">⚡</div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="quick-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img 
                src={homeData.about.image} 
                alt="Ryan"
                className="about-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400/7c3aed/ffffff?text=Ryan';
                }}
              />
              <div className="about-image-bg"></div>
            </div>
            
            <div className="about-content">
              <h2>{homeData.about.title}</h2>
              <p>{homeData.about.description}</p>
              
              <div className="about-stats">
                {homeData.about.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="learn-more-btn">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="key-skills">
        <div className="container">
          <div className="section-header">
            <h2>{homeData.keySkills.title}</h2>
            <p>{homeData.keySkills.description}</p>
          </div>
          
          <div className="skills-grid">
            {homeData.keySkills.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <div className="skill-bar-mini">
                  <div 
                    className="skill-fill-mini" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <Link to="/about" className="view-all-link">
              Voir toutes mes compétences →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="featured-projects">
          <div className="container">
            <div className="section-header">
              <h2>Projets en Vedette</h2>
              <p>Découvrez quelques-uns de mes projets récents</p>
            </div>
            
            <div className="projects-grid-home">
              {featuredProjects.map((project) => (
                <Link 
                  key={project.id} 
                  to={`/projects/${project.id}`} 
                  className="project-card-home"
                >
                  <div className="project-image-home">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=' + encodeURIComponent(project.title);
                      }}
                    />
                  </div>
                  <div className="project-content-home">
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <div className="project-tech-home">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-tag-home">{tech}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="section-cta">
              <Link to="/projects" className="cta-btn primary">
                Voir tous les projets
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Highlights Section */}
      <section className="highlights">
        <div className="container">
          <div className="section-header">
            <h2>{homeData.highlights.title}</h2>
          </div>
          
          <div className="highlights-grid">
            {homeData.highlights.items.map((item, index) => (
              <div key={index} className="highlight-card-home">
                <div className="highlight-icon-wrapper">
                  <span className="highlight-icon">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>Prêt à Collaborer ?</h2>
          <p>Transformons vos idées en réalité. Contactez-moi pour discuter de votre prochain projet.</p>
          <Link to="/contact" className="cta-btn-large">
            Démarrer un Projet
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
