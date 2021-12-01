import { Carousel } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import "./Test.css";

export const Carosbutton = () => {
  return (
    <div>
      <h1>This is Header.</h1>

      <Card className="bgcol">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
