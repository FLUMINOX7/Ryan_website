import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AccordionSection from '../components/about/AccordionSection';
import SkillsSection from '../components/about/SkillsSection';
import { aboutData } from '../data/about';
import './About.css';

const About = () => {
  useDocumentTitle('À propos');
  
  const [openSections, setOpenSections] = React.useState({
    motivation: false,
    goals: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section className="about">
      {/* Hero Section with Photo */}
      <div className="about-hero">
        <div className="container hero-container">
          <div className="hero-image-wrapper">
            <img 
              src={aboutData.intro.image} 
              alt={aboutData.intro.name}
              className="hero-image"
            />
            <div className="hero-image-decoration"></div>
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight">{aboutData.intro.name}</span>
            </h1>
            <p className="hero-subtitle">{aboutData.intro.title}</p>
            <p className="hero-description">{aboutData.intro.description}</p>
            
            <div className="hero-info">
              <span className="info-item">📍 {aboutData.intro.location}</span>
              <span className="info-item">✉️ {aboutData.intro.email}</span>
            </div>
            
            <div className="hero-cta">
              <Link to="/projects" className="cta-button primary">
                Voir mes projets
              </Link>
              <Link to="/passions" className="cta-button secondary">
                Découvrir mes passions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Education Section avec Accordéon */}
        <AccordionSection 
          title={aboutData.education.title}
          description={aboutData.education.description}
          items={aboutData.education.items}
          type="education"
        />

        {/* Experience Section avec Accordéon */}
        <AccordionSection 
          title={aboutData.experience.title}
          description={aboutData.experience.description}
          items={aboutData.experience.items}
          type="experience"
        />

        {/* Skills Section avec Accordéons */}
        <SkillsSection skillsData={aboutData.skills} />

        {/* Motivation Section avec Accordéon */}
        <section className={`collapsible-section motivation-section ${openSections.motivation ? 'open' : ''}`}>
          <button 
            className="section-toggle-button"
            onClick={() => toggleSection('motivation')}
          >
            <h2>{aboutData.motivation.title}</h2>
            <svg 
              className="section-chevron" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path 
                d="M6 9L12 15L18 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          <div className="section-content">
            <p className="motivation-content">{aboutData.motivation.content}</p>
            
            <div className="motivation-highlights">
              {aboutData.motivation.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <span className="highlight-icon">{highlight.icon}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Goals Section avec Accordéon */}
        <section className={`collapsible-section goals-section ${openSections.goals ? 'open' : ''}`}>
          <button 
            className="section-toggle-button"
            onClick={() => toggleSection('goals')}
          >
            <h2>{aboutData.professionalGoals.title}</h2>
            <svg 
              className="section-chevron" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path 
                d="M6 9L12 15L18 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          <div className="section-content">
            <div className="goals-grid">
              <div className="goals-card short-term">
                <h3>
                  <span className="goals-icon">🎯</span>
                  {aboutData.professionalGoals.shortTerm.title}
                </h3>
                <ul>
                  {aboutData.professionalGoals.shortTerm.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
              
              <div className="goals-card long-term">
                <h3>
                  <span className="goals-icon">🚀</span>
                  {aboutData.professionalGoals.longTerm.title}
                </h3>
                <ul>
                  {aboutData.professionalGoals.longTerm.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Travaillons Ensemble</h2>
          <p>Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.</p>
          <Link to="/contact" className="cta-button-large">
            Me contacter
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default About;
