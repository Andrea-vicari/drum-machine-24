import React from "react";
import { useState, useEffect } from "react";
import mp3List from "./mp3.json";

function SingleKey (){

    function startConter(endTime,i){

        var obj = 0;
        var current = obj;

        setInterval(function(){
           current++;
           obj = current;
           console.log(obj)

            if(obj == endTime){

                document.getElementById(i+300).classList.add("d-none");
                document.getElementById(i+200).classList.remove("playing");
               // alert('STOP COUNT !!!')
                return
            }

        },1000);

        clearInterval(setInterval);
        return

      }



    const playSound = (i, trackName) => {

        document.getElementById(i+300).classList.remove("d-none");
        document.getElementById(i+200).classList.add("playing");

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
        mp3List.map((d, i) => (
            <div className="col-4 mb-2"key={d.id}>
                <button type="button" className="btn btn-lg btn-light py-4 px-4" style={{width: "105px", height:"105px"}}></button>


            </div>

     )))
}

export default SingleKey