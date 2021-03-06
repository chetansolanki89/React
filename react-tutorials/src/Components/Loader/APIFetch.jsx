import React, { useState, useEffect } from "react";
import axios from "axios";
import APIChild from "./APIChild";
import Loader from "react-loader-spinner";

const APIFetch = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);

  // const callData = () => {
  //   setStatus(true);
  // };
  const callDataClicked = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setInterval(() => {
        console.log(result.data);
        setData(result.data);
        setStatus(false);
      }, 5000);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (status) callDataClicked();
  }, [status]);
  return (
    <div>
      <button>Show Products</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status ? (
          // <Loader type="Puff" color="#00BFFF" height={300} width={300} />
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={250}
            width={250}
          />
        ) : (
          <React.Fragment>
            {data.map((item) => (
              <APIChild data={item} />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default APIFetch;
