import React from "react";
import HttpClass from "../services/Http";

class Login extends React.Component {

  constructor( props ){
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChangeInput( e ){

    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
    
  }
  
  handleSubmit( e ){
    e.preventDefault();
    let http = new HttpClass("http://localhost");
    
    let json = http.post("user/auth", this.state );
    json.then( f => console.log( f ))
  }

  render(){
    return (
      <div className="box">
        <form id="login_form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="user_field">Usuario o Email</label>
            <input
              onChange={this.handleChangeInput}
              name="email"
              id="user_field"
              type="text"
              className="input itext"
            />
          </div>
          <div className="field">
            <label htmlFor="pass_field">Contraseña</label>
            <input
              onChange={this.handleChangeInput}
              name="password"
              id="pass_field"
              type="password"
              className="input itext"
            />
          </div>
          <div className="field">
            <input type="submit" value="Enviar" className="button button-success"/>
          </div>
        </form>
      </div>
    );
  }
  
}

export default Login;
