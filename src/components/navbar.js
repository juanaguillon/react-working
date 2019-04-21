import React from "react";
import './styles/navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="logo" />
          <span className="light">Platzi</span>
          <span className="bold">Conf</span>
        </a>

      </div>
    );
  }
}

export default NavBar;
