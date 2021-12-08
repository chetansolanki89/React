import React, { useState } from "react";
import { Table } from "react-bootstrap";

const API = () => {
  // const [resData, setResData] = useState([]);
  const baseURL = "https://reqres.in/api/users?page=1";

  fetch(baseURL)
    .then((response) => {
      return response.json();
    })
    .then((elem) => {
      console.log(elem.data);
      // console.log(elem.data.map((item)=>item.email))
      // console.log(elem.data.map((item)=>`${item.first_name} ${item.last_name}`))
    })
    .catch((error) => {
      console.log("Error : ", error);
    });

  return (
    <div className="main">
      <h4>Fetching data from API</h4>
    </div>
  );
};

export default API;
