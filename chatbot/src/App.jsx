import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/landing/Landing";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import BlogsPage from "./pages/BlogsPage";
import GetStartedPage from "./pages/GetStartedPage";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/blog" element={<BlogsPage />} /> 
      <Route path="/get-started" element={<GetStartedPage />} /> 
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}
