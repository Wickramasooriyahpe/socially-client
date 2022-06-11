import { useState, useEffect } from "react";
import profileValidation from "./profileValidation";

const useForm = (submitForm) => {
 

    const [values, setValues] = useState({
      
      oldpassword: "",
      newpassword:"",
      confirmPassword: "",
    });

    const handleChange = (event) => {
     
      
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  async function handleForSubmit(event) {
    event.preventDefault();
    setErrors(profileValidation(values));
    setDataIsCorrect(true);

    var axios = require("axios");
    var data = JSON.stringify({
      oldpassword: values.oldpassword,
      newpassword:values.newpassword,
      confirmPassword: values.confirmPassword,
    });

    var config = {
     //API integration
    };

    axios(config)
      .then(function (response) {
        console.log("succes")
        console.log(JSON.stringify(response));
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);


  return { handleChange, handleForSubmit, errors, values };
};
export default useForm;
