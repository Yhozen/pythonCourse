import React from 'react' // importa libreria de react

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Ejercicios from './paginas/Ejercicios'
import Indice from './paginas/Indice'
import Portada from './paginas/Portada'
import Usuario from './paginas/Usuario'
import NotFoundComponent from './paginas/NotFound'
import DataFeededLesson from './paginas/DataFeededLesson'

const App = (props) => {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Header />
      <Switch>
        <Route exact path='/' component={Portada} />
        <Route exact path='/indice' component={Indice} />
        <Route exact path='/lessons' component={Ejercicios} />
        <Route exact path='/user' component={Usuario} />
        <Route path='/clases/:id' component={DataFeededLesson} />
        <Route component={NotFoundComponent} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
