import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const PhotoAPI = () => {
  const [photo, setPhoto] = useState([]);
  const [filter, setFilter] = useState([]);
//   handleEven = () => {
//     setFilter(photo.filter((item) => item.id <= 0 && item.id % 2 === 0));
//   };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPhoto(response.data));
    // setFilter(photo.filter((item) => item.id <= 0 && item.id % 2 === 0));
  }, []);

  return (
    <div>
      {/* <Button variant="primary" onClick={handleEven}>
        {" "}
        Even{" "}
      </Button>
      <Button variant="warning" onClick={handleOdd}>
        {" "}
        Odd{" "}
      </Button> */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photo.map((item) => {
          return (
            <div style={{ margin: "5px" }}>
              <Card style={{ width: "8rem", height:"20rem" }}>
                <Card.Img variant="top" src={item.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text><small>{item.title}</small></Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoAPI;
