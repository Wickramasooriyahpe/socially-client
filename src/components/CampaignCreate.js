import React, {useState, useEffect} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import validation from './campValidation';
import CreativeTable from './CreativeTable';
import Navibar from './Navibar';
import RangePicker from './RangePicker';
import FormErrorMessage from 'rsuite/esm/FormErrorMessage';
import useCampaign from './useCampaign';
import { id } from 'date-fns/locale';

const CampaignCreate = ({submitCamp}) => {
   const { handleChange, handleSave, values, errors,handlNav } = useCampaign(submitCamp);
  
  
  return (
   <div class="page-container-bg-solid page-boxed">
      <div class="page-header">
            <div class="page-header-top">
               <div class="container-fluid">         
                  <div class="top-menu" >
                        <ul class="nav navbar-nav ">
                           <div><Navibar/></div><br></br>
                          
                        </ul>             
                  </div><br></br>
               </div>
            </div>
      
            <div class="page-header-menu">
               <div class="container-fluid">
               </div>
            </div>
      </div>

      <div class="page-container">
         <div class="page-content-wrapper">
            <div class="page-head">
               <div class="container-fluid">
                  <h2 class="page-head-title" title="Profile setting">Create campaign</h2>
               </div><br></br>
            </div>

            <div class="page-content">
               <div class="container-fluid">
                     <div class="page-content-inner" id="listsCampaign">
                        <div class="portlet light">
                           <div class="portlet-title" >
                              <form onSubmit={handleSave}>
                                 <h5 class="card-title">Basic campaign Information</h5><br></br>  

                                 <div class="form-outline mb-4"> 
                                 <label class="col-sm-3 control-label">campaign Name</label>                                   
                                    <input 
                                       type="text" 
                                       id="form6Example4" 
                                       class="form-control" 
                                       name="campaignName"
                                       placeholder='campaignName'
                                       onChange={handleChange}
                                       values = {values.campaignName}
                                    />
                                    {errors.campaignName && <p id='validationErrors'>{errors.campaignName}</p>}
                                 </div>

                                 <div class="row mb-4">
                                    <div class="col">
                                       <div class="form-outline">
                                       <label class="col-sm-3 control-label">ad Category</label>
                                          <input 
                                          type="text" 
                                          id="form6Example5" 
                                          class="form-control" 
                                          name="adCategory"
                                          placeholder='adCategory'
                                          onChange={handleChange}
                                          values = {values.adCategory}
                                          />
                                       {errors.adCategory && <p id='validationErrors'>{errors.adCategory}</p>}
                                       </div>
                                    </div>
                                    
                                    <div class="col">
                                       <div class="form-outline">
                                       <label class="col-sm-3 control-label">budget</label>
                                          <input 
                                          type="currency" 
                                          id="form6Example6" 
                                          class="form-control"
                                          name="budget" 
                                          placeholder='budget'
                                          values = {values.budget}
                                          onChange={handleChange}
                                          />
                                         {errors.budget && <p id='validationErrors'>{errors.budget}</p>}<br></br>
                                       </div>
                                    </div>
                                 </div>

                                 { <div className="date" name="date">          
                                    {/* <RangePicker /> */}
                                 </div> }

                               

                                
                                 

                                 <div>
                                  <button
                                    
                                    className="btn btn-primary pull-right"
                                    id='save-btn'
                                    type='submit'
                                   >
                                    Save
                                 </button> 
                                 <button className="btn btn-primary pull-right" id='create-btn' onClick={handlNav}>
                                 Create Creative
                                 </button>
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
   </div>
 
    	
  );

};

export default CampaignCreate;



/*const CampaignCreate = () => {
   const [values, setValues] = useState({
       
      campaignName: "",
      budget: 0,
      adCategory: "",
      startDate: "",
      endDate: "",
    
      //deletedAt: "",
      // adveID: ""
      
    });
   const handleChange = (event) =>{
     console.log(event.target.name, event.target.value);
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
   <div class="page-container-bg-solid page-boxed">
    <div><Navibar/></div>

      <div class="page-container">
         <div class="page-content-wrapper">
            <div class="page-head"><br></br>
               <div class="container-fluid"><br></br>
                  <h2 class="page-head-title" title="Profile setting">Create campaign</h2>
               </div>
            </div>

            <div class="page-content">
               <div class="container-fluid">
                     <div class="page-content-inner" id="listsCampaign">
                        <div class="portlet light">
                           <div class="portlet-title" >
                              <form onSubmit={handleSave}>
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

                                 <div >
                                    <button className="btn btn-primary pull-right" id="camp-page-button"  type='submit'>Save </button>
                                    <button className="btn btn-primary pull-right" id="camp-page-button" onClick={navigateToCampaignTable}>view Campaigns</button>
                                    <br></br><br></br>
                                    </div>
                              </form>  
                           </div>
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


//previous
{ <button className="btn btn-primary pull-right"  type='submit' >Save</button>
                                 
                                    <Link 
                                       to="/campcrea" 
                                       role="button" 
                                       type="submit" 
                                       className="btn btn-primary pull-right" >
                                       view campaign
                                    </Link><br></br><br></br> }*/

/*{ <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={e =>
         alert("Hello Sir/Madam")
      } >Submit
</button> }*/

// {errors.campaignName && <p>{errors.campaignName}</p>}
// {errors.adCategory && <p>{errors.adCategory}</p>}
// {errors.budget && <p>{errors.budget}</p>}

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