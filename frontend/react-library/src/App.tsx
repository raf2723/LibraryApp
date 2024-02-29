import React from "react";

import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Navbar } from "./layouts/navbar-and-footers/Navbar";
import { Footer } from "./layouts/navbar-and-footers/Footer";


export const App=()=> {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
    
  );
}


