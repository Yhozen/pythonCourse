import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { Store } from './Store'

const Header = (props) => {
  const { state } = useContext(Store)
  return (
    <header>
      <nav>
        <div className='nav-wrapper cyan'>
          <NavLink to='/' className='brand-logo'>#LoDamosVuelta</NavLink>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><NavLink activeClassName='active' to='/'>Inicio</NavLink></li>
            <li><NavLink activeClassName='active' to='/indice'>Clases</NavLink></li>
            <li><NavLink activeClassName='active' to='/lessons'>Ejercicios</NavLink></li>
            <li><NavLink activeClassName='active' to='/user'>{state.user ? state.user.email : 'Usuario' }</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
