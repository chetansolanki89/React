import React from "react";
import PropsChild from "./PropsChild";
const PropsParent = () => {
  const data = "PickupBiz";
  return (
    <div>
      <h1>This is parent component of Propss</h1>
      <PropsChild childName={data} />
    </div>
  );
};

export default PropsParent;
