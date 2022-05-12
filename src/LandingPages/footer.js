import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footer = () => {
    return(

        <div className="main-footer">
        <div className="container">
          <div className="row">
         
            {/* Column1 */}
            <div className="col">
              <h4 className="list-unstyled">
                <a href="/home" className="footer-link">Home</a><br></br><br></br>
                <a href="/home" className="footer-link">About Us</a><br></br><br></br>
                <a href="/cont" className="footer-link">Contact Us</a><br></br>
              </h4>
            </div>
            {/* Column1 */}
            <div className="col">
            <h3>Contact Us</h3><br></br>
            <h1 className="list-unstyled">
              <h5> +97 999 9999</h5>
              <h5>Moscow, Russia</h5>
              <h5>123 Streeet South North</h5>
            </h1>
          </div>
            {/* Column2 */}
            <div className="col">
              <h3>Join Us</h3><br></br>
              <h5 className="list-unstyled">
                <a className="footer-link" href="/adv">Advertiser</a><br></br><br></br>
                <a className="footer-link" href="/pub">Publisher</a>     
              </h5>
            </div>
            {/* Column3 */}
            <div className="col">
              <h3>Find Us</h3><br></br>
              <ui className="list-unstyled-icons">
              <a className="fa fa-facebook-f" href="##"></a><br></br>
              <a className="fa fa-instagram" href="##"></a><br></br>
              <a className="fa fa-twitter" href="##"></a><br></br>
              <a className="fa fa-linkedin" href="##"></a>
               
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} SOCIALLY | All rights reserved |
              
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;