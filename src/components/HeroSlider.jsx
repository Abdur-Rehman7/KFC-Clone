import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = ({ images, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, interval]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-6 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-6 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default HeroSlider;
