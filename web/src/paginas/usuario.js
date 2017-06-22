import React, { Component } from 'react'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCCjnc1Ri6KAaWaT7R1oyI88EcINEeuINc",
  authDomain: "lodamosvuelta-64d7a.firebaseapp.com",
  databaseURL: "https://lodamosvuelta-64d7a.firebaseio.com",
  projectId: "lodamosvuelta-64d7a",
  storageBucket: "lodamosvuelta-64d7a.appspot.com",
  messagingSenderId: "163822376534"
}
firebase.initializeApp(config)


class Usuario extends Component {
  constructor () {
    super()
    this.state = {
      nombre: 'valeql'
    }
  }
  componentWillMount() {
    const nameRef = firebase.database().ref().child('object').child('name')
    nameRef.on('value', snapshot => {
      this.setState({
        nombre: snapshot.val()
      })
    })
  }
  render() {
    return (
    <div className="container">
      <p>test {this.state.nombre}</p>
    </div>
    );
  }
}

export default Usuario;
