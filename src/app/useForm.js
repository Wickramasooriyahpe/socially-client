import { useState, useEffect } from "react";
import validation from "./validation";
//import './SignIn.css';
import axios from "axios";

const local_email='email'

const useForm = (submitForm) => {
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
    if (storeEmail) setValues(storeEmail)
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

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return { handleChange, handleForSubmit, errors, values };
};
export default useForm;
