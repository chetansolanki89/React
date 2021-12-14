import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <Carousel>
        <Carousel.Item>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <img src="images/1.jpeg" height="400px" alt="" />
            <img src="images/2.jpeg" height="400px" alt="" />
            <img src="images/3.jpeg" height="400px" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <img src="images/4.jpeg" height="400px" alt="" />
            <img src="images/5.jpeg" height="400px" alt="" />
            <img src="images/6.jpeg" height="400px" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <img src="images/7.jpeg" height="400px" alt="" />
            <img src="images/8.jpeg" height="400px" alt="" />
            <img src="images/9.jpeg" height="400px" alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
