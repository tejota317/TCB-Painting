import React, { Component } from 'react';
import hero from '../images/hero-1.jpg'

 class Home extends Component {
   render(){
   return (
	  <div>
	   	<div className="App-hero" style={{backgroundImage: `url(${hero})` }}>
	    </div>
	    <div className="header">
	    	<h2 className="header-title">Take the Pain Out of Painting</h2>
	    	<h4>Call today for a free estimate!</h4>
	    	<h1>203.288.8203</h1>
	    </div>
	    <div className="page-section container">
	      <div class="row">
	        <div class="col-12">
	    	  <p>T.C.B. Enterprises has served the New Haven County Area for over 25 years!</p>
	    	  <p class="text-left">Bacon ipsum dolor amet tongue landjaeger porchetta jerky andouille rump spare ribs ground round sirloin sausage doner. Capicola ham tenderloin biltong, 
	    	     pork belly cow alcatra. Pig buffalo andouille pork loin swine. Beef ribs porchetta shoulder, alcatra picanha buffalo landjaeger pork belly sausage bresaola 
	    	     ribeye pig sirloin filet mignon. Cupim pig prosciutto, picanha filet mignon biltong bresaola ball tip tail spare ribs tongue swine.
	    	  </p>
	    	</div>
	      </div>
	    </div>
	  </div>
    )
 }
}


export default Home;