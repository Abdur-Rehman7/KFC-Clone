import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

function FooterSocialIcon() {
  return (
    <>
      <div className="w-[40px] h-[40px] bg-[white] rounded-[100%] flex items-center justify-center cursor-pointer ">
        <FaYoutube className="text-[#FF0000]" size={26} />
      </div>
      <div className="w-[40px] h-[40px] bg-[white] rounded-[100%] flex items-center justify-center cursor-pointer ">
        <FaInstagram size={26} />
      </div>
      <div className="w-[40px] h-[40px] bg-[white] rounded-[100%] flex items-center justify-center cursor-pointer ">
        <FaFacebookF className="text-[#4267B2]" size={26} />
      </div>
    </>
  );
}

export default FooterSocialIcon;
