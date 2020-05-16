import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/home"></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Main} path="/"></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
