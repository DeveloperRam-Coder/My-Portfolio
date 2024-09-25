import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className={`indicator-point ${activeSection === 'home' ? 'active' : ''}`} data-tooltip="Home"></div>
      <div className={`indicator-point ${activeSection === 'about-me' ? 'active' : ''}`} data-tooltip="About Me"></div>
      <div className={`indicator-point ${activeSection === 'professional-summary' ? 'active' : ''}`} data-tooltip="Professional Summary"></div>
      <div className={`indicator-point ${activeSection === 'skills' ? 'active' : ''}`} data-tooltip="Skills"></div>
      <div className={`indicator-point ${activeSection === 'projects' ? 'active' : ''}`} data-tooltip="Projects"></div>
      <div className={`indicator-point ${activeSection === 'certifications' ? 'active' : ''}`} data-tooltip="Certifications"></div>
      <div className={`indicator-point ${activeSection === 'contact' ? 'active' : ''}`} data-tooltip="Contact"></div>
    </div>
  );
};

export default ScrollIndicator;
