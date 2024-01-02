import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { outVolume } from './Volume.jsx';

function SingleKey (){

    const [data, setData] = useState([])


    useEffect(()=> {
        axios.get('http://localhost:3000/tracks')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(data)



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


    const playSound = (i, trackName, trackID) => {

        document.getElementById(i+300).classList.remove("d-none");
        document.getElementById(i+200).classList.add("playing");



        console.log(i);

        let mp3_toplay = document.getElementById(trackID);
        console.log(mp3_toplay)
        console.log(outVolume/100)
        mp3_toplay.volume = outVolume/100;
        mp3_toplay.play();
        var MP3_duration = document.getElementById(trackID).duration;
        console.log(MP3_duration);

        startConter(Math.floor(MP3_duration),i)

    }


    return(
        data.map((d, i) => (
            <div key={d.id} id={100+i}>
                <button id={200+i} className="btn btn-primary active btn-sq-responsive" onClick={() => playSound(i, d.trackName, d.id)}>
                <span id={i+300} className="spinner-border d-none spinner-border-sm" aria-hidden="true"></span>
                <audio className="clip" id={d.id} src={d.trackURL}></audio>
                </button>
            </div>

     )))
}

export default SingleKey