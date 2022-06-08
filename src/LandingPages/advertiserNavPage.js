import "./adv.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

const AdvertiserPage = () => {
    return(
      <div className="adv-pub-com-container">
        <div className="adv-pub-com-container-wrapper">
         <div className="column" id="adv-pub-cont-column">
            <div className=" mb-5 mb-lg-0 adv-pub-detail">
                <div className="mb-5 adv-pub-detail-wrapper"></div>
            </div></div>
            <div className="column" id="adv-pub-cont-column">
            <div className=" adv-pub-img-container">
            </div></div>
        </div>
      </div>
       
    );
}
export default AdvertiserPage ;