import { useState, useEffect } from "react";
import campValidation from "./campValidation";
import {Link, useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import Campaign from "./Campaign";

const useEditCamp = (updateCamp,props) => {

  const {id} = useParams();
   console.log("props param val = " + id);
 const [campaignName,setCampaignName] = useState('');
 const [adCategory,setadCategory] = useState('');
 const [budget,setbudget] = useState('');
 


    useEffect(() =>{
      getcampaigndetails();
    },[])
/***************************** A P I to pre fill form *****************************************/
  const getcampaigndetails = async () =>{
    let result = await fetch("http://localhost:3000/campaign/"+id)
    result = await result.json();
    console.log(result);
     setCampaignName(result.campaignName);
     setadCategory(result.adCategory);
     setbudget(result.budget);
  }
 
    const [values, setValues] = useState({
       
        campaignName:campaignName,
        adCategory: adCategory,
        budget:0,
       
        // startDate: "",
        // endDate: "",
        //deletedAt: "",
        // adveID: ""
        
    });
    console.log("update values",values);
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
const handleUpdate = async () =>{
    
        let result = await fetch("http://localhost:3000/campaign/editcamp/" + id,{
        method: "PUT",
        "body" :JSON.stringify({campaignName,budget,adCategory}),
        headers: {
                  Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
                    "Content-Type": "application/json",
                }
        }
    )
    result = await result.json();
  };  
   
   

        // async function handleUpdate (e) {
    //     //console.log(values);
    //     e.preventDefault();
    //     setErrors(campValidation(values));
    //     setDataIsCorrect(true);


    //     var axios = require("axios");
    //     var data = JSON.stringify({
    //       campaignName: values.campaignName,
    //       adCategory: values.adCategory,
    //       budget: values.budget,         
    //       startDate: values.startDate,
    //       endDate: values.endDate,
    //       // "deletedAt": setValues.deletedAt,
    //       adveID: values.adveID,
    //     });
      
    //     var config = {
    //       method: "put",
    //      // body :JSON.stringify(campaignName,budget,adCategory),
    //       url: "http://localhost:3000/campaign/editcamp/" + id,
    //       headers: {
    //         Authorization:
    //           "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
    //           "Content-Type": "application/json",
    //       },
    //       data: data,
    //     };
      
    //     axios(config)
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
         
    //     }; 
/************   V a l i d a t i o n *************************** */
      useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            updateCamp(true);
        }
      }, [errors]);

      
      const handleChange = (event) =>{
        console.log(event.target.name, event.target.value);
         const val = event.target.value
   
         setValues({
            ...values,
            [event.target.name]: val,
         });
      };

      return {handleChange, handleUpdate, errors, values,setCampaignName,campaignName,
        adCategory,setadCategory,budget,setbudget
      };
    
    
}

export default useEditCamp