import React, { Component } from 'react' // importa libreria de react

import Clases, { Clase0 } from './paginas/Clases'
import Test from './paginas/test'
import Indice from './paginas/indice'
import Portada from './paginas/portada'
class App extends Component { // crea una clase de componente de react
  constructor(props) { // es algo así como la funcion main de c, pasa al iniciarse
    super(props);
    this.state = {
      pagina: <Clases clase={Clase0}/>
    }
    this.router = this.router.bind(this)
  }

  router (pagina) {
    this.setState({pagina})
  }

  render() {
    console.log('Aguante Servicentro!')
    return (
      <div>
        <nav>
         <div className="nav-wrapper">
           <a onClick={() => this.router(<Clases clase={Clase0}/>)} className="brand-logo">CEESE50</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">

//             <li><a onClick={()=> this.router(<Portada router={this.router}/>)}>Inicio</a></li>

             <li><a onClick={()=> this.router(<Indice router={this.router}/>)}>Clases</a></li>

             <li><a onClick={()=> this.router(<Test/>)}>Test</a></li>

           </ul>

         </div>
       </nav>
       {this.state.pagina }
       <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Quienes Somos</h5>
                <p className="grey-text text-lighten-4">Somos el grupo 11 de la sección 5. Los más pulentos con puro bow y dembow!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Sitios de Interés</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="http://www.uai.cl">Universidad Adolfo Ibáñez</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://webcursos.uai.cl">WebCursos</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://cs50.harvard.edu/">CS50 Harvard</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

export default App;
