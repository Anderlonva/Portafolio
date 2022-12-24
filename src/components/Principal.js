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
          <div className='row'>
            <div className='col'>
              <p>Actualmente estudiando tecnología en desarrollo de software con formación en bases de datos relacionales, no relacionales y desarrollo web.
                Interesado en vincularme laboralmente para adquirir experiencia en desarrollo tanto en el Frontend como en el Backend. Cuento con fortalezas en la parte del frontend con el manejo de html, css, javascript y frameworks como Bootstrap, Materialize y React.
                En la parte backend tengo conocimientos básicos en nodeJS, spring boot y crear servicios en Oracle Cloud,
                En metodologías de trabajo cuento con conocimiento en Scrum.
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
