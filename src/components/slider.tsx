import { useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"; 
const Carousel = () => {
  const carouselRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("init", () => {
        // Faire quelque chose lors de l'initialisation
      });

      emblaApi.on("select", () => {
        // Faire quelque chose lorsqu'une diapositive est sélectionnée
      });
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={carouselRef}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* Slides here */}
          <div className="embla__slide">
            <div className="slide-content bg-white p-8 rounded-md">
              <h2 className="text-xl font-bold mb-4">John Doe</h2>
              <p className="text-gray-800">Commentaire de John Doe...</p>
            </div>
          </div>
          <div className="embla__slide">
            <div className="slide-content bg-white p-8 rounded-md">
              <h2 className="text-xl font-bold mb-4">Jane Smith</h2>
              <p className="text-gray-800">Commentaire de Jane Smith...</p>
            </div>
          </div>
          <div className="embla__slide">
            <div className="slide-content bg-white p-8 rounded-md">
              <h2 className="text-xl font-bold mb-4">Alice Johnson</h2>
              <p className="text-gray-800">Commentaire d'Alice Johnson...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="embla__dots flex justify-center mt-4"></div>
      <button
        className="embla__prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <Image width={50} height={50} src="/flechetemoin.png" alt="fleche gauche" />
      </button>
      <button
        className="embla__next absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <Image src="/flechetemoind.png" alt="fleche droite" width={50} height={50} />
      </button>
    </div>
  );
};

export default Carousel;
