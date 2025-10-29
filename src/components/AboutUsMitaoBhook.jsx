import React from "react";
import mitaobhookimg from "../assets/about-us-mitaobhook.png";

const AboutUsMitaoBhook = (props) => {
  return (
    <>
      <img
        className="mx-auto w-[222px] h-[129px] xl:w-[430px] xl:h-[250px] lg:w-[285px] lg:h-[165px] md:w-[400px] md:h-[230px] "
        src={mitaobhookimg}
        alt=""
      />
      <p className="mt-[20px] mb-[16px] text-text text-[15px]">
        is KFC’s pledge to give back to society. Over the years we have made it
        our mission to spread the message of hope, bringing positive change in
        the lives of people and providing better living standards. Mitao Bhook
        strengthens the community on the pillars of Education, Inclusion &
        Diversity.
      </p>
    </>
  );
};

export default AboutUsMitaoBhook;
