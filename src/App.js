import React from 'react' // importa libreria de react

import { database, auth } from './firebase'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Clases from './paginas/Clases'
import Indice from './paginas/indice'
import Portada from './paginas/portada'
// import Ejercicios from './paginas/ejercicios'
import Usuario from './paginas/usuario'
import NotFoundComponent from './paginas/NotFound'

class App extends React.Component { // crea una clase de componente de react
  constructor (props) { // es algo así como la funcion main de c, pasa al iniciarse
    super(props)
    this.state = {
      user: ''
    }
    this.login = this.login.bind(this)
    this.signUp = this.signUp.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  login (email, pass) {
    auth.signInWithEmailAndPassword(email, pass).then(user => {
      this.setState({ user }, () => this.router(<Indice user={this.state.user} database={database} router={this.router} />))
    })
  }
  signUp (email, pass, passconf) {
    if (pass === passconf) {
      auth.createUserWithEmailAndPassword(email, pass).then(user => {
        this.setState({ user }, () => this.router(<Indice user={this.state.user} database={database} router={this.router} />))
      })
    } else {
      console.warn('contraseña no coincide')
    }
  }
  signOut () {
    auth.signOut().then(() => this.setState({ user: '' }))
  }
  render () {
    return (
      <div>
        <header>
          <nav>
            <div className='nav-wrapper cyan'>
              <a href='portada' onClick={() => this.router(<Portada />)} className='brand-logo'>#LoDamosVuelta</a>
            </div>
          </nav>
        </header>
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to='/indice'> About </Link>
              </li>
              <li>
                <Link to='/classes'> Team </Link>
              </li>
              <li>
                <Link to='/user'> Usuario </Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/' component={Portada} />
              <Route exact path='/indice' component={Indice} />
              <Route exact path='/classes' component={Clases} />
              <Route exact path='/user' component={Usuario} />
              <Route component={NotFoundComponent} />
            </Switch>
          </div>
        </Router>
        <footer className='page-footer cyan'>
          <div className='container'>
            <div className='row'>
              <div className='col l6 s12'>
                <h5 className='white-text'>Quienes Somos</h5>
                <p className='grey-text text-lighten-4'>-Christian Amo -Francisca Inostroza<br /> -Axel Kuljis  -Nicolas Manzano  <br /> -Gabriel Pérez     -Valeria Ruiz</p>
              </div>
              <div className='col l4 offset-l2 s12'>
                <h5 className='white-text'>Sitios de Interés</h5>
                <ul>
                  <li><a className='grey-text text-lighten-3' href='http://www.uai.cl'>Universidad Adolfo Ibáñez</a></li>
                  <li><a className='grey-text text-lighten-3' href='http://webcursos.uai.cl'>WebCursos</a></li>
                  <li><a className='grey-text text-lighten-3' href='https://cs50.harvard.edu/'>CS50 Harvard</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

    )
  }
}

export default App
