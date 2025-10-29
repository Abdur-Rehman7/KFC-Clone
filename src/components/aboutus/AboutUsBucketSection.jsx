import React from "react";
import bucketarrow from "./assets/about-us-basket-arrow.png";
import "./About.css";
import AboutUsBucket from "./AboutUsBucket";

const AboutUsBucketSection = (props) => {
  const aboutUsData = [
    { year: "1890", description: "Harland Sanders was born" },
    {
      year: "1930",
      description:
        "Sanders Court & Cafe was opened in front of his gas station in Corbin Kentucky",
    },
    {
      year: "1940",
      description:
        "Colonel Sanders develops the Original Recipe from 11 secret herbs and spices",
    },
    {
      year: "1952",
      description:
        "The Colonel begins franchising his business travelling from town to town and cooking for restaurant owners",
    },
    {
      year: "1957",
      description: "Kentucky Fried Chicken is first sold in buckets",
    },
    {
      year: "1964",
      description: "More than 600 franchised outlets in the USA, Canda and UK",
    },
    { year: "1974", description: "KFC first launches in Kuwait" },
    {
      year: "1980",
      description:
        "Colonel Sanders passes away at the age of 90. His legacy lives on.",
    },
    {
      year: "Today",
      description:
        "Today we have more than 25,000 KFC restaurants in over 145 countries and territories around the world.",
    },
  ];
  return (
    <>
      <div className="flex justify-center lg:justify-between md:justify-between sm:justify-between w-full">
        <div
          className="
      grid gap-4 grid-cols-1 xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center w-full"
        >
          {aboutUsData.map((item, index) => (
            <div key={index} className="relative">
              {/* Bucket */}
              <AboutUsBucket year={item.year} discription={item.description} />

              {index !== aboutUsData.length - 1 && (
                <img
                  src={bucketarrow}
                  alt="arrow"
                  className="absolute top-1/2 right-[-15px] hidden lg:block md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsBucketSection;
