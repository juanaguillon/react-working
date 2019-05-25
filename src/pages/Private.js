import React from "react";
import { Redirect } from "react-router-dom";
import HttpClass from "../services/Http";

class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noLogin: false
    };
  }

  componentDidMount = () => {
    let http = new HttpClass();
    http
      .get("user/checkloging", {
        Authorization: localStorage.getItem("token_id"),
        "Content-Type": "application/json; charset=utf-8"
      })
      .then(res => {
        if (typeof res.error !== "undefined") {
          this.setState({
            noLogin: true
          });
          localStorage.removeItem('token_id');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.noLogin) return <Redirect to="/" />;

    return "Hola, es el privado"
  }
}

export default Private;
