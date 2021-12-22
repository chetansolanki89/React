import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../A-Navigation/NavBar";
import ProductDetails from "../B-Products/ProductDetails";
import ProductsCart from "../B-Products/ProductsCart";
import ProductsParent from "../B-Products/ProductsParent";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsParent />} />
          <Route path="/cart" element={<ProductsCart />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/selected" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
