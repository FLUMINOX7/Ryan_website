import React from 'react';
import './TimelineSection.css';

const TimelineSection = ({ journeyData }) => {
  return (
    <section className="timeline-section">
      <h2>{journeyData.title}</h2>
      <p className="timeline-description">{journeyData.description}</p>
      
      <div className="timeline">
        {journeyData.timeline.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item ${item.type} ${item.current ? 'current' : ''}`}
          >
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < journeyData.timeline.length - 1 && <div className="marker-line"></div>}
            </div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-type-badge">
                  {item.type === 'education' ? '🎓' : '💼'}
                  <span>{item.type === 'education' ? 'Formation' : 'Expérience'}</span>
                </div>
                <span className="timeline-period">{item.period}</span>
                {item.current && <span className="current-badge">En cours</span>}
              </div>
              
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-institution">
                <span className="institution-name">{item.institution}</span>
                <span className="institution-location">📍 {item.location}</span>
              </div>
              <p className="timeline-description-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
