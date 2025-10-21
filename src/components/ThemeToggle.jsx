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
    <div className="flex gap-2">
      {/* ☀️ Light Button */}
      <button
        onClick={() => setTheme("light")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 
          ${theme === "light"
            ? "bg-[#EA002A] text-white shadow-md"
            : "bg-transparent border border-border text-black dark:text-white hover:bg-[#EA002A] hover:text-white"
          }`}
      >
        ☀️
      </button>

      {/* 🌙 Dark Button */}
      <button
        onClick={() => setTheme("dark")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 
          ${theme === "dark"
            ? "bg-[#EA002A] text-white shadow-md"
            : "bg-transparent border border-border text-black dark:text-white hover:bg-[#EA002A] hover:text-white"
          }`}
      >
        🌙
      </button>
    </div>
  );
}
