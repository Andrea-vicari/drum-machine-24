import React from "react";
import mp3List from "./mp3.json";
import keyList from "./keyList.json";
import { Link, useNavigate, useParams } from 'react-router-dom';

function DashBoard (){

  const navigate = useNavigate();

    return(
      <div className="container mx-auto px-3 py-3 bg-black">
          <h1 className="text-white text-center">Dashboard</h1>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus, esse facilis labore quae offic</p>
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


      </div>
    )
}

export default DashBoard