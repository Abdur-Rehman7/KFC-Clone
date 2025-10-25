import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex bg-body rounded-[25px]">
      {/* ☀️ Light Button */}
      <button
        onClick={() => setTheme("light")}
        className={`px-[10px] py-[8px] rounded-[25px] text-[13px] font-bold transition-all duration-300 
          ${theme === "light"
            ? "bg-[#EA002A] text-white shadow-md"
            : "bg-transparent text-black rounded-[25px] dark:text-white"
          }`}
      >
        Day
      </button>

      {/* 🌙 Dark Button */}
      <button
        onClick={() => setTheme("dark")}
        className={`px-[10px] py-[8px] rounded-[25px] text-[13px] font-bold transition-all duration-300 
          ${theme === "dark"
            ? "bg-[#EA002A] text-white shadow-md"
            : "bg-transparent  text-black rounded-[25px] dark:text-white"
          }`}
      >
        Night
      </button>
    </div>
  );
}
