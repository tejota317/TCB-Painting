import React, { Component } from 'react';
import BBB from '../images/bbb.png'

 class Footer extends Component {
   render(){
   return (
    <div className="outer-footer">
      <div className="img-container">
      	<img class="footer-img" src={BBB} />
      </div>
      <h4>Bonded CT Lic # 568568</h4>
      <div className="inner-footer">
      	<div class="container">
      	  <div class="row">
      	    <div class="col-6 text-left">
      	    	<p>&copy; 2018 T.C.B. Enterprises, Inc.</p>
      	    </div>
      	    <div className="col-6 text-right">
      	    	<p>203.288.8203</p>
      	    </div>
      	  </div>
      	</div>
      </div>
    </div>
    )
 }
}


export default Footer;