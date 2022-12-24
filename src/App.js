import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from './components/Header';
import { Principal } from './components/Principal';
import { Proyectos } from './components/Proyectos';
import { Certificados } from './components/Certificados';

import React from 'react'

export const App = () => {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/principal" component={Principal} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/estudios" component={Certificados} />

          
        </Switch>
      </Router>
    </>
  )
}
