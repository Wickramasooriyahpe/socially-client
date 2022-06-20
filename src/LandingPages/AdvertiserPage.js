import React from 'react';
import LandingNavibar from "./landingNarbar";
import "./Slider.css";
import AdvertiserPage from './advertiser-route';
import SocialMedia from "./socialMlinks";
import Footer from "./footer";
import { useState } from "react";


const Advertiser = () => {
    const [APdata,setdata] = useState([
        {id:1,image: "advpage.jpg",heading: "Join our Advertiser Team", path: "/form",}
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
export default Advertiser;