import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link><br />
      <Link to="/products">Products</Link><br />
      <Link to="/services">Services</Link><br />
    </div>
  );
};

export default Navbar;
