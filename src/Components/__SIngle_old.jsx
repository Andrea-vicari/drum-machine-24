import { useEffect, useState} from 'react';
import React from "react";
import {toAdd } from './OnOFF.jsx';
import { outVolume } from './Volume.jsx';

const SingleKey = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/drum_pad')
      .then(res => res.json())
      .then(data => setData(data))
      .then(console.log(data))
      .catch(err => console.log(err));
  }, [])

  function startConter(endTime){

    var obj = 0;
    var current = obj;

    setInterval(function(){
       current++;
       obj = current;
       console.log(obj)

        if(obj == endTime){

            alert('STOP COUNT !!!')
            return
        }

    },1000);

    clearInterval(setInterval);
    return

  }

  const playSound = (i, trackName) => {
    console.log(i);
    if(toAdd==="ON"){
    let mp3_toplay = document.getElementById(i);
    console.log(outVolume/100)
    mp3_toplay.volume = outVolume/100;
    mp3_toplay.play();
    }
    else{
      alert('Turn ON the KeyBoard');
      return
    }

    var MP3_duration = document.getElementById(i).duration;
        console.log(MP3_duration);
    document.getElementById('display_parag').innerHTML = `${trackName}`;
    console.log(toAdd)

    startConter(Math.floor(MP3_duration));
  }

  return (
    data.map((d, i) => (
          <div key={d.id} id={100+i}>
            <button id={200+i} className="btn-hover" onClick={() => playSound(i, d.trackName)}>
              <audio className="clip" id={i} src={d.trackURL}></audio>
            </button>
          </div>
          )
    )
  )
}

export { SingleKey };