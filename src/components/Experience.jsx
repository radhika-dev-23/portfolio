import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Experience & Activities</h2>
      
      <div className="timeline">
        {/* Experience Section */}
        {portfolioData.experience.map((exp, index) => (
          <div key={`exp-${index}`} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card hover-glow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <h4 className="timeline-org text-accent mb-3">{exp.organization}</h4>
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Activities Section */}
        {portfolioData.activities.map((act, index) => (
          <div key={`act-${index}`} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card hover-glow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="timeline-title">{act.title}</h3>
                <span className="timeline-date">{act.date}</span>
              </div>
              <h4 className="timeline-org text-accent mb-3">{act.organization}</h4>
              <ul className="timeline-points">
                {act.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
