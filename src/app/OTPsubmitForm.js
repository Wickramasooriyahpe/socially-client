import React, { useState } from "react";
import OTP from "./OTP";
import AdvertiserDashboard from "../Dashboard/AdvertiserDashboard";
import { Navigate } from "react-router-dom";

const OTPsubmitForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitOTP = () => {
    setFormIsSubmitted(true);
  };

  return (
      
    <div>
      {!formIsSubmitted ? (
        <OTP submitOTP={submitOTP} />
      ) : (
       <Navigate to=" ../Dashboard/AdvertiserDashboard"/>
      )}
    </div>
    
  );
};

export default OTPsubmitForm;