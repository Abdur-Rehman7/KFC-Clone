import { useState } from "react";
import TopDeal from "../components/home/TopDeal";
import menu1 from "../assets/explore-menu-page-1.png";
import menu2 from "../assets/explore-menu-page-2.png";
import menu3 from "../assets/explore-menu-page-3.png";
import menu4 from "../assets/explore-menu-page-4.png";
import menu5 from "../assets/explore-menu-page-5.png";
import menu6 from "../assets/explore-menu-page-6.png";
import menu7 from "../assets/explore-menu-page-7.png";
import menu8 from "../assets/explore-menu-page-8.png";
import menu9 from "../assets/explore-menu-page-9.png";
import menu10 from "../assets/explore-menu-page-10.png";
import menu11 from "../assets/explore-menu-page-11.png";
import menu12 from "../assets/explore-menu-page-12.png";
import menu13 from "../assets/explore-menu-page-13.png";
import menu14 from "../assets/explore-menu-page-14.png";
import menu15 from "../assets/explore-menu-page-15.png";
import menu16 from "../assets/explore-menu-page-16.png";
import menu17 from "../assets/explore-menu-page-17.png";
import menu18 from "../assets/explore-menu-page-18.png";
import menu19 from "../assets/explore-menu-page-19.png";
import menu20 from "../assets/explore-menu-page-20.png";
import menu21 from "../assets/explore-menu-page-21.png";
import menu22 from "../assets/explore-menu-page-22.png";
import menu23 from "../assets/explore-menu-page-23.png";
import menu24 from "../assets/explore-menu-page-24.png";
import menu25 from "../assets/explore-menu-page-25.png";
import menu26 from "../assets/explore-menu-page-26.png";
import menu27 from "../assets/explore-menu-page-27.png";
import menu28 from "../assets/explore-menu-page-28.png";
import menu29 from "../assets/explore-menu-page-29.png";
import menu30 from "../assets/explore-menu-page-30.png";
import menu31 from "../assets/explore-menu-page-31.png";
import menu32 from "../assets/explore-menu-page-32.png";
import menu33 from "../assets/explore-menu-page-33.png";
import menu34 from "../assets/explore-menu-page-34.png";
import SectionName from "../components/home/SectionName";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    {
      id: 1,
      title: "Promotion",
      deals: [
        {
          img: menu1,
          name: "Ramen Wings",
          discription:
            "Hot and crispy 8 pcs of wings glazed in spicy Ramen Sauce and topped with crunchy noodles",
          price: "775",
        },
        {
          img: menu2,
          name: "Zinger Got Wings",
          discription:
            "2 Zinger Burgers + 2 Regular Drinks + Wings Bucket (6 pcs)",
          price: "1250",
        },
      ],
    },
    {
      id: 2,
      title: "Everyday Value",
      deals: [
        {
          img: menu3,
          name: "Krunch Burger",
          discription:
            "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
          price: "310",
        },
        {
          img: menu4,
          name: "Zingeratha",
          discription:
            "Tender boneless strips, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
          price: "390",
        },
        {
          img: menu5,
          name: "Rice & Spice",
          discription:
            "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
          price: "390",
        },
        {
          img: menu6,
          name: "Boneless Strips",
          discription:
            "3 Chicken strips for a hassle free boneless experience ",
          price: "440",
        },
        {
          img: menu7,
          name: "Twister",
          discription:
            "Tender boneless strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla  ",
          price: "440",
        },
        {
          img: menu8,
          name: "Chicken & Chips",
          discription:
            "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
          price: "620",
        },
        {
          img: menu9,
          name: "3 Pcs Chicken",
          discription: "3 pieces of Hot and Crispy Fried Chicken",
          price: "690",
        },
        {
          img: menu10,
          name: "Krunch Burger + Drink",
          discription: "1 Krunch burger + 1 Regular drink",
          price: "410",
        },
        {
          img: menu11,
          name: "Krunch Combo",
          discription: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
          price: "590",
        },
        {
          img: menu12,
          name: "Krunch Chicken Combo",
          discription:
            "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 Regular drink",
          price: "620",
        },
        {
          img: menu13,
          name: "Twister Combo",
          discription: "Twister + 1 Regular fries + 1 Regular drink ",
          price: "710",
        },
      ],
    },
    {
      id: 3,
      title: "Ala-Carte-&-Combos",
      deals: [
        {
          img: menu14,
          name: "Zinger Burger",
          discription:
            "Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
          price: "600",
        },
        {
          img: menu15,
          name: "Zinger Stacker",
          discription:
            "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a corn meal bun",
          price: "660",
        },
        {
          img: menu16,
          name: "Kentucky Burger",
          discription:
            "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
          price: "660",
        },
        {
          img: menu17,
          name: "Mighty Zinger",
          discription:
            "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
          price: "770",
        },
        {
          img: menu18,
          name: "Zinger Combo",
          discription: "Zinger burger + 1 Regular fries+ 1 Regular drink",
          price: "910",
        },
        {
          img: menu19,
          name: "Zinger Stacker Combo",
          discription: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
          price: "950",
        },
        {
          img: menu20,
          name: "Kentucky Burger Combo",
          discription: "Kentucky burger + 1 Regular fries+ 1 Regular drink",
          price: "950",
        },
        {
          img: menu21,
          name: "Mighty Zinger Combo",
          discription: "Mighty Zinger+ 1 Regular fries + 1 Regular drink ",
          price: "1050",
        },
      ],
    },
    {
      id: 4,
      title: "Signature-Boxes",
      deals: [
        {
          img: menu22,
          name: "Crispy Box",
          discription:
            "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
          price: "750",
        },
        {
          img: menu23,
          name: "Strips Chips N' Dips",
          discription:
            "4 Boneless Strips, Regular Fries, 2 Dips (Smoke Show & Ranch) and a Drink",
          price: "750",
        },
        {
          img: menu24,
          name: "Wow Box",
          discription:
            "Feel good with 1 Signature Zinger + 1 pc Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
          price: "1050",
        },
        {
          img: menu25,
          name: "Crispy Duo Box",
          discription:
            "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
          price: "1350",
        },
        {
          img: menu26,
          name: "Xtreme Duo Box",
          discription:
            "The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
          price: "1560",
        },
      ],
    },
    {
      id: 5,
      title: "Sharing",
      deals: [
        {
          img: menu27,
          name: "Value Bucket",
          discription:
            "Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded in-house. Rs. 50 from every bucket goes to the Mitao Bhook Foundation.",
          price: "2050",
        },
        {
          img: menu28,
          name: "Family Festival 1",
          discription:
            "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
          price: "2190",
        },
        {
          img: menu29,
          name: "Family Festival 2",
          discription:
            "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
          price: "2390",
        },
        {
          img: menu30,
          name: "Family Festival 3",
          discription:
            "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
          price: "2590",
        },
      ],
    },
    {
      id: 6,
      title: "Snacks-&-Beverages",
      deals: [
        {
          img: menu31,
          name: "Corn On The Cob",
          discription:
            "Boiled sweet corn brushed with butter",
          price: "290",
        },
        {
          img: menu32,
          name: "One Piece Chicken ",
          discription:
            "1 piece of Hot & Crispy Fried Chicken",
          price: "320",
        },
        {
          img: menu33,
          name: "Hot Shots",
          discription:
            "9 Pcs of hand-breaded Hot Shots",
          price: "480",
        },
        {
          img: menu34,
          name: "Chicky Meal 1 ",
          discription:
            "Krunch + Chicky Fries + Drink",
          price: "550",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] mx-[5px] lg:mx-[32px] md:mx-[24px]">
      {/* Main Content */}
      <article className=" p-5 overflow-auto">
        <div className="mt-8 space-y-12">
          {sections.map((section) => (
            <div key={section.id}>
              <SectionName sectionname={section.title} />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                {section.deals.map((deal, index) => (
                  <TopDeal
                    cardsize="w-auto lg:w-auto lg:h-auto md:w-auto md:h-auto bg-card mt-8 relative rounded-lg shadow-sm group"
                    key={index}
                    img={deal.img}
                    name={deal.name}
                    discription={deal.discription}
                    price={deal.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Sidebar (Large screens only) */}
      <nav className="hidden lg:block bg-gray-300 p-5 h-screen fixed right-5 top-20 overflow-auto w-1/3">
        <p className="font-semibold mb-4">Sidebar content</p>
        <ul className="space-y-2">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </nav>

      {/* Accordion (Small screens only) */}
      <div className="block lg:hidden fixed bottom-0 left-0 w-full bg-gray-300 border-t shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center"
        >
          <span>Menu</span>
          <span>{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
          <div className="p-5 border-t border-gray-400">
            <ul className="space-y-2">
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
