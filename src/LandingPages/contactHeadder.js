import "./contact.css";

const ContactHeader = () => {
    return(
      <div class="flex-container">
          <div class="flex-items">
            <div class="dbox  text-center">
            <div class="icon  ">
            <span class="fa fa-map-marker" id="u-icon-contact-page"></span>
            </div>
            <div class="text">
            <p><span>Address:</span> Lake Road, Sri Lanka</p>
            </div>
          </div>
          </div>
          <div class="flex-items">
              <div class="dbox  text-center">
              <div class="icon ">
              <span class="fa fa-phone" id="u-icon-contact-page"></span>
              </div>
              <div class="text">
              <p><span>Phone:</span> 1235 2355 98</p>
              </div>
            </div>
          </div>
          <div class="flex-items">
                <div class="dbox  text-center">
                <div class="icon ">
                <span class="fa fa-paper-plane" id="u-icon-contact-page"></span>
                </div>
                <div class="text">
                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
                </div>
          </div>
          <div class="flex-items">
                <div class="dbox  text-center">
                <div class="icon ">
                <i class="fa fa-globe center-fa-icon " id="u-icon-contact-page"></i>
                </div>
                <div class="text">
                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
                </div>
                </div>      
            </div>  
        
      
    );

}
export default ContactHeader;