import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Counter } from "../Counter/Counter";
import { Navigation } from "../Navigation/Navigation";
import Cart from "../Redux/Cart";
import ProductList from "../Redux/ProductList";

export const Routing = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Navigation setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<ProductList search={search} />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/counter" element={<Counter />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
