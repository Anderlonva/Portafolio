import React from 'react'


export const RowEstudios = ({ diploma }) => {
   
    return (
        <div className='border mt-2 mb-2'>
            <h4>{diploma.carrera}</h4>
            <h6>{diploma.universidad}</h6>
            <p>{diploma.ciudad} , {diploma.anio}</p>
        </div>
    )
}
