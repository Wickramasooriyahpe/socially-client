import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from '../components/Navibar';

    const ChangePassword = () => {
    return (

        <div class="page-container-bg-solid page-boxed">
         <div class="page-header">
            <div class="page-header-menu">
                <div class="container-fluid">
                    <div class="hor-menu">
                        <ul class="nav navbar-nav">
                        <div><Navibar/></div><br></br>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
  <div class="page-container">
    <div class="page-content-wrapper">
      <div class="page-head">
        <div class="container-fluid"><br></br>
          <h2 class="page-head-title" title="Change password">Change password</h2>
                    <div class="page-toolbar"></div>
        </div>
      </div>
            <div class="page-content"><br></br>
                <div class="container-fluid"><br></br>
                    <div class="row">
                         <div class="col-sm-4">
                            <div class="collection" role="menu">
                            <a class="collection-item " href="/profile" role="menuitem" data-toggle="basic">
                            <span class="collection-item-title">Personal info</span>
                            <p class="collection-item-description">Set Basic and contact information</p>
                            </a>
                            <a class="collection-item active" href="/password" role="menuitem" data-toggle="password">
                            <span class="collection-item-title">Password</span>
                            <p class="collection-item-description">Change your password </p>
                            </a>        
                            </div>
                        </div>
                    <div class="col-sm-8">
                        <form method="post" class="default-form" data-allow-redirect="true">
                            <div class="portlet">
                                <div class="portlet-body">
                                    <div class="row">
                                        <div class="">
                        <div class="form-group">
                            <label class="control-label" for="old_password">Old Password</label>
                            <input class="form-control show-password" type="password" id="old_password" name="old_password"/>
                           
                         </div>
                         <div class="form-group">
                            <label class="control-label" for="password">New Password</label>
                            <input class="form-control show-password" type="password" id="password" name="password" autocomplete="new-password"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="password">Confirm New Password</label>
                            <input class="form-control show-password" type="password" id="password" name="confirm-password" autocomplete="new-password"/>
                        </div>
                        <br></br>
                        <div class="text-center"><input type="submit" id="submitForm"  value="Change password" class="btn btn-primary"/> </div>
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
export default ChangePassword;