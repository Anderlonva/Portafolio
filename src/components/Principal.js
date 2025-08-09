import React from 'react';
import foto from '../img/android-chrome-512x512.png';
import cvPDF from '../img/CV_portafolio_Anderson_Londoño.pdf'
import { FaGithub, FaLinkedin, FaFileDownload, FaAws, FaRobot, FaDatabase, FaCode, FaNodeJs, FaGithubSquare } from 'react-icons/fa';
import { SiAwslambda, SiJest, SiCypress, SiPostgresql, SiMongodb, SiReact } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { FiDatabase } from 'react-icons/fi';

export const Principal = () => {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container mt-10">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="profile-img-container">
              <img src={foto} className="profile-img" alt="Anderson Londoño" />
              <div className="img-overlay"></div>
            </div>
          </div>

          <div className="col-lg-7">
            <h1 className="display-4 mb-4 mt-4 text-center">Anderson Londoño Valencia</h1>
            <h3 className="text-primary mb-4 text-center">Ingeniero de Software | Especialista en Calidad</h3>

            <div className="d-flex flex-wrap mb-4 justify-content-center">
              <div className="tech-badge me-2 mb-2">
                <SiCypress className="me-1" /> Cypress
              </div>
              <div className="tech-badge me-2 mb-2">
                <SiJest className="me-1" /> Testing
              </div>
              <div className="tech-badge me-2 mb-2">
                <FaRobot className="me-1" /> IA aplicada
              </div>
              <div className="tech-badge me-2 mb-2">
                <DiScrum className="me-1" /> Scrum
              </div>
              <div className="tech-badge me-2 mb-2">
                <FiDatabase className="me-1" /> Bases de Datos
              </div>
              <div className="tech-badge me-2 mb-2">
                <SiReact className="me-1" /> React
              </div>
              <div className="tech-badge me-2 mb-2">
                <FaNodeJs className="me-1" /> Node.js
              </div>
              <div className="tech-badge me-2 mb-2">
                <FaGithubSquare className="me-1" /> Git y GitHub
              </div>
              <div className="tech-badge me-2 mb-2">
                <SiAwslambda className="me-1" /> AWS
              </div>
              
            </div>

            <div className="about-content text-center">

              <p className="lead">
                Apasionado por construir software de calidad mediante automatización inteligente y prácticas modernas de testing.
              </p>

              <ul className="tech-list list-none">
                <li>
                  <FaCode className="text-primary" />
                  <strong> Enfoque técnico:</strong> Combino desarrollo full-stack con especialización en QA
                </li>
                <li>
                  <FaRobot className="text-primary" />
                  <strong> Innovación:</strong> Implemento LLMs para la generación de casos de prueba y la optimización de procesos
                </li>

              </ul>

              <p className="">
                Como ingeniero de software con sólidos conocimientos en desarrollo full-stack, he encontrado mi 
                verdadera pasión en el aseguramiento de calidad y la automatización de pruebas.
              </p>

              <p>
                Además de mis habilidades técnicas, también poseo conocimiento en la metodología de trabajo ágil Scrum. Estoy familiarizado 
                con el enfoque colaborativo y la organización eficiente que esta metodología proporciona, lo cual considero esencial para el 
                desarrollo de proyectos exitosos en el sector de TI.
              </p>

              <p>
                Soy dedicado, apasionado por la tecnología y comprometido con el aprendizaje continuo. Estoy emocionado por la 
                oportunidad de contribuir a proyectos desafiantes y seguir desarrollándome en el campo de la ingeniería de software.
              </p>

            </div>

            <div className="social-links mt-5 justify-content-center">
              <a href="https://github.com/Anderlonva" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/anderson-londono-669094218/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
              </a>
              <a href={cvPDF} download className="btn btn-primary ms-3">
                <FaFileDownload className="me-2" /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};