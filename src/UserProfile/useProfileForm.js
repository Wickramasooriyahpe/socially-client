import { useState, useEffect } from "react";
import profileValidation from "./profileValidation";

const useForm = (submitForm) => {

    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        company:"",
        address:"",
        phone:"",
         });
    const handleChange = (event) =>{
        // console.log(event.target.name, event.target.value);
         setValues({
            ...values,
            [event.target.name]: event.target.value
         })
      }
     
          const [errors, setErrors] = useState({});
          const [dataIsCorrect, setDataIsCorrect] = useState(false);
      
        const handleSave = (e) => {
         //console.log(values);
         e.preventDefault();
        setErrors(profileValidation(values));
        setDataIsCorrect(true);
       
         var axios = require("axios");
         var data = JSON.stringify({
             firstName:values.firstName,
             lastName:values.lastName,
             email:values.email,
             company:values.company,
             address:values.address,
             phone:values.phone,
         });
       
         var config = {
          //Get request
         };
       
         axios(config)
           .then(function (response) {
             console.log(JSON.stringify(response.data));
           })
           .catch(function (error) {
             console.log(error);
           });
       };
       useEffect(() => {
         if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
         }
       }, [errors]);
       return { handleChange,handleSave, errors, values };
}
export default useForm;