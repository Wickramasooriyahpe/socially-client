import axios from 'axios';
import React ,{useState, useEffect} from 'react';

const FileUploadComponent = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
    const [error,setError] = useState(false); 
    const [avatarid ,setavatarid] =useState([]);
    
    const user = JSON.parse(localStorage.getItem('JWT'));
    console.log(user);
    const adverId = user.id;
   
    useEffect(() => {
       getImage();
    }, []);

    const getImage = () => {
        const config ={ headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}}
        axios.get("http://localhost:3000/profileuploads/"+ adverId,config).then((res) =>{
        console.log("avararID",res.data.data.avatarid);
        const avatarid =res.data.data.avatarid;
        setavatarid(avatarid);
        console.log("filename",res.data.data.filename)
        setImage("http://localhost:3000/"+res.data.data.filename)
        });
        
    }

    const handleImageChange =(e) =>{
        setError(false);
        const selected = e.target.files[0]; 
        const ALLOW_TYPES = "image/png,image/jpeg ,image/jpg";
        setImage(selected);
        if(selected && ALLOW_TYPES.includes(selected.type)){
            console.log("selected");
            let reader = new FileReader();
            reader.onloadend = () =>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selected);
        }
            else{
                setError(true);
                console.log("file not supported");
            }
        };
       
     const handleAPI = () => {
        const formData = new FormData();
        const config ={ headers: 
            {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]},
            method: 'post', 
        }
        const url = ("http://localhost:3000/profileuploads/avatar") 
        formData.append('file',image)
        axios.post(url,formData,config).then((res)=>{
            console.log(res)
        })
     }
     async function deleteImageOperation (avatarid){
        let result = await fetch('http://localhost:3000/profileuploads/' + avatarid,{
          method: 'DELETE',
          headers: {"Authorization" : `Bearer `+JSON.parse(localStorage.getItem("JWT"))["accessToken"]}
        });
        result = await result.json();
        console.log(result);
        
      }
        return (
        <div className="ImageUpload">
            <div className="image-container ">
          
            {error && <p className="errorMessage">Not Supported </p>}
                <div >
                {(!imagePreview ) && (
                    <>
                   {!image && <p>Add an Image</p> }

                   {image &&  <img
                    src={image}
                   
                    className="Image-preview"
                    alt="profile"
                  />}
                   {!image && <label htmlFor="fileUpload" className="file-upload">Choose File
                    </label>
                }
                  {!image &&  <input type="file" id="fileUpload" onChange = {handleImageChange}
                    accept="image/*" 
                    />}
                   {!image && <span>(jpeg,jpg or png)</span> }

                   {image &&  <button onClick={()=> deleteImageOperation(avatarid)}>Remove Image</button>}
                     
                    </>
             )}
             
    
                </div>
                {(imagePreview )  && (
                    <>
                    
                    <img
                    src={imagePreview}
                   
                    className="Image-preview"
                    alt="profile"
                  />
                  <button onClick={() => setImagePreview(null)}>Remove Image</button>
                  <button onClick={handleAPI}>Submit</button>

                    </>
                )}
                </div>
               

                
                
             </div>
       
    
    );
};
export default FileUploadComponent;