import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import delivery from "../assets/Delivery.png";
import pickup from "../assets/pickup.png";
import cartimg from "../assets/cart-bucket.png";
import Dpbtn from "./Dpbtn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // ✅ Make the first button active by default
  const [activeBtn, setActiveBtn] = useState("car1");

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
              className="text-text dark:text-white hover:text-primary transition"
            >
              <Menu size={28} />
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
              <img className="w-[40px] h-[40px]" src={cartimg} alt="" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            {/* Login */}
            <button className="py-[6px] w-[64px] rounded-md bg-primary text-[#ffffff]  font-semibold transition">
              Login
            </button>
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
        className={`fixed top-0 left-0 h-full w-72 bg-light bg-card shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-borderTheme">
          <h2 className="text-xl font-semibold text-text dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-text dark:text-white hover:text-primary transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-5 p-4 text-text dark:text-white">
          {/* Login */}
          <button className="py-[6px] w-[64px] rounded-md bg-primary text-[#ffffff]  font-semibold transition">
            Login
          </button>

          {/* Theme Switch */}
          <ThemeToggle />

          <hr className="border-borderTheme my-2" />

          {/* Main Links */}
          <NavLink to="/store" className="hover:text-primary transition">
            📍 Store Locator
          </NavLink>
          <NavLink to="/track-order" className="hover:text-primary transition">
            🚚 Track Order
          </NavLink>
          <NavLink to="/menu" className="hover:text-primary transition">
            🍔 Explore Menu
          </NavLink>

          <hr className="border-borderTheme my-2" />

          {/* Footer Links */}
          <NavLink to="/about" className="hover:text-primary transition">
            📄 About Us
          </NavLink>
          <NavLink to="/terms" className="hover:text-primary transition">
            ⚖️ Terms & Conditions
          </NavLink>
          <NavLink to="/privacy" className="hover:text-primary transition">
            🔒 Privacy Policy
          </NavLink>
        </div>
      </aside>
    </>
  );
}
