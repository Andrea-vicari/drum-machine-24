import React from "react";
// import AddUser from "./AddUser";
//import Upload from "./Upload";
import UploadAndDisplayImage from "./UploadDisplay";

function DashBoard (){

    return(
      <div className="container mx-auto px-2 py-3 bg-black d-flex justify-content-start flex-wrap">
          <h1 className="text-secondary">I am the Dashboard</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam maxime corporis vitae eligendi eius similique fugit non dolor deleniti illum suscipit quos omnis, quod inventore earum pariatur explicabo illo.</p>
          <UploadAndDisplayImage />
        </div>
    )
}

export default DashBoard