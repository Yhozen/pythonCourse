import React from 'react' // importa react
import ReactDOM from 'react-dom' // importa la funcion para "meter" el componente de react al html
import App from './App' // importa el componente app que creamos
import { StoreProvider } from './Store'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')) // mete app al html
