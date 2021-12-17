import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { products } from "./productsData";
import "./Products.css";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const ProductsAPI = () => {
  const selectedProducts = useSelector(
    (state) => state.productsReducer.products
  );
  console.log("Selected: ",selectedProducts)

  const dispatchProducts = useDispatch();

  const [prod, setProd] = useState([]);
  const [text, setText] = useState("");
  const [jsonData, setJsonData] = useState([]);

  //console.log(jsonData);

  // fetch("https://fakestoreapi.com/products")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     setProd(data);
  //   });

  const handleFiltered = () => {
    const filtProd = jsonData.filter(
      (elem) =>
        elem.category.toUpperCase().includes(text.toUpperCase()) ||
        elem.title.toUpperCase().includes(text.toUpperCase().trim())
    );
    console.log("Filtered Products: ", filtProd);
    return text !== "" ? setProd(filtProd) : setProd(prod);
  };

  const callData = async () => {
    if (selectedProducts.length > 0) {
      setProd(selectedProducts);
    }
    //This is Async call using async-await
    const result = await axios.get("https://fakestoreapi.com/products");
    setProd(result.data);
    console.log(result.data);
    dispatchProducts({
      type: "ADD_PRODUCTS",
      data: result.data,
    });
  };

  useEffect(() => {
    // Below commented is Async call using promise
    // axios.get("https://fakestoreapi.com/products").then((res) => {
    //   //console.log(res.data);
    //   setJsonData(res.data);
    //   setProd(res.data);
    // });
    callData();
  }, []);

  useEffect(() => {
    handleFiltered();
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //console.log(res.data);
      setJsonData(res.data);
    });
  }, [text]);

  return (
    <div className="main">
      <InputGroup
        style={{ width: "600px" }}
        className="mb-3"
        onChange={(e) => setText(e.target.value)}
      >
        <InputGroup.Text id="basic-addon1">Search here</InputGroup.Text>
        <FormControl
          placeholder="Type category here"
          aria-describedby="basic-addon1"
        />
        {/* <Button onClick={handleFiltered} variant="warning">
          Search Category
        </Button> */}
      </InputGroup>

      {/* <button onClick={() => handleFiltered()}>Search</button>{" "} */}
      {/* handleFiltered() will return error. if {()=>handleFiltered()} will not return error*/}
      <div className="carddiv">
        {prod.map((item) => (
          <div className="item">
            <Card style={{ width: "18rem", height: "550px" }}>
              <Card.Img variant="top" src={item.image} height="320px" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <b>Category: </b>
                  {item.category}
                </Card.Text>
                <Button variant="primary">&#x20B9; {item.price}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAPI;
