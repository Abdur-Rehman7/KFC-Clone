import React, { useRef } from "react";
import ExploreMenu from "./ExploreMenu";
import menu1 from "../assets/explore-menu-1.png";
import menu2 from "../assets/explore-menu-2.png";
import menu3 from "../assets/explore-menu-3.png";
import menu4 from "../assets/explore-menu-4.png";
import menu5 from "../assets/explore-menu-5.png";
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
        className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <div className="inline-flex gap-5 mt-[16px]">
          <ExploreMenu img={menu1} text="Promotion" />
          <ExploreMenu img={menu2} text="Everyday Value" />
          <ExploreMenu img={menu3} text="Ala-carte & Combos" />
          <ExploreMenu img={menu4} text="Signature Boxes" />
          <ExploreMenu img={menu5} text="Sharing" />
          <ExploreMenu img={menu1} text="Family Deals" />
          <ExploreMenu img={menu2} text="Bucket Offers" />
          <ExploreMenu img={menu3} text="Drinks & Desserts" />
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
