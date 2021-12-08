import React, { useEffect, useState } from "react";
import { products } from "./productsData";
import "./Products.css";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";

const Products = () => {
  const [prod, setProd] = useState(products.data);
  const [text, setText] = useState("");

  const handleFiltered = () => {
    const filtProd = products.data.filter(
      (elem) =>
        elem.category.toUpperCase().includes(text.toUpperCase()) ||
        elem.name.toUpperCase().includes(text.toUpperCase().trim())
    );
    console.log(filtProd);
    return text !== "" ? setProd(filtProd) : setProd(products.data);
  };

  useEffect(() => {
    handleFiltered();
    console.log(text);
  }, [text]);
  useEffect(() => {
    console.log("This is mounting hook.");
  }, []);
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
          aria-label="Username"
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
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <b>Weight: </b>
                  {item.weight}
                </Card.Text>
                <Button variant="primary">{item.price}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
