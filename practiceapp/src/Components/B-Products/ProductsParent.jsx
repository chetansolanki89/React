import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsChild from "./ProductsChild";

const ProductsParent = ({ search }) => {
  const loadedProducts = useSelector((state) => state.productsReducer.products);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const products = await axios.get(
      "https://raw.githubusercontent.com/yugabyte/yugastore/master/models/sample_data.json"
    );
    console.log("Fetch: ", products.data.products);
    dispatch({
      type: "LOAD_PRODUCTS",
      data: products.data.products,
    });
    // console.log("Loaded: ", loadedProducts)

  };
  useEffect(() => {
    loadedProducts.length <=0 && fetchData();
  }, []);
  useEffect(() => {
    const filtered = loadedProducts.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
    setProducts(filtered);
  }, [search]);
  return (
    <React.Fragment>
      <h3>Products</h3>
      <div className="parent">
        {search !== ""
          ? products.map((item) => <ProductsChild item={item} />)
          : loadedProducts.map((item) => <ProductsChild item={item} />)}
      </div>
    </React.Fragment>
  );
};

export default ProductsParent;
