import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
      <main>
          <Navbar />
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
          </Switch>
      </main>


  );
}

export default App;
