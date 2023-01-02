import React, { useState } from 'react'

export const Certificados = () => {

    const [ img, setImg ] = useState("")

  return (
    <>
   <div className='container margin-container'>
   <div className='row mb-2'>
        <div className='col-lg-6 col-md-6 col-sm-12 text-center mt-3 border mx-1'>
            <h2 className='mt-1'>Educacion</h2>
            
            <div className='border mt-2 mb-2'>
                <h4>Institución Universitaria Digital De Antioquia</h4>
                <p>Tecnólogia en Desarrollo de Software </p>
                <p>Actualmente 6 semestre</p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Politécnico Iberoamericano</h4>
                <p>Técnico en administración de empresas </p>
                <p>Medellin 2010</p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Centro De Sistemas De Antioquia, CENSA</h4>
                <p>Técnico en electrónica digital, 2020 </p>
                <p>Bello 2020</p>
            </div>

        </div>
        
        <div className='col-lg-5 col-md-5 col-sm-12 text-center mt-3 border mx-1'>
            <h2 className='mt-1'>Certificados</h2>
            
            <div className='border mt-2 mb-2'>
                <h4>Certificaón Bases De Datos Web</h4>
                <p>Next_U, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Certificaón Web FrontEnd</h4>
                <p>Next_U, 2021 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Diplomado En Desarrollo De Software </h4>
                <p>Misión Tic, Universidad Sergio Arboleda, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Fundamentos De Programacion Con Python</h4>
                <p>Misión Tic, Universidad Sergio Arboleda, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Programacion Básica Con Java </h4>
                <p>Misión Tic, Universidad Sergio Arboleda, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Introducción a React.js</h4>
                <p>Platzi, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Curso Básico De JavaScript</h4>
                <p>Platzi, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Curso De Backend con NodeJs:API REST Con Express</h4>
                <p>Platzi, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Curso Profesional de Git Y GitHub</h4>
                <p>Platzi, 2023 </p>
            </div>

        </div>
    </div>
    <div className='row'>
        
        
        <div className='col-6'>
            
        </div>
    </div>
   </div>
    </>
  )
}
