import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const APICall = () => {
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);
  console.log(album);
  return (
    <div>
      <h3>API Data Fetch</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>UserID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {album.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default APICall;
