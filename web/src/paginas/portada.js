import React, { Component } from 'react'

class Portada extends Component {
  render() {
    return (
      <div className="row">

        <div className="s2 offset-s3">
          <h6>Aprende!</h6>
          <img class="responsive-img" src="" />
          <p>Aquí podrás aprender todo lo necesario para programar en lenguaje C</p>
        </div>

        <div className="s2 offset-s7">
          <h6>Practica!</h6>
          <img class="responsive-img" src="" />
          <p>También podrás aplicar lo aprendido con diversos ejercicios.</p>
        </div>

      </div>
    );
  }
}

export default Portada;
