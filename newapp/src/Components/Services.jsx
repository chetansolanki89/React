import React from "react";
import { Card, Button } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>Professional Training</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Click for more..</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>Internship</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Click for more..</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://www.iiml.ac.in/sites/default/files/2018-10/ipi-1.jpg" />
          <Card.Body>
            <Card.Title>Live Projects</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Click for more..</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://intranet.muhs.ac.in/img/workshop1.jpg" />
          <Card.Body>
            <Card.Title>Workshops</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Click for more..</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;