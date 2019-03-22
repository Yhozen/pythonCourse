import React, { Component } from 'react'
import Estadisticas from './estadisticas'

class Usuario extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      pass: '',
      passconf: '',
      login: {
        val: true,
        text1: 'Entrar',
        text2: 'Todavia no tengo cuenta'
      }
    }
  }

  changeLogin () {
    if (this.state.login.val) {
      this.setState({ login: {
        val: false,
        text1: 'Registrarse',
        text2: 'Ya tengo cuenta'
      } })
    } else {
      this.setState({ login: {
        val: true,
        text1: 'Entrar',
        text2: 'Todavia no tengo cuenta'
      } })
    }
  }
  submitData () {
    if (this.state.login.val) {
      let { email, pass } = this.state
      this.props.login(email, pass)
    } else {
      let { email, pass, passconf } = this.state
      this.props.signUp(email, pass, passconf)
    }
  }
  render () {
    const confirmPass = (
      <div className='row'>
        <div className='input-field col s12'>
          <input onChange={event => this.setState({ passconf: event.target.value })} id='password2' type='password' className='validate' />
          <label for='password2'>Repita contraseña</label>
        </div>
      </div>
    )
    return (
      <div className='container'>
        <h3>{this.props.user ? 'Salir' : this.state.login.text1}</h3>
        {this.props.user ? <Estadisticas database={this.props.database} user={this.props.user} signOut={this.props.signOut} /> : (
          <div className='row'>
            <form className='col s12' >
              <div className='row'>
                <div className='input-field col s12'>
                  <input onChange={event => this.setState({ email: event.target.value })} id='email' type='email' className='validate' />
                  <label for='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input onChange={event => this.setState({ pass: event.target.value })} id='password' type='password' className='validate' />
                  <label for='password'>Contraseña</label>
                </div>
              </div>
              {!this.state.login.val && confirmPass}
              <button onClick={this.submitData.bind(this)} className='col s12 waves-effect waves-light btn'>{this.state.login.text1}</button>
              <button onClick={this.changeLogin.bind(this)} className='col s12 waves-effect waves-light btn'>{this.state.login.text2}</button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default Usuario
