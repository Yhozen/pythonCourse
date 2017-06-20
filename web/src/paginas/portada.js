import React, { Component } from 'react'
import Indice from './portada'

class Portada extends Component {
  render() {
    return (
    <div className="row">
     <div className="section">
      <div className="row">
       <div className="col s2 offset-s5">
        <a onClick={()=> this.props.router(<Indice/>)} className="btn-large waves-effect waves-light red">EMPEZAR</a>
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
       <h6>Practica!</h6>
       <i className="medium material-icons">grade</i>
       <p>También podrás aplicar lo aprendido con diversos ejercicios</p>
     </div>
     </div>

    </div>
    );
  }
}

export default Portada;
