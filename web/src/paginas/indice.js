import React, { Component } from 'react'
import $ from 'jquery'
import Clases, { listaClases } from './Clases'

let datos = {}

listaClases.map(clase => {
  clase.tags.map(tag => {
    if (datos[tag]) {
      datos[tag].push(clase)
    } else {
      datos[tag] = [clase]
    }
  })
})

class Indice extends Component {
  constructor(props) { // es algo así como la funcion main de c, pasa al iniciarse
    super(props)
    this.state = { listaClases }
  }
  busca(event) {
    let value = event.target.value.toLowerCase()

    if (value == '') {
      this.setState({listaClases})
    } else {
      let { length } = value
      let devolver = []
      let llaves = Object.keys(datos)
      llaves.map(llave => {
        console.log(llave.slice(0, length))
        if (llave.slice(0, length) == value) {
          devolver.push(datos[llave][0])
        }
      })
      console.log(devolver)
      this.setState({listaClases: devolver})
    }
  }
  render() {
    return (
      <div>
      <div className="nav-wrapper container">
         <form>
           <div className="input-field">
             <input onChange={this.busca.bind(this)} id="search" type="search" required/>
             <label className="label-icon" for="search"><i className="material-icons">search</i></label>
             <i className="material-icons">close</i>
           </div>
         </form>
       </div>


        <div className="row">
        { this.state.listaClases.map((clase, i) => {
            return (
              <div className="col s4">
              <div className="card cyan lighten-3">
                  <div className="card-content white-text">
                    <span className="card-title">{clase.title}</span>
                    <p>{clase.brief}</p>
                  </div>
                  <div className="card-action cyan darken-3 ">
                    <a onClick={() => this.props.router(<Clases user={this.props.user} clase={clase}/>)}>Ir a la clase!</a>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default Indice;
