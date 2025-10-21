import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-light text-black dark:bg-darkMode dark:text-white transition-all">
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
