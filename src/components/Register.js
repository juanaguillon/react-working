import React from "react";
import HttpClass from '../services/Http';

class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      pass: "",
      rpass: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let http = new HttpClass("http://localhost");
    http.post("user/create", this.state ).then( f => console.log( f ))
    // let http = new HttpClass("http://localhost");
    // let currentState = this.state;
    // currentState.request = "create_user";
    // this.setState(currentState);
    
    // http.post("reactapp/backend/", this.state);

  }

  render() {
    return (
      <div>
        <section className="register_container">
          <div className="box">
            <form onSubmit={this.handleSubmit} id="register_form">
              <div className="field">
                <label htmlFor="register_email">Email</label>
                <input
                  type="text"
                  id="register_email"
                  className="input itext"
                  name="email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="register_name">Nombre completo</label>
                <input
                  type="text"
                  id="register_name"
                  className="input itext"
                  name="name"
                  onChange={this.handleInputChange}
                />
              </div>              
              <div className="field">
                <label htmlFor="register_pass">Contraseña</label>
                <input
                  type="password"
                  id="register_pass"
                  className="input itext"
                  name="pass"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="register_rpass">Repetir Contraseña</label>
                <input
                  type="password"
                  id="register_rpass"
                  className="input itext"
                  name="rpass"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="field">
                <input
                  type="submit"
                  value="Registrar"
                  className="button button-success"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
