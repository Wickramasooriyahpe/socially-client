import { useState, useEffect } from "react";
import loginValidation from "./loginValidation";

const useLoginForm = (submitLoginForm) => {
    const [values, setValues] = useState({
       
        email: "",
        password: "",
        
      });

      const [errors, setErrors] = useState({});
      const [dataIsCorrect, setDataIsCorrect] = useState(false);

      async function handleForSubmit(event) {
        event.preventDefault();
        setErrors(loginValidation(values));
        setDataIsCorrect(true);

        var axios = require('axios');
            var data = JSON.stringify({
              "email": values.email,
              "password":values.password,
            });

            var config = {
              method: 'post',
              url: 'http://localhost:3000/auth/login',
              headers: { 
              
                'Content-Type': 'application/json'
              },
              data : data
            };

            axios(config)
            .then(function (response) {
              console.log("succes");
              alert("Successfully Login");
              console.log(JSON.stringify(response.data));
              // saving the acces token in local storage
              localStorage.setItem("JWT",JSON.stringify(response.data));

            })
            .catch(function (error) {
              console.log(error);
              
            }); 
      }
      useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitLoginForm(true);
        }
      }, [errors]);
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
      return { handleChange, handleForSubmit, errors, values };

};
export default useLoginForm;
