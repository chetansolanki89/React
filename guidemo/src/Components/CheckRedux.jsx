import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckRedux = () => {
    const selectData=useSelector(state=>state.productsReducer.products);
    console.log("Store Data: ",selectData)
  const dispatch = useDispatch();
  const handleClick = () => {
    //Logic of Dispatch
    dispatch({
      type: "ADD_PRODUCTS",
      data: ["Mobile", "T-Shirt", "Shoes","Pen","Pencil"],
    });
  };
  const removeProduct = () => {
    dispatch({
      type: "REMOVE_PRODUCTS",
      data: "Pen",
    });
  };
  return (
    <div>
      <div>
        <Button variant="warning" onClick={handleClick}>
          Add Products
        </Button>
        <Button variant="danger" onClick={removeProduct}>
          Remove Products
        </Button>
      </div>
      <div>
          <h4>Data from useSelector:</h4>
          {selectData.map((item)=>(
              <p>{item}</p>
          ))}
      </div>
    </div>
  );
};

export default CheckRedux;
