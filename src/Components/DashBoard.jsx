import React from "react";
import { useState, useEffect } from "react";
import keyList from "./keyList.json";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

function DashBoard (){



  const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('https://drum-machine-24.vercel.app/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(data)

    return(
      <div className="container mx-auto px-3 py-3 bg-black">
          <h1 className="text-white text-center">Dashboard</h1>
          <p className="text-secondary">
            Click the Key to edit and choose the new track
          </p>

          <div className="row mb-3 text-center">
          {keyList.map((e)=>{
                  return (
                    <div className="col-4 mb-2" key={e.id}>
                    <div className="card">
                        <h5 className="card-header">{e.id}</h5>
                        <div className="card-body">
                          <Link to={`/update/${e.id}`} className="btn btn-primary">Edit</Link>
                        </div>
                      </div>

                    </div>
          );})}




          </div>
          <Link to="/" className="btn"> ciso</Link>


      </div>
    )
}

export default DashBoard