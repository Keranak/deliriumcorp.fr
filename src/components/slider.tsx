import React, { useState } from "react";
import Image from "next/image";

type Review = {
  id: number;
  name: string;
  comment: string;
};

type SliderProps = {
  reviews: Review[];
};

const Slider: React.FC<SliderProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="slider">
      <div className="slider-content">
        <p>{currentReview.comment}</p>
        <h2>{currentReview.name}</h2>
      </div>
      <div className="slider-controls">
        <button className="buttonLeft" onClick={handlePrevious}><Image src="/flechetemoin.png"alt="Previous" height={50} width={50}/></button>
        <button className="buttonRight" onClick={handleNext}><Image src="/flechetemoind.png"alt="Next" width={50} height={50}/></button>
      </div>
    </div>
  );
};

export default Slider;
