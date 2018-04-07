import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

 class Navbar extends Component {
   render(){
   return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
		  <a className="navbar-brand" href="#">T.C.B. Enterprises</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-5">
		      <li className="nav-item">
		        <NavLink className="nav-link" exact to="/">Home</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to="/services">Services</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to="/about">About Us</NavLink>
		      </li>
		    </ul>
		  </div>
	  </div>
	</nav>
    )
 }
}


export default Navbar;