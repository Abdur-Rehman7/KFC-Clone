import React from "react";
import "../App.css";

const AboutUsBucket = (props) => {
  return (
    <>
      <div className="aboutus-bucket items-center justify-center">
        <div className=" pt-[35px] p-[25px]">
          <p className="text-[34px] font-bold mb-[8px] text-text">
            {props.year}
          </p>
          <p className="text-[13px] text-text">{props.discription}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUsBucket;
