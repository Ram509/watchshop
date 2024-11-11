import React, { useState } from "react";
import Products from "./Components/Pages/Products";
import Home from "./Components/Pages/Home.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/Pages/Login.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
// import { useState } from "react";
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDisplay addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
