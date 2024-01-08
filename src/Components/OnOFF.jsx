import React from "react";
import { useState } from 'react';

var toAdd = "ON";

const PowerSwitch = () => {

    const [isToggled, setIsToggled] = useState(true);

    const displayONOFF =(caller)=>{
      document.getElementById('on_off').innerHTML = `${caller}`;
    }

    const updateToggle =()=>{

        setIsToggled(!isToggled);
        isToggled===true ? toAdd = "OFF" : toAdd = "ON";
        displayONOFF(toAdd);

    }

    return (

          <div id='power_switch_colum'>
            <p id="on_off">ON</p>
            <label className="switch">
            <input type="checkbox" onChange={updateToggle}/>
            <span className="slider"></span>
            </label>
          </div>

    );
  }



export {PowerSwitch,toAdd};