import React, { useState } from "react";
import Register from "./Register";
import OTP from "./OTP";


const Form = () =>{
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
      setFormIsSubmitted(true);
  };

    return (
        <div>
        {!formIsSubmitted ?(
            <Register submitForm={submitForm}/>
        ):(
            <OTP/>
        )}
    </div>
    );
};

export default Form;