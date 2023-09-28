import React from 'react'
import canciones from '../img/proyecto-canciones.jpg'
import envios from '../img/proyecto-compania-envios.jpg'
import marcadores from '../img/proyecto-marcadores.jpg'
import escuela from '../img/proyecto-escuela-eventos.jpg'
import inventarios from '../img/proyecto-inventarios.jpg'
import todos from '../img/proyecto-todo.jpg'
import rines from '../img/proyecto-rines.jpg'
import sis from '../img/proyecto_formato_sis.jpg'
import estandar from '../img/proyecto_estandar_sofasa.jpg'

export const Proyectos = () => {
  return (
    <>
      <div className='container margin-container'>

      <div className='row'>
          <div className='col-md-6  col-sm-12 mt-2'>
            <div className='border'>
              <img src={sis} className="img-proyecto" alt="..." />
            </div>
          </div>

          <div className='col-md-6 col-sm-12 mt-2'>
            <div className='border'>
              <img src={estandar} className="img-proyecto" alt="..." />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6  col-sm-12 mt-2'>
            <div className='border'>
              <img src={marcadores} className="img-proyecto" alt="..." />
            </div>
          </div>

          <div className='col-md-6 col-sm-12 mt-2'>
            <div className='border'>
              <img src={canciones} className="img-proyecto" alt="..." />
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='col-md-6  col-sm-12 mt-2'>
            <div className='border'>
              <img src={envios} className="img-proyecto" alt="..." />
            </div>
          </div>

          <div className='col-md-6  col-sm-12 mt-2'>
            <div className='border'>
              <img src={rines} className="img-proyecto" alt="..." />
            </div>
          </div>
        </div>

        <div className='row mt-2 mb-2'>
          <div className='col-md-6  col-sm-12 mt-2'>
            <div className='border'>
              <img src={inventarios} className="img-proyecto" alt="..." />
            </div>
          </div>

          <div className='col-md-6  col-sm-12 mt-2 '>
            <div className='border'>
              <img src={todos} className="img-proyecto" alt="..." />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
