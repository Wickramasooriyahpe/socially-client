import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import StripeContainer from './StripeContainer';
import { useState, useEffect } from "react";
import paymentValidation from "./paymentValidation";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import swal from 'sweetalert';

import { useNavigate } from "react-router-dom";
//import { toast } from 'react-toastify'

const BillingDetails = () => {
 const balance = JSON.parse(localStorage.getItem('balance'));
 //const id = JSON.parse(localStorage.getItem('email'));
 const navigate = useNavigate();
 const [values, setValues] = useState({
       
  amount: "",
  
});

const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value,
  });
};
const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);
const [success, setSuccess ] = useState(false)
const [item, setItem] = useState([]);

async function handleToken(token) {
  
  setErrors(paymentValidation(values));
  setDataIsCorrect(true);
  

  var axios = require('axios');
        var data = JSON.stringify({
         // id:JSON.parse(localStorage.getItem('id')),
          amount: values.amount*100,
          token:token,
        });
  
        var config = {
          method: 'post',
          url: 'http://localhost:3000/payments',
          headers: { 
            Authorization: 
            "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
            "Content-Type": "application/json",
      
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setSuccess(true)
          // swal({
          //   title: "success",
          //   text: "Payment done successfully!",
          //   icon: "success",
          //   button: "close",
          // });
          console.log("Successful payment")
                setSuccess(true)

                //Topup by amount
                var axios = require('axios');
                var data = JSON.stringify({
                  advertiserID: JSON.parse(localStorage.getItem('id')),
                  //advertiserID:"13",
                  amount: values.amount
                });
                
                var config = {
                  method: 'post',
                  url: 'http://localhost:3000/advertiser-transaction/create',
                  headers: { 
                    Authorization: 
                        "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
                        "Content-Type": "application/json",
                  },
                  data : data
                };
                
                axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                  console.log("amount added");
                })
                .catch(function (error) {
                  console.log(error);
                  console.log("error");
                });


                //to get updated balance
                var axios = require('axios');
                var data = JSON.stringify({
                  advertiserID: JSON.parse(localStorage.getItem('id')),
                });
      
                  var config = {
                    method: 'get',
                    url: 'http://localhost:3000/advertiser-transaction/balance',
                    headers: { 
                      Authorization: 
                      "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
                      "Content-Type": "application/json",
                    },
                    data : data
                  };
      
                  axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    console.log("balance");
                    localStorage.setItem("balance",JSON.stringify(response.data + parseInt(values.amount)
                    ));
                  })
                  .catch(function (error) {
                    console.log(error);
                    console.log("error");
                  });




        })
        .catch(function (error) {
          const err=console.log(JSON.stringify(error.data));
          swal({
            title: "Payment Unsuccess",
            icon: "error",
            button: "close",
          });
          console.log(err);
        });
        // .catch(function (error) {
        //   swal({
        //     title: "Error",
        //     text: "Insufficient Balance",
        //     icon: "error",
        //     button: "close",
        //   });
        //   console.log(error);
        //   alert("Failed")
        // });

          //Topup
          // var axios = require('axios');
          // var data = JSON.stringify({
          //   advertiserID: JSON.parse(localStorage.getItem('id')),
          //   //advertiserID:"13",
          //   amount: values.amount
          // });
          
          // var config = {
          //   method: 'post',
          //   url: 'http://localhost:3000/advertiser-transaction/create',
          //   headers: { 
          //     Authorization: 
          //         "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
          //         "Content-Type": "application/json",
          //   },
          //   data : data
          // };
          
          // axios(config)
          // .then(function (response) {
          //   console.log(JSON.stringify(response.data));
          //   console.log("amount added");
          // })
          // .catch(function (error) {
          //   console.log(error);
          //   console.log("error");
          // });


          //get balance
          // var axios = require('axios');
          // var data = JSON.stringify({
          //   advertiserID: JSON.parse(localStorage.getItem('id')),
          // });

          //   var config = {
          //     method: 'get',
          //     url: 'http://localhost:3000/advertiser-transaction/balance',
          //     headers: { 
          //       Authorization: 
          //       "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
          //       "Content-Type": "application/json",
          //     },
          //     data : data
          //   };

          //   axios(config)
          //   .then(function (response) {
          //     console.log(JSON.stringify(response.data));
          //     console.log("balance");
          //     localStorage.setItem("balance",JSON.stringify(response.data + parseInt(values.amount)));
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //     console.log("error");
          //   });


          }
          if (success ) {

            navigate("/checkout");
            } else{
              
            }

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
          <div class="text-center-pay"> <br></br><br></br>

          {/* <h3 className="topup-balance">Your Account will be Top up by LKR 500.00</h3> */}
      
          
          <h3 className="topup-balance">Your balance is  <span class="text-primary"> LKR {balance}.00</span></h3> <br></br>


            <div class="payment-data">
            <label>Minimum Balance should be LKR 200.00</label> 
              <label>Enter amount here</label> 
            </div>
            
              <div class="input-group">
                <span class="input-group-addon">LKR</span>
                <input type="text" name="amount" class="form-control" 
                 value={(values.amount)}
                 onChange={handleChange}
                 />
               
              </div>
            </div>
          </div>
          <hr />
          <div class="text-center-card"><br></br>
          <StripeCheckout 
          className="center"
          stripeKey="pk_test_51Kvx6cKU1Xzf6mhr97C1brUWCR8AVRYiN0VSeHcjsKOBbKcGzmM8W1jtuwzkSNkd3ro1rKnP8CCP8GehVEiDT4kA00dddks55O"
          token={handleToken}
          amount={values.amount}
          //name={product.name}
          // billingAddress
          // shippingAddress
        
        />
                      </div><br></br>
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
