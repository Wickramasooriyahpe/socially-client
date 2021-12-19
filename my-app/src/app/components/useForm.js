import {useState, useEffect} from "react";
import validation from "./validation";

const useForm= (submitForm) => {

const [values, setValues] = useState({
    username: "",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const [errors,setErrors] =useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleForSubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect (() => {
    if(Object.keys(errors).length == 0 && dataIsCorrect){
      submitForm(true);
    }
  }, [errors]);

  const handleChange =(event) => {
    setValues ({
      ...values,
      [event.target.name] : event.target.value,
    });
  };
return {handleChange, handleForSubmit,errors,values};
};
export default useForm;