import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Navbar } from "./layouts/navbar-and-footers/Navbar";
import { Footer } from "./layouts/navbar-and-footers/Footer";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home" exact>
            <HomePage />
          </Route>

          <Route path="/search">
            <SearchBooksPage />
          </Route>
        
          <Route path="/checkout/:bookId">
            <BookCheckoutPage/>
          </Route>
      
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
