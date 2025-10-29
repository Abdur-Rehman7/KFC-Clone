import lastSection1 from "./assets/about-us-last-section-1.png";
import lastSection2 from "./assets/about-us-last-section-2.png";
import lastSection3 from "./assets/about-us-last-section-3.png";
import lastSection4 from "./assets/about-us-last-section-4.png";

function AboutLastSection() {
  const lastSections = [
    {
      img: lastSection1,
      text: "Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students",
    },
    {
      img: lastSection2,
      text: "Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students",
    },
    {
      img: lastSection3,
      text: "Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students",
    },
    {
      img: lastSection4,
      text: "Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students",
    },
  ];
  return (
    <>
      {lastSections.map((item, index) => (
        <div key={index} className="bg-card p-[40px]">
          <img
            className="mx-auto"
            src={item.img}
            alt={`Section ${index + 1}`}
          />
          <p className="mt-[20px] mb-[16px] text-text text-[15px]">
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutLastSection;
