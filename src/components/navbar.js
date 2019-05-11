import React from "react";
import { Link } from 'react-router-dom'
import "./styles/navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="principal_nav">
        <div className="container-fluid">
          <div className="flex-horizontal">
            <div className="left_side w50">
              <h1 className="logo_title">Company</h1>
            </div>
            <div className="right_side w50">
              <ul className="list_right_side flex-horizontal">
                <li>
                  <Link to="/">Ingresar</Link>
                </li>
                <li>
                  <Link to="/register">Registrar</Link>
                </li>
                <li>
                  <Link to="/sesión">Sesión</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
