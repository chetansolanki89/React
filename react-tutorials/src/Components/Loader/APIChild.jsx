import React from "react";

const APIChild = ({ data }) => {
  return (
    <div>
      <img src={data.image} height="250px" width="200px" alt="" />
      <p>{data.title.substr(0, 20) + "...."}</p>
    </div>
  );
};

export default APIChild;
