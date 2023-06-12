import React, { useState } from "react";

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
        <h2>{currentReview.name}</h2>
        <p>{currentReview.comment}</p>
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
