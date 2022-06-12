import "./advertiser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';



const AdvertiserPage = (props) => {
    const APdata = props.APdata;
    return(
      <div >
      {APdata.map((APdata) =>(
        <div>
        <img src={APdata.image} className="a-main-container"/>
        <div className="a-container a-fill-hight">  
        <div className="row align-item-center a-fill-hight" id="a-row-center">
         <div className="col" id="a-col">
         <div className="a-main-slider-content">
            <h1>{APdata.heading}</h1>
            <Link className="btn btn-primary"  to={APdata.path}>Start Now</Link>
         </div>
         
         </div>
        </div>
        </div>
        </div>
      ))}
      </div>
       
    );
}
export default AdvertiserPage ;