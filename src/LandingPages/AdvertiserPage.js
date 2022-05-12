import React from 'react';
import LandingNavibar from "./landingNarbar";
import "./Slider.css";
import AdvertiserPage from './advertiserNavPage';
import SocialMedia from "./socialMlinks";

const Advertiser = () => {
    return(
        <div>
        <br></br>
        <SocialMedia/>
        <LandingNavibar/>   
        <AdvertiserPage/>
        </div>
        
    );
}
export default Advertiser;