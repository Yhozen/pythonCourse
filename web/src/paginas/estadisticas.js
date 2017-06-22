import React, { Component } from 'react'

class Estadisticas extends Component {
  constructor() {
    super()
    this.state = {
      nombre: ['']
    }
  }
  componentWillMount() {
    const nameRef = this.props.database.ref().child('vistos').child(this.props.user.uid)
    nameRef.on('value', snapshot => {
     this.setState({
       nombre: snapshot.val()
     })
   })
  }
  render() {
    return (
    <div className="row">
    <p>Haz hecho: </p>
      {this.state.nombre.map(clase => {
        return (
          <p>Clase {clase}</p>
        )
      })}
      <button onClick={() => this.props.signOut()} className="col s12 waves-effect waves-light btn">Salir</button>
    </div>
    );
  }
}

export default Estadisticas;
