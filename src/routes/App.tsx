import React, { Component } from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "../redux";
import Dashboard from "../pages/dashboard/dashboard";
import Register from "../pages/client/register/register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Register />} />
            <Route path="/dashboard" render={(props) => <Dashboard />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
