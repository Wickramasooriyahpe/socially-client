import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreativeTable from './CreativeTable';
import Navibar from './Navibar';
import RangePicker from './RangePicker';
//import { DateRange } from 'react-date-range';

const CampaignCreate = () => {
   const [values, setValues] = useState({
       
      campaignName: "",
      budget: 0,
      adCategory: "",
      // startDate: "",
      // endDate: "",
      //deletedAt: "",
      // adveID: ""
      
    });
   const handleChange = (event) =>{
     // console.log(event.target.name, event.target.value);
      const val = event.target.value

      setValues({
         ...values,
         [event.target.name]: val
      })
   }
 

//   const handleSave = (event) =>{
//      console.log(values);
//      event.preventDefault();
//   }
  
//console.log("data");

  const handleSave = (e) => {
  //console.log(values);
 e.preventDefault();
  var axios = require("axios");
  var data = JSON.stringify({
    campaignName: values.campaignName,
    budget: values.budget,
    adCategory: values.adCategory,
    startDate: values.startDate,
    endDate: values.endDate,
    // "deletedAt": setValues.deletedAt,
    adveID: values.adveID,
  });

  var config = {
    method: "post",
    url: "http://localhost:3000/campaign/createCampaign",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
        "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

  
  return (
   <div class="card">
      <div class="card-header">
         <div class="page-header">
            <Navibar/>       
         </div>
         <div class="card-body">
            <div class="container ">
               <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
                  <div class="row ">  
                  <div class=" text-gred">               
                     <form onSubmit={handleSave} >
                        <h4 class="card-title">Create campaign</h4><br></br>
                        <h5 class="card-title">Basic campaign Information</h5><br></br>                    
                        <div class="form-outline mb-4">
                              
                           <input 
                              type="text" 
                              id="form6Example4" 
                              class="form-control" 
                              name="campaignName"
                              placeholder='campaignName'
                              onChange={handleChange}
                              values = {values.campaignName}
                           />
                        </div>

                        <div class="row mb-4">
                           <div class="col">
                              <div class="form-outline">
                           
                                 <input 
                                 type="text" 
                                 id="form6Example5" 
                                 class="form-control" 
                                 name="adCategory"
                                 placeholder='adCategory'
                                 onChange={handleChange}
                                 values = {values.adCategory}
                                 />
                              </div>
                           </div>
                           <div class="col">
                              <div class="form-outline">
                              
                                 <input 
                                 type="currency" 
                                 id="form6Example6" 
                                 class="form-control"
                                 name="budget" 
                                 placeholder='budget'
                                 values = {values.budget}
                                 onChange={handleChange}
                                 />
                              </div>
                           </div>
                           <div className="date">          
                           <RangePicker />
                        </div>

                        </div>

                        
                        <div class="text-right">
                           <Link 
                           to="/creative" 
                           className="btn btn-primary pull-right" 
                           > 
                           Create creative 
                           </Link>  <br></br>       
                        </div>

                        <div className="table-container">
                        <br></br> 
                     <CreativeTable />
                     </div>
                        <Link 
                        to="/campcrea" 
                        role="button" 
                        type="submit" 
                        className="btn btn-primary pull-right" >
                        Save
                        </Link>
                        
                        <div>
                        
                    <br></br>
                        </div>                          
                     </form>
                     </div>
               </div>
            </div>
         </div>
            
         </div>
      </div>     
   </div>
 
    	
  );

}

export default CampaignCreate;

/*<div id="basic" className="portlet collection-tab light active">
         <Navibar /><br></br>
   
      
    <div className="wrapper">
    
        <form onSubmit={handleSave}>
        <h4>Create campaign</h4><br></br>
        <div className="title">
        <h6>Campaign details</h6>
        </div>
        <div className="form">
            
           <div className="col-lg-3">
              
              <input 
              type="text" 
              className="input"
              name="campname"
              onChange={handleChange}
              placeholder="Campaign Name"
              />
              
           </div>  
            <div className="col-lg-6">
              
              <input 
              type="text" 
              className="input"
              name="category"
              onChange={handleChange}
              placeholder="Ads category"
              />
           </div>  
           <div className="col-lg-6">
              
              <input 
              type="currency" 
              className="input"
              name="budget"
              onChange={handleChange}
              placeholder="Budget"
              />
           </div>  
          
           <div className="date">
           <br></br>
              
              <RangePicker />
           </div>
           
           <div>
            <Link to="/creative" class="btn btn-primary">Create creative</Link>            
           </div>
    
            <div className="table-container">
               <CreativeTable />
            </div>
            <div>
            <Link to="/campcrea" role="button" type="submit" class="btn btn-primary" onClick={handleButton}>Save</Link> 
           </div>
           
        
        </div>
        </form>   
    </div>
    </div>
    </div>*/