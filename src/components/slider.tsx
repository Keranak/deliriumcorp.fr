import React, { useState } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { id: 1, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.' },
    { id: 2, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 3, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 4, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 5, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 6, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 7, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 8, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  },
    { id: 9, name: 'Enora JOHNSON', content: 'Une très belle expérience qui a soudé l\’équipe ! On a observé une belle cohésion.'  }
  ];

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length ? 1 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 1 ? slides.length : prevSlide - 1));
  };

  const offset = (currentSlide - 1) * -50;

  return (
    <div className="relative overflow-hidden">
      <div className="slider-container">
        <button onClick={handlePrevSlide} className="slider-arrow left-arrow">
          <Image src="/flechetemoin.png" alt="Previous" width={50} height={50} />
        </button>
        <div className="slider-content-wrapper" style={{ transform: `translateX(${offset}%)` }}>
          {slides.map(slide => (
            <div
              key={slide.id}
              className="slider-content"
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
