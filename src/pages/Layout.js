import React from "react"
import NavBar from "../components/navbar";

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
