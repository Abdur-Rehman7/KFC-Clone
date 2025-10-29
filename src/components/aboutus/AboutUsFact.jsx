import React from "react";
import fact1 from "./assets/fact-image-1.png";
import fact2 from "./assets/fact-image-2.png";
import fact3 from "./assets/fact-image-3.png";
import fact4 from "./assets/fact-image-4.png";

const AboutUsFact = (props) => {
  const facts = [
    {
      img: fact1,
      number: "1997",
      text: "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
    },
    {
      img: fact2,
      number: "133",
      text: "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
    },
    {
      img: fact3,
      number: "9",
      text: "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
    },
    {
      img: fact4,
      number: "9000+",
      text: "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
    },
  ];
  return (
    <>
      <p className="text-left text-text mb-[16px] text-[32px] font-semibold">
        Fast Facts about KFC Pakistan
      </p>

      <div className="grid grid-cols lg:grid-cols-4 md:grid-cols-2 gap-1">
        {facts.map((fact, index) => (
          <div key={index} className="px-[12px] mt-[16px]">
            <div className="pt-[50px] p-[15px]">
              <img
                className="mx-auto w-[120px] h-[102px]"
                src={fact.img}
                alt={`Fact ${index + 1}`}
              />
              <p>{fact.number}</p>
              <p>{fact.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUsFact;
