import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>
        
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="contact-info">
              <h4 className="mb-4">Información de contacto</h4>
              
              <div className="info-item mb-4">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h6>Ubicación</h6>
                  <p>Medellín, Colombia</p>
                </div>
              </div>
              
              <div className="info-item mb-4">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h6>Email</h6>
                  <p>tuemail@ejemplo.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h6>Teléfono</h6>
                  <p>+57 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Tu email" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control" 
                  placeholder="Asunto" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control" 
                  rows="5" 
                  placeholder="Tu mensaje" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane className="me-2" /> Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};