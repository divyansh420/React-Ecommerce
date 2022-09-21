import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Homepage from "./pages/Homepage";
import ShoppingCart from "./pages/ShoppingCart";
function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
