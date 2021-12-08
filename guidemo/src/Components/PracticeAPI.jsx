import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export const PracticeAPI = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        console.log("Response", response.data.data);
        setData(response.data.data);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>
                {item.first_name} {item.last_name}
              </Card.Title>
              <Card.Img src={item.avatar} height="200px"></Card.Img>
              <Card.Text>{item.email}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
