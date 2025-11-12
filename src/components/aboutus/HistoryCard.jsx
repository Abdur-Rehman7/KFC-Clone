import React from "react";
import "./About.css";
import kfcowner from "./assets/kfc-history.png";

const HistoryCard = (props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 p-[20px] lg:p-[35px] md:p-[35px]">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 px-[12px] font-bold text-white rounded-[5px]">
          <img className="w-[100%]" src={kfcowner} />
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-8 px-[12px] flex flex-col justify-center">
          <p className="text-[30px] font-bold text-center lg:text-left  ">
            History
          </p>
          <p className="font-semibold text-[16px] text-left mb-[16px]">
            It all started with Colonel Harland Sanders, the man who convinced
            the world by saying “We do chicken right!” Sanders took a great deal
            of time perfecting his iconic secret recipe of 11 herbs and spices,
            a legacy he’s brought to the world through KFC’s 10,000+
            restaurants. Starting from outside of his gas station in Korbin,
            Kentucky to being a globally recognized face, we owe our success to
            the Colonel’s hard work and passion for sharing his love for chicken
            with the world!
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
