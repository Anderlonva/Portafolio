import React from 'react'

export const RowCertificados = ({ certificado }) => {
  return (
    <div className='border mt-2 mb-2'>
      <h4 className='mt-2'>{certificado.carrera}</h4>
      <h6>{certificado.universidad}, {certificado.anio}</h6>
    </div>
  )
}
