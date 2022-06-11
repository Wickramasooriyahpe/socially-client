import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import local_email from "./useForm";

const useOTP = () => {

    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const navigate = useNavigate();

    function handleOTP(event){
       
      event.preventDefault();
      setDataIsCorrect(true);
  
      var axios = require('axios');
        var data = JSON.stringify({
          email: "hasinipunsara00@gmail.com",
          //email: "samathisapumana@gmail.com",
          //email: local_email,
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
          console.log('Successfully Login');
          console.log(JSON.stringify(response.data));
        alert('Successfully Login');
        })
        .catch(function (error) {
          console.log(error);
        });
        navigate('/Dashboard');
    }
    

  
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
  
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
  
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    return { handleChange, handleOTP, otp};
};
  export default useOTP;