import React from "react";

const BestSeller = (props) => {
  return (
    <>
      <div className="w-[290px] h-auto bg-surface relative">
        <div className="flex flex-row items-center justify-center gap-[7px] content-center">
          <span className="w-[15px] h-[22px] bg-primary rounded-tl-[0px] rounded-tr-[0px] rounded-br-[1px] rounded-bl-[1px]"></span>
          <span className="w-[15px] h-[22px] bg-primary rounded-tl-[0px] rounded-tr-[0px] rounded-br-[1px] rounded-bl-[1px]"></span>
          <span className="w-[15px] h-[22px] bg-primary rounded-tl-[0px] rounded-tr-[0px] rounded-br-[1px] rounded-bl-[1px]"></span>
        </div>

        <p className="text-[26px] font-medium mt-[18px] ml-[16px] font-semibold">
          {props.name}
        </p>

        <div className="absolute top-[80px] right-0 flex items-center bg-[#E4002B] text-white font-bold text-[18px] px-4 py-[6px] rounded-l-sm">
          <span className="text-[14px] font-medium mr-1">Rs</span>{props.price}
        </div>

        <img className="w-[290px] h-[290px]" src={props.img} />
      </div>
    </>
  );
};

export default BestSeller;
