import { useState, useEffect } from "react";
import loginValidation from "./loginValidation";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const useLoginForm = () => {
    const [values, setValues] = useState({
       
        email: "",
        password: "",
        
      });
      const [balance, setbalance] = useState([]);
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
      
      // const id = JSON.parse(localStorage.getItem('id'));
      // useEffect(() => {
      //   const getbalance = async () => {
      //     const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
      //      const res = await fetch("http://localhost:3000/advertiser-transaction/balance"+ id,config);
      //      const getdata = await res.json();
      //      setbalance(getdata);
      //      localStorage.setItem("balance",JSON.stringify(getdata))
      //       console.log(getdata);
      //    };
     
      //    getbalance();
   
      //  },[]);
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
              
              console.log(JSON.stringify(response.data));
              setRedirect(true);

              // saving the acces token in local storage
              localStorage.setItem("JWT",JSON.stringify(response.data));
              localStorage.setItem("id",JSON.stringify(response.data.userId));
              localStorage.setItem("balance",JSON.stringify(response.data.balance));
              //localStorage.setItem("balance",JSON.stringify(response.data.balance));
            // localStorage.setItem("userName",JSON.stringify(response.data.userName));
            })
            .catch(function (error) {
              swal({
                title: "Error!",
                text: "Sorry! Login Failed. Re-Check your credentials",
                icon: "error",
                button: "close",
              });
              console.log(error);
            }); 

            
            //get balance
           event.preventDefault();
         
    var axios = require('axios');
    var data = JSON.stringify({
      advertiserID: JSON.parse(localStorage.getItem('id')),
   });

      // var config = {
      //   method: 'get',
      //   url: 'http://localhost:3000/advertiser-transaction/balance',
      //   headers: { 
      //     Authorization: 
      //     "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
      //     "Content-Type": "application/json",
      //   },
      //   data : data
      // };

      // axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      //   console.log("balance");
      //   localStorage.setItem("balance",JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      //   console.log("error");
      // });

      }
     
      const user = JSON.parse(localStorage.getItem('JWT'));
  
      

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
   

    
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };

      

      
      
      return { handleChange, handleForSubmit, errors, values };

      

};
export default useLoginForm;
