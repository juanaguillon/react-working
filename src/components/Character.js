import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.char.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.char.name}</h5>
          <p className="card-text">{this.props.char.gender}</p>
        </div>
      </div>
    );
  }
}

export default Character;
