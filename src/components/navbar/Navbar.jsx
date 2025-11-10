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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("car1");

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* 🌍 Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-borderTheme bg-light dark:bg-second/95 backdrop-blur-lg transition-all">
        <nav className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(true)}
              className="text-text transition"
            >
              <RiMenu2Line size={28} />
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src={logo} />
            </Link>

            {/* Delivery / Pickup Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <Dpbtn
                img={delivery}
                text="Delivey"
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
                alt=""
              />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
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
                <span className="text-sm font-medium">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="py-[6px] px-3 rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white font-semibold transition"
                >
                  Logout
                </button>
              </div>
            )}
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
        className={`fixed top-0 left-0 h-full overflow-x-auto w-72 bg-light bg-card shadow-2xl z-50 transform transition-transform duration-300 ${
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
            <div className="flex items-center gap-2">
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
    </>
  );
}
