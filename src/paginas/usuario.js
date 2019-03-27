import React, { useContext, useState } from 'react'
import Estadisticas from './estadisticas'
import { Store } from '../Store'
import { auth } from '../firebase'

const Usuario = (props) => {
  const { state, dispatch } = useContext(Store)
  const [ passwordField, setPasswordField ] = useState('')
  const [ emailField, setEmailField ] = useState('')
  const [ passwordConfField, setPasswordConfField ] = useState('')
  const [ loginOrRegister, setLoginOrRegister ] = useState({
    val: true,
    text1: 'Entrar',
    text2: 'Todavia no tengo cuenta'
  })

  const login = async (email, pass) => {
    const user = await auth.signInWithEmailAndPassword(email, pass)
    dispatch({ type: 'USER_LOGIN', payload: user })
  }

  const signUp = async (email, pass, passconf) => {
    if (pass === passconf) {
      const user = await auth.createUserWithEmailAndPassword(email, pass)
      dispatch({ type: 'USER_LOGIN', payload: user })
    } else {
      console.warn('contraseña no coincide')
    }
  }
  const signOut = async () => {
    await auth.signOut()
    dispatch({ type: 'USER_LOGIN', payload: '' })
  }

  const toggleLoginOrRegister = (e) => {
    e.preventDefault()
    if (loginOrRegister.val) {
      setLoginOrRegister({
        val: false,
        text1: 'Registrarse',
        text2: 'Ya tengo cuenta'
      })
    } else {
      setLoginOrRegister({
        val: true,
        text1: 'Entrar',
        text2: 'Todavia no tengo cuenta'
      })
    }
  }

  const submitData = (e) => {
    e.preventDefault()
    if (loginOrRegister.val) {
      login(emailField, passwordField)
    } else {
      signUp(emailField, passwordField, passwordConfField)
    }
  }

  const confirmPass = (
    <div className='row'>
      <div className='input-field col s12'>
        <input onChange={event => setPasswordConfField(event.target.value)} id='password2' type='password' className='validate' />
        <label htmlFor='password2'>Repita contraseña</label>
      </div>
    </div>
  )
  return (
    <div className='container'>
      <h3>{state.user ? 'Salir' : loginOrRegister.text1}</h3>
      {state.user ? <Estadisticas user={state.user} signOut={signOut} /> : (
        <div className='row'>
          <form className='col s12' >
            <div className='row'>
              <div className='input-field col s12'>
                <input onChange={event => setEmailField(event.target.value)} id='email' type='email' className='validate' />
                <label htmlFor='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input onChange={event => setPasswordField(event.target.value)} id='password' type='password' className='validate' />
                <label htmlFor='password'>Contraseña</label>
              </div>
            </div>
            {!loginOrRegister.val && confirmPass}
            <button onClick={submitData} className='col s12 waves-effect waves-light btn'>{loginOrRegister.text1}</button>
            <button onClick={toggleLoginOrRegister} className='col s12 waves-effect waves-light btn'>{loginOrRegister.text2}</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Usuario
