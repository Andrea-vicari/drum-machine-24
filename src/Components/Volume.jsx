import React from "react";

import { useState,useEffect } from 'react';

var outVolume = 50

const VolumeController = () => {

  const [volume,setVolume ]= useState(50);

  const changeVolume = ()=>{
    outVolume = document.getElementById('myRange').value;
    document.getElementById("volum_ind").innerHTML = `${outVolume}`;
    setVolume (outVolume)
    return outVolume
  }

  useEffect(()=>{
    changeVolume();
  },[volume])




      return (

        <div className="col-4 text-center d-flex justify-content-center align-items-end flex-column">
          <p className="text-center text-white mb-0">VOLUME:<span id="volum_ind">50</span></p>
            <input className="mx-auto text-danger" type="range" id="myRange" min="0" max="100" defaultValue={volume} step="1" onChange={()=>changeVolume(50)}></input>

        </div>
      );
  }


export {VolumeController,outVolume};