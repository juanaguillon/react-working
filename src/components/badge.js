import React from "react";
import confLogo from "../images/anillo3.jpg";

import "./styles/badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div>
          <img src={confLogo} alt="Logo de Conferencia" />
        </div>
        <div>
          <h1>
            {this.props.name} <br />
            {this.props.lastname}
          </h1>
        </div>
        <div>
          <p>{this.props.jobtitle}</p>
          <p>@juanag</p>
        </div>
        <div>
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
