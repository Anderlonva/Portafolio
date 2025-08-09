import React, { useState, useEffect } from 'react';
import { diplomas, certificados } from '../estudios';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Certificados = () => {
  const [arrDiplomas, setArrDiplomas] = useState([]);
  const [arrCertificados, setCertificados] = useState([]);

  useEffect(() => {
    setArrDiplomas(diplomas);
    setCertificados(certificados);
  }, []);

  return (
    <section id="education" className="py-5 education-section bg-light mt-10">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Educación y Certificaciones</h2>
          <p className="section-subtitle">Mi trayectoria académica y logros profesionales</p>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="education-card">
              <div className="card-header">
                <FaGraduationCap className="me-2" />
                <h3>Educación Formal</h3>
              </div>
              <div className="card-body">
                <VerticalTimeline layout="1-column">
                  {arrDiplomas.map((diploma) => (
                    <VerticalTimelineElement
                      key={diploma.id}
                      className="vertical-timeline-element--education"
                      contentStyle={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                      contentArrowStyle={{ borderRight: '7px solid #fff' }}
                      date={diploma.anio}
                      iconStyle={{ background: '#4e54c8', color: '#fff' }}
                      icon={<FaGraduationCap />}
                    >
                      <h4 className="vertical-timeline-element-title">{diploma.carrera}</h4>
                      <h5 className="vertical-timeline-element-subtitle">{diploma.universidad}</h5>
                      <p>{diploma.ciudad}</p>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="education-card">
              <div className="card-header">
                <FaCertificate className="me-2" />
                <h3>Certificaciones</h3>
              </div>
              <div className="card-body">
                <VerticalTimeline layout="1-column">
                  {arrCertificados.map((certificado) => (
                    <VerticalTimelineElement
                      key={certificado.id}
                      className="vertical-timeline-element--certification"
                      contentStyle={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                      contentArrowStyle={{ borderRight: '7px solid #fff' }}
                      date={certificado.anio}
                      iconStyle={{ background: '#8f94fb', color: '#fff' }}
                      icon={<FaCertificate />}
                    >
                      <h4 className="vertical-timeline-element-title">{certificado.carrera}</h4>
                      <h5 className="vertical-timeline-element-subtitle">{certificado.universidad}</h5>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};