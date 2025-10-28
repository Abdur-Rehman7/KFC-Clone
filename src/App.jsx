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



export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/storelocater" element={<Storelocater />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/exploremenu" element={<ExploreMenuPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mitaobhook" element={<MitaoBhook />} />
        <Route path="/mitaoBhookschlorship" element={<MitaoBhookScholership />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}
