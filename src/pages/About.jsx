import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import AboutUsCard from "../components/aboutus/AboutUsCard";
import HistoryCard from "../components/aboutus/HistoryCard";
import AboutUsBucketSection from "../components/aboutus/AboutUsBucketSection";
import AboutUsFact from "../components/aboutus/AboutUsFact";
import AboutUsMitaoBhook from "../components/aboutus/AboutUsMitaoBhook";
import AboutLastSection from "../components/aboutus/AboutLastSection";

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
        <AboutUsCard />
      </div>

      <div className="bg-card mt-[32px]">
        <HistoryCard />
      </div>

      <div className="mt-[70px] ">
        <p className="text-[24px] mb-[16px] lg:text-[38px] text-left font-bold">
          The Story of World’s Best Chicken
        </p>
        <AboutUsBucketSection />
      </div>

      <div className="bg-card py-[50px] mt-[70px]">
        <AboutUsFact />
      </div>
      <div className="bg-card py-[40px] px-[15px] lg:px-[110px] mt-[70px] mb-[20px]">
        <AboutUsMitaoBhook />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <AboutLastSection />
      </div>
    </section>
  );
}
