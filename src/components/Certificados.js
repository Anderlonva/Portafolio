import React, { useState, useEffect }  from 'react'
import { diplomas, certificados } from '../estudios'
import { RowEstudios } from './RowEstudios'

export const Certificados = () => {

    const [ img, setImg ] = useState("")
    const [ arrDiplomas, setArrDiplomas ] = useState([])

    useEffect( () => {
        setArrDiplomas(diplomas)
        console.log(arrDiplomas)
    },[])
    
  return (
    <>
   <div className='container margin-container'>
   <div className='row mb-2'>
        <div className='col-lg-6 col-md-6 col-sm-12 text-center mt-3 border mx-1'>
            <h2 className='mt-1'>Educacion</h2>
            
            {
                arrDiplomas.map( (diploma) => {
                    return <RowEstudios key={diploma.id} diploma={diploma} />
                })
            }

        </div>
        
        <div className='col-lg-5 col-md-5 col-sm-12 text-center mt-3 border mx-1'>
            <h2 className='mt-1'>Certificados</h2>
            
            <div className='border mt-2 mb-2'>
                <h4>Certificación Bases De Datos Web</h4>
                <p>Next_U, 2022 </p>
            </div>

            <div className='border mt-2 mb-2'>
                <h4>Certificación En Curso Intensivo Web Front End</h4>
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
