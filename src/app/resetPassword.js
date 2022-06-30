import React from "react";
//import './SignIn/.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useNavigate, Navigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import resetPasswordValidation from "./resetPasswordValidation";
const ResetPassword = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  async function handleRestPW(event) {
    event.preventDefault();
    setErrors(resetPasswordValidation(values));
    var axios = require('axios');
    var data = JSON.stringify({
      "email": values.email,
      "password":values.password,
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:3000/auth/passwordReset',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setRedirect(true)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  if (redirect ) {
        
    navigate("/login");
    } else{
      
    }

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
                            value={values.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                           value={values.password}
                            onChange={handleChange}
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword2"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                          />
                     {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                          )}
                        </div>
                        
                      </form>
                    
                      <div class="row">
                     
                      <div className="mt-3">
                      
                      <a className="btn  btn-primary btn font-weight-medium auth-form-btn" id="reset" 
                             href=""
                             onClick={handleRestPW}
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