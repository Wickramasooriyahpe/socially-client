import React from 'react';
import LandingNavibar from "./landingNarbar";
import "./Slider.css";
import PublisherPage from './publisherNavPage';
import SocialMedia from "./socialMlinks";
import Footer from "./footer";

const Publisher = () => {
    return(
        <div>
        
        <SocialMedia/>
        <LandingNavibar/>   
        <PublisherPage/>
        <Footer/>
        </div>
        
    );
}
export default Publisher;