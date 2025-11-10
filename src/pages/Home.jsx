import HeroSlider from "../components/home/HeroSlider";
import SectionName from "../components/home/SectionName";
import LastSection from "../components/home/LastSection";
import ExploreMenuSlider from "../components/home/ExploreMenuSlider";
import BestSellerSlider from "../components/home/BestSellerSlider";
import ExploreMenuGrid from "../components/home/ExploreMenuGrid";
import TopDealsSectionMap from "../components/home/TopDealsSectionMap";

const Home = function () {
  return (
    <section>
      <HeroSlider interval={4000} />

      <div className="mx-[10px]">
        <div className="flex justify-center items-center h-full">
          <button className="bg-primary text-white font-semibold w-[428px] py-[6px] px-[16px]">
            REORDER
          </button>
        </div>

        <div>
          {/* Section Header */}
          <SectionName sectionname="EXPLORE MENU" viewall="VIEW ALL" />

          {/* Desktop View → Show Slider */}
          <div className="hidden lg:block mt-[16px]">
            <ExploreMenuSlider />
          </div>

          {/* Tablet & Mobile View → Show Grid */}
          <div className="block lg:hidden mt-[16px]">
            <ExploreMenuGrid />
          </div>
        </div>

        <div className="my-[40px]">
          <SectionName sectionname="BEST SELLERS" />
          <div className="mt-[16px]">
            <BestSellerSlider />
          </div>
        </div>

        <div className="my-[40px]">
          <SectionName sectionname="TOP DEALS" />
          <div className="mt-[16px]">
            <TopDealsSectionMap />
          </div>
        </div>
      </div>
      <div>
        <LastSection />
      </div>
    </section>
  );
};

export default Home;
