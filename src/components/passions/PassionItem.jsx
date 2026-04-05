import React, { useState } from 'react';
import './PassionItem.css';

const PassionItem = ({ passion, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`passion-item ${isExpanded ? 'expanded' : ''}`}
      style={{ '--passion-color': passion.color }}
    >
      <div className="passion-header" onClick={toggleExpand}>
        <div className="passion-icon-wrapper">
          <span className="passion-icon">{passion.icon}</span>
        </div>
        
        <div className="passion-main-info">
          <div className="passion-title-row">
            <h3 className="passion-title">{passion.title}</h3>
          </div>
          <p className="passion-short-desc">{passion.shortDescription}</p>
        </div>
        
        <button className="expand-button" aria-label={isExpanded ? 'Réduire' : 'Développer'}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`chevron ${isExpanded ? 'rotated' : ''}`}
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
      </div>
      
      <div className={`passion-content ${isExpanded ? 'visible' : ''}`}>
        <div className="passion-divider"></div>
        
        <div className="passion-details">
          <div className="passion-description">
            <h4>À propos</h4>
            <p>{passion.fullDescription}</p>
            
            {passion.links && passion.links.length > 0 && (
              <div className="passion-links">
                {passion.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="passion-link"
                  >
                    {link.text} →
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <div className="passion-skills">
            <h4>Compétences associées</h4>
            <div className="skills-list">
              {passion.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassionItem;
