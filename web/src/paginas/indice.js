import React, { Component } from 'react'
import Clases, { Clase0, Clase1, Clase2, Clase3, Clase4, Clase5, Clase6, Clase7, Clase8, Clase9 } from './Clases'




class Indice extends Component {
  render() {
    return (
      <div className="row">

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase0.title}</span>
              <p>{Clase0.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase0}/>)}>Ir a la clase 0!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase1.title}</span>
              <p>{Clase1.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase1}/>)}> Ir a la clase 1!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase2.title}</span>
              <p>{Clase2.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase2}/>)}> Ir a la clase 2!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase3.title}</span>
              <p>{Clase3.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase3}/>)}> Ir a la clase 3!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase4.title}</span>
              <p>{Clase4.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase4}/>)}>Ir a la clase 4!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase5.title}</span>
              <p>{Clase5.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase5}/>)}> Ir a la clase 5!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase6.title}</span>
              <p>{Clase6.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase6}/>)}> Ir a la clase 6!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase7.title}</span>
              <p>{Clase7.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase7}/>)}>Ir a la clase 7!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase8.title}</span>
              <p>{Clase8.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase8}/>)}> Ir a la clase 8!</a>
            </div>
          </div>
        </div>

        <div className="col s4">
        <div className="card red lighten-1">
            <div className="card-content white-text">
              <span className="card-title">{Clase9.title}</span>
              <p>{Clase9.brief}</p>
            </div>
            <div className="card-action">
              <a onClick={() => this.props.router(<Clases clase={Clase9}/>)}> Ir a la clase 9!</a>
            </div>
          </div>
        </div>

      </div>



    );
  }
}

export default Indice;
