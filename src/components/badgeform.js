import React from "react";

class BadgeForm extends React.Component {

  state = {}
  
  handlerChange = e => {
    this.setState({
      firsName: e.target.value
    });
  };

  handlerClick = e => {
    e.preventDefault();
    console.log("Si!");
  };

  render = ( ) => {
    return (
      <div>
        <h1>New Attendant</h1>
        <form id="from">
          <label>First Name</label>
          <input
            value={this.props.formValue.firstname}
            onChange={this.props.onChange}
            type="text"
          />
          <button onClick={this.handlerClick}>Clic Here!</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
