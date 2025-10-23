import React from "react";

const ResponsiveCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
      <div className="bg-white p-[16px] h-[200px] rounded-[8px] shadow-sm">
        <h3 className="text-[16px] font-semibold mb-[8px]">Column 1</h3>
        <p className="text-[14px] leading-[20px]">
          Responsive 1–2–3 column grid using Tailwind.
        </p>
      </div>

      <div className="bg-white p-[16px] h-[200px] rounded-[8px] shadow-sm">
        <h3 className="text-[16px] font-semibold mb-[8px]">Column 2</h3>
        <p className="text-[14px] leading-[20px]">
          On mobile → 1 col, tablet → 2, desktop → 3.
        </p>
      </div>

      <div className="bg-white p-[16px] h-[200px] rounded-[8px] shadow-sm">
        <h3 className="text-[16px] font-semibold mb-[8px]">Column 3</h3>
        <p className="text-[14px] leading-[20px]">
          Clean, pixel-perfect, simple Tailwind syntax.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
