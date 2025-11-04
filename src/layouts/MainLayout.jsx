import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function MainLayout({ hideFooter }) {
  return (
    <div className="min-h-screen flex flex-col bg-light text-black dark:bg-darkMode dark:text-white transition-all">
      <Navbar />

      <main className="container mx-auto flex-1">
        <Outlet context={{ hideFooter }} />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
