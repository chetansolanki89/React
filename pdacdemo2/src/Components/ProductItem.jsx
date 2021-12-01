import { Card, Button } from "react-bootstrap";
import "./ProductItem.css";
export const ProductItem = ({ title, price, category, desc, img }) => {
  return (
    <div className="item">
      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Button variant="primary">{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
