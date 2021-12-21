import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = ({ search }) => {
  //   const [search, setSearch] = useState("");
  const loadedProducts = useSelector((state) => state.productsReducer.products);
  const [allproducts, setAllproducts] = useState([]);
  const [fproducts, setFproducts] = useState([]);
  const dispatch = useDispatch();
  const loadData = async () => {
    const products = await axios.get(
      "https://raw.githubusercontent.com/yugabyte/yugastore/master/models/sample_data.json"
    );
    // console.log("Products loaded: ", products.data);
    dispatch({
      type: "LOAD_PRODUCTS",
      data: products.data.products,
    });
    setAllproducts(products.data.products);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filtered = allproducts.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
    setFproducts(filtered);
    search === "" ? setAllproducts(loadedProducts) : setAllproducts(fproducts);
  }, [search]);
  return (
    <div>
      {/* <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
        </div> */}
      <h4>Products List</h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {console.log("All: ", allproducts)}
        {console.log("Loaded: ", loadedProducts)}
        {console.log("Filtered: ", fproducts)}

        {allproducts.map((item) => {
          return <ProductItem products={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
