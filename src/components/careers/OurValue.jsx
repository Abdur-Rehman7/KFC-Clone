// OurValue.jsx
import ourvalue1 from "./assets/our-value-1.png";
import ourvalue2 from "./assets/our-value-2.png";
import ourvalue3 from "./assets/our-value-3.png";
import ourvalue4 from "./assets/our-value-4.png";
import ourvalue5 from "./assets/our-value-5.png";
import ourvalue6 from "./assets/our-value-6.png";
const OurValue = () => {
  const ourValues = [
    {
      img: ourvalue1,
      title: "Believe in All People",
      description:
        "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do.",
    },
    {
      img: ourvalue2,
      title: "Recognize",
      description:
        "We look for ways to recognize our people for their courage and celebrate all achievements – big and small. We never forget to have fun doing it!",
    },
    {
      img: ourvalue3,
      title: "Run Great Restaurants",
      description:
        "We are passionate about our food and take pride in creating a great experience for our guests. We do things the right way, even when no one is looking.",
    },
    {
      img: ourvalue4,
      title: "Go for Breakthrough",
      description:
        "We always strive to do and be our best. We work with a sense of urgency and ownership in our brand. We take smart risks to achieve amazing results!",
    },
    {
      img: ourvalue5,
      title: "Build Know How",
      description:
        "We always seek to learn more and share our know how with others. Everyone can grow here.",
    },
    {
      img: ourvalue6,
      title: "Work as a Team",
      description:
        "We help and support each other to grow and achieve more. We benefit from healthy debate to get the best outcomes. We win together as the KFC family!",
    },
  ];
  return (
    <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3">
      {ourValues.map((value, index) => (
        <div key={index} className="bg-body text-left px-[12px] pt-[48px]">
          <img className="w-full" src={value.img} alt={value.title} />
          <p className="text-[32px] font-semiold mt-[30px] mb-[15px]">
            {value.title}
          </p>
          <p className="mb-[16px]">{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurValue;
