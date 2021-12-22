import axios from "axios";
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsChild from "./ProductsChild";

const ProductsParent = () => {
  const loadedProducts = useSelector((state) => state.productsReducer.products);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const products = await axios.get("https://raw.githubusercontent.com/yugabyte/yugastore/master/models/sample_data.json");
    console.log("Fetch: ", products.data.products);
    dispatch({
      type: "LOAD_PRODUCTS",
      data: products.data.products,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <h3>Products</h3>
      <div className="parent">
        {console.log("Loaded: ", loadedProducts)}
        {loadedProducts.map((item) => (
          <ProductsChild item={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductsParent;
