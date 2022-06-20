import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profileValidation from "./profileValidation";

const useForm = (submitForm) => {

  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() =>{
      getprofiledetails();
  },[])

  const getprofiledetails = async () =>{
    let result = await fetch("http://localhost:3000/advertiser/"+adverId)
    result = await result.json();
    console.log(result);
     setName(result.name);
     setLname(result.lname);
     setEmail(result.email);
     setCompany(result.company);
     setAddress(result.address);
     setPhone(result.phone);
  }



    const [values, setValues] = useState({
        name:"",
        lname:"",
        email:"",
        company:"",
        address:"",
        phone:"",
         });

         //const id = localStorage.getItem(userId);
         const navigate = useNavigate();

         const [id, setid] = useState([]);

          useEffect(() => {
            const id = JSON.parse(localStorage.getItem('id'));
            if (id) {
            setid(id);
            }
          }, []);

         



    const handleChange = (event) =>{
        // console.log(event.target.name, event.target.value);
         setValues({
            ...values,
            [event.target.name]: event.target.value
         })
      }
     
          const [errors, setErrors] = useState({});
          const [dataIsCorrect, setDataIsCorrect] = useState(false);

          const user = JSON.parse(localStorage.getItem('JWT'));
          const adverId = user.userId;
          console.log(adverId);
      
      //     const handleSave = async () =>{
            
      //       let result = await fetch("http://localhost:3000/advertiser" + adverId,{
      //       method: "PATCH",
      //       "body" :JSON.stringify({name,lname,email,company,address,phone}),
      //       headers: {
      //                 Authorization:
      //                   "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
      //                   "Content-Type": "application/json",
      //               }
      //       }
      //   )
      //   result = await result.json();
      // };
    
        const handleSave = (e) => {
         //console.log(values);
         e.preventDefault();
        setErrors(profileValidation(values));
        setDataIsCorrect(true);
       
         var axios = require("axios");
         var data = JSON.stringify({
             name:name,
             lname:lname,
             email:email,
             company:company,
             address:address,
             phone:phone,
         });
       
         var config = {
          
          method: 'patch',
          url: 'http://localhost:3000/advertiser/'+adverId,
          headers: { 
            'Authorization': 
            "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
            'Content-Type': 'application/json'
          },
          data : data
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
       return { handleChange,handleSave, errors, values, name, setName, lname, setLname, email, setEmail, company, setCompany, address, setAddress, phone, setPhone};
}
export default useForm;