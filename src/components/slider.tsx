import React, { useState } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { id: 1, name: 'Avis 1', content: 'Contenu de l\'avis 1' },
    { id: 2, name: 'Avis 2', content: 'Contenu de l\'avis 2' },
    { id: 3, name: 'Avis 3', content: 'Contenu de l\'avis 3' }
  ];

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length ? 1 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 1 ? slides.length : prevSlide - 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="slider-container">
        <button onClick={handlePrevSlide} className="slider-arrow left-arrow">
          <Image src="/flechetemoin.png" alt="Previous" width={50} height={50} />
        </button>
        <div className="slider-content-wrapper">
          {slides.map(slide => (
            <div
              key={slide.id}
              className={`slider-content ${currentSlide === slide.id ? 'active' : ''}`}
            >
              <div className="slide-card">
                <p className="slide-name">{slide.name}</p>
                <p className="slide-content">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNextSlide} className="slider-arrow right-arrow">
          <Image src="/flechetemoind.png" alt="Next" width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
