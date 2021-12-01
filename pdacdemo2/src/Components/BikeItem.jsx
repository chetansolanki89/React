import { Card, Button, Row, Col } from "react-bootstrap";
import "./BikeItem.css";

export const BikeItem = ({ brand, model, price, desc, url }) => {
  return (
      
    <div className="bitem">
      <Card>
        <div>
          <Card.Img variant="top" src={url} />
        </div>

        <div>
          <Card.Body>
            <Card.Title>{brand}</Card.Title>
            <Card.Text>{model}</Card.Text>
            <Card.Text>{desc}</Card.Text>
            <Button variant="primary">{price}</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
