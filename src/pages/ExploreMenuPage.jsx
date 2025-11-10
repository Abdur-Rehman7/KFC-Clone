import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import menu35 from "../assets/explore-menu-page-35.png";
import menu36 from "../assets/explore-menu-page-36.png";
import menu37 from "../assets/explore-menu-page-37.png";
import menu38 from "../assets/explore-menu-page-38.png";
import menu39 from "../assets/explore-menu-page-39.png";
import menu40 from "../assets/explore-menu-page-40.png";
import menu41 from "../assets/explore-menu-page-41.png";
import menu42 from "../assets/explore-menu-page-42.png";
import menu43 from "../assets/explore-menu-page-43.png";
import menu44 from "../assets/explore-menu-page-44.png";
import menu45 from "../assets/explore-menu-page-45.png";
import menu46 from "../assets/explore-menu-page-46.png";
import menu47 from "../assets/explore-menu-page-47.png";
import menu48 from "../assets/explore-menu-page-48.png";
import menu49 from "../assets/explore-menu-page-49.png";
import menu50 from "../assets/explore-menu-page-50.png";
import menu51 from "../assets/explore-menu-page-51.png";
import menu52 from "../assets/explore-menu-page-52.png";
import menu53 from "../assets/explore-menu-page-53.png";
import menu54 from "../assets/explore-menu-page-54.png";
import menu55 from "../assets/explore-menu-page-55.png";
import menu56 from "../assets/explore-menu-page-56.png";
import menu57 from "../assets/explore-menu-page-57.png";
import menu58 from "../assets/explore-menu-page-58.png";
import menu59 from "../assets/explore-menu-page-59.png";
import menu60 from "../assets/explore-menu-page-60.png";
import menu61 from "../assets/explore-menu-page-61.png";
import menu62 from "../assets/explore-menu-page-62.png";
import menu63 from "../assets/explore-menu-page-63.png";
import menu64 from "../assets/explore-menu-page-64.png";
import sidenav from "../assets/sidenav-img.png";
import { MdArrowForwardIos } from "react-icons/md";
import SectionName from "../components/home/SectionName";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function ExploreMenuPage() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]);
  const cartItems = useSelector((state) => state.cart.items || []);
   const dispatch = useDispatch();
    

  const sections = [
    {
      id: 1,
      title: "Promotion",
      deals: [
        {
          id: 5,
          img: menu1,
          name: "Ramen Wings",
          discription:
            "Hot and crispy 8 pcs of wings glazed in spicy Ramen Sauce and topped with crunchy noodles",
          price: "775",
        },
        {
          id: 6,
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
          id: 7,
          img: menu3,
          name: "Krunch Burger",
          discription:
            "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
          price: "310",
        },
        {
          id: 8,
          img: menu4,
          name: "Zingeratha",
          discription:
            "Tender boneless strips, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
          price: "390",
        },
        {
          id: 9,
          img: menu5,
          name: "Rice & Spice",
          discription:
            "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
          price: "390",
        },
        {
          id: 10,
          img: menu6,
          name: "Boneless Strips",
          discription:
            "3 Chicken strips for a hassle free boneless experience ",
          price: "440",
        },
        {
          id: 11,
          img: menu7,
          name: "Twister",
          discription:
            "Tender boneless strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla  ",
          price: "440",
        },
        {
          id: 12,
          img: menu8,
          name: "Chicken & Chips",
          discription:
            "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
          price: "620",
        },
        {
          id: 13,
          img: menu9,
          name: "3 Pcs Chicken",
          discription: "3 pieces of Hot and Crispy Fried Chicken",
          price: "690",
        },
        {
          id: 14,
          img: menu10,
          name: "Krunch Burger + Drink",
          discription: "1 Krunch burger + 1 Regular drink",
          price: "410",
        },
        {
          id: 15,
          img: menu11,
          name: "Krunch Combo",
          discription: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
          price: "590",
        },
        {
          id: 16,
          img: menu12,
          name: "Krunch Chicken Combo",
          discription:
            "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 Regular drink",
          price: "620",
        },
        {
          id: 17,
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
          id: 18,
          img: menu14,
          name: "Zinger Burger",
          discription:
            "Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
          price: "600",
        },
        {
          id: 19,
          img: menu15,
          name: "Zinger Stacker",
          discription:
            "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a corn meal bun",
          price: "660",
        },
        {
          id: 20,
          img: menu16,
          name: "Kentucky Burger",
          discription:
            "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
          price: "660",
        },
        {
          id: 21,
          img: menu17,
          name: "Mighty Zinger",
          discription:
            "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
          price: "770",
        },
        {
          id: 22,
          img: menu18,
          name: "Zinger Combo",
          discription: "Zinger burger + 1 Regular fries+ 1 Regular drink",
          price: "910",
        },
        {
          id: 23,
          img: menu19,
          name: "Zinger Stacker Combo",
          discription: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
          price: "950",
        },
        {
          id: 24,
          img: menu20,
          name: "Kentucky Burger Combo",
          discription: "Kentucky burger + 1 Regular fries+ 1 Regular drink",
          price: "950",
        },
        {
          id: 25,
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
          id: 26,
          img: menu22,
          name: "Crispy Box",
          discription:
            "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
          price: "750",
        },
        {
          id: 27,
          img: menu23,
          name: "Strips Chips N' Dips",
          discription:
            "4 Boneless Strips, Regular Fries, 2 Dips (Smoke Show & Ranch) and a Drink",
          price: "750",
        },
        {
          id: 28,
          img: menu24,
          name: "Wow Box",
          discription:
            "Feel good with 1 Signature Zinger + 1 pc Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
          price: "1050",
        },
        {
          id: 29,
          img: menu25,
          name: "Crispy Duo Box",
          discription:
            "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
          price: "1350",
        },
        {
          id: 30,
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
          id: 31,
          img: menu27,
          name: "Value Bucket",
          discription:
            "Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded in-house. Rs. 50 from every bucket goes to the Mitao Bhook Foundation.",
          price: "2050",
        },
        {
          id: 32,
          img: menu28,
          name: "Family Festival 1",
          discription:
            "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
          price: "2190",
        },
        {
          id: 33,
          img: menu29,
          name: "Family Festival 2",
          discription:
            "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
          price: "2390",
        },
        {
          id: 34,
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
          id: 35,
          img: menu31,
          name: "Corn On The Cob",
          discription: "Boiled sweet corn brushed with butter",
          price: "290",
        },
        {
          id: 36,
          img: menu32,
          name: "One Piece Chicken ",
          discription: "1 piece of Hot & Crispy Fried Chicken",
          price: "320",
        },
        {
          id: 37,
          img: menu33,
          name: "Hot Shots",
          discription: "9 Pcs of hand-breaded Hot Shots",
          price: "480",
        },
        {
          id: 38,
          img: menu34,
          name: "Chicky Meal 1 ",
          discription: "Krunch + Chicky Fries + Drink",
          price: "550",
        },
        {
          id: 39,
          img: menu35,
          name: "Chicky Meal 2",
          discription: "4 Nuggets + 1 CHICKY FRIES+ Slice",
          price: "290",
        },
        {
          id: 40,
          img: menu36,
          name: "Plain Nuggets",
          discription:
            "1Plain Nuggets: Indulge in 6 pieces of tender and delicious chicken nuggets",
          price: "580",
        },
        {
          id: 41,
          img: menu37,
          name: "Buffalo Wings",
          discription:
            "8 Pcs of Hot Wings coated with a spicy Buffalo sauce, topped with chili flakes",
          price: "640",
        },
        {
          id: 42,
          img: menu38,
          name: "Thai Sweet Chili Wings",
          discription:
            "8 Pcs of Hot Wings coated with a Sweet Thai Chili sauce, topped with sesame seeds",
          price: "640",
        },
        {
          id: 43,
          img: menu39,
          name: "Tangy Masala Wings",
          discription:
            "8 pcs of Hot Wings coated in a sweet and tangy sauce, dusted with chaat masala",
          price: "640",
        },
        {
          id: 44,
          img: menu40,
          name: "Salsa Sprinkle Wings",
          discription: "8 Pcs Salsa Sprinkle Wings Bucket",
          price: "640",
        },
        {
          id: 45,
          img: menu41,
          name: "Snack Bucket",
          discription:
            "4 Hot Wings + 4 Hot Shots + 2 Strips and 1 Dip. Satisfy your cravings with our snack bucket.",
          price: "650",
        },
        {
          id: 46,
          img: menu42,
          name: "Hot Wings Bucket",
          discription: "10 Pcs of our Signature Hot & Crispy Wings",
          price: "670",
        },
        {
          id: 47,
          img: menu43,
          name: "Fries",
          discription: "Crispy and Golden Fries",
          price: "340",
        },
        {
          id: 48,
          img: menu44,
          name: "Masala Fries",
          discription: "Masala Crispy and Golden Fries",
          price: "360",
        },
        {
          id: 49,
          img: menu45,
          name: "Fries Bucket ",
          discription: "Fries Bucket Without Dip",
          price: "450",
        },
        {
          id: 50,
          img: menu46,
          name: "Fries Bucket with Dip",
          discription: "Fries Bucket with Dip ",
          price: "470",
        },
        {
          id: 51,
          img: menu47,
          name: "Masala Fries Bucket",
          discription: "Masala Crispy and Golden Fries Bucket",
          price: "490",
        },
        {
          id: 52,
          img: menu48,
          name: "Cheesy Chicken Loaded Fries",
          discription:
            "Topped with crispy hot shots, cheese sauce and spicy jalapeños—it's the ultimate flavor-packed treat!",
          price: "650",
        },
        {
          id: 53,
          img: menu49,
          name: "Coleslaw",
          discription: "Sliced cabbage and carrots tossed in mayo",
          price: "150",
        },
        {
          id: 54,
          img: menu50,
          name: "Dinner Roll",
          discription: "Soft and fluffy, it complements any meal perfectly",
          price: "50",
        },
        {
          id: 55,
          img: menu51,
          name: "Mayo Dip",
          discription: "Creamy mayo for your dipping needs",
          price: "75",
        },
        {
          id: 56,
          img: menu52,
          name: "Vietnamese Dip",
          discription:
            "Our spicy and sour signature sauce. Pair it with our fried chicken and fries for the win",
          price: "75",
        },
        {
          id: 57,
          img: menu53,
          name: "Garlic Mayo",
          discription: "Creamy Garlic Mayo Dip served fresh in a small cup",
          price: "75",
        },
        {
          id: 58,
          img: menu54,
          name: "Creamy Ranch",
          discription: "Smooth and tangy Creamy Ranch Dip served with meals",
          price: "75",
        },
        {
          id: 59,
          img: menu55,
          name: "Spicy Mayo",
          discription: "Spicy Mayo Dip with creamy texture and fiery flavor",
          price: "100",
        },
        {
          id: 60,
          img: menu56,
          name: "Smoke Show",
          discription: "Bold and smoky flavored Smoke Show Dip in a cup",
          price: "75",
        },
        {
          id: 61,
          img: menu57,
          name: "Mineral Water 500ml",
          discription:
            "Mineral Water 500ml: Stay hydrated with our refreshing and pure mineral water in a convenient 500ml bottle",
          price: "90",
        },
        {
          id: 62,
          img: menu58,
          name: "Pepsi Regular",
          discription:
            "Quench your thirst with the classic taste of Pepsi in a regular-sized bottle 345ml",
          price: "180",
        },
        {
          id: 63,
          img: menu59,
          name: "7UP Regular",
          discription:
            "Experience the crisp and refreshing taste of 7UP in a regular-sized bottle 345ml",
          price: "180",
        },
        {
          id: 64,
          img: menu60,
          name: "Mirinda Regular",
          discription:
            "Mirinda Regular: Satisfy your taste buds with the vibrant and fizzy flavor of Mirinda in a regular-sized bottle 345ml",
          price: "180",
        },
        {
          id: 65,
          img: menu61,
          name: "Sting Berry Blast",
          discription:
            "Power up with the bold, electrifying taste of Sting energy drink in a 345ml bottle.",
          price: "180",
        },
        {
          id: 66,
          img: menu62,
          name: "Mountain Dew Regular",
          discription:
            "Energize yourself with the bold and exhilarating taste of Mountain Dew in a regular-sized bottle 345ml",
          price: "180",
        },
        {
          id: 67,
          img: menu63,
          name: "7UP Mint",
          discription:
            "Enjoy the refreshing burst of lemon-lime with a cool mint twist in a 345ml bottle.",
          price: "180",
        },
        {
          id: 68,
          img: menu64,
          name: "1.5 Ltr Drink",
          discription:
            "Get a large serving of refreshment with our 1.5 Ltr Drink. Perfect for sharing.",
          price: "250",
        },
      ],
    },
    {
      id: 69,
      title: "Midnight (Start at 12 am)",
      deals: [
        {
          id: 1,
          img: menu27,
          name: "Value Bucket",
          discription:
            "Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded in-house. Rs. 50 from every bucket goes to the Mitao Bhook Foundation.",
          price: "2050",
        },
        {
          id: 70,
          img: menu28,
          name: "Family Festival 1",
          discription:
            "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
          price: "2190",
        },
        {
          id: 71,
          img: menu29,
          name: "Family Festival 2",
          discription:
            "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
          price: "2390",
        },
      ],
    },
  ];

  // 🧭 Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let current = "";

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop - 150 &&
            scrollPosition < offsetTop + offsetHeight - 150
          ) {
            current = sections[index].title;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // 🪄 Smooth scroll on click
  const handleScrollToSection = (index) => {
    const section = sectionRefs.current[index];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();

  const handleGoToBucket = () => {
    navigate("/bucket"); // 👈 navigates to the Contact page
  };

  return (
    <div className="min-h-screen relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] mx-[5px] lg:mx-[32px] md:mx-[24px]">
      {/* 🔝 Scroll-Tracking Header */}
      <div className="fixed top-[64px] left-0 w-full bg-card shadow-md z-40 p-4">
        {/* ↓ Adjusted position so it sits below layout Navbar */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <h1 className="font-bold text-lg text-text"> Explore Menu</h1>

          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleScrollToSection(index)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap
              ${
                activeSection === section.title
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              >
                {section.title.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 📰 Main Content */}
      <article className="p-5 overflow-auto mt-[30px]">
        {/* ↑ 64px navbar + ~76px header = 140px */}
        <div className="mt-8 space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <SectionName sectionname={section.title} />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                {section.deals.map((deal, i) => (
                  <TopDeal
                    key={i}
                    id={deal.id}
                    cardsize="w-auto lg:w-auto lg:h-auto md:w-auto md:h-auto bg-card mt-8 relative rounded-lg shadow-sm group"
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

      {/* 🧭 Sidebar */}
      <nav className="hidden lg:block h-screen fixed right-5 top-[140px] bg-card overflow-auto w-1/3">
        <div className="flex  justify-between border-b border-primary p-3 ">
          <p className="font-semibold text-[20px]">Order Details</p>
          <div className="flex flex-row absolute top-0 right-5 gap-[7px]">
            <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
            <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
            <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center m-4 shadow-md rounded p-[16px] pb-[48px] px-[10px]">
            <img src={sidenav} alt="empty bucket" />
            <p className="mt-[24px] mb-[8px] text-center font-bold text-[22px]">
              You haven’t added any items in bucket yet
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 m-4 h-[409px] overflow-y-auto">
            {cartItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-light p-2 rounded-md shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[50px] h-[50px]"
                  />
                  <div>
                    <p className="font-semibold text-[15px]">{item.name}</p>
                    <p className="text-sm text-gray-600">Rs {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
  <button
    onClick={() => dispatch(removeFromCart(item.id))}
    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
  >
    🗑️
  </button>
  <p className="font-semibold text-[18px]">
    Rs {item.price * item.quantity}
  </p>
</div>

              </div>
            ))}
          </div>
        )}

        <div className="fixed bottom-0  w-1/3 bg-primary border-t rounded-t-lg shadow-md">
          <button
            onClick={handleGoToBucket}
            className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center"
          >
            <p className="text-white ">
              0 Item <span className="font-bold text-[22px]"> | Rs 0</span>
            </p>
            <p className="flex gap-2 font-bold text-[22px] text-white">
              Checkout
              <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center mt-[5px]">
                <MdArrowForwardIos size={18} className="text-black bold " />
              </span>
            </p>
          </button>
        </div>
      </nav>

      {/* 📱 Accordion */}
      <div className="block lg:hidden fixed bottom-0 left-0 w-full bg-primary border-t shadow-md">
        <button
          onClick={handleGoToBucket}
          className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center"
        >
          <p className="text-white ">
            0 Item <span className="font-bold text-[22px]"> | Rs 0</span>
          </p>
          <p className="flex gap-2 font-bold text-[22px] text-white">
            Checkout
            <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center mt-[5px]">
              <MdArrowForwardIos size={18} className="text-black bold " />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
}
