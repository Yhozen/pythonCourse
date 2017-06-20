import React, { Component } from 'react'
import Indice from './portada'

class Portada extends Component {
  render() {
    return (

    <div className="row">

      <div className="col s1 offset-s4">
        <h6>Aprende!</h6>
        <i className="medium material-icons">thumb_up</i>
        <p>Aquí podrás aprender todo lo necesario para programar en lenguaje C</p>
      </div>

      <div className="col s1 offset-s4">
        <h6>Practica!</h6>
        <i className="medium material-icons">grade</i>
        <p>También podrás aplicar lo aprendido con diversos ejercicios</p>
      </div>

    </div>
    );
  }
}

export default Portada;
