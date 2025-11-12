import PageName from "../components/reuseable/PageName";
import AboutUsCard from "../components/aboutus/AboutUsCard";
import HistoryCard from "../components/aboutus/HistoryCard";
import AboutUsBucketSection from "../components/aboutus/AboutUsBucketSection";
import AboutUsFact from "../components/aboutus/AboutUsFact";
import AboutUsMitaoBhook from "../components/aboutus/AboutUsMitaoBhook";
import AboutLastSection from "../components/aboutus/AboutLastSection";

export default function About() {
  return (
    <section className="text-center mx-[12px] lg:mx-[32px] md:mx-[12px]">
      <PageName title="About Us" />
      <div className="bg-card">
        <AboutUsCard />
      </div>

      <div className="bg-card mt-[32px]">
        <HistoryCard />
      </div>

      <div className="mt-[70px] ">
        <p className="text-[25px] mb-[16px] lg:text-[32px] md:text-[28px] text-left font-bold">
          The Story of World’s Best Chicken
        </p>
        <AboutUsBucketSection />
      </div>
      <div className="bg-card py-[50px] mt-[70px] mx-[-12px] lg:mx-[-32px] md:mx-[-12px]">
        <div className="mx-[12px] lg:mx-[32px] md:mx-[12px]">
          <AboutUsFact />
        </div>
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
