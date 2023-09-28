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
      <div className='row'>
        <div className='col-lg-6 col-md-12 mt-3 text-center'>
          <img src={foto} className="foto-principal" alt="..." />
        </div>

        <div className='col-lg-6 col-md-12 mt-5 text-center'>
          <hr className='' />
          <div className='row'>
            <div className='col'>
              <p> Actualmente, me encuentro estudiando ingeniería de software, con especialización en bases de
                datos relacionales, no relacionales y desarrollo web. Estoy
                dedicado a expandir mis conocimientos y mejorar mis
                habilidades constantemente, poseo experiencia en el manejo de herramientas de
                Office, lo cual me ha permitido desarrollar habilidades
                sólidas en la gestión de documentos, creación de
                presentaciones y manejo de hojas de cálculo. Además,
                tengo conocimientos avanzados en programación
                frontend utilizando HTML, CSS y JavaScript, así como
                experiencia en el uso de frameworks como Bootstrap,
                Materialize y React.
                En el ámbito del backend, cuento con conocimientos
                en Node.js y Spring Boot y tengo la capacidad
                de crear servicios utilizando Oracle Cloud. Estoy dispuesto
                a ampliar mis habilidades en estas áreas y a aprender
                nuevas tecnologías que sean relevantes para el
                crecimiento de las compañías.
                Además de mis habilidades técnicas, también poseo
                experiencia en la metodología de trabajo ágil conocida
                como Scrum. Estoy familiarizado con el enfoque
                colaborativo y la organización eficiente que esta
                metodología proporciona, lo cual considero esencial
                para el desarrollo de proyectos exitosos en el sector de TI.
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
