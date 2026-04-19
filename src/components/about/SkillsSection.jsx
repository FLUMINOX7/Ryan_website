import React, { useState } from 'react';
import { FaArrowsRotate, FaCode, FaGithub, FaJava, FaMicrosoft, FaStar } from 'react-icons/fa6';
import {
  SiDocker,
  SiFlutter,
  SiJira,
  SiJavascript,
  SiPython,
  SiReact,
  SiTrello
} from 'react-icons/si';
import './SkillsSection.css';

const categoryIcons = {
  1: [
    { Icon: SiPython, color: '#3776AB' },
    { Icon: SiJavascript, color: '#F7DF1E' }
  ],
  2: [
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiFlutter, color: '#02569B' }
  ],
  3: [
    { Icon: FaGithub, color: '#181717' },
    { Icon: SiDocker, color: '#2496ED' }
  ],
  4: [
    { Icon: SiJira, color: '#0052CC' },
    { Icon: SiTrello, color: '#0052CC' }
  ],
};

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
      
      <div className="skills-container">
        {/* Hard Skills Section */}
        <div className="skills-main-section hard-skills-section">
          <h3 className="skills-main-title">
            <span className="main-title-icon"><FaCode aria-hidden="true" /></span>
            {skillsData.hardSkills.title}
          </h3>
          <p className="skills-main-description">{skillsData.hardSkills.description}</p>
          
          <div className="skills-categories">
          {skillsData.hardSkills.categories.map((category) => (
            <div 
              key={category.id} 
              className={`skill-category ${openCategories.includes(`hard-${category.id}`) ? 'open' : ''}`}
            >
              <button 
                className="category-header"
                onClick={() => toggleCategory(`hard-${category.id}`)}
                aria-expanded={openCategories.includes(`hard-${category.id}`)}
              >
                <div className="category-header-content">
                  <span className="category-icon">
                    <span className="category-icon-cluster" aria-hidden="true">
                      {categoryIcons[category.id]?.map(({ Icon, color }, index) => (
                        <Icon key={index} style={{ color }} />
                      ))}
                    </span>
                  </span>
                  <h4>{category.name}</h4>
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-main-section soft-skills-section">
        <h3 className="skills-main-title">
          <span className="main-title-icon"><FaStar aria-hidden="true" /></span>
          {skillsData.softSkills.title}
        </h3>
        <p className="skills-main-description">{skillsData.softSkills.description}</p>
        
        <div className="soft-skills-grid">
          {skillsData.softSkills.skills.map((skill) => (
            <div key={skill.id} className="soft-skill-card">
              <div className="soft-skill-header">
                <span className="soft-skill-icon">{skill.icon}</span>
                <h4>{skill.name}</h4>
              </div>
              <p className="soft-skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SkillsSection;
