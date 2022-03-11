import React ,{useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css'


const FileUploadComponent = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [error,setError] = useState(false); 

    const handleImageChange =(e) =>{
        setError(false);
        const selected = e.target.files;
        const ALLOW_TYPES = ["image/png","image/jpeg" ,"image/jpg"];

        if(selected && ALLOW_TYPES.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () =>{
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(selected);
        }
            else{
                setError(true);
                console.log("file not supported");
            }
        };
    
    return (
        //<input type="file" onChange={handleImageChange}/>
        <div className="ImageUpload">
            <div className="image-container ">
            {error && <p className="errorMessage">Not Supported </p>}
                <div className="Image-preview">
                
               
                {!imagePreview && (
                    <>
                    <p>Add an Image</p>
                    <label htmlFor="fileUpload" className="file-upload">Choose File
                    </label>
                    <input type="file" id="fileUpload" onChange = {handleImageChange}/>
                    <span>(jpeg,jpg or png)</span>
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