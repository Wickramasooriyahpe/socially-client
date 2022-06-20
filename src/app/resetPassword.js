import React from "react";
//import './SignIn/.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const ResetPassword = () => {

 // const { handleChange, handleOTP, otp } = useOTP(submitOTP);

    return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div>
              <div className="d-flex align-items-center auth px-2">
                <div className="w-100 text-center mx-auto p-4 mt-2">
                  <div className="col-lg-4 mx-auto">
                  
                    <div className="auth-form-light py-5 px-4 px-sm-5">
                      
                      <h4 className=" text-left  mt-2">Reset Password</h4> <br></br>
                      <form className="pt-3">
                      
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            placeholder="Email"
                            name="email"
                            //value={values.email}
                            //onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                           // value={values.password}
                            //onChange={handleChange}
                          />
                          
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword2"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            //value={values.confirmPassword}
                            //onChange={handleChange}
                          />
                    
                        </div>
                        
                      </form>
                    
                      <div class="row">
                     
                      <div className="mt-3">
                      
                      <a className="btn  btn-primary btn font-weight-medium auth-form-btn" id="reset" 
                             // onClick={e =>
                               // alert("Entered OTP is " + otp.join(""))}
                             //  onClick={}
                             >Reset Passward</a>

                             </div>
                      </div>
                    

                    </div>
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
export default ResetPassword