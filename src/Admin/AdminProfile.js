import React from 'react';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import FileUploadComponent from '../fileUploads/profileImage';
import profileValidation from '../UserProfile/profileValidation';
import useForm from '../UserProfile/useProfileForm';
import AdminNavi from './AdminNavi';

    const AdminProfile = ({submitForm}) => {
        const { handleChange,handleSave, values, errors, name, setName, lname, setLname, email, setEmail, company, setCompany, address, setAddress, phone, setPhone} = useForm(submitForm);
        

    return (
        <div class="page-container-bg-solid page-boxed">
             <div><AdminNavi/></div>

          <div class="page-container">
            <div class="page-content-wrapper">
              <div class="page-head"><br></br>
                <div class="container-fluid">
                    <h2 class="page-head-title" title="Profile setting">Profile setting</h2>
                        <div class="page-toolbar"></div>
                </div><br></br>
              </div>
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-3">
                        <FileUploadComponent/>
                            <div class="collection" role="menu">
                                <a class="collection-item active" href="/adminprofile" role="menuitem" data-toggle="basic">
                                    <span class="collection-item-title">Personal info</span>
                                        <p class="collection-item-description">Set Basic and contact information</p>
                                </a>
                                 <a class="collection-item " href="/adminpassword" role="menuitem" data-toggle="password">
                                     <span class="collection-item-title">Password</span>
                                        <p class="collection-item-description">Change your password </p>
                                </a>
                   
                      
                            </div>
                        </div>
            <div class="col-sm-9">
                <div class="page-inner-content">
                    <form onSubmit={handleSave}>
                        <div class="portlet">
                            <div class="portlet-title"><h4 class="uppercase text-primary title">Basic Personal Info</h4></div>
                                <div class="portlet-body">
                                    <div class="form-horizontal">
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label" for="firstName">First Name</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control"
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required="required" 
                                                        minlength="2" 
                                                        maxlength="255"
                                                        value={name}
                                                        onChange={(e) =>{setName(e.target.value)}}
                                                        />
                                                        {errors.firstName && (
                                                        <p className="error" id="profileError">{errors.name}</p>
                                                        )}
                                                </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label" for="firstName">Last Name</label>
                                                 <div class="col-sm-9">
                                                    <input class="form-control" 
                                                        type="text" 
                                                        id="lname"
                                                        name="lname" 
                                                        required="required" 
                                                        minlength="2" 
                                                        maxlength="255" 
                                                        value={lname} 
                                                        onChange={(e) =>{setLname(e.target.value)}}
                                                        />
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
                                                        value={email} 
                                                        onChange={(e) =>{setEmail(e.target.value)}}
                                                        />

                                                        {/* {errors.email && (
                                                        <p className="error" id="profileError">{errors.email}</p>
                                                        )} */}
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
                                                        value={company}
                                                         onChange={(e) =>{setCompany(e.target.value)}}
                                                         />
                                                 </div>
                                         </div>
                  
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Address</label>
                                                <div class="col-sm-9">
                                                    <input type="text" 
                                                    class="form-control"
                                                     name="address" 
                                                     value={address}  
                                                     onChange={(e) =>{setAddress(e.target.value)}}
                                                     />
                                                </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Phone</label>
                                                <div class="col-sm-9">
                                                    <input type="text" 
                                                    class="form-control"
                                                     name="phone"
                                                     maxLength={10}
                                                      value={phone}  
                                                      onChange={(e) =>{setPhone(e.target.value)}}
                                                      />
                                                      {/* {errors.phone && (
                                                        <p className="error" id="profileError">{errors.phone}</p>
                                                      )} */}
                                                </div>
                                        </div>
                  
                
                                </div>
                                <button class="btn btn-primary" type="submit" >Save</button>
                        </div><br></br><br></br>
                        
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

export default AdminProfile;