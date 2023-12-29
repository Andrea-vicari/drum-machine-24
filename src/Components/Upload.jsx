import React from "react";
import { useState } from "react";
//import axios from "axios";



function Upload (){
  const [file, SetFile] = useState();

  const formData = new FormData()
  formData.append('file',file)


  const upload = () =>{
    axios.post("http://localhost:8081/public/images",formData)
    .then(res=>{})
    .catch(err=>console.log(err))
  }

    return(
      <div>
          <input type="file" onChange={(e)=>SetFile(e.target.files[0])} encType="multipart/form-data"/>
          <button type="button" onClick={upload}>Upload</button>
      </div>
    )
}

export default Upload