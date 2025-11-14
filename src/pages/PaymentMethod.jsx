import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import sidenav from "../assets/sidenav-img.png";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import Pickup from "../assets/pickup.png";
import { LuPhone } from "react-icons/lu";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = totalPrice * 0.16; // 16% tax
  // const grandTotal = totalPrice + tax;

  return (
    <>
      <section className="text-center ">
        <div className="min-h-screen relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] mx-[5px] lg:mx-[32px] gap-10 md:mx-[24px]">
          {/* 📰 Main Content */}
          <article className="p-3  mt-[30px]">
            <div className="bg-card rounded-[5px] p-2 h-auto overflow-hidden flex flex-col">
              <div className="flex border-b border-text gap-3 p-3">
                <div className="">
                  <Link
                    to="/exploremenu"
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
                  >
                    <IoIosArrowBack size={20} />
                  </Link>
                </div>

                <p className="font-semibold text-[20px]">Your Information</p>
              </div>
              <div>
                <div className="flex justify-between bg-body font-semibold text-[20px] mt-[20px] p-[10px]">
                  <p>Abdur Rehman</p>
                  <p className="flex items-center gap-3">
                    <LuPhone /> 03377763915
                  </p>
                </div>
              </div>
              <div>
                <div className="flex text-left bg-body mt-[20px] p-[10px] gap-3">
                  <img className="w-[50px] h-[50px]" src={Pickup} />
                  <div>
                    <p className="text-[18px] font-bold">Pickup From</p>
                    <p>Sargodha</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 🧭 Sidebar */}
          <nav className="hidden lg:block h-screen fixed right-5 top-[140px] bg-card w-1/3">
            <div className="flex  justify-between border-b border-primary p-3 ">
              <p className="font-semibold text-[20px]">Order Summary</p>
              <div className="flex flex-row absolute top-0 right-5 gap-[7px]">
                <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
                <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
                <span className="w-[15px] h-[22px] bg-primary rounded-[1px]"></span>
              </div>
            </div>
            <div className="h-[310px] overflow-y-auto custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="flex flex-col justify-center m-4 shadow-md rounded p-[16px] pb-[48px] px-[10px]">
                  <img src={sidenav} alt="empty bucket" />
                  <p className="mt-[24px] mb-[8px] text-center font-bold text-[22px]">
                    You haven’t added any items in bucket yet
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 m-4 ">
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
                          <p className="font-semibold text-[15px]">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            Rs {item.price} x {item.quantity}
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
                <p className="text-white">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                  Item{" "}
                  <span className="font-bold text-[22px]">
                    {" "}
                    | Rs {totalPrice.toLocaleString()}
                  </span>
                </p>
                <p className="flex gap-2 font-bold text-[18px] text-white text-center">
                  Select Payment Mode
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
              <p className="flex gap-1 font-bold text-[18px] text-white">
                Select Payment Mode
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

export default PaymentMethod;
