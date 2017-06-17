import React, { Component } from 'react' // importa libreria de react

import Clase from './paginas/Clase0'
import Clases from './paginas/Clases'
class App extends Component { // crea una clase de componente de react
  constructor(props) { // es algo así como la funcion main de c, pasa al iniciarse
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">CEESE50</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="sass.html">Sass</a></li>
             <li><a href="badges.html">Components</a></li>
             <li><a href="collapsible.html">JavaScript</a></li>
           </ul>
         </div>
       </nav>
       <Clases clase={Clase}/>
      </div>
    );
  }
}

export default App;
