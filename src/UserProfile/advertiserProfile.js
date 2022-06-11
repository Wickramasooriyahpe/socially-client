import React from 'react';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import FileUploadComponent from '../fileUploads/profileImage';
import profileValidation from './profileValidation';
import useForm from './useProfileForm';

    const AdvertiserProfile = ({submitForm}) => {
        const { handleChange,handleSave, values, errors } = useForm(submitForm);
        

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
            </div>

          <div class="page-container">
            <div class="page-content-wrapper">
              <div class="page-head"><br></br>
                <div class="container-fluid"><br></br>
                    <h2 class="page-head-title" title="Profile setting">Profile setting</h2>
                        <div class="page-toolbar"><button class="btn btn-primary" type="submit" onClick={handleSave} for="submitForm">Save</button></div>
                </div>
              </div>
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-3">
                        <FileUploadComponent/>
                            <div class="collection" role="menu">
                                <a class="collection-item active" href="/profile" role="menuitem" data-toggle="basic">
                                    <span class="collection-item-title">Personal info</span>
                                        <p class="collection-item-description">Set Basic and contact information</p>
                                </a>
                                 <a class="collection-item " href="/password" role="menuitem" data-toggle="password">
                                     <span class="collection-item-title">Password</span>
                                        <p class="collection-item-description">Change your password </p>
                                </a>
                   
                      
                            </div>
                        </div>
            <div class="col-sm-9">
                <div class="page-inner-content">
                    <form onClick={handleSave}>
                        <div class="portlet">
                            <div class="portlet-title"><h4 class="uppercase text-primary title">Basic Personal Info</h4></div>
                                <div class="portlet-body">
                                    <div class="form-horizontal">
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label" for="firstName">First Name</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control"
                                                     type="text"
                                                      id="firstName"
                                                       name="firstName"
                                                        required="required" 
                                                        minlength="2" 
                                                        maxlength="255"
                                                         value={values.firstName}
                                                         onChange={handleChange}/>
                                                         {errors.firstName && (
                                                            <p className="error" id="profileError">{errors.firstName}</p>
                                                          )}
                                                </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label" for="firstName">Last Name</label>
                                                 <div class="col-sm-9">
                                                    <input class="form-control" 
                                                    type="text" 
                                                    id="lastName"
                                                     name="lastName" 
                                                     required="required" 
                                                     minlength="2" 
                                                     maxlength="255" 
                                                     value={values.lastName} 
                                                     onChange={handleChange}/>
                                                 </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label" for="email">Email</label>
                                                <div class="col-sm-9">
                                                     <input class="form-control"
                                                      type="text"
                                                       id="email"
                                                        name="email"
                                                         required="required"
                                                          minlength="2" 
                                                          value={values.email} 
                                                           onChange={handleChange}/>

                                                           {errors.email && (
                                                            <p className="error" id="profileError">{errors.email}</p>
                                                          )}
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="portlet-title"><h4 class="uppercase text-primary title">Contact Infomation</h4></div>
                                <div class="portlet-body form-horizontal">
                                         <div class="form-group">
                                             <label class="col-sm-3 control-label">Company</label>
                                                 <div class="col-sm-9">
                                                    <input type="text"
                                                     required="required"
                                                      minlength="2" 
                                                      class="form-control"
                                                       name="company"
                                                        value={values.company}
                                                         onChange={handleChange}/>
                                                 </div>
                                         </div>
                  
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Address</label>
                                                <div class="col-sm-9">
                                                    <input type="text" 
                                                    class="form-control"
                                                     name="address" 
                                                     value={values.address}  
                                                     onChange={handleChange}/>
                                                </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Phone</label>
                                                <div class="col-sm-9">
                                                    <input type="text" 
                                                    class="form-control"
                                                     name="phone"
                                                     maxLength={10}
                                                      value={values.phone}  
                                                      onChange={handleChange}/>
                                                      {errors.phone && (
                                                        <p className="error" id="profileError">{errors.phone}</p>
                                                      )}
                                                </div>
                                        </div>
                  
                
                                </div>
                        </div>
                        <input type="submit" id="submitForm" class="hide"/>
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

export default AdvertiserProfile;