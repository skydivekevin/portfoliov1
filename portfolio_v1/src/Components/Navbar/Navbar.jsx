import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

function Nav() {
  return (
    <div className='Navbar'>
      <header>
        <h3>I'm the Navbar!</h3>
        <Link className='navbarLink' to='/'>
          Link To Home
        </Link>
        <Link className='navbarLink' to={"/Ridiculousness"}>
          Link to Ridiculousness
        </Link>
        <Link className='navbarLink' to={"/Projects"}>
          Link to Projects
        </Link>

        <h3>End of navbar component</h3>
      </header>
    </div>
  );
}

export default Nav;
