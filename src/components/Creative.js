import React from 'react';
import FileUp from './FileUp';
import {Link, useLocation, useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navibar from './Navibar';
import data from './data';
import Model from './Model';
import CreativeTable from './CreativeTable';
import axios from 'axios';

const Creative = (props) => {
  
   const {id} = useParams();
   console.log("props param val = " + id);
  
   const [image, setImage] = useState(null);
   const [thumdnailImage, setThumdnailImage] = useState(null);
   const [thumdnailImagePreview, setThumdnailImagePreview] = useState(null);
   const [creativeId, setcreativeId] = useState(null);
   const [creativeData, setCreativeData] = useState(null);
   const navigate = useNavigate();
   const [values, setValues] = useState({ 
      creativeHeading: "",
      destinationURL: "",
      creativeDescription: "",
      costPerSale: 0,
      creativeType: "",
      //deletedAt: null,
      //campID: 7
   
     });
     
   const handleChange = (event) =>{
   console.log(event.target.name, event.target.value);
   setValues({
      ...values,
      [event.target.name]: event.target.value
   })
}

const handleSave = event => {
  // navigate('/campcrea')
   event.preventDefault();
   var axios = require('axios');
   var data = JSON.stringify({
  "creativeHeading": values.creativeHeading,
  "destinationURL":values.destinationURL ,
  "creativeDescription": values.creativeDescription,
  "costPerSale": values.costPerSale,
  "creativeType":values.creativeType ,
  //"deletedAt": null,
 // "campID": 7
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/creative/' + id,
  headers: { 
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('JWT'))['accessToken'] , 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  const creativeId =(JSON.stringify(response.data.creativeId));
  setcreativeId(creativeId);
  setCreativeData(response.data);
  console.log(creativeData);
})
.catch(function (error) {
  console.log(error);
});


  }
/*************************** Handle Image API ****************************/
  const handlecreativeLibrarySubmit = () => {
   const formData = new FormData();
   const config ={ headers: 
       {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]},
       method: 'post',
      
   }//creID ---->id
   const url = ("http://localhost:3000/UploadMedia/multiple/"+creativeId)
   console.log(creativeId);
  // formData.append('creID',id)
   formData.append('files',image)
   formData.append('files',thumdnailImage)
   axios.post(url,formData,config).then((res)=>{
       console.log(res)
   })
}

/**Model data */
const [model, setModel] = useState(false);
  
    const getData = () =>{
    
        return setModel(true);

    }

   const[creativeType, setCreativeType] = useState("")
   const creativeTypeHandle=(e)=>{
      setCreativeType(e.target.value)     
   }

   const handleImageChange =(e) =>{
      // setError(false);
      const selected = e.target.files[0]; 
      const ALLOW_TYPES = "image/png,image/jpeg ,image/jpg";
      setImage(selected);
   
      };

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
  // console.log(creativeType)
  return(
  
   <div class="page-container-bg-solid page-boxed">
       <div><Navibar/></div>

   <div class="page-container">
      <div class="page-content-wrapper">
         <div class="page-head"><br></br>
            <div class="container-fluid"><br></br>
               <h2 class="page-head-title" title="Profile setting">Create creative</h2>                 
            </div>
         </div>

         <div class="page-content">
            <div class="container-fluid">
               <div class="page-content-inner" id="listsCampaign">
                  <div class="portlet light">
                     <div class="portlet-title">
                        <form  onSubmit={handleSave}>
                           <h4>Ad preferences</h4><br></br>
                           <div class="form-outline mb-4">            
                              <input 
                              type="text" 
                              id="form6Example3" 
                              class="form-control" 
                              name="creativeHeading"
                              placeholder='creativeHeading'
                              values = {values.creativeHeading}
                              onChange={handleChange}
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
                                    values = {values.costPerSale}
                                    onChange={handleChange}
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
                                 values = {values.destinationURL}
                                 onChange={handleChange}
                                 />                                 
                                 </div>
                              </div>
                           </div>

                           {/* <label><h6>Creative type</h6></label>              
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="image" onClick={creativeTypeHandle} />
                              <label class="form-check-label" for="flexRadioDefault1">
                                 Single Image
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="video" onChange={creativeTypeHandle} />
                              <label class="form-check-label" for="flexRadioDefault1">
                                 Single Video
                              </label>
                           </div>

                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="I&V" onChange={creativeTypeHandle} />
                              <label class="form-check-label" for="flexRadioDefault2">
                                 Image & Video
                              </label>
                           </div> */}

                           <div class="form-outline mb-4">
                              <br></br>
                              <label class="form-label" for="form6Example7"><h6>Discription</h6></label>
                              <textarea 
                                 name="creativeDescription"
                                 onChange={handleChange}
                                 values = {values.creativeDescription}
                                 placeholder="creativeDescription"
                                 class="form-control" 
                                 id="form6Example7" 
                                 rows="4" 
                              >
                              </textarea>  
                           </div>

                           <div className="submit-button">
                           <button           
                            type="submit" 
                            id='submit-btn'
                            className="btn btn-primary pull-right" >
                            Submit
                            </button>
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

                        <div className='previewbutton'> 
                                          
                           <button href="#" 
                           className="btn btn-primary pull-right" 
                           id='submit-btn' 
                           onClick={()=> getData()}>
                           Preview
                           </button>
                        </div>

                          
                           <br></br><br></br>
                           
                           <CreativeTable/>
                     </div>
                     {
                        model === true ? <Model img={thumdnailImagePreview} heading={creativeData.creativeHeading} desc={creativeData.creativeDescription} hide={() => setModel(false)}/>: ''
                     }
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  );
}

export default Creative;

/*<div className="bg-light">
      <Navibar /><br></br>
      <div class="wrapper">
       
         <form onSubmit={handleSave}>
         <h4>Ad preferences</h4><br></br>
            <div class="form-outline mb-4">
               
               <input 
               type="text" 
               id="form6Example3" 
               class="form-control" 
               name="heading"
               placeholder='Heading'
               onChange={handleChange}
               />
            </div>
 
            <div class="row mb-4">
               <div class="col">
                  <div class="form-outline">
                 
                  <input 
                  type="text" 
                  id="form6Example1" 
                  class="form-control" 
                  name="costpersale"
                  placeholder='Cost Per Sale'
                  onChange={handleChange}
                  />
                  </div>
               </div>
               <div class="col">
                  <div class="form-outline">
                  
                  <input 
                  type="text" 
                  id="form6Example2" 
                  class="form-control"
                  name="destinationurl" 
                  placeholder='Destination URL'
                  onChange={handleChange}
                  />
                  </div>
               </div>
            </div>

            <label><h6>Creative type</h6></label>  
            

            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="image" onClick={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Image
               </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="video" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Video
            </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="I&V" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault2">
                  Image & Video
               </label>
            </div>

            <div class="form-outline mb-4">
               <br></br>
               <label class="form-label" for="form6Example7"><h6>Discription</h6></label>
               <textarea class="form-control" id="form6Example7" rows="4" ></textarea>  
            </div>
 
            <label><h6>Upload Thumbnail media</h6></label>
            <div>
               <FileUp />               
            </div>

            <br></br>     
            <label><h6>Upload media</h6></label>
            <div>
               <FileUp />               
            </div>
                 
            <br></br>
            <div className="inputfield">
              <Link to="/campaign" class="btn btn-primary" id="right-panel-link" role="button" >Submit</Link>           
            </div>
         </form>
      </div>

   </div>*/


