import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <div className="bar">
      <Link to="/" className="link">Home</Link>
      <Link to="/counter" className="link">Counter</Link>
      <Link to="/mapping" className="link">Mapping-1</Link>
      <Link to="/conditionalRender" className="link">Conditional Rendering</Link>
      <Link to="/watch" className="link">Watch</Link>
    </div>
  );
};

export default NavigationBar;
