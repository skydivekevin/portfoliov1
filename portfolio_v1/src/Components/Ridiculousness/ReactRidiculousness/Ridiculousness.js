import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "../../Home";
import Header from "./Header";
import Footer from "./Footer";
import Hooks from "./Hooks";
import Explanation from "./Explanation";

function Ridiculousness() {
  return (
    <div className='App'>
      <Router>
        <Link to={"Ridiculousness/Hooks"}>Link to Hooks</Link>
        <Link to={"Ridiculousness/Explanation"}>Link to Projects</Link>

        <Switch>
          <Route path='/Ridiculousness/Hooks/' component={Hooks} />
          <Route path='/Ridiculousness/Explanation/' component={Explanation} />
          <Route path='/' component={Home} />
        </Switch>

        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default Ridiculousness;
