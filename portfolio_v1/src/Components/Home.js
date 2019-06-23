import React from "react";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div className='App'>
      <Navbar />
      <h1>I'm the homepage!!!</h1>
    </div>
  );
}

export default Home;
