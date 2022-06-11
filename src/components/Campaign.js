import React, { useState } from "react";
import CampaignCreate from "./CampaignCreate";
//import './SignIn.css';
import CampDetails from "./CampDetails";
import { Navigate } from 'react-router-dom';

const Campaign = () => {
  const [campIsSubmitted, setCampIsSubmitted] = useState(false);

  const submitCamp = () => {
    setCampIsSubmitted(true);
  };

  return (
    <div>
      {!campIsSubmitted ? (
        <CampaignCreate submitCamp={submitCamp} />
      ) : (
        <Navigate to="/campcrea"/>
      )}
    </div>
  );
};

export default Campaign;