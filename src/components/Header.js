import React, { useState } from 'react'
import logo from '../img/Logo.jpg'

export const Header = () => {
   

    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="container-fliud ">
                        <a className="navbar-brand" href="/">
                        
                            <img src={logo} alt="" width={200} className=''/>
                        </a>
                    </div>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "><i className="bi bi-list"></i></span>
                    </button>
                    <div className="collapse navbar-collapse color-menu" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link color-menu" aria-current="page"
                                href="/">Acerca</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-menu" aria-current="page" 
                                href="/estudios">Estudios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-menu" aria-current="page" 
                                href="/proyectos">Proyectos</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        
    )
}
