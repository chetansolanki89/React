import React from "react";
import Props3 from "./Props3";
const Props2 = ({ parentData, id, mob }) => {
  return (
    <div>
      {/* <h1>This is Child Component</h1>
      <h2>Data from Parent to Child : {parentData}</h2>
      <Props3 childData={parentData} /> */}
      <h1>
        ------------Data from App.jsx to Props1.jsx to Props2.jsx---------------
      </h1>
      <h3>My ID is : {id}</h3>
      <Props3 mob={mob} />
    </div>
  );
};
export default Props2;
