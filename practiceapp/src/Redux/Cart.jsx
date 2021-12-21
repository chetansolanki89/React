import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Cart = () => {
  const cartProducts = useSelector((state) => state.productsReducer.cart);
  console.log("Loaded Cart: ", cartProducts);
  return (
    <div>
      <h4>Cart Items</h4>
      {cartProducts.map((item) => {
        return <ProductItem products={item} />;
      })}
    </div>
  );
};

export default Cart;
