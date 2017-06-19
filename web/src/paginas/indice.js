import React, { Component } from 'react'
import Clases, { Clase0 } from './Clases'


class Indice extends Component {
  render() {
    return (
      <div className="row">

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase0.title}</span>
              <p>{Clase0.brief}</p>
            </div>
            <div className="card-action">
              <a>Ir a la clase 0!</a>
            </div>
          </div>
        </div>

      </div>



    );
  }
}

export default Indice;
