import { useState, useEffect } from "react";
import validation from "./validation";
import { Navigate } from "react-router-dom";
//import './SignIn.css';
import axios from "axios";

const local_email='email'

const useForm = (submitForm) => {
  const [redirect, setRedirect] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  useEffect( () =>{
    const storeEmail = JSON.parse(localStorage.getItem(local_email))
    if (storeEmail) setValues(storeEmail);
  },[] )

  useEffect(()=>{
    localStorage.setItem(local_email,JSON.stringify(values.email))
  }, [values.email])

  async function handleForSubmit(event) {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);

    var axios = require("axios");
    var data = JSON.stringify({
      email: values.email,
      name: values.name,
      password: values.password,
      phonrNumber: values.phonrNumber,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("succes")
        console.log(JSON.stringify(response.data));        
        alert("Verification otp email sent");
        setRedirect(true)
      })
      .catch(function (response) {
        console.log(response);
        alert("Registration Faild");
      });
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
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
export default useForm;
