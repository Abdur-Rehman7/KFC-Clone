import React from "react";
import { NavLink } from "react-router-dom"; // ✅ Use this if you're using React Router

function SidebarLink({ link, icon, title }) {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `flex items-center gap-2 py-[11px] px-[12px] rounded-md cursor-pointer 
          transition-all duration-300 ease-in-out 
          ${isActive ? "bg-primary text-white" : "hover:bg-gray-200 text-gray-700"}`
        }
      >
        {icon && <img src={icon} alt={title} className="w-[22px] h-[22px]" />}
        <span className="text-[15px] font-medium">{title}</span>
      </NavLink>
    </li>
  );
}

export default SidebarLink;
