import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './About.css';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="about-text glass-card">
          <p className="mb-3">
            I am a passionate <strong>Computer Science student specializing in AI & Robotics</strong> at {portfolioData.education[0].institution}. 
            My journey in tech is driven by a deep curiosity for how things work and a desire to build solutions that make a real impact.
          </p>
          <p className="mb-4">
            Currently, I'm focusing on Full-Stack Development and exploring the fascinating intersections of Artificial Intelligence 
            with modern web applications. I love bringing ideas to life, from the initial architecture to the final polished user interface.
          </p>
          
          <div className="languages">
            <h4 className="mb-2">Languages Spoken</h4>
            <div className="lang-tags">
              <span className="lang-tag">English (Professional)</span>
              <span className="lang-tag">Hindi (Native)</span>
            </div>
          </div>
        </div>

        <div className="education-card glass-card">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="text-accent" size={28} />
            <h3>Education</h3>
          </div>
          
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="edu-item">
              <h4>{edu.degree}</h4>
              <p className="text-secondary mb-1">{edu.institution}</p>
              <p className="text-accent mb-3">{edu.duration}</p>
              
              <div className="coursework">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={16} className="text-secondary" />
                  <span className="text-secondary font-medium">Relevant Coursework</span>
                </div>
                <div className="course-tags">
                  {edu.coursework.map((course, i) => (
                    <span key={i} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
