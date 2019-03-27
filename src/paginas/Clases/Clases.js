import React, { Component } from 'react' // importa libreria de react
import $ from 'jquery' // importa libreria jquery, nos sirve para la peticion al servidor

class Clases extends Component { // crea una clase de componente de react
  constructor (props) { // es algo así como la funcion main de c, pasa al iniciarse
    super(props)
    this.state = {
      value: '',
      compiled: ''
    } // declara los estados que despues vamos a editar
    this.handleChange = this.handleChange.bind(this) // esto es un tema propio de js, no es necesario entenderlo pero si
    this.handleSubmit = this.handleSubmit.bind(this) // hacerlo para cada funcion
    this.hecho = this.hecho.bind(this)
  }
  hecho () {
    let nameRef = this.props.database.ref().child('vistos').child(this.props.user.uid)
    let n = this.props.clase.n
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
  handleChange (event) { // funcion para guardar
    let { value } = event.target
    this.setState({ value })
  }

  handleSubmit (event) { // funcion para mandar a compilar
    event.preventDefault() // evita que la pagina se actualice sola, comportamiento normal en los navegadores
    let body = { // objeto a llamar en la peticion
      code: this.state.value,
      file: 'compiled'
    }
    $.post('http://45.55.80.247:8000/', body, compiled => { // peticion al servidor, de argumento tiene, la direccion, el objeto con el texo y nombre del archivo, y una funcion que se ejecutara cuando reciba una respuesta
      this.setState({ compiled }) // guarda la respuesta en el estado compilado para mostrarlo
    })
  }

  render () {
    console.log(this.props)
    return (
      <>
        <div className='row' onSubmit={this.handleSubmit}>
          <div className='col s4'>
            <h5>{this.props.clase.title}</h5>
            <div className='texto-clases'>
              <pre >{this.props.clase.text}</pre>
            </div>
          </div>
          <form className='col s4'>
            <div className='row'>
              <div className='input-field col s12'>
                <i className='material-icons prefix'>code</i>
                <textarea value={this.state.value} onChange={this.handleChange} id='icon_prefix2' className='materialize-textarea' />
                <label htmlFor='icon_prefix2'>Código</label>
              </div>
            </div>
            <button className='waves-effect waves-light btn' type='submit' value='Submit' >COMPILAR</button>
            {this.props.user && (<button className='waves-effect waves-light btn' onClick={this.hecho} >HECHO </button>)}
          </form>
          <div className='col s4'>
            <h5>Consola</h5>
            {this.state.compiled.split('\n').map((line, i) => { // se crea un arreglo de strings por cada linea, luego cada linea se muestra en un <p> distinto
              return (
                <p key={i} >{line}</p>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Clases
