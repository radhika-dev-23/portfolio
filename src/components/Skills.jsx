import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';
import { Code2, Layers, Wrench, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} className="text-accent" />,
      skills: portfolioData.skills.languages
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={24} className="text-accent" />,
      skills: portfolioData.skills.frameworks
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} className="text-accent" />,
      skills: portfolioData.skills.tools
    },
    {
      title: "Concepts",
      icon: <Lightbulb size={24} className="text-accent" />,
      skills: portfolioData.skills.concepts
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-card hover-glow">
            <div className="skill-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
