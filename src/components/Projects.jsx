import React from 'react'
import { FaBrain, FaChartLine, FaRobot } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      icon: <FaBrain />,
      title: 'AI-Powered Movie Recommendation System',
      description:
        'Developed a content-based recommendation system using Python, Pandas, and Scikit-learn to suggest movies based on user preferences.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity'],
      highlights: [
        'Implemented content-based filtering algorithm',
        'Used TF-IDF vectorization for feature extraction',
        'Applied cosine similarity for accurate recommendations',
      ],
    },
    {
      icon: <FaChartLine />,
      title: 'Smart Retail Sales Dashboard',
      description:
        'Designed and built a comprehensive analytics dashboard using SQL and Power BI to track retail performance metrics and sales trends.',
      technologies: ['SQL', 'Power BI', 'Database Design', 'Data Visualization'],
      highlights: [
        'Created relational database with optimized schema',
        'Performed complex SQL queries with JOINs and Window Functions',
        'Built interactive dashboards for revenue and sales analysis',
      ],
    },
    {
      icon: <FaRobot />,
      title: 'Machine Learning Classification Model',
      description:
        'Built a Random Forest classifier to predict customer churn with high accuracy, including comprehensive data preprocessing and evaluation.',
      technologies: ['Python', 'Random Forest', 'Data Cleaning', 'Model Evaluation'],
      highlights: [
        'Performed data cleaning and feature engineering',
        'Achieved high accuracy with optimized hyperparameters',
        'Evaluated model using confusion matrix and accuracy metrics',
      ],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A showcase of my work in AI, Machine Learning, and Data Analytics
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
