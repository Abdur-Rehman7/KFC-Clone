import React from "react";
import SidebarLink from "./SidebarLink";
import icon1 from "../assets/sidebar-explore-menu-icon.jpg";
import icon2 from "../assets/sidebar-store-locater-icon.jpg";
import icon3 from "../assets/sidebar-track-order-icon.jpg";

function SidebarLinkMaping(props) {
  const sidebariconlink = [
    {
      icon: icon2,
      title: "Store Locator",
    },
    {
      icon: icon3,
      title: "Track Order",
    },
    {
      icon: icon1,
      title: "Explore Menu",
    },
  ];
  const sidebarsimplelink = [
    {
      title: "About Us",
    },
    {
      title: "Terms & Conditions",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Mitao Bhook",
    },
    {
      title: "Mitao Bhook - Scholarship",
    },
    {
      title: "Careers",
    },
  ];
  return (
    <>
      <div>
        {sidebariconlink.map((index, i) => (
          <SidebarLink key={i} icon={index.icon} title={index.title} />
        ))}
      </div>
      <hr className="border-borderTheme my-2" />

      <div>
        {sidebarsimplelink.map((index, i) => (
          <SidebarLink key={i} icon={index.icon} title={index.title} />
        ))}
      </div>

    </>
  );
}

export default SidebarLinkMaping;
