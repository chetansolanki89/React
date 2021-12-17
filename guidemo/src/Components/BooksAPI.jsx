import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const BooksAPI = () => {
  const selectedProducts = useSelector(
    (state) => state.productsReducer.products
  );
  console.log("Selected:", selectedProducts);
  const dispatch = useDispatch();
  const [prod, setProd] = useState([]);
  const [text, setText] = useState("");
  const [jsonData, setJsonData] = useState([]);

  const callData = async () => {
    const result = await axios.get(
      "https://raw.githubusercontent.com/yugabyte/yugastore/master/models/sample_data.json"
    );
    console.log(result);
    console.log(result.data);
    console.log(result.data.products);
    // return result.data;
    setProd(result.data.products);
    dispatch({
      type: "ADD_PRODUCTS",
      data: result.data.products,
    });
  };
  useEffect(() => {
    callData();
  }, []);
  return (
    <div>
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
          {selectedProducts.map((item) => (
            <div className="item">
              <Card style={{ width: "18rem", height: "500px" }}>
                <Card.Img variant="top" src={item.img} height="220px" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <b>Author: </b>
                    {item.author}
                  </Card.Text>
                  <Card.Text>
                    <b>Category: </b>
                    {item.category}
                  </Card.Text>
                  <Card.Text>
                    <b>Price: </b>&#x20B9;
                    {item.price}
                  </Card.Text>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="primary">Add</Button>&nbsp;&nbsp;
                  <Button variant="danger">Remove</Button>&nbsp;&nbsp;
                  <Link to="/booksapichild">
                    <Button
                      variant="warning"
                      onClick={() =>
                        dispatch({
                          type: "SELECTED_PRODUCT",
                          data: [{ id: item.id }],
                        })
                      }
                    >
                      View
                    </Button>
                  </Link>
                  {console.log("Sent: ", { id: item.id })}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksAPI;
