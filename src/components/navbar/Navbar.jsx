import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
import logo from "./assets/logo.png";
import deliveryimg from "./assets/Delivery.png";
import pickup from "./assets/pickup.png";
import cartimg from "./assets/cart-bucket.png";
import Dpbtn from "./Dpbtn";
import SidebarLinkMaping from "./SidebarLinkMaping";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import profile from "./assets/profile.png";
import orderhistoryicon from "./assets/order-history-icon.png";
import myaddressicon from "./assets/my-address-icon.png";
import mycardsicon from "./assets/my-cards-icon.png";
import favoriteicon from "./assets/favorite-icon.png";
import { setDeliveryType } from "../../redux/slices/cartSlice";
import { showToast } from "../../utils/showToast";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("car1");
  const cartItems = useSelector((state) => state.cart.items);

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // navigates to /login route
  };
  const handleBucket = () => {
    navigate("/bucket"); // navigates to /login route
  };
  const handleEditProfile = () => {
    navigate("/editprofile"); // navigates to /login route
  };
  const handleOrderHistory = () => {
    navigate("/orderhistory"); // navigates to /login route
  };
  const handleMyAddress = () => {
    navigate("/myaddress"); // navigates to /login route
  };
  const handleMyCard = () => {
    navigate("/mycard"); // navigates to /login route
  };
  const handleFavorites = () => {
    navigate("/favorites"); // navigates to /login route
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLogout = () => {
    dispatch(logout());
  };

  const handlePopupLogout = () => {
    setShowPopup(false); // Close popup first
    dispatch(logout()); // Then logout
    navigate("/"); // Optional redirect
  };

  const [showPopup, setShowPopup] = useState(false);
  const menuItems = [
    {
      icon: orderhistoryicon,
      label: "Order History",
      onClick: handleOrderHistory,
    },
    { icon: myaddressicon, label: "My Address", onClick: handleMyAddress },
    { icon: mycardsicon, label: "My Cards", onClick: handleMyCard },
    { icon: favoriteicon, label: "My Favorites", onClick: handleFavorites },
  ];

  return (
    <>
      {/* 🌍 Main Navbar */}
      <header className="w-full sticky top-0 z-50 py-[8px] bg-body transition-all">
        <nav className="container">
          {/* ===== Desktop  ===== */}
          <div className="hidden lg:flex h-[80px] mx-[60px] items-center justify-between">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              {/* Hamburger Button */}
              <button
                onClick={() => setOpen(true)}
                className="text-text transition"
              >
                <RiMenu2Line className="hidden sm:block" size={28} />
              </button>

              {/* Logo */}
              <Link to="/" className="text-2xl font-bold text-primary">
                <img src={logo} alt="Logo" />
              </Link>

              {/* Delivery / Pickup */}
              <div className="flex items-center gap-2 ml-4">
                <Dpbtn
                  img={deliveryimg}
                  text="Delivery"
                  active={activeBtn === "car1"}
                  onClick={() => {
                    if (!user) {
                      showToast(
                        "You must be logged in to select delivery/pickup!",
                        "error"
                      );
                      return;
                    }
                    setActiveBtn("car1");
                    dispatch(setDeliveryType("delivery"));
                  }}
                />
                <Dpbtn
                  img={pickup}
                  text="Pickup"
                  active={activeBtn === "car2"}
                  onClick={() => {
                    if (!user) {
                      showToast(
                        "You must be logged in to select delivery/pickup!",
                        "error"
                      );
                      return;
                    }
                    setActiveBtn("car2");
                    dispatch(setDeliveryType("pickup"));
                  }}
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* Cart */}

              <div
                onClick={handleBucket}
                className="w-[40px] h-[40px] bg-cover bg-center cursor-pointer flex items-center justify-center"
                style={{ backgroundImage: `url(${cartimg})` }}
              >
                <span className="text-text font-bold text-[14px] rounded-full">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>

              {/* Login */}
              {!user ? (
                <button
                  onClick={handleLoginClick}
                  className="py-[6px] w-[64px] rounded-md bg-primary text-white font-semibold transition"
                >
                  Login
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-[50px] h-[50px] bg-card rounded-[100%]">
                    <img
                      onClick={() => setShowPopup(true)}
                      className="w-[50px] h-[50px] rounded-[100%]"
                      src={profile}
                      alt="profile"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {user?.firstName && user?.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : "Guest"}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="w-full hidden sm:flex lg:hidden flex-col gap-2">
            {/* === Top Row: Menu + Logo + Cart === */}
            <div className="flex items-center justify-between px-[16px] w-full">
              <div className="flex gap-2">
                <button onClick={() => setOpen(true)}>
                  <RiMenu2Line size={26} />
                </button>

                <Link to="/">
                  <img src={logo} alt="Logo" className="w-[70px]" />
                </Link>
              </div>

              <div>
                {!user ? (
                  <button
                    onClick={handleLoginClick}
                    className="py-[6px] w-[64px] rounded-md bg-primary text-white font-semibold transition"
                  >
                    Login
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] bg-card rounded-[100%]">
                      <img
                        onClick={() => setShowPopup(true)}
                        className="w-[50px] h-[50px] rounded-[100%]"
                        src={profile}
                        alt="profile"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {user?.firstName && user?.lastName
                        ? `${user.firstName} ${user.lastName}`.slice(0, 3) +
                          "..."
                        : "Guest"}
                    </span>
                  </div>
                )}

                <div
                  onClick={handleBucket}
                  className="w-[40px] h-[40px] bg-cover bg-center flex items-center justify-center cursor-pointer"
                  style={{ backgroundImage: `url(${cartimg})` }}
                >
                  <span className="text-black font-bold text-[14px]">
                    {cartItems.reduce((t, i) => t + i.quantity, 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* === Delivery / Pickup Buttons === */}
            <div className="flex items-center justify-center gap-2">
              <Dpbtn
                img={deliveryimg}
                text="Delivery"
                active={activeBtn === "car1"}
                onClick={() => handleDeliveryPickup("car1", "delivery")}
              />
              <Dpbtn
                img={pickup}
                text="Pickup"
                active={activeBtn === "car2"}
                onClick={() => handleDeliveryPickup("car2", "pickup")}
              />
            </div>
          </div>

          {/* ===== Mobile Layout ===== */}
          <div className="flex flex-col sm:hidden gap-2">
            {/* Top Row: Menu + Logo */}
            <div className="flex items-center justify-between px-[16px]">
              {/* Hamburger */}
              <button
                onClick={() => setOpen(true)}
                className="text-text transition"
              >
                <RiMenu2Line size={22} />
              </button>

              <div>
                {/* Logo on right */}
                <Link to="/" className="text-2xl font-bold text-primary">
                  <img src={logo} alt="Logo" className="w-[60px]" />
                </Link>

                {/* Cart */}
                <button className="relative text-text dark:text-white hover:text-primary transition">
                  <div
                    onClick={handleBucket}
                    className="w-[40px] h-[40px] bg-cover bg-center cursor-pointer flex items-center justify-center"
                    style={{ backgroundImage: `url(${cartimg})` }}
                  >
                    <span className="text-black font-bold text-[14px] rounded-full">
                      {cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Second Row: Delivery/Pickup + Cart */}
            <div className="flex items-center justify-center">
              {/* Delivery/Pickup */}
              <div className="flex items-center gap-2">
                <Dpbtn
                  img={deliveryimg}
                  text="Delivery"
                  active={activeBtn === "car1"}
                  onClick={() => {
                    if (!user) {
                      showToast(
                        "You must be logged in to select delivery/pickup!",
                        "error"
                      );
                      return;
                    }
                    setActiveBtn("car1");
                    dispatch(setDeliveryType("delivery"));
                  }}
                />
                <Dpbtn
                  img={pickup}
                  text="Pickup"
                  active={activeBtn === "car2"}
                  onClick={() => {
                    if (!user) {
                      showToast(
                        "You must be logged in to select delivery/pickup!",
                        "error"
                      );
                      return;
                    }
                    setActiveBtn("car2");
                    dispatch(setDeliveryType("pickup"));
                  }}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* 🧾 Overlay Background */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🧭 Sidebar Drawer (now slides from the LEFT) */}
      <aside
        className={`fixed top-0 left-0 h-full overflow-x-auto custom-scrollbar w-72 bg-light bg-card shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col gap-5 p-4 text-text dark:text-white">
          {/* Login */}
          {!user ? (
            <button
              onClick={handleLoginClick}
              className="py-[6px] w-[64px] rounded-md bg-primary text-white font-semibold transition"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-[50px] h-[50px] bg-card rounded-[100%]">
                  <img
                    onClick={() => {
                      setShowPopup(true); // open popup
                      handleCloseSidebar(); // close sidebar
                    }}
                    className="w-[50px] h-[50px] rounded-[100%]"
                    src={profile}
                    alt="profile"
                  />
                </div>
                <span className="text-sm font-medium">
                  {user ? `${user.firstName} ${user.lastName}` : "Guest"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="py-[6px] px-3 rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white font-semibold transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Theme Switch */}
          <div className="flex justify-end">
            <ThemeToggle />
          </div>

          <hr className="border-borderTheme my-2" />

          {/* Main Links */}
          <SidebarLinkMaping onCloseSidebar={handleCloseSidebar} />
        </div>
      </aside>

      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-card rounded-xl h-96 custom-scrollbar w-[90%] md:w-[60%] lg:w-[40%] shadow-xl overflow-auto">
            {/* Header */}
            <div className="sticky top-0 bg-card z-10 p-4 border-b relative flex justify-center items-center">
              <h2 className="text-xl font-bold text-center">
                {user ? `${user.firstName} ${user.lastName}` : "Guest"}
              </h2>

              <button
                onClick={() => setShowPopup(false)}
                className="absolute bg-primary right-4 top-1/2 -translate-y-1/2 text-black text-xl font-bold py-1 px-2 rounded"
              >
                ✕
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4 p-4 border-b bg-body">
              <img
                src={profile}
                alt={user ? `${user.firstName} ${user.lastName}` : "Guest"}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  {user ? `${user.firstName} ${user.lastName}` : "Guest"}
                </p>
                <p className="text-sm">{user.phoneNumber}</p>
                <p className="text-sm">{user.email}</p>
              </div>
              <button
                onClick={handleEditProfile}
                className="ml-auto border border-red-600 text-red-600 px-3 py-1 rounded hover:bg-red-50 transition"
              >
                Edit
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    item.onClick(); // run the navigation action
                    setShowPopup(false); // close the popup
                  }}
                  className="flex items-center gap-3 p-4 cursor-pointer hover:bg-[#A3A3A3] transition-all duration-300 ease-in-out"
                >
                  <img className="w-[25px] h-[25px]" src={item.icon} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Logout Button */}
            <div className="flex justify-center items-center">
              <button
                onClick={handlePopupLogout}
                className="w-[100px] py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition mb-8 rounded-md"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
