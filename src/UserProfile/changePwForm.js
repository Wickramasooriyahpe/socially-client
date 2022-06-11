import React, { useState } from "react";
import ChangePassword from "./changePassword";
import { Navigate } from 'react-router-dom';

const PasswordForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  
    const submitForm = () => {
      setFormIsSubmitted(true);
    };
  
    return (
      <div>
        {!formIsSubmitted ? (
          <ChangePassword submitForm={submitForm} />
        ) : (
          <Navigate to="/profile"/>
        )}
      </div>
    );
  };
  
  export default PasswordForm;
  