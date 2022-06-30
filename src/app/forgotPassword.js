import React from "react";
import { useState, useEffect } from "react";
//import './SignIn/.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import { useNavigate, Navigate  } from "react-router-dom";
import swal from 'sweetalert';

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });


  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

 // const { handleChange, handleOTP, otp } = useOTP(submitOTP);
 function handlePassword(event){

  event.preventDefault();
  var axios = require('axios');
var data = JSON.stringify({
  email: values.email,
  //email: "socially.team.epic@gmail.com"

});

var config = {
  method: 'post',
  url: 'http://localhost:3000/auth/forgotPasswordEmail',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  swal({
    title: "Done!",
    text: "Email sent succesfully! Please verify your Email",
    icon: "success",
    button: "close",
  });

  console.log(JSON.stringify(response.data));
  console.log("Please check your email");
  setRedirect(true)
})
.catch(function (error) {
  console.log(error);
  swal({
    title: "Error!",
    text: "Sorry! Unable to sent verification Email. Re-Check your Email address",
    icon: "error",
    button: "close",
  });
});
 }

 if (redirect ) {
        
  //navigate("/resetPassword");
  } else{
    
  }

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
                        </div>
                        
                      </form>
                    
            
                     
                      <div className="mt-3">
                      <div class="row">
                          
                          <div class="col-4">
                          <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  id="back" href="/login" >Back</a>
                          </div>
                          
                          <div class="col-8">
                            <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" id="reset" href=""
                              onClick={handlePassword}
                             >Submit</a>
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
    </div>
    )
}
export default ForgotPassword