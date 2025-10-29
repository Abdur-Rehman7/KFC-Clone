import React from "react";
import { NavLink } from "react-router-dom";

function SidebarLink(props) {
  const handleClick = () => {
    if (props.onCloseSidebar) {
      props.onCloseSidebar(); // 👈 Close sidebar when clicked
    }
  };

  return (
    <>
      <ul>
        <li>
          <NavLink
            to={props.link}
            onClick={handleClick}
            className="flex gap-[7px] py-[11px] px-[10px] hover:pl-[2px] hover:bg-[#A3A3A3] cursor-pointer transition-all duration-300 ease-in-out"
          >
            {props.icon && (
              <img
                className="w-[25px] h-[25px]"
                src={props.icon}
                alt={props.title}
              />
            )}
            {props.title}
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default SidebarLink;
