import React, { useState } from 'react';

import canciones from '../img/proyecto-canciones.jpg';
import envios from '../img/proyecto-compania-envios.jpg';
import marcadores from '../img/proyecto-marcadores.jpg';
import escuela from '../img/proyecto-escuela-eventos.jpg';
import inventarios from '../img/proyecto-inventarios.jpg';
import todos from '../img/proyecto-todo.jpg';
import rines from '../img/proyecto-rines.jpg';
import sis from '../img/proyecto_formato_sis.jpg';
import estandar from '../img/proyecto_estandar_sofasa.jpg';
import mecana from '../img/Mecana_app.jpeg'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

export const Proyectos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const descMecana = "Una aplicación móvil creada en Flutter diseñada para la gestión y control eficiente de vehículos (motos y carros). "
  const descMecana2 = "La aplicación permite a los usuarios registrar múltiples vehículos y programar mantenimientos detallados, incluyendo tipo de mantenimiento, fecha, kilometraje actual y kilometraje para el próximo servicio."
  const descMecana3 = " Las funcionalidades adicionales incluyen el registro y seguimiento del SOAT y la tecnomecánica de cada vehículo, lo que optimiza el control y previene olvidos, eliminando la dependencia de recordatorios físicos propensos a extraviarse."
  const descMecana4 = " MECANA mejora significativamente la organización y el seguimiento del mantenimiento vehicular para propietarios, asegurando la vigencia de documentos y el cuidado preventivo."

  const projects = [
    
    {
      id: 1,
      title: "Mecana App",
      image: mecana,
      description: descMecana + descMecana2 + descMecana3 + descMecana4,
      technologies: ["Flutter", "Node.js", "Supabase"],
      githubLink: "https://github.com/Anderlonva",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Formato SIS Digital",
      image: sis,
      description: "Formato desarrollado para facilitar a los operarios el diligenciamiento de las ideas y sugerencias.",
      technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/Anderlonva/formato-sis.git",
      demoLink: "#"
    },
    {
      id: 3,
      title: "Estándar Web",
      image: estandar,
      description: "Es una solución innovadora que simplifica y agiliza el acceso de los operarios a los estándares necesarios para llevar a cabo sus tareas de manera eficiente. A través de una aplicación web, los operarios pueden acceder a los estándares específicos que sus jefes de unidad han autorizado para ellos. Mediante credenciales de usuario y contraseña, se les brinda acceso a la información que necesitan en tiempo real.",
      technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/Anderlonva/frontend_estandar_web.git",
      demoLink: "#"
    },
    {
      id: 4,
      title: "App de Marcadores",
      image: marcadores,
      description: "Aplicación para seguimiento de marcadores deportivos desarrollada como practica de la universidad.",
      technologies: ["React", "Node.js", "Bootstrap"],
      githubLink: "https://github.com/Anderlonva/Frontend-marcadoresG4.git",
      demoLink: "#"
    },
    {
      id: 5,
      title: "Gestor de Canciones",
      image: canciones,
      description: "Reproductor de música con listas de reproducción personalizadas.",
      technologies: ["JavaScript", "HTML5 Audio API"],
      githubLink: "https://github.com/Anderlonva/proyecto_final_frontend.git",
      demoLink: "#"
    },
    {
      id: 6,
      title: "Sistema de Envíos",
      image: envios,
      description: "Plataforma logística para gestión de envíos y seguimiento.",
      technologies: ["HTML5", "Css"],
      githubLink: "https://github.com/Anderlonva/Portafolio_compa-ia_envio_paquetes.git",
      demoLink: "#"
    },
    {
      id: 7,
      title: "Tienda de Rines",
      image: rines,
      description: "E-commerce especializado en rines para automóviles con carrito de compras.",
      technologies: ["HTML5", "Css", "Bootstrap"],
      githubLink: "https://github.com/Anderlonva/Proyecto_rines.git",
      demoLink: "#"
    },
    {
      id: 8,
      title: "Sistema de Inventarios",
      image: inventarios,
      description: "Herramienta para gestión de inventarios con reportes en tiempo real.",
      technologies: ["React", "Node.js", "Bootstrap"],
      githubLink: "https://github.com/Anderlonva/Frontend_IngenieriaWeb.git",
      demoLink: "#"
    },
    {
      id: 9,
      title: "App de Tareas",
      image: todos,
      description: "Aplicación para gestión de tareas con recordatorios y categorías.",
      technologies: ["Vue.js", "HTML5", "Css"],
      githubLink: "https://github.com/Anderlonva/ToDos-en-Vue.git",
      demoLink: "#"
    }
  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="projects" className="py-5 projects-section mt-10">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">Algunos de mis trabajos más recientes</p>
        </div>
        
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
              <div 
                className="project-card"
                onClick={() => handleShowModal(project)}
              >
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h5>{project.title}</h5>
                      <span className="view-btn">Ver detalles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de proyecto */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid mb-3" />
                </div>
                <div className="col-md-6">
                  <p>{selectedProject.description}</p>
                  <div className="mb-3">
                    <h6>Tecnologías utilizadas:</h6>
                    <div className="d-flex flex-wrap">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag me-2 mb-2">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                <FaGithub className="me-2" /> Código
              </a>
              
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};