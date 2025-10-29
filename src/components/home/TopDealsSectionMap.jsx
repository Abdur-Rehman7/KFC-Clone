import React from "react";
import TopDeal from "./TopDeal";
import deal1 from "./assets/top-deal-1.png";
import deal2 from "./assets/top-deal-2.png";
import deal3 from "./assets/top-deal-3.png";
import deal4 from "./assets/top-deal-4.png";

const TopDealsSectionMap = () => {
  const deals = [
    {
      img: deal1,
      name: "Value Bucket",
      discription:
        "Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded in-house. Rs. 50 from every bucket goes to the Mitao Bhook Foundation.",
      price: "2050",
    },
    {
      img: deal2,
      name: "Family Festival 3",
      discription:
        "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink.",
      price: "2590",
    },
    {
      img: deal3,
      name: "Xtreme Duo Box",
      discription:
        "The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks.",
      price: "1560",
    },
    {
      img: deal4,
      name: "Crispy Duo Box",
      discription:
        "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks.",
      price: "1350",
    },
  ];

  return (
    <div className="w-full mx-auto">
      {/* ✅ Horizontal scroll, no vertical overflow */}
      <div
        className="
          relative overflow-x-auto overflow-y-hidden
    scroll-smooth whitespace-nowrap
    snap-x snap-mandatory
    custom-scrollbar
        "
      >
        <div className="inline-flex gap-3 items-start relative z-10 mb-[30px]">
          {deals.map((deal, i) => (
            <TopDeal
              key={i}
              img={deal.img}
              name={deal.name}
              discription={deal.discription}
              price={deal.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDealsSectionMap;
