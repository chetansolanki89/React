import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="main">
        <img src="https://pickupbiz.com/static/media/pickupbizzlogo.fbf33cad.jpg" height="50px" alt="" />
      <Link to="/" className="link">Home</Link>
      <Link to="/services" className="link">Services</Link>
      <Link to="/aboutus" className="link">About Us</Link>
      <Link to="/contact" className="link">Contact</Link>
    </div>
  );
};

export default Navigation;
