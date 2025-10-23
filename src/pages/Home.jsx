// import HeroSlider from "../components/Heroslider";
import menu1 from "../assets/explore-menu-1.png";
import menu2 from "../assets/explore-menu-2.png";
import menu3 from "../assets/explore-menu-3.png";
import menu4 from "../assets/explore-menu-4.png";
import menu5 from "../assets/explore-menu-5.png";
import seller1 from "../assets/best-seller-1.png";
import seller2 from "../assets/best-seller-2.png";
import seller3 from "../assets/best-seller-3.png";
import seller4 from "../assets/best-seller-4.png";
import deal1 from "../assets/top-deal-1.png";
import deal2 from "../assets/top-deal-2.png";
import deal3 from "../assets/top-deal-3.png";
import deal4 from "../assets/top-deal-4.png";
import ExploreMenu from "../components/ExploreMenu";
import SectionName from "../components/SectionName";
import BestSeller from "../components/BestSeller";
import TopDeal from "../components/TopDeal";
import LastSection from "../components/LastSection";
import ExploreMenuSlider from "../components/ExploreMenuSlider";

const Home = function () {
  return (
    <section>
      {/* <HeroSlider interval={4000} /> */}

      <div className="mx-[20px]">
        <div className="flex justify-center items-center h-full">
          <button className="bg-primary text-white font-semibold w-[428px] py-[6px] px-[16px]">
            REORDER
          </button>
        </div>

        <div>
          <SectionName sectionname="EXPLORE MENU" viewall="VIEW ALL" />
          <div className="mt-[16px]">
                  <ExploreMenuSlider />
          </div>
        </div>

        <div>
          <SectionName sectionname="BEST SELLERS" />
          <div className="flex justify-between mt-[16px]">
            <BestSeller name="Krunch Burger" price="310" img={seller1} />
            <BestSeller name="Mighty Zinger" price="770" img={seller2} />
            <BestSeller name="Chicken & Chips" price="620" img={seller3} />
            <BestSeller name="Hot Wings Bucket" price="670" img={seller4} />
          </div>
        </div>

        <div>
          <SectionName sectionname="TOP DEALS" />
          <div className="flex justify-between mt-[16px]">
            <TopDeal
              img={deal1}
              name="Value Bucket"
              discription="Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded
          in-house. Rs. 50 from every bucket goes to the Mitao Bhook Foundation."
              price="2050"
            />
            <TopDeal
              img={deal2}
              name="Family Festival 3"
              discription="An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink"
              price="2590"
            />
            <TopDeal
              img={deal3}
              name="Xtreme Duo Box"
              discription="The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks"
              price="1560"
            />
            <TopDeal
              img={deal4}
              name="Crispy Duo Box"
              discription="Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks"
              price="1350"
            />
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
