import React from 'react';
import './SkillsSection.css';

const SkillsSection = ({ skillsData }) => {
  return (
    <section className="skills-section">
      <h2>{skillsData.title}</h2>
      <p className="skills-description">{skillsData.description}</p>
      
      <div className="skills-categories">
        {skillsData.categories.map((category) => (
          <div key={category.id} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
            </div>
            
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
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
