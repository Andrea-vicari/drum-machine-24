import React from "react";
import {Display} from "./Display";
import {LogoTemp} from "./LogoTemp";
import {VolumeController} from "./Volume";
import AudioRecorder from "./AudioRecorder";
function Controller (){

    return(
        <React.Fragment>
           <LogoTemp />
           <VolumeController />
        </React.Fragment>
      )
}

export default Controller