import React, { useState, useEffect } from 'react'
import { diplomas, certificados } from '../estudios'
import { RowEstudios } from './RowEstudios'
import { RowCertificados } from './RowCertificados'

export const Certificados = () => {

    const [img, setImg] = useState("")
    const [arrDiplomas, setArrDiplomas] = useState([])
    const [arrCertificados, setCertificados] = useState([])

    useEffect(() => {
        setArrDiplomas(diplomas)
        setCertificados(certificados)
    }, [])

    return (
        <>
            <div className='container margin-container'>
                <div className='row mb-2'>
                    <div className='col-lg-6 col-md-6 col-sm-12 text-center mt-3 border mx-1'>
                        <h2 className='mt-3'>Educación</h2>

                        {
                            arrDiplomas.map((diploma) => {
                                return <RowEstudios key={diploma.id} diploma={diploma} />
                            })
                        }

                    </div>

                    <div className='col-lg-5 col-md-5 col-sm-12 text-center mt-3 border mx-1'>
                        <h2 className='mt-3'>Certificados</h2>

                        {
                            arrCertificados.map((certificado) => {
                                return <RowCertificados key={certificado.id} certificado={certificado} />
                            })
                        }


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
