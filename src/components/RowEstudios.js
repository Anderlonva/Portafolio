import React from 'react'


export const RowEstudios = ({ diploma }) => {
   
    return (
        <div className='border mt-2 mb-2'>
            <h4>{diploma.universidad}</h4>
            <p>{diploma.carrera}</p>
            <p>{diploma.ciudad} , {diploma.anio}</p>
        </div>
    )
}
