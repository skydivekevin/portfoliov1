import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Projects from "../Projects/Projects";
import Home from "../Home";
import Ridiculousness from "../Ridiculousness/ReactRidiculousness/Ridiculousness";

import "../../App.css";

function Navbar() {
  return (
    <div className='App'>
      <h3>I'm the Navbar!</h3>
      <Router>
        <Link to={"Ridiculousness"}>Link to Ridiculousness</Link>
        <Link to={"Projects"}>Link to Projects</Link>
        <Link to={"Home"}>Link to Home</Link>

        <Switch>
          <Route path='/Ridiculousness/' component={Ridiculousness} />
          <Route path='/Projects/' component={Projects} />
          <Route path='/Home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
