import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
//import './SignIn.css';

const LoginForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitLoginForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? <Login submitForm={submitLoginForm} /> : <Dashboard />}
    </div>
  );
};

export default LoginForm;
