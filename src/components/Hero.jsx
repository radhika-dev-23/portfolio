import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section container">
      <div className="hero-content animate-fade-in">
        <p className="greeting">Hi there, I am</p>
        <h1 className="name">{portfolioData.personal.name}</h1>
        <h2 className="role">
          <span className="text-accent">{portfolioData.personal.role.split(' ')[0]} </span>
          {portfolioData.personal.role.substring(portfolioData.personal.role.indexOf(' ') + 1)}
        </h2>
        <p className="objective">{portfolioData.personal.objective}</p>
        
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me <Download size={18} />
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="glow-orb"></div>
        <div className="code-block glass-card">
          <pre>
            <code>
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              <br/>  <span className="code-property">name:</span> <span className="code-string">'{portfolioData.personal.name}'</span>,
              <br/>  <span className="code-property">skills:</span> [<span className="code-string">'React'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'AI/ML'</span>],
              <br/>  <span className="code-property">hardWorker:</span> <span className="code-boolean">true</span>,
              <br/>  <span className="code-property">problemSolver:</span> <span className="code-boolean">true</span>
              <br/>{'}'};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
