import React from "react";
import "./FilteringParent.css";
import { productsData } from "./filteringReducer";
import { Card, Button } from "react-bootstrap";

const FilteringParent = (props) => {
  // const passValue = "pulses"; //[grains, flour, dry fruits, pulses]
  console.log(props.pval);

  const filterObj = productsData.data.filter(
    (elem) => elem.category === props.pval
  );
  //   const dataobj = productsData;
  return (
    <div className="carddiv">
      {filterObj.map((item) => {
        return (
          <div className="item">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <b>Weight: </b>
                  {item.weight}
                </Card.Text>
                <Button variant="primary">
                  <b>Rs.</b>
                  {item.price}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FilteringParent;
