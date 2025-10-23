import React, { useRef } from "react";
import ExploreMenu from "./ExploreMenu";
import menu1 from "../assets/explore-menu-1.png";
import menu2 from "../assets/explore-menu-2.png";
import menu3 from "../assets/explore-menu-3.png";
import menu4 from "../assets/explore-menu-4.png";
import menu5 from "../assets/explore-menu-5.png";
import menu6 from "../assets/explore-menu-6.png";
import menu7 from "../assets/explore-menu-7.png";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";

const ExploreMenuSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const menuItems = [
    { img: menu1, text: "Promotion" },
    { img: menu2, text: "Everyday Value" },
    { img: menu3, text: "Ala-carte & Combos" },
    { img: menu4, text: "Signature Boxes" },
    { img: menu5, text: "Sharing" },
    { img: menu6, text: "Family Deals" },
    { img: menu7, text: "Midnight (Start at 12 am)" },
    { img: menu3, text: "Drinks & Desserts" },
  ];

  return (
    <div className="relative justify-items-between w-full max-w-[1200px] mx-auto my-8">
      <IoChevronBackCircleSharp
        onClick={scrollLeft}
        className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 text-red-400 cursor-pointer hover:text-primary"
        size={22}
      />

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="overflow-x-hidden whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <div className="inline-flex gap-5 mt-[16px]">
          {menuItems.map((item, index) => (
            <ExploreMenu key={index} img={item.img} text={item.text} />
          ))}
        </div>
      </div>

      {/* Right Arrow (outside) */}

      <IoChevronForwardCircleSharp
        onClick={scrollRight}
        className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 text-red-400 cursor-pointer hover:text-primary"
        size={22}
      />
    </div>
  );
};

export default ExploreMenuSlider;
