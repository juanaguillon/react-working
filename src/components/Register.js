import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div>
        <section className="register_container">
          <div className="box">
            <form id="register_form">
              <div className="field">
                <label htmlFor="register_email">Email</label>
                <input
                  type="text"
                  id="register_email"
                  className="input itext"
                />
              </div>
              <div className="field">
                <label htmlFor="register_name">Nombre completo</label>
                <input type="text" id="register_name" className="input itext" />
              </div>
              <div className="field">
                <label htmlFor="register_lastname">Apellido completo</label>
                <input
                  type="text"
                  id="register_lastname"
                  className="input itext"
                />
              </div>
              <div className="field">
                <label htmlFor="register_pass">Contraseña</label>
                <input
                  type="password"
                  id="register_pass"
                  className="input itext"
                />
              </div>
              <div className="field">
                <label htmlFor="register_rpass">Repetir Contraseña</label>
                <input
                  type="password"
                  id="register_rpass"
                  className="input itext"
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
