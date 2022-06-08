import { useState } from "react";
import "./advpub.css";
import AdvPubComponent from "./advPubdetailCom";


const AdvPubCompo = () => {
    const [ADdata,setdata] = useState([
        {id:1,image: "slideone.jpg",heading: "Advertiser",step1: "Register with the portal",step2: "Make Campaigns",step3: "Make Creatives",step4: "Promote your goods and services",},
        {id:2,image: "slidetwo.jpg",heading: "Publisher",step1: "Join with our mobile App",step2: "Find preferd Creatives to share",step3: "Share them with your social media",step4: "Enjoy your revanue",},
         ]);
    return(
        <div>
        <AdvPubComponent ADdata ={ADdata}/>
        </div>
        );
}
export default AdvPubCompo;