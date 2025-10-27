import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import kfcowner from "../assets/kfc-history.png";

export default function About() {
  return (
    <section className="text-center mx-[32px]">
      <div className="relative flex items-center justify-center mb-[35px]">
        {/* Arrow - positioned on the left */}
        <div className="absolute left-0 top-2">
          <Link
            to="/"
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary"
          >
            <IoIosArrowBack size={20} />
          </Link>
        </div>
        <span className="text-4xl font-bold text-text">About Us</span>
      </div>

      <div className="bg-card">
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
      </div>

      <div className="bg-card mt-[32px]">
        <div className="grid grid-cols-12 gap-2 p-[35px]">
          <div className="col-span-12 md:col-span-4 lg:col-span-4 px-[12px] font-bold text-white rounded-[5px]">
            <img className="w-[full]" src={kfcowner} />
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-8 px-[12px] flex flex-col justify-center">
            <p className="text-[30px] font-bold text-center lg:text-left  ">History</p>
            <p className="font-semibold text-[16px] text-left mb-[16px]">
              It all started with Colonel Harland Sanders, the man who convinced
              the world by saying “We do chicken right!” Sanders took a great
              deal of time perfecting his iconic secret recipe of 11 herbs and
              spices, a legacy he’s brought to the world through KFC’s 10,000+
              restaurants. Starting from outside of his gas station in Korbin,
              Kentucky to being a globally recognized face, we owe our success
              to the Colonel’s hard work and passion for sharing his love for
              chicken with the world!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
