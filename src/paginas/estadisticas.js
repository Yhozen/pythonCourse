import React from 'react'

class Estadisticas extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [': ninguna']
    }
  }
  componentWillMount () {
    const nameRef = this.props.database.ref().child('vistos').child(this.props.user.uid)
    nameRef.on('value', snapshot => {
      let data = snapshot.val()
      if (data) {
        this.setState({ data })
      }
    })
  }
  render () {
    return (
      <div className='row'>
        <h5>Haz hecho: </h5>
        {this.state.data.map(clase => {
          return (
            <p>Clase {clase}</p>
          )
        })}
        <button onClick={() => this.props.signOut()} className='col s12 waves-effect waves-light btn'>Salir</button>
      </div>
    )
  }
}

export default Estadisticas
