import "./adv.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

const PublisherPage = () => {
    return(
       <div className="adv-land-map-section">
        <div className="adv-land-overly-wrapper" >
            <Image src="slidethree.jpg" className="adv-land-img"></Image>
            <div className="adv-land-wrap">
                <div className="adv-land-content">
                    <div className="adv-land-map-overly">
                        <h3 className="adv-land-text-spacing"> Publisher </h3>
                        <div className="adv-land-desc">
                         <p className="adv-land-desc-para">Lorem Ipsum is simply dummy text  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <Button href="/login" className="adv-land-button" >Start</Button>
                    </div>
                </div>
            </div>
        
        </div>
       
       </div>
    );
}
export default PublisherPage ;