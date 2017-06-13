import React, { Component } from 'react'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', compiled: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let { value } = event.target
    this.setState({value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let body = {
      code:  this.state.value,
       file: 'testa'
     }
    $.post("http://localhost:8000/", body, compiled => {
      this.setState({compiled})
    })
   }

  render() {
    return (
      <div>
        <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">Logo</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="sass.html">Sass</a></li>
             <li><a href="badges.html">Components</a></li>
             <li><a href="collapsible.html">JavaScript</a></li>
           </ul>
         </div>
       </nav>
         <div className="row" onSubmit={this.handleSubmit}>
            <form className="col s6">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea value={this.state.value} onChange={this.handleChange} id="icon_prefix2" className="materialize-textarea"></textarea>
                  <label for="icon_prefix2">First Name</label>
                </div>
              </div>
               <button className="waves-effect waves-light btn" type="submit" value="Submit" >COMPILAR</button>
            </form>
            <div className="col s6">
              {this.state.compiled.split('\n').map(line =>{
                return (
                  <p>{line}</p>
                )
              })}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
