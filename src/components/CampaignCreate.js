import React from 'react';
import {Link} from 'react-router-dom';
import DisplayTable from './DisplayTable';
import DateRange from '../DateRange';
import useCampForm from './useCampForm';

const CampaignCreate = ({submitForm}) => {
   //import React, { Fragment, useState } from "react";
  
   const { handleChange, handleButton, values, errors,handleSave } = useCampForm(submitForm);
    
  return (
     <div>
   <div className="bg-light">
       <h4>Create campaign</h4>
    <div className="wrapper">
        <form onSubmit={handleSave}>
        <div className="title">
          Campaign details
        </div>
        <div className="form">
            
           <div className="col-lg-3">
              <label>Campaign Name</label>
              <input 
              type="text" 
              className="form-control"
              name="campaignName"
              value={values.campaignName}
              onChange={handleChange}
              />
              
           </div>  
            <div className="col-lg-6">
              <label>Ads category</label>
              <input 
              type="text" 
              className="form-control"
              name="adCategory"
              value={values.adCategory}
              onChange={handleChange}
              />
           </div>  
           <div className="col-lg-6">
              <label>Budget</label>
              <input 
              type="currency" 
              className="input"
              name="budget"
              value={values.budget}
              onChange={handleChange}
              />
           </div>  
          
           <div className="date">
              <DateRange />
           </div>
           
           <div class="main2">
              <ul><li><Link to="/creative">Create creative</Link></li></ul>            
           </div>
    
            <div className="table-container">
               <DisplayTable />
            </div>
         //    
         
         <div className="mt-3">
         <a
           className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
           onClick={handleButton}
         >
           Save
         </a>
       </div>
        
        </div>
        </form>   
    </div>
    </div>
    </div>	
  );

}

export default CampaignCreate;
