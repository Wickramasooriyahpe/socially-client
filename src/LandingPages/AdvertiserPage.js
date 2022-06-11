import React from 'react';
import LandingNavibar from "./landingNarbar";
import "./Slider.css";
import AdvertiserPage from './advertiser-route';
import SocialMedia from "./socialMlinks";
import Footer from "./footer";

const Advertiser = () => {
    return(
        <div>
       
        <SocialMedia/>
        <LandingNavibar/>   
        <AdvertiserPage/>
        <Footer/>
        </div>
        
    );
}
export default Advertiser;