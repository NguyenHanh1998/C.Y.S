import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import "./App.css";
import Layout from "./modules/common/Layout";
const Loading = () => <div>Loading...</div>;
const HomePage = Loadable({
  loader: () => import("./components/HomePage"),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import("./modules/users/Login"),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
