import React, { useState, useContext } from 'react' // importa libreria de react
import { database } from '../../firebase'
import { Store } from '../../Store'

const Clases = (props) => {
  const { state: { user } } = useContext(Store)
  const [ compiled, setCompiled ] = useState('')
  const [ textValue, setTextValue ] = useState('')

  const hecho = () => {
    let nameRef = database.ref().child('vistos').child(user.uid)
    let n = props.clase.n
    nameRef.on('value', snapshot => {
      let data = snapshot.val()
      if (data) {
        if (!data.includes(n)) {
          data.push(n)
          nameRef.set(data)
        }
      } else {
        nameRef.set([n])
      }
    })
  }

  const handleChange = (event) => { // funcion para guardar
    let { value } = event.target
    setTextValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCompiled('')
  }

  return (
    <div className='row' onSubmit={handleSubmit}>
      <div className='col s4'>
        <h5>{props.clase.title}</h5>
        <div className='texto-clases'>
          <pre >{props.clase.text}</pre>
        </div>
      </div>
      <form className='col s4'>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>code</i>
            <textarea value={textValue} onChange={handleChange} id='icon_prefix2' className='materialize-textarea' />
            <label htmlFor='icon_prefix2'>Código</label>
          </div>
        </div>
        <button className='waves-effect waves-light btn' type='submit' value='Submit' >COMPILAR</button>
        {user && (<button className='waves-effect waves-light btn' onClick={hecho} >HECHO </button>)}
      </form>
      <div className='col s4'>
        <h5>Consola</h5>
        {compiled.split('\n').map((line, i) => { // se crea un arreglo de strings por cada linea, luego cada linea se muestra en un <p> distinto
          return (
            <p key={i} >{line}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Clases
