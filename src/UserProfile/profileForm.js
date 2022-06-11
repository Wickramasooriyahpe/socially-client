import { Navigate } from 'react-router-dom';
import AdvertiserProfile from "./advertiserProfile";
import { useState, useEffect } from "react";

const ProfileForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  
    const submitForm = () => {
      setFormIsSubmitted(true);
    };
  
    return (
      <div>
        {!formIsSubmitted ? (
          <AdvertiserProfile submitForm={submitForm} />
        ) : (
          <Navigate to=""/>
        )}
      </div>
    );
  };
  
  export default ProfileForm ;