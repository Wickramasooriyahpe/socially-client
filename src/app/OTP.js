import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useNavigate, Navigate  } from "react-router-dom";
import swal from 'sweetalert';

import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem('email'));

const OTP = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
        element.nextSibling.focus();
    }
};

function handleOTP(event){
      
  
  event.preventDefault();
  setDataIsCorrect(true);

  var axios = require('axios');
  var data = JSON.stringify({
    email: JSON.parse(localStorage.getItem('email')),
    enteredOTP: otp.join(""),
  });

  var config = {
    method: 'post',
    url: 'http://localhost:3000/auth/verify',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    setRedirect(true)
    console.log('Successfully Login');
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    swal({
      title: "Error",
      text: "You have entered wrong OTP! Click Re-send OTP to get the OTP again.",
      icon: "error",
      button: "close",
    });

    console.log(error);
    console.log(user);
  });

  
}
function handleresendOTP(event){
  event.preventDefault();
  var axios = require('axios');
  var data = JSON.stringify({
    email: JSON.parse(localStorage.getItem('email')),
  });

  var config = {
    method: 'post',
    url: 'http://localhost:3000/auth/reSendOTP',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal({
      title: "Done!",
      text: "OTP re-sent succesfully! Please check your Email",
      icon: "success",
      button: "close",
    });


  })
  .catch(function (error) {
    console.log(error);
  });

}


if (redirect ) {
        
  navigate("/login");
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
                      <h4 className=" text-center  mt-2">One Time Passward has been sent to your email</h4>
                      <div className="otp-box ">
                      {otp.map((data, index) => {
                        return (
                          
                            <input
                                className="otp-field "
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index} 
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                         
                        );
                    })}
                   
                      <h6 className=" text-center mt-3">Enter OTP</h6>

                      </div>
                      <div className="mt-3">
                      <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" 
                               onClick={handleOTP}
                             >Submit</a>
                      </div>
<br></br>
                      <a className="text-primary" href=""
                               onClick={handleresendOTP}
                             >Re-sent OTP</a>

                      {/* <div className="text-center mt-4 font-weight-light">
                         <a className="text-primary" 
                      onClick={handleresendOTP}
                      >Re-sent OTP</a>
                    
                      </div> */}

                    </div>
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
export default OTP