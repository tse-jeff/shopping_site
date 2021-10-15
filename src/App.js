// The layout of the website

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./features/Navbar/Home";
import ShoppingCart from './features/Cart/ShoppingCart';
import Navbar from './features/Navbar/Navbar';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/cart" exact component={() => <ShoppingCart />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
