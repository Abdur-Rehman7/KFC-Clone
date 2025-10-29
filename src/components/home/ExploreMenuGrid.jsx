import React from "react";
import img1 from "./assets/explore-menu-1.png";
import img2 from "./assets/explore-menu-2.png";
import img3 from "./assets/explore-menu-3.png";
import img4 from "./assets/explore-menu-4.png";
import img5 from "./assets/explore-menu-5.png";

function ExploreMenuGrid() {
  const menuItems = [
    { img: img1, text: "Promotion" },
    { img: img2, text: "Everyday Value" },
    { img: img3, text: "Signature Boxes" },
    { img: img4, text: "Ala Carte & Combos" },
    { img: img5, text: "Sharing" },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 sm:gap-5">
        {/* 01 — Tall Left Card */}
        <div className="row-span-2 flex flex-col justify-between border border-dashed border-text rounded-[10px] p-3 shadow-sm h-[280px] sm:h-[320px]">
          <p className="text-[14px] sm:text-[16px] font-semibold mb-2">
            {menuItems[0].text}
          </p>
          <img
            src={menuItems[0].img}
            alt={menuItems[0].text}
            className="object-contain w-full max-h-[120px] sm:max-h-[140px]"
          />
        </div>

        {/* 02 — Top Row Middle */}
        <div className="flex flex-col justify-between border border-dashed border-text rounded-[10px] p-3 shadow-sm h-[130px] sm:h-[150px]">
          <p className="text-[14px] sm:text-[16px] font-semibold mb-2">
            {menuItems[1].text}
          </p>
          <img
            src={menuItems[1].img}
            alt={menuItems[1].text}
            className="object-contain w-full max-h-[90px] sm:max-h-[80px]"
          />
        </div>

        {/* 04 — Top Row Right */}
        <div className="flex flex-col justify-between border border-dashed border-text rounded-[10px] p-3 shadow-sm h-[130px] sm:h-[150px]">
          <p className="text-[14px] sm:text-[16px] font-semibold mb-2">
            {menuItems[3].text}
          </p>
          <img
            src={menuItems[3].img}
            alt={menuItems[3].text}
            className="object-contain w-full max-h-[90px] sm:max-h-[80px]"
          />
        </div>

        {/* 03 — Bottom Row Middle */}
        <div className="flex flex-col justify-between border border-dashed border-text rounded-[10px] p-3 shadow-sm h-[130px] sm:h-[150px]">
          <p className="text-[14px] sm:text-[16px] font-semibold mb-2">
            {menuItems[2].text}
          </p>
          <img
            src={menuItems[2].img}
            alt={menuItems[2].text}
            className="object-contain w-full max-h-[90px] sm:max-h-[80px]"
          />
        </div>

        {/* 05 — Bottom Row Right */}
        <div className="flex flex-col justify-between border border-dashed border-text rounded-[10px] p-3 shadow-sm h-[130px] sm:h-[150px]">
          <p className="text-[14px] sm:text-[16px] font-semibold mb-2">
            {menuItems[4].text}
          </p>
          <img
            src={menuItems[4].img}
            alt={menuItems[4].text}
            className="object-contain w-full max-h-[90px] sm:max-h-[80px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreMenuGrid;
