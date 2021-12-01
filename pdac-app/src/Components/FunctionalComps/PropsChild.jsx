import React from "react";
import PropsGChild from "./PropsGChild";
const PropsChild = ({ childName }) => {
  return (
    <div>
      <h1>This is PropsChild from Child Component</h1>
      <h2>Data from Parent Props is: {childName}</h2>
      <PropsGChild grandChildName={childName}/>
    </div>
  );
};
export default PropsChild;
