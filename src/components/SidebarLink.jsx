import React from "react";

function SidebarLink(props) {
  return (
    <>
      <ul>
        <a href={props.link}>
          <li
            to="/store"
            className=" flex gap-[7px] py-[11px] px-[10px] hover:pl-[2px] hover:bg-[#A3A3A3] cursor-pointer transition-all duration-300 ease-in-out"
          >
            {props.icon && (
              <img className="w-[25px] h-[25px]" src={props.icon} />
            )}

            {props.title}
          </li>
        </a>
      </ul>
    </>
  );
}

export default SidebarLink;
