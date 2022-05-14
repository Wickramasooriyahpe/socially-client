import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="footer-container">
    <section className="footer-social-media">
      <div className="footer-social-media-wrapper">
        <small className="website-right">
        &copy;{new Date().getFullYear()} SOCIALLY | All rights reserved |
        </small>
        <div className="footer-social-link-icons">
          <Link 
          className="social-icon-link facebook"
          to='/'
          target='_blank'
          >
          <i className="fa fa-facebook-f"></i>
          </Link>
       
        <Link 
        className="social-icon-link Instagram"
        to='/'
        target='_blank'
        >
        <i className="fa fa-instagram"></i>
        </Link>
     
        <Link 
        className="social-icon-link Twitter"
        to='/'
        target='_blank'
        >
        <i className="fa fa-twitter"></i>
        </Link>
        
        <Link 
        className="social-icon-link linkdin"
        to='/'
        target='_blank'
        >
        <i class="fa fa-linkedin"></i>
        </Link>
       </div>


      </div>
    </section>
    <div className="footer-links">
      <div className="footer-link-wrapper">
      <div className="footer-link-items">
      <h2>Adress</h2>
      <h6>Lake rd,Colombo</h6>
      <h6>Sri Lanka</h6>
      </div>
      <div className="footer-link-items">
      <h2>Contact</h2> 
      <h6>+9477 999 9999</h6>
      </div>

        <div className="footer-link-items">
        <h2>Quick Links</h2>
        <Link to="/home">Home</Link>
        <Link to="/home">About Us</Link>
        <Link to="/home">Contact Us</Link>
        </div>
      </div>

      <div className="footer-link-wrapper">
      <div className="footer-link-items">
      <h2>Join Us</h2>
      <Link to="/adv">Advertiser</Link>
      <Link to="/pub">Publisher</Link>
      
      </div>

      <div className="footer-link-items">
      <h2>Find Us</h2>
      <Link to="/home">Facebook</Link>
      <Link to="/home">Instagram</Link>
      <Link to="/home">Twitter</Link>
      <Link to="/home">Linkdin</Link>
      </div>
    </div>
    
    </div>
    </div>
  );
};
export default Footer;