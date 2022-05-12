import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingNavibar from "./landingNarbar";
import Slider from "./LandingSlider";
import SocialMedia from "./socialMlinks";


const HomePage = () => {
    return (
                       
      
      <div>
      <br></br>
      <SocialMedia/>
      <LandingNavibar/>  
      <Slider/>
      </div>
      

    );
}
export default HomePage;