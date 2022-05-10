import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
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
            <button className="paybutton">Topup</button>
        </form>
        :
       <div>
           
       </div> 
        }
            
        </>
    )
}