import React, { useState, useEffect } from "react";
import { outVolume } from './Volume.jsx';
import drumList from './drums.json';
import { useRef } from "react";


function SingleKeyDrums (){

    const [started, setStarted] = useState(false);



    const inputRef = useRef(outVolume);
    console.log(inputRef.current)

    function addBG(i){
         document.getElementById(i+3000).classList.remove("d-none");
         document.getElementById(i+2000).classList.add("playing");
    }
    function removeBG(i){
        document.getElementById(i+3000).classList.add("d-none");
        document.getElementById(i+2000).classList.remove("playing");
   }



    const playSound = (i, trackName, trackID) => {

        setStarted(true);

        document.getElementById(i+3000).classList.remove("d-none");
        document.getElementById(i+2000).classList.add("playing");
      //  document.getElementById("MP3_display").innerHTML = trackName;
        console.log(i);

        let mp3_toplay = document.getElementById(trackID);
        console.log(mp3_toplay);
        mp3_toplay.volume = outVolume/100;
        mp3_toplay.play();
        }


    return(
        drumList.drums.map((d, i) => (
            <div key={d.id} id={1000+i}>
                <button id={2000+i} className="btn btn-warning active btn-sq-responsive" onClick={() => playSound(i, d.trackName, d.id)}>
                <span id={i+3000} className="spinner-border d-none spinner-border-sm" aria-hidden="true"></span>
                <audio className="clip" id={d.id} src={d.trackURL} onPlay={()=>addBG(i)} onEnded={()=>removeBG(i)}></audio>
                </button>
            </div>

     )))
}

export default SingleKeyDrums