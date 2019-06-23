import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Hooks from "./Hooks";
import Explanation from "./Explanation";

function Ridiculousness() {
  return (
    <div className='Ridiculousness'>
      <Header />
      <h1>Here is where all of the ridiculousness lives!</h1>
      <Explanation />
      <Hooks />
      <Footer />
    </div>
  );
}

export default Ridiculousness;
