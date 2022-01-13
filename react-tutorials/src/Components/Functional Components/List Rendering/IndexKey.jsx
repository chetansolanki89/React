import React from "react";

const IndexKey = () => {
  const names = ["Chetan", "Bruce", "Tony"];
  return (
    <div>
      {names.map((item, index) => (
        <h3 key={index}>
          {index}-----{item}
        </h3>
      ))}
    </div>
  );
};

export default IndexKey;
