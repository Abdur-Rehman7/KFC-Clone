import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "./assets/banner-1.jpg";
import hero2 from "./assets/banner-2.jpg";
import hero3 from "./assets/banner-3.jpg";
import hero4 from "./assets/banner-4.jpg";

const HeroSlider = (props) => {
  const images = [hero1, hero2, hero3, hero4];
  const interval = props.interval || 5000;

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, interval]);

  return (
    <div className="relative w-full h-[35vh] lg:h-[78vh] md:h-[56vh] overflow-hidden">
      {images.map((images, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={images}
            alt={`slide-${index}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-6 bg-red-500 hover:bg-primary text-white p-[1px] rounded-full transition"
      >
        <ChevronLeft size={18} className="text-black" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-6 bg-red-500 hover:bg-primary text-white p-[1px] rounded-full transition"
      >
        <ChevronRight size={18} className="text-black" />
      </button>
    </div>
  );
};

export default HeroSlider;
