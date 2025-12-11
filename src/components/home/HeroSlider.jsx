import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "./assets/banner-1.jpg";
import hero2 from "./assets/banner-2.jpg";
import hero3 from "./assets/banner-3.jpg";
import hero4 from "./assets/banner-4.jpg";
import hero5 from "./assets/banner-5.jpg";
import hero6 from "./assets/banner-6.jpg";

const HeroSlider = (props) => {
  const images = [hero6, hero2, hero3, hero5];
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
    <div className="relative w-full overflow-hidden">
  <img
    src={images[current]}
    alt={`slide-${current}`}
    className="w-full h-auto object-contain transition-opacity duration-1000"
  />

  {/* Left arrow */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 -translate-y-1/2 left-4 bg-red-500 hover:bg-primary text-white p-1 rounded-full transition"
  >
    <ChevronLeft size={18} />
  </button>

  {/* Right arrow */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 -translate-y-1/2 right-4 bg-red-500 hover:bg-primary text-white p-1 rounded-full transition"
  >
    <ChevronRight size={18} />
  </button>
</div>

  );
};

export default HeroSlider;
