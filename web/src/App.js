import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let { value } = event.target
    this.setState({value})
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
         <div className="row">
            <form className="col s6">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea value={this.state.value} onChange={this.handleChange} id="icon_prefix2" className="materialize-textarea"></textarea>
                  <label for="icon_prefix2">First Name</label>
                </div>
              </div>
            </form>
            <div className="col s6">
              {this.state.value}

            </div>
          </div>
      </div>
    );
  }
}

export default App;
