import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';
import useForm from '../UserProfile/useChangePWForm';
import profileValidation from '../UserProfile/profileValidation';
import AdminNavi from './AdminNavi';
    const AdminChangePassword = ({submitForm}) => {
        const { handleChange, handleForSubmit, values, errors } = useForm(submitForm);
    return (

        <div class="page-container-bg-solid page-boxed">
         <div class="page-header">
            <div class="page-header-top">
                <div class="container-fluid">
                    <div class="hor-menu">
                        <ul class="nav navbar-nav">
                        <div><AdminNavi/></div><br></br>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
  <div class="page-container">
    <div class="page-content-wrapper">
      <div class="page-head">
        <div class="container-fluid">
          <h2 class="page-head-title" title="Change password">Change password</h2>
                    <div class="page-toolbar"></div>
        </div><br></br>
      </div>
            <div class="page-content"><br></br>
                <div class="container-fluid"><br></br>
                    <div class="row">
                         <div class="col-sm-4">
                            <div class="collection" role="menu">
                            <a class="collection-item " href="/adminprofile" role="menuitem" data-toggle="basic">
                            <span class="collection-item-title">Personal info</span>
                            <p class="collection-item-description">Set Basic and contact information</p>
                            </a>
                            <a class="collection-item active" href="/password" role="menuitem" data-toggle="password">
                            <span class="collection-item-title">adminpassword</span>
                            <p class="collection-item-description">Change your password </p>
                            </a>        
                            </div>
                        </div>
                    <div class="col-sm-8">
                        <form onSubmit={handleForSubmit}>
                            <div class="portlet">
                                <div class="portlet-body">
                                    <div class="row">
                                        <div class="">
                        <div class="form-group">
                            <label class="control-label" for="password">Old Password</label>
                            <input class="form-control show-password" 
                            type="password" 
                            id="password"
                             name="password"
                             value={values.password}
                             onChange={handleChange}
                       
                             />
                             {errors.password && (
                                <p className="error" id="profileError">{errors.password}</p>
                              )}
                         </div>
                         <div class="form-group">
                            <label class="control-label" for="newpassword">New Password</label>
                            <input class="form-control show-password" 
                            type="password" 
                            id="newpassword"
                             name="newpassword" 
                    
                             value={values.newpassword}
                             onChange={handleChange}
                            
                             />
                             {errors.newpassword && (
                                <p className="error" id="profileError">{errors.newpassword}</p>
                              )}
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="password">Confirm New Password</label>
                            <input class="form-control show-password" 
                            type="password" 
                            id="confpassword"
                             name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                           
                              />
                              {errors.confirmPassword && (
                                <p className="error" id="profileError">{errors.confirmPassword}</p>
                              )}
                        </div>
                        <br></br>
                        <div class="text-center"><button disabled={!values.confirmPassword || !values.newpassword || !values.confirmPassword}  class="btn btn-primary" type="submit" onClick={handleForSubmit} for="submitForm">Save</button> </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </form>
                </div>
               </div>
             </div>
           </div>
          </div>
         </div>
       </div>
    )
}
export default AdminChangePassword;