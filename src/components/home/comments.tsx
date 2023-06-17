import React from "react";
import Slider from "../slider";


function Comments(){
    
      
    return(
        <>
        <section className={`flex min-h-screen flex-col items-center justify-between py-24`}>

           {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
      <h1 className="sectionTitle p-4">Les surviants</h1>

        <Slider />
      </div>
        </section>
        </>
    )
}


export default Comments