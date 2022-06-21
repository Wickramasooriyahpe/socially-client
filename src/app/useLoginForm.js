import { useState, useEffect } from "react";
import loginValidation from "./loginValidation";
import { useNavigate, Navigate } from "react-router-dom";

const useLoginForm = () => {
    const [values, setValues] = useState({
       
        email: "",
        password: "",
        
      });

      const navigate = useNavigate();
      const [redirect, setRedirect] = useState(false);
      const [errors, setErrors] = useState({});
      const [dataIsCorrect, setDataIsCorrect] = useState(false);

      useEffect(()=>{
        localStorage.setItem("email",JSON.stringify(values.email))
      }, [values.email])
    
      useEffect( () =>{
        JSON.parse(localStorage.getItem(values.email))
      },[] )

      async function handleForSubmit(event) {
        event.preventDefault();
        //await submitLoginForm(event.target);
        
        
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
              setRedirect(true);

              // saving the acces token in local storage
              localStorage.setItem("JWT",JSON.stringify(response.data));
              localStorage.setItem("id",JSON.stringify(response.data.id));
            })
            .catch(function (error) {
              console.log(error);
            }); 

      }
     
      const user = JSON.parse(localStorage.getItem('JWT'));
     // const role = user.userRole;
      //console.log(role);

      if (redirect ) {
        
        navigate("/Dashboard");
        // if(role==='Admin'){
        //   navigate("/admindash");
        // }else 
        // if(role==='advertiser'){
        //   navigate("/Dashboard");
        // }else{
        //   navigate("/");
        // }
        } else{
          
        }
   

      // useEffect(() => {
      //   if (Object.keys(errors).length === 0 && dataIsCorrect) {
      //       submitLoginForm(true);
      //   }
      // }, [errors]);
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
      return { handleChange, handleForSubmit, errors, values };

};
export default useLoginForm;
