import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        <Image src="/LES_SURVIVANTS.png" alt="avis" width={142.51} height={247} className='center'/>
        {/*Slider des avis laissé par les clients*/}
        <Slider reviews={reviews}/>
        
        </div>
      </section>
    )
}


export default Comments