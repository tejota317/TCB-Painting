import React, { Component } from 'react';
import hero from '../images/hero-2.jpg'

 class Services extends Component {
   render(){
   return (
   	  <div>
	   	<div className="App-hero" style={{backgroundImage: `url(${hero})` }}>
	    </div>
	    <div className="header">
	      <h2 className="header-title">Services</h2>
	    </div>
	    <div class="container">
	      <div class="row">
	        <div class="col text-left">
	          <p>T.C.B Enterprises is a Full Service Painting Company. We provide residential, commercial and institutional work.</p>
	          <p> Some of the services we provide are:</p>
	          <ul>
	            <li>
	            	Complete Interior and Exterior painting
	            </li>
	            <li>
	            	Powerwashing & Deck Sealing
	            </li>
	            <li>
	            	Wallpaper
	            </li>
	            <li>
	            	Popcorn Ceiling Repairs
	            </li>
	            <li>
	            	Plaster & Sheetrock Repairs
	            </li>
	            <li>
	            	Insurance Work
	            </li>
	            <li>
	            	Water, Fire & Smoke Damage Repairs
	            </li>
	            <li>
	            	Office Space Acoustical Ceilings--Painted without changing the sound or fire rating.
	            </li>
	          </ul>
	        </div>
     	  </div>
	    </div>
      </div>
    )
 }
}


export default Services;