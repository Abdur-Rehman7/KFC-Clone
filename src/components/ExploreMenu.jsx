import React from "react";

const ExploreMenu = (props) => {
  return (
    <>
      <div className="relative justify-items-center w-[220px] h-[200px] bg-surface rounded-tl-[50%] rounded-tr-[50%] rounded-br-[3%] rounded-bl-[50%] transition-all duration-300 hover:-translate-y-3">
        <img className="w-[180x] h-[146px]" src={props.img} />

        <p className="mb-[6px] text-[16px] font-medium">{props.text}</p>
        <hr className="w-[60px] h-[3px] rounded-lg bg-primary border-0" />

        <span className="w-[17px] h-[17px] rounded-[100%] bg-body absolute right-[5px] bottom-[5px]"></span>
      </div>
    </>
  );
};

export default ExploreMenu;
