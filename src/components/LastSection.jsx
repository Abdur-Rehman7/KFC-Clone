import React from "react";
import lastsection1 from "../assets/last-section-1.jpg";
import lastsection2 from "../assets/last-section-2.jpg";
import lastsection3 from "../assets/last-section-3.png";
import lastsection4 from "../assets/last-section-4.jpg";

const LastSection = () => {
  const images = [lastsection1, lastsection2, lastsection3];

  return (
    <div className="mx-auto px-[16px]">
      <div className="mt-[16px] text-center">
        {/* first row: image cards */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-full md:w-[49%] mt-[16px] inline-block align-top ${
              index % 2 === 0 ? "md:mr-[2%]" : ""
            }`}
          >
            <img
              src={img}
              alt={`Section ${index + 1}`}
              className="w-full h-auto rounded-[8px] shadow-sm"
            />
          </div>
        ))}

        {/* second div (card) */}
        <div
          className="w-full md:w-[49%] mt-[16px] inline-block align-top text-center bg-white rounded-[8px] shadow-sm border border-gray-200
                     md:h-[calc(100%)]" // keeps consistent height baseline
          style={{
            minHeight: "100%", // ensures consistency when text wraps
          }}
        >
          <div className="pt-[16px] pb-[48px] px-[10px] h-full flex flex-col justify-between">
            <div>
              <img
                src={lastsection4}
                alt="Section 2"
                className="inline-block mt-4 h-[140px] rounded-[8px] shadow-sm"
              />
              <p className="my-5 leading-[20px] text-black text-[22px] font-bold">
                Adding 11 herbs and spices, explore our menu and add items to
                your cart.
              </p>
            </div>

            <button className=" inline-block mx-auto bg-primary py-[8px] px-[16px] rounded-[4px] font-bold text-white mt-[20px] mb-4 ">
              EXPLORE MENU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
