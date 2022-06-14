import React from 'react'
import {Link} from 'react-router-dom';
import CreativeTable from './CreativeTable';
import Navibar from './Navibar';
import RangePicker from './RangePicker';
import useEditCamp from './useEditCamp';

const EditCampaign = (updateCamp) => {
    const { handleChange, handleUpdate, values, errors ,campaignName,setCampaignName,
      adCategory,setadCategory,budget,setbudget,
   } = useEditCamp(updateCamp);

  return (
    <div class="page-container-bg-solid page-boxed">
      <div class="page-header">
            <div class="page-header-top">
               <div class="container-fluid">         
                  <div class="top-menu" >
                        <ul class="nav navbar-nav pull-right">
                           <div><Navibar/></div><br></br>
                        </ul>             
                  </div>
               </div>
            </div>
      
            <div class="page-header-menu">
               <div class="container-fluid">
               </div>
            </div>
      </div>

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
                              <form onSubmit={handleUpdate}>
                                 <h5 class="card-title">Basic campaign Information</h5><br></br>  

                                 <div class="form-outline mb-4">                                    
                                    <input 
                                       type="text" 
                                       id="form6Example4" 
                                       class="form-control" 
                                       name="campaignName"
                                       placeholder='campaignName'
                                       onChange={(e) =>{setCampaignName(e.target.value)}}
                                       value = {campaignName}
                                    />
                                    {errors.campaignName && <p>{errors.campaignName}</p>}
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
                                          onChange={(e) =>{setadCategory(e.target.value)}}
                                          value = {adCategory}
                                          />
                                       {errors.adCategory && <p>{errors.adCategory}</p>}
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
                                          onChange={(e) =>{setbudget(e.target.value)}}
                                          value = {budget}
                                          />
                                         {errors.budget && <p>{errors.budget}</p>}<br></br>
                                       </div>
                                    </div>
                                 </div>

                                 { <div className="date" name="date">          
                                    <RangePicker />
                                 </div> }

                                 <div className="table-container">
                                    <br></br> 
                                  
                                 </div>
                                 

                                 <div>
                                  <button
                                    
                                    className="btn btn-primary pull-right"
                                    type='submit'
                                    onClick={handleUpdate}
                                 >
                                    Update
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
 
  )
}

export default EditCampaign;