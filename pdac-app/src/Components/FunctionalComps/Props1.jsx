import React from "react";
import Props2 from "./Props2";
const Props1 = ({ name, id, mob }) => {
  const data = "PDAC";
  return (
    <div>
      {/* <h1>This is Parent Props</h1>
      <Props2 parentData={data} /> */}
      <h1>------------Data from App.jsx to Props1.jsx---------------</h1>
      <h3>My name is : {name}</h3>
      <Props2 id={id} mob={mob} />
    </div>
  );
};
export default Props1;
