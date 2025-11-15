import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
import logo from "./assets/logo.png";
import delivery from "./assets/Delivery.png";
import pickup from "./assets/pickup.png";
import cartimg from "./assets/cart-bucket.png";
import Dpbtn from "./Dpbtn";
import SidebarLinkMaping from "./SidebarLinkMaping";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import profile from "./assets/profile.png";
import EditProfile from "../../pages/EditProfile";

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

  return (
    <>
      {/* 🌍 Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-borderTheme bg-light dark:bg-second/95 backdrop-blur-lg transition-all">
        <nav className="container mx-auto py-3 px-4">
          {/* ===== Desktop / Tablet Layout ===== */}
          <div className="hidden sm:flex items-center justify-between">
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
                  img={delivery}
                  text="Delivery"
                  active={activeBtn === "car1"}
                  onClick={() => setActiveBtn("car1")}
                />
                <Dpbtn
                  img={pickup}
                  text="Pickup"
                  active={activeBtn === "car2"}
                  onClick={() => setActiveBtn("car2")}
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <button className="relative text-text dark:text-white hover:text-primary transition">
                <img
                  onClick={handleBucket}
                  className="w-[40px] h-[40px]"
                  src={cartimg}
                  alt="Cart"
                />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </button>

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
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* ===== Mobile Layout ===== */}
          <div className="flex flex-col sm:hidden gap-2">
            {/* Top Row: Menu + Logo */}
            <div className="flex items-center justify-between">
              {/* Hamburger */}
              <button
                onClick={() => setOpen(true)}
                className="text-text transition"
              >
                <RiMenu2Line size={22} />
              </button>

              {/* Logo on right */}
              <Link to="/" className="text-2xl font-bold text-primary">
                <img src={logo} alt="Logo" className="w-[60px]" />
              </Link>
            </div>

            {/* Second Row: Delivery/Pickup + Cart */}
            <div className="flex items-center justify-between mt-2">
              {/* Delivery/Pickup */}
              <div className="flex items-center gap-2">
                <Dpbtn
                  img={delivery}
                  text="Delivery"
                  active={activeBtn === "car1"}
                  onClick={() => setActiveBtn("car1")}
                />
                <Dpbtn
                  img={pickup}
                  text="Pickup"
                  active={activeBtn === "car2"}
                  onClick={() => setActiveBtn("car2")}
                />
              </div>

              {/* Cart */}
              <button className="relative text-text dark:text-white hover:text-primary transition">
                <img
                  onClick={handleBucket}
                  className="w-[36px] h-[36px]"
                  src={cartimg}
                  alt="Cart"
                />
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </button>
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
                    onClick={() => setShowPopup(true)}
                    className="w-[50px] h-[50px] rounded-[100%]"
                    src={profile}
                    alt="profile"
                  />
                </div>
                <span className="text-sm font-medium">{user.name}</span>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-[90%] md:w-[60%] lg:w-[40%] shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-red-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4 p-4 border-b bg-gray-50">
              <img
                src={profile}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm">{user.phone}</p>
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
            <div className="flex flex-col divide-y">
              <div
                onClick={handleOrderHistory}
                className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <span>📋</span>
                <span>Order History</span>
              </div>

              <div
                onClick={handleMyAddress}
                className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <span>📍</span>
                <span>My Address</span>
              </div>

              <div
                onClick={handleMyCard}
                className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <span>💳</span>
                <span>My Cards</span>
              </div>

              <div
                onClick={handleFavorites}
                className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <span>❤️</span>
                <span>My Favorites</span>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handlePopupLogout}
              className="w-full py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              LOGOUT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
