import { useState, useEffect } from "react";
import profileValidation from "./profileValidation";
import swal from 'sweetalert';

const useForm = (submitForm) => {
 

    const [values, setValues] = useState({
      
      password: "",
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

  const user = JSON.parse(localStorage.getItem('JWT'));
  const adverId = user.userId;
  console.log(adverId);

  async function handleForSubmit(event) {
    event.preventDefault();
    setErrors(profileValidation(values));
    setDataIsCorrect(true);

    var axios = require("axios");
    var data = JSON.stringify({
      password: values.password,
      newpassword:values.newpassword,
      
    });

    var config = {
      method: 'put',
      url: 'http://localhost:3000/advertiser/'+adverId,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then(function (response) {
        swal({
          title: "Success",
          text: "Password is Change successfully",
          icon: "success",
          button: "OK",
        });
        console.log("succes")
        console.log(JSON.stringify(response));
      })
      .catch(function (response) {
        swal({
          title: "Are you sure?",
          text: "Your Old Password is Incorrect",
          icon: "warning",
          button: "OK",
        });
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
