import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { listaClases } from './Clases'

let datos = {}

listaClases.forEach(clase => {
  clase.tags.forEach(tag => {
    if (datos[tag]) {
      datos[tag].push(clase)
    } else {
      datos[tag] = [clase]
    }
  })
})

const Indice = (props) => {
  const [ state, setState ] = useState({ listaClases })

  const busca = (event) => {
    let value = event.target.value.toLowerCase()

    if (value === '') {
      setState({ listaClases })
    } else {
      let { length } = value
      let devolver = []
      let llaves = Object.keys(datos)
      llaves.forEach(llave => {
        if (llave.slice(0, length) === value) {
          devolver.push(datos[llave][0])
        }
      })
      setState({ listaClases: devolver })
    }
  }
  return (
    <div>
      <div className='nav-wrapper container'>
        <form>
          <div className='input-field'>
            <input onChange={busca} id='search' type='search' required />
            <label className='label-icon' htmlFor='search'><i className='material-icons'>search</i></label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>

      <div className='row'>
        { state.listaClases.map((clase, i) => {
          return (
            <div key={Math.random()} className='col s4'>
              <div className='card cyan lighten-3'>
                <div className='card-content white-text'>
                  <span className='card-title'>{clase.title}</span>
                  <p>{clase.brief}</p>
                </div>
                <div className='card-action cyan darken-3 '>
                  <Link to={'/clases/' + i} >Ir a la clase!</Link>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Indice
