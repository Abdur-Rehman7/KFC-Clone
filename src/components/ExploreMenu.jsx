import React from "react";

function ExploreMenu({ img, text }) {
  return (
    <>
      {/* 🖥️ Desktop View — Original Curved Style */}
      <div className="hidden lg:flex relative justify-items-center w-[220px] h-[200px] bg-card rounded-tl-[50%] rounded-tr-[50%] rounded-br-[3%] rounded-bl-[50%] transition-all duration-300 hover:-translate-y-3">
        <img
          className="w-[180px] h-[146px] object-contain mx-auto mt-2"
          src={img}
          alt={text}
        />
        <div className="absolute bottom-4 w-full flex flex-col items-center">
          <p className="mb-[6px] text-[16px] font-medium text-center">
            {text}
          </p>
          <hr className="w-[60px] h-[3px] rounded-lg bg-primary border-0" />
        </div>
        <span className="w-[17px] h-[17px] rounded-[100%] bg-body absolute right-[5px] bottom-[5px]" />
      </div>

      {/* 📱 Tablet & Mobile View — Responsive Box Style */}
      <div className="flex lg:hidden flex-col justify-between border border-dashed border-gray-300 rounded-[12px] bg-surface shadow-sm w-full h-[180px] sm:h-[200px] p-3 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={img}
            alt={text}
            className="object-contain max-h-[90px] sm:max-h-[110px]"
          />
        </div>
        <p className="text-[14px] sm:text-[16px] font-semibold text-center mt-2">
          {text}
        </p>
      </div>
    </>
  );
}

export default ExploreMenu;
