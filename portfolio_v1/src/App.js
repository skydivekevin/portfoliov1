import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Projects from "./Components/Projects/Projects";
import Ridiculousness from "./Components/Ridiculousness/ReactRidiculousness/Ridiculousness";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Ridiculousness' component={Ridiculousness} />
          <Route path='/Projects' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
