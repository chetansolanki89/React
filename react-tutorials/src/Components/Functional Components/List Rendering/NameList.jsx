import React from "react";

export const NameList = () => {
  const name = ["Bruce", "Peter", "Tony"];

  // return (
  //   <div>
  //     {name.map((item) => (
  //       <h4>Hello {item}</h4>
  //     ))}
  //   </div>
  // );

  const nameList=name.map((item)=><h4>Hello {item}</h4>)
  return <div>{nameList}</div>
};
