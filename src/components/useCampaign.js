import { useState, useEffect } from "react";
import campValidation from "./campValidation";
import {Link,useNavigate,useParams} from 'react-router-dom';
import { id } from "date-fns/locale";

const useCampaign = (submitCamp) => {
  const navigate = useNavigate();
  // const {id} = useParams();
  // console.log("props param val = " + id);
    const [values, setValues] = useState({
       
        campaignName: "",
        adCategory: "",
        budget: 0,
       
        // startDate: "",
        // endDate: "",
        //deletedAt: "",
        // adveID: ""
        
    });

    


    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const [campID , setCampID] =useState();
    
    async function handleSave (e) {
        //console.log(values);
        
        e.preventDefault();
        setErrors(campValidation(values));
        setDataIsCorrect(true);


        var axios = require("axios");
        var data = JSON.stringify({
          campaignName: values.campaignName,
          adCategory: values.adCategory,
          budget: values.budget,         
          startDate: values.startDate,
          endDate: values.endDate,
          // "deletedAt": setValues.deletedAt,
          adveID: values.adveID,
        });
      
        var config = {
          method: "post",
          url: "http://localhost:3000/campaign/createCampaign",
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
              "Content-Type": "application/json",
          },
          data: data,
        };
      
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data.campaignId));
            const campID = (JSON.stringify(response.data.campaignId));
            setCampID(campID);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      async function handlNav (e) {
        navigate('/creative/' + campID)
      }
      
      useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitCamp(true);
        }
      }, [errors]);
      
      const handleChange = (event) =>{
        // console.log(event.target.name, event.target.value);
         const val = event.target.value
   
         setValues({
            ...values,
            [event.target.name]: val,
         });
      };

      return {handleChange, handleSave, errors, values,handlNav};
    
    
};

export default useCampaign;

