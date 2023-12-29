import React from "react";
import Keyboard from "./Keyboard";

function Home (){

    return(
        <div className="container">
          <div className="container mx-auto px-2 py-3 bg-black d-flex justify-content-center flex-wrap">
              <Keyboard />

            </div>
        </div>

    )
}

export default Home