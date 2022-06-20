import React from 'react';
import LandingNavibar from "./landingNarbar";
import "./Slider.css";

import SocialMedia from "./socialMlinks";
import Footer from "./footer";
import { useState } from "react";
import AdvertiserPage from './advertiser-route';

const Publisher = () => {
    const [APdata,setdata] = useState([
        {id:1,image: "pubPage.jpg",heading: "Join with us as a Publisher", path: "/play-store",}
         ]);
    return(
        <div>
       
        <SocialMedia/>
        <LandingNavibar/>   
        <AdvertiserPage APdata ={APdata}/>
        <Footer/>
        </div>
        
    );
}
export default Publisher;