import React, { useState } from "react";
import Login from "./Login";
import AdvertiserDashboard from "../Dashboard/AdvertiserDashboard";

//import './SignIn.css';

const LoginForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitLoginForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (
      <Login submitLoginForm={submitLoginForm} /> 
  ) : (
      <AdvertiserDashboard/>
    )}
    </div>
  );
};

export default LoginForm;
