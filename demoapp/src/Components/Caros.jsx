import { Carousel } from "react-bootstrap";
export const Caros = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/1.jpg"
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
          <h3>Srinagar – Venice of the East</h3>
          <p>
            The world knows Kashmir is a heaven on earth. But so is this
            beautiful city of India – Srinagar. Idyllically located on the banks
            of the Jhelum, Srinagar is truly a paradise! It derives its nickname
            due to the fact that the place is dotted prettily colorful gardens,
            still limpid lakes, and graceful houseboats and shikaras.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/2.jpg"
          alt="Second slide"
          height="600px"
        />

        <Carousel.Caption>
          <h3>Mumbai- The City of Dreams</h3>
          <p>Maximum City, Mumbai: where every Indian comes with dreams in his eyes and goes back with rich memories of different hues! The financial capital of India, Mumbai has still retained its Victorian charm as well as its intense regional flavor and is a must on our list of beautiful cities in India. And not to forget the majestic queen’s necklace to add charm to the shores of the island city.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/3.jpg"
          alt="Third slide"
          height="600px"
        />

        <Carousel.Caption>
          <h3>Kolkata- The City of Joy</h3>
          <p>
          Be it the busy Howrah Bridge on the Hoogli or the majestic Victoria memorial, the serene Belur Math, or the supremely energizing Dakshineshwar temple, Kolkata is bound to mesmerize you. Truly a City of Joy, it’s a beautiful city in India with equally beautiful people and food to match!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
