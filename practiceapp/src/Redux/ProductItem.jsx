import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ProductItem = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: "3px solid red",
        width: "300px",
        margin: "10px",
        backgroundColor: "whitesmoke",
      }}
    >
      <img src={products.img} width="200px" height="250px" alt="" />
      <p>
        <h5>{products.name.substr(0, 20) + "..."}</h5>
      </p>
      <p>
        <b>Price: ${products.price}</b>
      </p>
      <p>
        <Button
          onClick={() => {
            dispatch({
              type: "ADD_PRODUCT",
              data: products,
            });
            {
              console.log("Cart: ", [products]);
            }
          }}
        >
          Add to Cart
        </Button>
        <Button
          variant="warning"
          onClick={() => {
            dispatch({
              type: "SELECTED_PRODUCT",
              data: [products],
            });
            {
              console.log("View: ", [products]);
            }
          }}
        >
          View Product
        </Button>
      </p>
    </div>
  );
};

export default ProductItem;
