import React from "react";
export const ChildProps = (props) => {
  console.log(props);
  //   const { nameVar, varName } = props;
  return (
    <div>
      <h4>Child Component</h4>
      {/* <h5>Props received from parent: {nameVar}</h5>
      <h5>Props received from parent: {varName}</h5> */}
      <h5>
        Props received from parent:{props.nameVar} and {props.varName}
      </h5>
    </div>
  );
};
