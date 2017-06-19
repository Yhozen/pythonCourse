import React, { Component } from 'react' // importa libreria de react

import Clases, { Clase0 } from './paginas/Clases'
import Test from './paginas/test'
import Indice from './paginas/indice'
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
             <li><a onClick={()=> this.router(<Indice router={this.router}/>)}>Clases</a></li>

             <li><a onClick={()=> this.router(<Test/>)}>Test</a></li>

           </ul>

         </div>
       </nav>
       {this.state.pagina }
      </div>
    );
  }
}

export default App;
