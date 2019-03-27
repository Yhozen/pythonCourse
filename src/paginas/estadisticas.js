import React, { useState, useEffect, useContext } from 'react'
import { database } from '../firebase'

import { Store } from '../Store'

const Estadisticas = (props) => {
  const [ data, setData ] = useState([': ninguna'])
  const { state } = useContext(Store)

  useEffect(() => {
    const nameRef = database.ref().child('vistos').child(state.user.uid)
    nameRef.on('value', snapshot => {
      let value = snapshot.val()
      if (value) {
        setData(value)
      }
    })
  }, [])

  return (
    <div className='row'>
      <h5>Haz hecho: </h5>
      {data.map(clase => {
        return (
          <p key={Math.random()}>Clase {clase}</p>
        )
      })}
      <button onClick={() => props.signOut()} className='col s12 waves-effect waves-light btn'>Salir</button>
    </div>
  )
}

export default Estadisticas
