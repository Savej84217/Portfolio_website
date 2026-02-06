import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'savejshailkh50@gmail.com',
      link: 'mailto:savejshailkh50@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 8421727945',
      link: 'tel:+918421727945',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Kolhapur, Maharashtra',
      link: null,
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'savej-shaikh-415a81339',
      link: 'https://www.linkedin.com/in/savej-shaikh-415a81339',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            I'm currently seeking internship opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-description">
              Open to discussing internship opportunities, collaboration on projects,
              or any questions you might have about my work.
            </p>
            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <div className="contact-label">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="contact-value"
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-image">
            <img
              src="https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Contact"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
