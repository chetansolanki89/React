import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

const BookAPIChild = () => {
  const [select, setSelect] = useState([]);
  const selectedProduct = useSelector(
    (state) => state.productsReducer.selected
  );
  console.log("Selected: -->", selectedProduct);

  const allProducts = useSelector((state) => state.productsReducer.products);
  console.log("All: ", allProducts);

  const itemDetails = allProducts.filter(
    (item) => item.id === selectedProduct[0].id
  );

  console.log("Item Details: -->", itemDetails);

  const similarProducts = allProducts.filter(
    (item) =>
      item.category === itemDetails[0].category && item.id !== itemDetails[0].id
  );
  console.log("Similar", similarProducts);

  const callData = () => {
    if (selectedProduct.length > 0) {
      setSelect(selectedProduct);
    }
    // setProd(result.data);
    // console.log(result.data);
  };

  useEffect(() => {
    callData();
  }, []);
  return (
    <div>
      <Row>
        <Col lg="1"></Col>
        <Col lg="3">
          <img src={itemDetails[0].img} width="100%" alt="No image" />
        </Col>
        <Col lg="7">
          <Row>
            <p>
              <b>Name:</b> {itemDetails[0].name}
            </p>
          </Row>
          <Row>
            <p>
              <strong>Author:</strong> {itemDetails[0].author}
            </p>
          </Row>
          <Row>
            <p>
              <b>Price:</b> {itemDetails[0].price}
            </p>
          </Row>
          <Row>
            <p>
              <b>Category:</b> {itemDetails[0].category}
            </p>
          </Row>
          <Row>
            <p>
              <b>Type:</b> {itemDetails[0].type}
            </p>
          </Row>
          <Row>
            <p style={{ textAlign: "justify" }}>
              <b>Description:</b> {itemDetails[0].description}
            </p>
          </Row>
        </Col>
        <Col lg="1"></Col>
      </Row>
      <Row>
        <br />
        <br />

        {similarProducts.length > 0 && <h3>Similar Products</h3>}
        {similarProducts.length > 0 &&
          similarProducts.map((elem) => {
            return (
              <Col lg="3">
                <Row>
                  <img src={elem.img} height="300px" alt="" />
                </Row>
                <Row>
                  <b>{elem.name}</b>
                </Row>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default BookAPIChild;
