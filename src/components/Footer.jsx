import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Let's Connect</h2>
            <p className="text-secondary mb-4">
              I'm currently seeking internship opportunities in software development, 
              web development, or data science. Feel free to reach out!
            </p>
            <div className="social-links-footer">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="footer-contact">
            <a href={`mailto:${portfolioData.personal.email}`} className="contact-item">
              <Mail className="text-accent" size={20} />
              <span>{portfolioData.personal.email}</span>
            </a>
            <div className="contact-item">
              <Phone className="text-accent" size={20} />
              <span>{portfolioData.personal.phone}</span>
            </div>
            <div className="contact-item">
              <MapPin className="text-accent" size={20} />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
