import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

//const user = localStorage.getItem("email")
const user = JSON.parse(localStorage.getItem('email'));

const useOTP = () => {

  

    // const [otp, setOtp] = useState(new Array(4).fill(""));
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();


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
        console.log(error);
        console.log(user);
      });
    }
  //   if (redirect) {
  //     return navigate('/login');
  // } else{
  // }
  if (redirect) {
        return navigate('/login');
    } else{
    }
    
  
    // const handleChange = (element, index) => {
    //     if (isNaN(element.value)) return false;
  
    //     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
  
    //     if (element.nextSibling) {
    //         element.nextSibling.focus();
    //     }
    // };




    return {  handleOTP};


    // return { handleChange, handleOTP, otp};
};
  export default useOTP;