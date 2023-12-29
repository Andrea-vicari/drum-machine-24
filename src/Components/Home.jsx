import React from "react";
import Keyboard from "./Keyboard";

function Home (){

    return(
        <div className="container pt-3">
          <div className="container mx-auto px-0 py-1 bg-black d-flex justify-content-center flex-wrap">
              <Keyboard />

            </div>
        </div>

    )
}

export default Home