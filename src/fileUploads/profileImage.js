import axios from 'axios';
import React ,{useState} from 'react';
//import 'react-dropzone-uploader/dist/styles.css'


const FileUploadComponent = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [error,setError] = useState(false); 

    const handleImageChange =(e) =>{
        setError(false);
        const selected = e.target.files[0]; //array --> [0]
        const ALLOW_TYPES = "image/png,image/jpeg ,image/jpg";

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
     const handleAPI =()=>{
        const url = ("http://localhost:3000/UploadMedia")
        const FormData = new FormData();
        FormData.append('imagePreview',imagePreview)
        axios.post(url,FormData).then((res)=>{
            console.log(res)
        })
     }
    
        return (
        //<input type="file" onChange={handleImageChange}/>
        <div className="ImageUpload">
            <div className="image-container ">
            {error && <p className="errorMessage">Not Supported </p>}
                <div className="Image-preview" >
                {!imagePreview && (
                    <>
                    <p>Add an Image</p>
                    <label htmlFor="fileUpload" className="file-upload">Choose File
                    </label>
                    <input type="file" id="fileUpload" onChange = {handleImageChange}
                    accept="image/*"
                    />
                    <span>(jpeg,jpg or png)</span>
                   // <button type='submit' onClick={handleAPI}>Submit</button>
                    </>
             )}
                </div>
                {imagePreview && (
                    <button onClick={() => setImagePreview(null)}>Remove Image</button>
                )}
             </div>
        </div>
    );
};
export default FileUploadComponent;