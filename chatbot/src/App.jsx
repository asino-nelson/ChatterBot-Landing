import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import TermsAndConditions from "./pages/policy/TermsAndConditions";
import NavBar from "./components/navbar/NavBar";
import { useState } from "react";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("/");
  return (
    <BrowserRouter>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
