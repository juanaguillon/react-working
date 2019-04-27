import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../pages/Layout";

import Login from "./Login";
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
