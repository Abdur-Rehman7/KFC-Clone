import React from "react";

function FooterNavigationList(props) {
  return (
    <>
      <div className="text-left w-full px-[12px]">
        <ul className="pl-[32px]">
          <ul className="flex flex flex-row justify-center lg:flex-col md:flex-col gap-2">
            <li>
              {props.image1 && (
                <img src={props.image1} alt="icon" className="mt-[10px]" />
              )}
            </li>
            <li>
              {props.image2 && (
                <img src={props.image2} alt="icon" className="mt-[10px]" />
              )}
            </li>
          </ul>
          <li className="mt-[10px] text-[18px] text-black">{props.item1}</li>
          <li className="mt-[10px] text-[18px] text-black">{props.item2}</li>
          <li className="mt-[10px] text-[18px] text-black">{props.item3}</li>
          <li className="mt-[10px] text-[18px] text-black">{props.item4}</li>
          <li className="mt-[10px] text-[18px] text-black">{props.item5}</li>
        </ul>
      </div>
    </>
  );
}

export default FooterNavigationList;
