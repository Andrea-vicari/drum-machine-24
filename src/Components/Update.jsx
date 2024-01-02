import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MP3_List from "./mp3.json";


function Update (){

    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        trackURL: ''

    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/tracks/'+id)
        .then(res => setInputData(res.data))
        .then(console.log(inputData))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/tracks/'+id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }


    return(
        <main className="container">
                <h1 className="h3 mb-3 text-white">Edit: {id}</h1>
                <p className="text-white">Choose the Track for this key</p>
                <form onSubmit={handleSubmit}>


                    <div className="form-floating">


                    <select value={inputData} onChange={e => setInputData({...inputData, trackURL: e.target.value})} className="form-select mb-2" aria-label="Default select example">
                    {MP3_List.tracks.map((e)=>{
                  return (
                        <option value={`${e.trackURL}`}>{e.trackURL}</option>

                        );})}
                    </select>

                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onChange={e => setInputData({...inputData, trackURL: e.target.value})}>Confirm</button>

                </form>
        </main>
    )

}

export default Update