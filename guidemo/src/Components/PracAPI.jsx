import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export const PracAPI = () => {
  const [data, setData] = useState([]);
//   const [odd, setOdd] = useState([]);
//   const [even, setEven] = useState([]);
//   const handleEven = () => {
//     const filteredEven = data.filter((item) => item.id % 2 === 0);
//     setEven(filteredEven);
//   };
//   const handleOdd = () => {
//     const filteredOdd = data.filter((item) => item.id % 2 !== 0);
//     setOdd(filteredOdd);
//   };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error: ", error));
  }, []);
//   useEffect(() => {
//     // const handleEven = () => {
//     //     // const filteredEven = data.filter((item) => item.id % 2 === 0);
//     //     setData(data.filter((item) => item.id % 2 === 0));
//     //   };
//     // axios
//     //   .get("https://jsonplaceholder.typicode.com/comments")
//     //   .then((response) => setData(response.data));
//     setData(even)
//   }, [handleEven]);
//   useEffect(() => {
//     setData(odd)
//   }, [handleOdd]);
  return (
    <div>
      {/* <Button variant="primary" onClick={handleEven}>
        Even
      </Button>
      &nbsp;&nbsp;
      <Button variant="warning" onClick={handleOdd}>
        Odd
      </Button>
      &nbsp;&nbsp; */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
