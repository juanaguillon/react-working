import React from "react";
import Badge from "../components/badge";
import BadgeForm from "../components/badgeform";


class badgeNew extends React.Component {
  state = {
    form: {
      firstname: "Nothing"
    }
  };

  handlerChange = e => {
    this.setState({
      form: {
        firstname: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Badge
          name="Juan"
          lastname={this.state.form.firstname}
          jobtitle="Worflow Full"
        />
        {/* De esta manera se emite comunicacion entre componentes */}
        <BadgeForm formValue={this.state.form} onChange={this.handlerChange} />
      </div>
    );
  }
}

export default badgeNew;
