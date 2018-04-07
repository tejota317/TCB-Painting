import React, { Component } from 'react';
import hero from '../images/hero-3.jpg'

 class About extends Component {
   render(){   	
   return (
   	  <div>
	   	<div className="App-hero" style={{backgroundImage: `url(${hero})` }}>
	    </div>
	    <div className="header">
	    	<h2 className="header-title">About Us</h2>
	    </div>
	    <div className="container">
	      <div className="row">
	        <div className="col">
	          <p>Bacon ipsum dolor amet boudin shank sausage strip steak bresaola turducken ground round meatball. Turducken porchetta ground round, 
	          jerky salami brisket pastrami capicola cow pancetta kielbasa. Biltong bacon prosciutto hamburger short loin. Cupim chicken rump ground 
	          round short loin prosciutto jowl boudin shoulder short ribs. Ball tip ham hock rump, strip steak tongue swine jerky. Ham corned beef 
	          picanha pork drumstick shankle.
	          </p>

			  <p>Flank pork shoulder sausage pork chop sirloin cupim ham turkey pig picanha meatball chicken. Meatball ground round pancetta, tail 
			  spare ribs jerky landjaeger. Swine ribeye filet mignon meatball beef ribs shoulder, biltong shank pastrami pork chop. Pastrami ham hock 
			  cupim, venison tail cow buffalo short ribs pig. Pancetta sirloin shankle frankfurter bresaola. Capicola short loin ham hock buffalo, 
			  alcatra meatloaf ribeye shankle landjaeger pork belly salami beef frankfurter cow chuck. Beef ribs pork belly filet mignon swine meatball 
			  pig corned beef cupim.
			  </p>

			  <p>Pork belly boudin short ribs ribeye ground round, shoulder fatback pork loin frankfurter bacon capicola jowl burgdoggen. Beef brisket 
			  ribeye rump. Pork bacon picanha cupim, frankfurter short loin shoulder tri-tip drumstick venison. Leberkas shank frankfurter t-bone ham 
			  cow kevin buffalo drumstick alcatra jerky andouille spare ribs.
			  </p>

			  <p>Pork belly chicken filet mignon pork loin buffalo pancetta kevin turkey beef turducken chuck picanha rump capicola. Pork belly beef 
			  ribs fatback, ribeye pastrami meatball spare ribs frankfurter. Shoulder pig strip steak bacon, corned beef beef ribs spare ribs pastrami. 
			  Tenderloin meatloaf pork chop frankfurter turducken. Short ribs pork chop meatball, flank andouille shoulder alcatra boudin kevin rump picanha.
			  </p>

			  <p>Drumstick porchetta turkey, bresaola shank pastrami kielbasa shankle t-bone landjaeger hamburger sausage beef ribs short ribs brisket. 
			  Brisket shank cupim, andouille salami beef turducken fatback pork chop swine tongue ball tip strip steak. Spare ribs kevin ham hock, chuck 
			  pancetta beef capicola cow tail rump pork burgdoggen t-bone pork chop leberkas. Ham hock pork belly tenderloin bacon short ribs pork. Short 
			  loin short ribs porchetta brisket tenderloin flank kevin rump beef ground round ribeye jowl turducken. Doner tri-tip cow, burgdoggen short loin 
			  shank sirloin.
			  </p>
	        </div>
	      </div>
	    </div>
	  </div>
    )
 }
}


export default About;