import React, { useState } from 'react';
import './SkillsSection.css';

const SkillsSection = ({ skillsData }) => {
  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (id) => {
    setOpenCategories(prev => 
      prev.includes(id) 
        ? prev.filter(catId => catId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="skills-section">
      <h2>{skillsData.title}</h2>
      <p className="skills-description">{skillsData.description}</p>
      
      <div className="skills-categories">
        {skillsData.categories.map((category) => (
          <div 
            key={category.id} 
            className={`skill-category ${openCategories.includes(category.id) ? 'open' : ''}`}
          >
            <button 
              className="category-header"
              onClick={() => toggleCategory(category.id)}
              aria-expanded={openCategories.includes(category.id)}
            >
              <div className="category-header-content">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>
              <svg 
                className="category-chevron" 
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
            
            <div className="skills-list-wrapper">
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
