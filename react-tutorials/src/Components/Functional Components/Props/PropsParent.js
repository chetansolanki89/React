import React from "react";
import PropsChild from "./PropsChild";

const PropsParent = () => {
  const callGreet = (child) => {
    alert(`Hello to Parent from ${child}`);
  };
  return (
    <div>
      <h4>Parent Props</h4>
      <PropsChild callGreet={callGreet}/>
    </div>
  );
};
export default PropsParent;
