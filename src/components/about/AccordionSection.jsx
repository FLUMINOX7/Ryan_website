import React, { useState } from 'react';
import './AccordionSection.css';

const AccordionSection = ({ title, description, items, type = 'education' }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="accordion-section">
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
      
      <div className="accordion-list">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`accordion-item ${openItems.includes(item.id) ? 'open' : ''}`}
          >
            <button 
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.includes(item.id)}
            >
              <div className="accordion-header-content">
                <div className="accordion-title-section">
                  <span className="accordion-icon">
                    {type === 'education' ? '🎓' : '💼'}
                  </span>
                  <div className="accordion-title-text">
                    <h3>{item.title}</h3>
                    <p className="accordion-subtitle">
                      {type === 'education' ? item.institution : item.company}
                    </p>
                  </div>
                </div>
                <div className="accordion-header-right">
                  <span className="accordion-period">{item.period}</span>
                  {item.current && <span className="current-badge">En cours</span>}
                  <svg 
                    className="accordion-chevron" 
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
                </div>
              </div>
            </button>
            
            <div className="accordion-content">
              <div className="accordion-content-inner">
                <div className="accordion-details">
                  <span className="detail-item">
                    📍 {item.location}
                  </span>
                </div>
                <p className="accordion-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionSection;
