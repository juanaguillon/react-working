import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "../pages/Layout";

import Login from "./Login";
import Register from './Register';
import Private from '../pages/Private';

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem("token_id") !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRouter exact path="/private" component={Private} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
