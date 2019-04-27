import React from "react";

class Login extends React.Component {

  render(){
    return (
      <div className="box">
        <form id="login_form">
          <div className="field">
            <label htmlFor="user_field">Usuario o Email</label>
            <input
              name="user_field"
              id="user_field"
              type="text"
              className="input itext"
            />
          </div>
          <div className="field">
            <label htmlFor="pass_field">Contraseña</label>
            <input
              name="pass_field"
              id="pass_field"
              type="text"
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
