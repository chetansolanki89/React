import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = ({ setSearch }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link className="link" to="/">
        Products
      </Link>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </div>
      <Link className="link" to="/cart">
        Cart
      </Link>
      {/* <Link className="link" to="/counter">
        Counter
      </Link> */}
      {/* <Link className="link" to="/">Home</Link>
      <Link className="link" to="/">Home</Link> */}
    </div>
  );
};
