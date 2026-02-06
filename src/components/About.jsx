import React from 'react'
import { FaAward, FaGraduationCap, FaCode } from 'react-icons/fa'
import './About.css'

const About = () => {
  const stats = [
    {
      icon: <FaCode />,
      number: '3+',
      label: 'Projects Completed',
    },
    {
      icon: <FaAward />,
      number: '3',
      label: 'Certifications',
    },
    {
      icon: <FaGraduationCap />,
      number: '3rd',
      label: 'Year Student',
    },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a motivated AIML student currently in my 3rd year at D. Y. Patil College of
              Engineering & Technology. I'm passionate about leveraging artificial intelligence
              and machine learning to solve real-world problems.
            </p>
            <p className="about-description">
              With hands-on experience in Python, SQL, and various ML frameworks, I've developed
              several projects ranging from recommendation systems to predictive models. I'm eager
              to gain practical experience through internships and contribute to innovative
              data-driven solutions.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Areas of Interest</h4>
                <p>Machine Learning, Data Analytics, AI Solutions</p>
              </div>
              <div className="highlight-item">
                <h4>Currently Learning</h4>
                <p>Deep Learning, Natural Language Processing, Cloud Computing</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
