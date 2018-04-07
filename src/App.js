import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/about" component={About}/>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
