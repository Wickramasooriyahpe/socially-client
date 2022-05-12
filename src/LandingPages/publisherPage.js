import React from 'react';
import LandingNavibar from "./landingNarbar";
import "./Slider.css";
import PublisherPage from './publisherNavPage';
import SocialMedia from "./socialMlinks";

const Publisher = () => {
    return(
        <div>
        <br></br>
        <SocialMedia/>
        <LandingNavibar/>   
        <PublisherPage/>
        </div>
        
    );
}
export default Publisher;