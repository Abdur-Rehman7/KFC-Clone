import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import sidenav from "../assets/sidenav-img.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/bucket-img-1.png";
import img2 from "../assets/bucket-img-2.png";
import img3 from "../assets/bucket-img-3.png";
import img4 from "../assets/bucket-img-4.png";
import img5 from "../assets/bucket-img-5.png";
import img6 from "../assets/bucket-img-6.png";
import img7 from "../assets/bucket-img-7.png";
import img8 from "../assets/bucket-img-8.png";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { useState, useEffect } from "react";

const Bucket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = totalPrice * 0.16; // 16% tax
  // const grandTotal = totalPrice + tax;
  const handleAddToBucket = (item) => {
    dispatch(addToCart(item));
    // The list will auto-update from useEffect when cartItems change
  };

  const handleGoToexploremenu = () => {
    navigate("/exploremenu"); // 👈 navigates to the Contact page
  };
  const [suggestedItems, setSuggestedItems] = useState([]);

  useEffect(() => {
    // Base items list (same as your original)
    const allItems = [
      { id: 1, name: "Corn On The Cob (1 Pc)", price: 290, img: img1 },
      { id: 2, name: "One Piece Chicken (One Piece)", price: 290, img: img2 },
      { id: 3, name: "Hot Shots (9 Pcs )", price: 290, img: img3 },
      { id: 4, name: "Hot Wings Bucket (10 Pcs)", price: 290, img: img4 },
      { id: 5, name: "Coleslaw (Coleslaw)", price: 290, img: img5 },
      { id: 6, name: "Dinner Roll (1 Pc)", price: 290, img: img6 },
      { id: 7, name: "7UP Regular (7UP Regular)", price: 290, img: img7 },
      { id: 8, name: "Mountain Dew Regular (Regular)", price: 290, img: img8 },
    ];

    // Filter out items that are already in the cart
    const filtered = allItems.filter(
      (item) => !cartItems.some((cartItem) => cartItem.id === item.id)
    );

    setSuggestedItems(filtered);
  }, [cartItems]);

  return (
    <>
      <section className="text-center ">
        <div className="min-h-screen relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] mx-[5px] lg:mx-[32px] gap-10 md:mx-[24px]">
          {/* 📰 Main Content */}
          <article className="p-3  mt-[30px]">
            <div className="bg-card rounded-[5px] p-2 h-[409px] overflow-hidden flex flex-col">
              <div className="flex border-b border-text gap-3 p-3">
                <div className="">
                  <Link
                    to="/exploremenu"
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
                  >
                    <IoIosArrowBack size={20} />
                  </Link>
                </div>

                <p className="font-semibold text-[20px]">
                  Items from your Cart
                </p>
              </div>
              <div className="overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col justify-center items-center overflow-y-auto">
                    <img src={sidenav} />
                    <p className="mt-[24px] mb-[8px] text-center font-bold text-[22px]">
                      You haven’t added any items in bucket yet
                    </p>
                    <button
                      onClick={handleGoToexploremenu}
                      className="text-[20px] text-white font-bold mt-[10px] py-[10px] px-[38px] bg-primary rounded-[6px]"
                    >
                      EXPLORE MENU
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 overflow-y-auto p-4 h-full custom-scrollbar">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-contain"
                          />
                          <div className="text-left">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              Rs {item.price} × {item.quantity}
                            </p>
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
              </div>
            </div>
            <div>
              <div className="mt-[15px] pt-[10px] ">
                {suggestedItems.length > 0 && (
                  <>
                    <p className="text-[31px] font-semibold text-left mb-[16px]">
                      You may also like
                    </p>
                    <div className="w-auto lg:max-w-[600px] xl:max-w-[755px] overflow-x-auto scroll-smooth custom-scrollbar ">
                      <div className="flex gap-4 min-w-max">
                        {suggestedItems.map((item) => (
                          <div
                            key={item.id}
                            className="w-[180px] rounded-md flex flex-col text-left bg-card flex-shrink-0"
                          >
                            <img src={item.img} alt={item.name} />
                            <div className="p-[8px]">
                              <p className="h-[34px] mb-[8px]">{item.name}</p>
                              <div className="flex justify-between mt-4">
                                <p>Rs {item.price}</p>
                                <button
                                  onClick={() => handleAddToBucket(item)}
                                  className="bg-primary text-white text-[10px] font-semibold py-[5px] px-[8px] rounded-[4px]"
                                >
                                  + Add TO BUCKET
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="block lg:hidden mb-20">
              <div>
                <div className="flex flex-col justify-center bg-gray-200 m-4 shadow-md rounded p-[16px] pb-[48px] px-[10px] gap-4">
                  <p className="font-semibold text-left">
                    Special Instructions (Optional)
                  </p>
                  <textarea
                    placeholder="Add Cooking / Delivery Instructions (Optional)"
                    className="resize-y border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-14"
                  />

                  <div className="">
                    <div className="relative bg-gray-300 pt-6 rounded-md">
                      <span className="absolute left-2 top-10 -translate-y-3 font-bold text-black pointer-events-none">
                        +92&nbsp;|
                      </span>
                      <input
                        type="text"
                        id={1}
                        placeholder=""
                        className="pl-14 peer bg-gray-300 py-2 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
                      />
                      <label
                        htmlFor={1}
                        className="absolute left-3 top-2 text-text transition-all duration-200 
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
                    peer-focus:top-2 peer-focus:text-text"
                      >
                        Alternate Phone Number (3XXXXXXXXX)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-200 m-4 shadow-md rounded p-[16px] pb-[48px] px-[10px] gap-4">
                <p className="text-[31px] font-bold">Your Order</p>
                <div className="flex justify-between">
                  <p>Sub Total :</p>
                  <p>Rs {totalPrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Fee :</p>
                  <p>Rs 0</p>
                </div>
                <hr className="text-text" />
                <div className="flex justify-between">
                  <p>Total :</p>
                  <p>Rs </p>
                </div>
              </div>
            </div>
          </article>

          {/* 🧭 Sidebar */}
          <nav className="hidden lg:block h-screen fixed right-5 top-[120px] rounded-[5px] bg-card overflow-y-auto w-1/3 ">
            <div className="flex  justify-between border-b border-primary p-3 ">
              <p className="font-semibold text-[20px]">Order Details</p>
              <div className="flex flex-row absolute top-0 right-5 gap-[7px]">
                <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
                <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
                <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
              </div>
            </div>
            <div className="mb-0  lg:mb-80">
              <div className="flex flex-col justify-center bg-gray-200 m-4 shadow-md rounded p-[16px] pb-[48px] px-[10px] gap-4">
                <p className="font-semibold text-left">
                  Special Instructions (Optional)
                </p>
                <textarea
                  placeholder="Add Cooking / Delivery Instructions (Optional)"
                  className="resize-y border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-14"
                />

                <div className="">
                  <div key={1} className="relative bg-gray-300 pt-6 rounded-md">
                    <span className="absolute left-2 top-10 -translate-y-3 font-bold text-black pointer-events-none text-[18px]">
                      +92&nbsp;|
                    </span>
                    <input
                      type="text"
                      id={1}
                      placeholder=""
                      className="pl-14 peer bg-gray-300 py-2 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
                    />
                    <label
                      htmlFor={1}
                      className="absolute left-3 top-2 text-text transition-all duration-200 
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
                    peer-focus:top-2 peer-focus:text-text"
                    >
                      Alternate Phone Number (3XXXXXXXXX)
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-200 m-4 shadow-md rounded p-[16px] pb-[48px] px-[10px] gap-4">
                <p className="text-[31px] font-bold">Your Order</p>
                <div className="flex justify-between">
                  <p>Sub Total :</p>
                  <p>Rs {totalPrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p>GST (16%) :</p>
                  <p>Rs {tax.toFixed(0)}</p>
                </div>
                <hr className="text-text" />
                <div className="flex justify-between">
                  <p>Total :</p>
                  <p>Rs {totalPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="fixed bottom-0  w-1/3 bg-primary border-t rounded-t-lg shadow-md">
              <button className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center">
                <p className="text-white ">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                  Item{" "}
                  <span className="font-bold text-[22px]">
                    {" "}
                    | Rs {totalPrice.toLocaleString()}
                  </span>
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
            <button className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center">
              <p className="text-white ">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                Item{" "}
                <span className="font-bold text-[22px]">
                  {" "}
                  | Rs {totalPrice.toLocaleString()}
                </span>
              </p>
              <p className="flex gap-2 font-bold text-[22px] text-white">
                Checkout
                <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center mt-[5px]">
                  <MdArrowForwardIos size={18} className="text-black bold" />
                </span>
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bucket;
