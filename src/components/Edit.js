import React from 'react';
import FileUp from './FileUp';
import {Link,useParams,useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Edit(props) {
   const {id} = useParams();
   console.log("creative ID = " + id);
   const navigate = useNavigate();
   const [data, setData] = useState([]);
   const [creativeHeading,setcreativeHeading] = useState('');
   const [destinationURL,setdestinationURL] = useState('');
   const [creativeDescription,setcreativeDescription] = useState('');
   const [costPerSale,setcostPerSale] = useState('');
   const [creativeType,setcreativeType] = useState('');
   const [image, setImage] = useState(null);
   const [thumdnailImage, setThumdnailImage] = useState(null);
   const [thumdnailImagePreview, setThumdnailImagePreview] = useState(null);
   useEffect(() =>{
      getcreativedetails();
    },[])

/***************************** A P I to pre fill form *****************************************/
   const getcreativedetails = async () =>{
      let result = await fetch("http://localhost:3000/creative/get-one-creative/"+id)
      result = await result.json();
      console.log("creative data =",result);
       setcreativeHeading(result.creativeHeading);
       setcreativeDescription(result.creativeDescription);
       setcostPerSale(result.costPerSale);
       setdestinationURL(result.destinationURL);
    }
    const handleUpdate = async () =>{
     // navigate('/campcrea');
      let result = await fetch("http://localhost:3000/creative/" + id,{
      method: "PUT",
      "body" :JSON.stringify({creativeHeading,creativeDescription,costPerSale,destinationURL}),
      headers: {
                Authorization:
                  "Bearer " + JSON.parse(localStorage.getItem("JWT"))["accessToken"],
                  "Content-Type": "application/json",
              }
      }
  )
  
  result = await result.json();
  
};  
/************************************************************/
const handlecreativeLibrarySubmit = () => {
   const formData = new FormData();
   const config ={ headers: 
       {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]},
       method: 'post',
      
   }//creID ---->id
   const url = ("http://localhost:3000/UploadMedia/multiple/"+id)
   console.log(id);
  // formData.append('creID',id)
   formData.append('files',image)
   formData.append('files',thumdnailImage)
   axios.post(url,formData,config).then((res)=>{
       console.log(res)
   })
}

const handleThumbnailChange =(e) =>{
   // setError(false);
   const selected = e.target.files[0]; 
   const ALLOW_TYPES = "image/png,image/jpeg ,image/jpg";
   setThumdnailImage(selected);
   if(selected && ALLOW_TYPES.includes(selected.type)){
    console.log("selected");
    let reader = new FileReader();
    reader.onloadend = () =>{
        setThumdnailImagePreview(reader.result);
    };
    reader.readAsDataURL(selected);
}
    else{
      //   setError(true);
        console.log("file not supported");
    }
   };
   const handleImageChange =(e) =>{
      // setError(false);
      const selected = e.target.files[0]; 
      const ALLOW_TYPES = "image/png,image/jpeg ,image/jpg";
      setImage(selected);
   
      };
/************************************************************/
   const handleChange = (event) =>{
      console.log(event.target.name, event.target.value);
      setValues({
         ...values,
         [event.target.name]: event.target.value
      })
   }
   const [values, setValues] = useState({
       
      creativeHeading: "",
      destinationURL: "",
      creativeDescription: "",
      costPerSale: "",
      creativeType: "",
      //deletedAt: null,
      //campID: ""
      
    });



return(
   <div className="bg-light">
      <h4>Ad preferences</h4>
      <div class="wrapper">
       
      <form onSubmit={handleUpdate}>
      <h4>Ad preferences</h4><br></br>
         <div class="form-outline mb-4">
         
             <input 
            type="text" 
            id="form6Example3" 
            class="form-control" 
            name="creativeHeading"
            placeholder='creativeHeading'
            value = {creativeHeading}
            onChange={(e) =>{setcreativeHeading(e.target.value)}}
            />
        
         </div>

         <div class="row mb-4">
            <div class="col">
               <div class="form-outline">
               
               <input 
               type="text" 
               id="form6Example1" 
               class="form-control" 
               name="costPerSale"
               placeholder='costPerSale'
               value = {costPerSale}
               onChange={(e) =>{setcostPerSale(e.target.value)}}
               />
               
               </div>
            </div>
            <div class="col">
               <div class="form-outline">
               
               <input 
               type="text" 
               id="form6Example2" 
               class="form-control"
               name="destinationURL" 
               placeholder='destinationURL'
               value = {destinationURL}
               onChange={(e) =>{setdestinationURL(e.target.value)}}
               />
                
               </div>
            </div>
         </div>

         <label><h6>Creative type</h6></label>  
         

         <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="image" onClick={(e) =>{setcreativeType(e.target.value)}} />
            <label class="form-check-label" for="flexRadioDefault1">
               Single Image
            </label>
         </div>
         <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="video" onChange={(e) =>{setcreativeType(e.target.value)}} />
            <label class="form-check-label" for="flexRadioDefault1">
               Single Video
         </label>
         </div>
         <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="I&V" onChange={(e) =>{setcreativeType(e.target.value)}} />
            <label class="form-check-label" for="flexRadioDefault2">
               Image & Video
            </label>
         </div>

         <div class="form-outline mb-4">
            <br></br>
            <label class="form-label" for="form6Example7"><h6>Discription</h6></label>
            <textarea 
             name="creativeDescription"
             onChange={(e) =>{setcreativeDescription(e.target.value)}}
             value = {creativeDescription}
             placeholder="creativeDescription"
            class="form-control" 
            id="form6Example7" 
            rows="4" 
            >
            </textarea>  
         </div>

         <div>
         <button 
         onClick={handleUpdate}
         role="button"                
         type="submit" 
         className="btn btn-primary pull-right" >
         Update
         </button><br></br>
      </div>  
      </form>
      <form >
            <label><h6>Upload Thumbnail media</h6></label>
            <div>
            <input type="file" onChange = {handleThumbnailChange} ></input>               
            </div>

            <br></br>     
            <label><h6>Upload media</h6></label>
            <div >
               <input type="file" onChange = {handleImageChange} ></input>          
            </div>
            <div className="submit-button">
            <button  
            onClick={handlecreativeLibrarySubmit}         
            type="submit" 
            id='submit-btn'
            className="btn btn-primary pull-right" >
            Submit Media
            </button>
         </div>
    </form>
      </div>

   </div>
  );
  
}

export default Edit;


