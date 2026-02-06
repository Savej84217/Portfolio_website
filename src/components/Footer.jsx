import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Savej Salim Shaikh</h3>
            <p className="footer-description">
              AIML Student passionate about building intelligent solutions
              and contributing to innovative projects.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/savej-shaikh-415a81339"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:savejshailkh50@gmail.com"
                className="footer-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {currentYear} Savej Salim Shaikh. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> for learning and growth
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
