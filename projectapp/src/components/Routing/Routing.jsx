import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
