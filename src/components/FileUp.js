import React, { useState } from "react";

import { FileUploader } from "react-drag-drop-files";

//const fileTypes = ["JPG", "PNG", "MP4", "GIF"];

function FileUp() {
  const [selectedFile, setSelectedFile] = useState(null);
 // const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setSelectedFile(file);
  };
  return (
    <div className="Ddr"> 
    <FileUploader handleChange={handleChange} 
    name="file" 
    types="file" 
    value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
    />
    </div>
  );
}

export default FileUp;