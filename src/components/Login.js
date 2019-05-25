import React from "react";
import {Redirect} from 'react-router-dom'
import HttpClass from "../services/Http";

class Login extends React.Component {

  constructor( props ){
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect:false
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
    json.then( f => {
      if ( typeof f.token != "undefined" ){
        localStorage.setItem('token_id', f.token );
        this.setState({redirect:true})
      }else{
        console.log( f );
      }
    });
  }

  render(){

    if ( this.state.redirect ) return <Redirect to="/private" />
    
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
