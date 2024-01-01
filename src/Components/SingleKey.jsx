import React from "react";
import { useState, useEffect } from "react";
import mp3List from "./db.json";

function SingleKey (){

    console.log(mp3List)

    const [isRunning, setIsRunning] = useState(true);



    function startConter(endTime,i){

        var obj = 0;
        var current = obj;

        setInterval(function(){
           current++;
           obj = current;


            if(obj == endTime){
                console.log(obj)
                document.getElementById(i+300).classList.add("d-none");
                document.getElementById(i+200).classList.remove("playing");
               // alert('STOP COUNT !!!')
               return ()=>{
                clearInterval(setInterval);
            }
            }



        },1000);

      }


    const playSound = (i, trackName) => {

        document.getElementById(i+300).classList.remove("d-none");
        document.getElementById(i+200).classList.add("playing");

        document.getElementById('MP3_display').innerHTML = `${trackName}`;

        console.log(i);

        let mp3_toplay = document.getElementById(i);
        console.log(mp3_toplay)
       // mp3_toplay.loop = true;
        mp3_toplay.play();
        var MP3_duration = document.getElementById(i).duration;
        console.log(MP3_duration);

        startConter(Math.floor(MP3_duration),i)

    }


    return(
        mp3List.tracks.map((d, i) => (
            <div key={d.id} id={100+i}>
                <button id={200+i} className="btn btn-success active btn-sq-responsive" onClick={() => playSound(i, d.trackName)}>
                <span id={i+300} className="spinner-border d-none spinner-border-sm" aria-hidden="true"></span>
                <audio className="clip" id={i} src={d.trackURL}></audio>
                </button>
            </div>

     )))
}

export default SingleKey