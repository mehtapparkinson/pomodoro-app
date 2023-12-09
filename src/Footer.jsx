import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <p>© {currentYear} Mehtap Parkinson | All rights reserved  </p>
        <div className="footer-links">
          <a href="https://github.com/mehtapparkinson" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/mehtapparkinson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mehtapparkinson@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
