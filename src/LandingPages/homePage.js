import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingNavibar from "./landingNarbar";
import Slider from "./LandingSlider";
import SocialMedia from "./socialMlinks";
import Footer from "./footer";

const HomePage = () => {
    return (
                       
      
      <div>
      
      <SocialMedia/>
      <LandingNavibar/>  
      <Slider/>
      <Footer/>
      </div>
      

    );
}
export default HomePage;