import React from "react";
import {Display} from "./Display";
import {LogoTemp} from "./LogoTemp";
import {VolumeController} from "./Volume";
function Controller (){

    return(
        <React.Fragment>
           <LogoTemp />
           <VolumeController />
        </React.Fragment>
      )
}

export default Controller