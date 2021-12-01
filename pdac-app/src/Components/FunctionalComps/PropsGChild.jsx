import React from "react";

const PropsGChild = ({grandChildName}) => {
  return (
    <div>
      <h1>This is Grandchild Component</h1>
      <h2>Data received is: {grandChildName}</h2>
    </div>
  );
};
export default PropsGChild;
