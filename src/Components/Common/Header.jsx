import React from "react";
import { Link } from "react-router-dom";
import Controller from "../Controller";


function Header () {



    return(
        <div className="container bg-black">
            <div className="row py-1 px-3">
                <Controller />

              <div className="col-4 text-white fs-3 d-flex justify-content-end align-items-center">
              <Link to="/Dashboard">
              <i className="fa fa-cog orange fs-4"></i>
              </Link>
              </div>
          </div>

        </div>
    )
}

export default Header;