import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export const LiveAPI = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://toibnews.timesofindia.indiatimes.com/live_cricket_match_score.json"
      )
      .then((response) => {
        console.log(response.data.matches);
        setData(response.data.matches);
      });
  }, []);
  return (
    <div>
      <h4>Live API Data Fetching</h4>
      {data.map((item) => {
        return (
          <Card>
            <Card.Body>
              <Card.Text>Status: {item.match_status}</Card.Text>
              <Card.Text>Results: {item.match_sub_status}</Card.Text>
              <Card.Text>
                Teams:
                {item.participants.map((elem) => {
                  return String(elem.value).includes("(") ? (
                    <p>
                      {elem.name} score: {elem.value}
                    </p>
                  ) : (
                    <p>{elem.name}</p>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
