import React from 'react'
import foto from '../img/android-chrome-512x512.png'

export const Principal = () => {
  return (
    <div className='container margin-container'>
      <div className='row mt-2'>
        <div className='col text-center'>
          <h1>Anderson Londoño Valencia</h1>
        </div>
      </div>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-12 mt-3 text-center'>
          <img src={foto} className="foto-principal" alt="..." />
        </div>

        <div className='col-lg-6 col-md-12 mt-5 text-center'>
          <hr className='' />
          <div className='row'>
            <div className='col'>
              <p> Soy un estudiante apasionado de ingeniería de software con un enfoque especializado en bases de datos relacionales y no relacionales, así como en desarrollo web.
                Mi compromiso constante es ampliar mis conocimientos y mejorar mis habilidades tecnológicas.<br/> Actualmente, me encuentro estudiando ingeniería de software, donde he adquirido sólidos conocimientos en programación frontend utilizando HTML, CSS y JavaScript. Además, he trabajado con frameworks como Bootstrap, Materialize y la libreria de React, lo que me ha permitido crear experiencias web atractivas y funcionales.<br/>
                En el ámbito del backend, cuento con habilidades en Node.js, java Spring Boot, y tengo experiencia en la creación de servicios utilizando Oracle Cloud. Estoy siempre dispuesto a ampliar mis conocimientos en estas áreas y a aprender nuevas tecnologías relevantes para el crecimiento de las compañías.<br/>
                Además de mis habilidades técnicas, también poseo conocimiento en la metodología de trabajo ágil Scrum. Estoy familiarizado con el enfoque colaborativo y la organización eficiente que esta metodología proporciona, lo cual considero esencial para el desarrollo de proyectos exitosos en el sector de TI.<br/>
                Además de mis estudios regulares, he realizado un curso introductorio a AWS, específicamente el AWS Cloud Practitioner Essential. Este curso me ha dado una comprensión fundamental de los servicios en la nube de AWS y siento una gran motivación para buscar la certificación en un futuro cercano.<br/>
                También participé activamente en las campañas del gobierno conocidas como Misión Tic. Durante mi participación, me enfoqué en el desarrollo de aplicaciones utilizando Java con Spring Boot para el backend y React para el frontend. Esta experiencia me permitió aplicar mis habilidades técnicas en un entorno práctico.<br/>
                En todo mi recorrido estudiantil también he tenido la suerte de tener contacto con el manejo de motores de bases de datos relacionales como Postgres, MySQL Workbench y SQL Server. También he trabajado con bases de datos no relacionales utilizando MongoDB Atlas.<br/>
                Soy una persona dedicada, apasionada por la tecnología y comprometida con el aprendizaje continuo. Estoy emocionado por la oportunidad de contribuir a proyectos desafiantes y seguir desarrollándome en el campo de la ingeniería de software.

              </p>
            </div>
          </div>

          <hr className='' />

          <div className='row flex-row justify-content-center'>

            <div className='col-1 d-inline-flex'>
              <a href="https://github.com/Anderlonva" className="contenedor-icon-gitHub" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </div>



            <div className='col-1 d-inline-flex mx-2 mb-2'>

              <a href="https://www.linkedin.com/in/anderson-londono-669094218/" className="contenedor-icon-linkedin" target="_blank">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>



          </div>
        </div>
      </div>
    </div>

  )
}
