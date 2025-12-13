import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "./assets/banner-1.jpg";
import hero2 from "./assets/banner-2.jpg";
import hero3 from "./assets/banner-3.jpg";
import hero4 from "./assets/banner-4.jpg";
import hero5 from "./assets/banner-5.jpg";
import hero6 from "./assets/banner-6.jpg";

// const HeroSlider = (props) => {
//   const images = [hero6, hero2, hero3, hero5];
//   const interval = props.interval || 5000;

//   const [current, setCurrent] = useState(0);
//   const length = images.length;

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

//   useEffect(() => {
//     const timer = setInterval(nextSlide, interval);
//     return () => clearInterval(timer);
//   }, [current, interval]);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <img
//         src={images[current]}
//         alt={`slide-${current}`}
//         className="w-full h-auto object-contain transition-opacity duration-1000"
//       />

//       {/* Left arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 -translate-y-1/2 left-4 bg-red-500 hover:bg-primary text-white p-1 rounded-full transition"
//       >
//         <ChevronLeft size={18} className="text-text" />
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 -translate-y-1/2 right-4 bg-red-500 hover:bg-primary text-white p-1 rounded-full transition"
//       >
//         <ChevronRight size={18} className="text-text" />
//       </button>
//     </div>
//   );
// };

// export default HeroSlider;

const images = [hero6, hero2, hero3, hero5];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div
        className="slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay" />
            
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slides {
          display: flex;
          height: 100%;
          transition: transform 0.6s ease-in-out;
        }

        .slide {
          min-width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }

                .content h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 15px;
        }

        .content p {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          margin-bottom: 25px;
        }

        .content button {
          padding: 12px 28px;
          border: none;
          border-radius: 30px;
          background: #ff6b00;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }

        .dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
        }

        .dot.active {
          background: #fff;
        }

        @media (max-width: 768px) {
          .content h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
