import React from "react";
import Slider from "../slider";
import TestimonialCard from "../testimonialscard";
import testimonials from "@/src/data/testimonials.json";

function Comments(){
    
      
    return(
        <>
        <section className={`flex min-h-screen flex-col items-center justify-between py-24`}>

           {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
        </section>
        </>
    )
}


export default Comments