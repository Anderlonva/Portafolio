import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../img/Logo.jpg';
import logo2 from '../img/logo_web.png';
import cvPDF from '../img/CV_portafolio_Anderson_Londoño.pdf'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed-top ${scrolled ? 'bg-dark shadow-sm' : 'bg-dark'} py-2`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <RouterLink to="/" className="navbar-brand">
              <img 
                src={logo2} 
                alt="Anderson Londoño - Desarrollador Full Stack" 
                className="logo-img" 
                style={{ height: scrolled ? '45px' : '60px', transition: 'all 0.3s ease' }} 
              />
            </RouterLink>

            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                <li className="nav-item">
                  <RouterLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    Inicio
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink to="/estudios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    Estudios
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink to="/proyectos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    Proyectos
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <a 
                    href="https://github.com/Anderlonva" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="nav-link"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    href="https://www.linkedin.com/in/anderson-londono-669094218/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="nav-link"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li className="nav-item ms-lg-3">
                  <a 
                    href={cvPDF} download 
                    className="btn btn-outline-light btn-sm"
                  >
                    Descargar CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};