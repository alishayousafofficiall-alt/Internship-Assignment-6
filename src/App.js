import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SubCategories from "./pages/SubCategories";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import BuyNow from "./pages/BuyNow";
import SuccessPage from "./pages/SuccessPage";
import SpecialCakes from "./pages/SpecialCakes";
import { CartPage, CartProvider } from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";  // ✅ NEW IMPORT
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



import EidSpecial from "./pages/EidSpecial";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:id" element={<SubCategories />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product-detail/:id/:slug?" element={<ProductDetail />} />
          <Route path="/special-cakes/:slug" element={<Products />} />
          <Route path="/special-cakes" element={<SpecialCakes />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="/eidspecial" element={<EidSpecial />} />                      
        </Routes>

        {/* Footer ko yaha rakho */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
