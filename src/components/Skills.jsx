import React from 'react'
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaTasks,
  FaClock,
  FaAward,
  FaLanguage,
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'SQL', icon: <FaDatabase />, level: 85 },
    { name: 'Machine Learning', icon: <FaChartBar />, level: 80 },
    { name: 'Data Analytics', icon: <FaChartBar />, level: 85 },
  ]

  const softSkills = [
    { name: 'Leadership', icon: <FaUsers /> },
    { name: 'Critical Thinking', icon: <FaLightbulb /> },
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Project Management', icon: <FaTasks /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Teamwork', icon: <FaUsers /> },
  ]

  const certifications = [
    { name: 'AWS Certification', icon: <FaAward /> },
    { name: 'Oracle Certification', icon: <FaAward /> },
    { name: 'Microsoft Certification', icon: <FaAward /> },
  ]

  const languages = [
    { name: 'English', icon: <FaLanguage /> },
    { name: 'Hindi', icon: <FaLanguage /> },
    { name: 'Marathi', icon: <FaLanguage /> },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-content">
          <div className="skills-section">
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="technical-skills">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-card">
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <div className="soft-skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom-section">
            <div className="skills-section">
              <h3 className="subsection-title">Certifications</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <span className="cert-icon">{cert.icon}</span>
                    <span className="cert-name">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3 className="subsection-title">Languages</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="lang-icon">{lang.icon}</span>
                    <span className="lang-name">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
