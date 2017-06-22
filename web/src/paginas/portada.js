import React, { Component } from 'react'
import Indice from './portada'

class Portada extends Component {
  render() {
    return (
    <div className="row">
     <div className="section jumbotron">
      <div className="row">
       <div className="col s4 offset-s4">
        <h1 > Bienvenido al portal del conocimiento</h1>
       </div>
      </div>
     </div>
     <div className="section">
     <div className="col s4">
       <h6>Aprende!</h6>
       <i className="medium material-icons">thumb_up</i>
       <p>Aquí podrás aprender todo lo necesario para programar en lenguaje C</p>
     </div>
     <div className="col s4">
       <h6>Practica!</h6>
       <i className="medium material-icons">grade</i>
       <p>También podrás aplicar lo aprendido con diversos ejercicios</p>
     </div>
     <div className="col s4">
       <h6>Desafiate!</h6>
       <i className="medium material-icons">trending_up</i>
       <p>Encontraras dificiles desafíos... pero lo lograras!</p>
     </div>
     </div>

    </div>
    );
  }
}

export default Portada;
