import React from "react";

const AboutUsCard = (props) => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-12 gap-2 p-[35px]">
        {/* First column (col-lg-7 col-md-6) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-7 px-[12px]">
          <p className="font-semibold text-[16px] text-left mb-[16px]">
            KFC entered Pakistan in 1997 and since then, it’s been a journey
            full of excitement and Finger Lickin’ goodness! The first KFC
            restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi and
            now our Finger Lickin’ Chicken is available in 38 cities with over
            133 restaurants! Being the most loved fast food chain in Pakistan,
            KFC leaves no stone unturned to provide its customers the most
            delicious chicken and an excellent dining experience.
          </p>
        </div>

        {/* Second column (col-lg-5 col-md-6) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-primary text-[19px] px-[12px] font-bold text-white rounded-[5px]">
          <p className="py-[65px] px-[32px]">
            WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
            INGREDIENTS FROM TRUSTED SUPPLIERS
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
