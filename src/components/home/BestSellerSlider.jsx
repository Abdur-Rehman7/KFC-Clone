import React from "react";
import BestSeller from "./BestSeller";
import img1 from "./assets/best-seller-1.png";
import img2 from "./assets/best-seller-2.png";
import img3 from "./assets/best-seller-3.png";
import img4 from "./assets/best-seller-4.png";
import img5 from "./assets/best-seller-5.png";

const BestSellerSlider = () => {
  const products = [
    { img: img1, name: "Zinger Burger", price: "450" },
    { img: img2, name: "Mighty Zinger", price: "620" },
    { img: img3, name: "Crispy Box", price: "870" },
    { img: img4, name: "Twister Wrap", price: "540" },
    { img: img5, name: "Krunch Combo", price: "590" },
    { img: img2, name: "Family Bucket", price: "1490" },
  ];

  return (
    <div className="w-full mx-auto">
      <div
        className="
          relative overflow-x-auto scroll-smooth whitespace-nowrap
          custom-scrollbarF
        "
      >
        <div className="inline-flex gap-5 items-end relative z-10">
          {products.map((item, i) => (
            <BestSeller
              key={i}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerSlider;
