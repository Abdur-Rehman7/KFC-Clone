import React from "react";
import SidebarLink from "./SidebarLink";
import icon1 from "../assets/sidebar-explore-menu-icon.jpg";
import icon2 from "../assets/sidebar-store-locater-icon.jpg";
import icon3 from "../assets/sidebar-track-order-icon.jpg";



function SidebarLinkMaping(props) {
  const sidebariconlink = [
    {
      icon: icon2,
      link: "storelocater",
      title: "Store Locator",
    },
    {
      icon: icon3,
      link: "trackorder",
      title: "Track Order",
    },
    {
      icon: icon1,
      link: "exploremenu",
      title: "Explore Menu",
    },
  ];
  const sidebarsimplelink = [
    {
      link: "about",
      title: "About Us",
    },
    {
      link: "termsandcondition",
      title: "Terms & Conditions",
    },
    {
      link: "Privacypolicy",
      title: "Privacy Policy",
    },
    {
      link: "Contact",
      title: "Contact Us",
    },
    {
      link: "mitaobhook",
      title: "Mitao Bhook",
    },
    {
      link: "mitaobhookschlorship",
      title: "Mitao Bhook - Scholarship",
    },
    {
      link: "careers",
      title: "Careers",
    },
  ];
  return (
    <>
      <div>
        {sidebariconlink.map((index, i) => (
          <SidebarLink key={i} link={index.link} icon={index.icon} title={index.title} />
        ))}
      </div>
      <hr className="border-borderTheme my-2" />

      <div>
        {sidebarsimplelink.map((index, i) => (
          <SidebarLink key={i} link={index.link} icon={index.icon} title={index.title} />
        ))}
      </div>
    </>
  );
}

export default SidebarLinkMaping;
