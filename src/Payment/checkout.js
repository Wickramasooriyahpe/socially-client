import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import { useState} from "react";

const Checkout = () => {
 const balance = JSON.parse(localStorage.getItem('balance'));
 const [value, setValue] = useState([]);

    return (
<div class="page-container-bg-solid page-boxed">
           <div><Navibar/></div>
                           
  <div class="page-container">
    <div class="page-content-wrapper">
      <div class="page-head"><br></br>
        <div class="container-fluid"><br></br>
            <h2 class="page-head-title" title="Billing">Billing</h2>                   
       </div>
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                 <div class="portlet" id="billingUpBalance">
        <div class="portlet-body">
        <br></br><br></br>
        <h4 className="popup">The account has been top-up successfully</h4>
          <div class="text-center-pay"> <br></br>
          <h3 className="topup-balance">Your balance is  <span class="text-primary"> LKR {balance}.00</span></h3> 
          <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  id="popupbutton" href="/transactionHistory" >Check-Transaction</a>
          <br></br><br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
          </div>
  </div>
  
</div>

    );
}

export default Checkout;
