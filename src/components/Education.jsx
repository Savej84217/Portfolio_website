import React from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-content">
          <div className="education-card">
            <div className="education-icon-wrapper">
              <FaGraduationCap className="education-icon" />
            </div>
            <div className="education-details">
              <h3 className="education-degree">
                Bachelor of Engineering in Computer Science (AIML)
              </h3>
              <h4 className="education-institution">
                D. Y. Patil College of Engineering & Technology
              </h4>
              <div className="education-info">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>Kolhapur, Maharashtra</span>
                </div>
                <div className="info-item">
                  <FaCalendar />
                  <span>3rd Year Student</span>
                </div>
              </div>
              <p className="education-description">
                Pursuing a specialized degree in Artificial Intelligence and Machine Learning
                with focus on data science, deep learning, and intelligent systems. Gaining
                hands-on experience through various projects and coursework in Python, SQL,
                and modern ML frameworks.
              </p>
              <div className="education-highlights">
                <h4>Key Coursework:</h4>
                <ul>
                  <li>Machine Learning & Deep Learning</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Database Management Systems</li>
                  <li>Artificial Intelligence</li>
                  <li>Python Programming</li>
                  <li>Data Analytics & Visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
