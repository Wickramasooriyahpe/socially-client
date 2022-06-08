import { useState, useEffect } from "react";



const useLoginForm = (submitLoginForm) => {
 
    const [values, setValues] = useState({
       
        email: "",
        password: "",
        
      });

      const [errors] = useState({});
      const [dataIsCorrect, setDataIsCorrect] = useState(false);

      async function handleForSubmit(event) {
        event.preventDefault();
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
  console.log(JSON.stringify(response.data));
  // saving the acces token in local storage
  localStorage.setItem("JWT",JSON.stringify(response.data));
  //signedJwtAccessToken =  localStorage.setItem("JWT",JSON.stringify(response.data));
  // const jwt = require("accessToken");
  // const token = localStorage.getItem("JWT",JSON.stringify(response.data));
  // const decode = jwt.decode(token);
  // console.log(decode);
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
