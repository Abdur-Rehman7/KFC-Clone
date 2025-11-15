import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Storelocater from "./pages/StoreLocater";
import TrackOrder from "./pages/TrackOrder";
import ExploreMenuPage from "./pages/ExploreMenuPage";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MitaoBhook from "./pages/MitaoBhook";
import MitaoBhookScholership from "./pages/MitaoBhookScholership";
import Careers from "./pages/Careers";
import Bucket from "./pages/Bucket";
import Login from "./pages/Login";
import PaymentMethod from "./pages/PaymentMethod";
import AddAddress from "./pages/AddAddress";
import EditProfile from "./pages/EditProfile";
import OrderHistory from "./pages/OrderHistory";
import MyAddress from "./pages/MyAddress";
import MyCard from "./pages/MyCard";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Routes>
      {/* Layout with footer */}
      <Route element={<MainLayout hideFooter={false} />}>
        <Route path="/" element={<Home />} />
        <Route path="/storelocater" element={<Storelocater />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mitaobhook" element={<MitaoBhook />} />
        <Route
          path="/mitaoBhookschlorship"
          element={<MitaoBhookScholership />}
        />
        <Route path="/careers" element={<Careers />} />
      </Route>

      <Route element={<MainLayout hideFooter={true} />}>
        <Route path="/exploremenu" element={<ExploreMenuPage />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/myaddress" element={<MyAddress />} />
        <Route path="/mycard" element={<MyCard />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}
