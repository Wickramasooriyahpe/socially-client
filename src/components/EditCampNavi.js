import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import EditCampaign from "./EditCampaign";

const EditCampNavi = () => {
    const [campIsUpdated, setCampIsUpdated] = useState(false);

  const updateCamp = () => {
    setCampIsUpdated(true);
  };

  return (
    <div>
      {!campIsUpdated ? (
        <EditCampaign updateCamp={updateCamp} />
      ) : (
        <Navigate to="/campcrea"/>
      )}
    </div>
  );

}

export default EditCampNavi;