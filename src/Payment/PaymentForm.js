import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import swal from 'sweetalert';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
        base: {
            color: '#24B47E',
            fontFamily: 'Source Code Pro, monospace',
            fontSize: '16px',
            lineHeight: '48px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: '#CFD7DF',
            },
          },
          invalid: {
            color: '#e5424d4hfe',
            ':focus': {
              color: '#303238',
            },
          },
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    async function handleSubmit(event) {
      event.preventDefault()
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement,CardCvcElement,CardExpiryElement)
        })

        const paymentMethodId = paymentMethod.id;

        var axios = require('axios');
        var data = JSON.stringify({
          paymentMethodId,
          amount: 50000,
          
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
          swal({
            title: "success",
            text: "Payment done successfully!",
            icon: "success",
            button: "close",
          });
          console.log("Successful payment")
          //alert("Payment done successfully")
                setSuccess(true)
        })
        .catch(function (error) {
          swal({
            title: "Error",
            text: "Insufficient Balance",
            icon: "error",
            button: "close",
          });
          console.log(error);
          alert("Failed")
        });

    //Topup
    var axios = require('axios');
    var data = JSON.stringify({
     advertiserID: JSON.parse(localStorage.getItem('id')),
     //advertiserID:"13",
      amount: 50000/100
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

    //get balance
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
        localStorage.setItem("balance",JSON.stringify(response.data+500));
      })
      .catch(function (error) {
        console.log(error);
        console.log("error");
      });
}


    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
               
                    <CardNumberElement options={CARD_OPTIONS}/>
                   
                    <CardCvcElement options={CARD_OPTIONS}/>

                    <CardExpiryElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="paybutton" type="submit">Topup</button>
        </form>
        :
       <div>
           
       </div> 
        }
            
        </>
    )
}
