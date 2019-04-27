import React from "react";
import NavBar from "../components/NavBar";

function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;
