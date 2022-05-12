import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./socialM.css";

const SocialMedia = () => {

    return(
        <div className="deco-bar">
        <div className="social-title-bar">
        <div className="social-media-links">
            <span className="social-media-link-block">
                <a href="#facebook">
                    <i className="fa fa-facebook-f"></i>
                </a>
            </span>
            <span className="social-media-link-block">
                <a href="#Insta">
                    <i className="fa fa-instagram"></i>
                </a>
            </span>
            <span className="social-media-link-block">
                <a href="#twiter">
                    <i className="fa fa-twitter"></i>
                </a>
            </span>
 
            <span className="social-media-link-block">
            <a href="#Linkdin">
                <i className="fa fa-linkedin"></i>
            </a>
        </span>
        </div>
        </div>
        </div>
    );
}
export default SocialMedia;