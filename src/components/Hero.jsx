import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Savej Salim Shaikh</span>
            </h1>
            <p className="hero-subtitle">CSE (AIML) Student</p>
            <p className="hero-description">
              Motivated AIML student with expertise in Python, SQL, and Machine Learning.
              Passionate about building intelligent solutions and contributing to real-world applications.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/savej-shaikh-415a81339"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:savejshailkh50@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:8421727945"
                className="social-link"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Developer workspace"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" aria-label="Scroll to about section">
          <div className="scroll-indicator"></div>
        </a>
      </div>
    </section>
  )
}

export default Hero
