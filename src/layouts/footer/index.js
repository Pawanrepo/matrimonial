import React from "react";
import '../../App.css';
import facebookimg from '../../images/facebook.png';
import twitterimg from '../../images/twitter.png';
import linkedinimg from '../../images/linkedin.png';
import youtubeimg from '../../images/youtube.png';


const Footer = () => {
    
  return (
   <>

    <footer>
      <footer class="cd-desktop">
         <div class="container">
            <div class="row">
             <div>
             <p class="text-center" style={{color: '#000000'}}>© 2022 All Rights Reserved.
        
    <a href="https://www.facebook.com" ><img className="App-header"  src={facebookimg} alt="facebook" /></a>
    <a href="https://twitter.com/" ><img className="App-header" src={twitterimg} alt="twitter" /></a> 
     <a href="https://www.linkedin.com/" ><img className="App-header" src={linkedinimg} alt="linkedin" /></a> 
     <a href="https://www.youtube.com/" ><img  className="App-header" src={youtubeimg} alt="youtube" /></a>
    
         
        
        <span class="text-center" style={{color: '#000000'}}>Design by Pawan Kaushik </span>
    
      </p>  
      </div>
     </div>
   </div>
 


</footer>
</footer>
</>
  );
};

export default Footer;
