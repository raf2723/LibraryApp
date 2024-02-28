import React from "react";

import "./App.css";
import { Navbar } from "./layouts/navbar-and-footers/Navbar";
import { ExploreTopbooks } from "./layouts/HomePage/ExploreTopBooks";
import { Carousel } from "./layouts/HomePage/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopbooks />
      <Carousel />
    </div>
  );
}

export default App;
