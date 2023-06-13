import React from "react";
import Image from "next/image";
import Slider from "@/src/components/slider";

function Comments(){
    const reviews = [
        { id: 1, name: "John Doe", comment: "Great product!" },
        { id: 2, name: "Jane Smith", comment: "Excellent service!" },
        { id: 3, name: "Alice Johnson", comment: "Highly recommended!" },
      ];
    return(
        <section className="slideComments whiteSection" >
        <div className="container">
        <Image src="/LES_SURVIVANTS.png" alt="avis"  width={142.51} height={247}  className='center titleImage'/>
        
        <Slider reviews={reviews}/>
        
        </div>
      </section>
    )
}


export default Comments