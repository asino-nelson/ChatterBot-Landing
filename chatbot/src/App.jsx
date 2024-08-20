import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import TermsAndConditions from "./pages/policy/TermsAndConditions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
