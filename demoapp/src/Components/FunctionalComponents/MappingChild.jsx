import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./MappingChild.css";

const MappingChild = ({ item }) => {
  return (
    <div className="child">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item .url} />
        <Card.Body>
          <Card.Title><b>{item .name}</b></Card.Title>
          <Card.Text className="desc">{item .desc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><b>Price:</b> {item .price}</ListGroupItem>
          <ListGroupItem><b>Fuel Capacity:</b> {item .fuel}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">
            <Button variant="primary">BUY NOW</Button>
          </Card.Link>
          <Card.Link href="#">
            <Button variant="primary">Enquiry</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MappingChild;
