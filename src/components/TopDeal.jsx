import React, { useState } from "react";
import { Heart } from "lucide-react";

const TopDeal = (props) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="w-[300px] h-[450px] lg:w-[w-200px]  bg-card relative rounded-lg shadow-sm group">
      {/* Top bars */}
      <div className="pt-[15px] px-[5px] pb-[35px] mx-auto">
        <div className="flex flex-row items-center absolute top-0 left-[41%] justify-center gap-[7px]">
          <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
          <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
          <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
        </div>

        {/* Image with hover zoom effect */}
        <div className="rounded-md">
          <img
            className="w-[286px] h-[286px]  lg:w-[196px] md:w-[140px] sm:w-[120px]  mx-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={props.img}
            alt={props.name}
          />
        </div>

        {/* Product name */}
        <div>
          <p className="text-[26px] font-semibold">{props.name}</p>
          {/* ❤️ Favorite button */}
          <button
            onClick={() => setIsFav(!isFav)}
            className="absolute top-2 right-2 z-10 p-2 transition"
          >
            <Heart
              className={`w-5 h-5 ${
                isFav ? "fill-primary text-primary" : "text-primary"
              }`}
            />
          </button>
        </div>

        <div className="truncate-2-lines text-text text-[15px] leading-snug mb-[16px]">
          {props.discription}
        </div>

        <div className="text-[18px] font-bold">Rs {props.price}</div>
      {/* Floating button */}
      <div className="absolute bottom-[-20px] right-1/2 translate-x-1/2 z-10 transition-all duration-300 ease-in-out hover:bottom-[-15px]">
        <button className="text-[15px] font-semibold text-white bg-primary px-[8px] py-[8px] rounded-[6px] shadow-md">
          + <span className="px-[2px]">ADD TO BUCKET</span>
        </button>
      </div>
      </div>

    </div>
  );
};

export default TopDeal;
