import React, { useState, useEffect } from "react";
import { outVolume } from './Volume.jsx';
import keyList from './mp3.json';
import { useRef } from "react";
import axios from "axios";


function SingleKeyLoop (){

    const [started, setStarted] = useState(false);
    const [data, setData] = useState([]);

    const inputRef = useRef(outVolume);
    console.log(inputRef.current)

    console.log(document.getElementById("volum_ind"))

    useEffect(()=> {
        axios.get('http://localhost:3000/tracks')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(data)

    useEffect(() => {
        console.log("useEffect");
      }, [outVolume]);

    function addBG(i){
         document.getElementById(i+300).classList.remove("d-none");
         document.getElementById(i+200).classList.add("playing");
    }
    function removeBG(i){
        document.getElementById(i+300).classList.add("d-none");
        document.getElementById(i+200).classList.remove("playing");
   }



    const playSound = (i, trackName, trackID) => {

        setStarted(true);

        document.getElementById(i+300).classList.remove("d-none");
        document.getElementById(i+200).classList.add("playing");
      //  document.getElementById("MP3_display").innerHTML = trackName;
        console.log(i);

        let mp3_toplay = document.getElementById(trackID);
        console.log(mp3_toplay);
        mp3_toplay.volume = outVolume/100;
        mp3_toplay.play();
        }


    return(
        data.map((d, i) => (
            <div key={d.id} id={100+i}>
                <button id={200+i} className="btn acid-green btn-sq-responsive" onClick={() => playSound(i, d.trackName, d.id)}>
                <span id={i+300} className="spinner-border d-none spinner-border-sm" aria-hidden="true"></span>
                <audio className="clip" id={d.id} src={d.trackURL} onPlay={()=>addBG(i)} onEnded={()=>removeBG(i)}></audio>
                </button>
            </div>

     )))
}

export default SingleKeyLoop