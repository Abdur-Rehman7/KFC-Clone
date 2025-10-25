import HeroSlider from "../components/Heroslider";
import SectionName from "../components/SectionName";
import LastSection from "../components/LastSection";
import ExploreMenuSlider from "../components/ExploreMenuSlider";
import BestSellerSlider from "../components/BestSellerSlider";
import ExploreMenuGrid from "../components/ExploreMenuGrid";
import TopDealsSectionMap from "../components/TopDealsSectionMap";

const Home = function () {
  return (
    <section>
      {/* <HeroSlider interval={4000} /> */}

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
