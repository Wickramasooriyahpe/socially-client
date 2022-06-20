import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import StripeContainer from './StripeContainer';


const BillingDetails = () => {
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
          <div class="text-center-pay">
            <h3 className="topup-balance">Your balance is <span class="text-primary">$0.00</span></h3>
            <div class="payment-data">
              <label>Minimum Balance should be $100.</label>
              <label>Input the Topup amount</label>
            </div>
            
              <div class="input-group">
                <span class="input-group-addon">$</span>
                <input type="number" name="balance" class="form-control" step="1" value="100"/>
               
              </div>
            </div>
          </div>
          <hr />
          <div class="text-center-card">
                            <h5 className="add-card-data">Enter your card details.</h5>
                            <StripeContainer/>

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

export default BillingDetails;
