import React from "react";
const Props3 = ({ childData, mob }) => {
  return (
    <div>
      {/* <h1>This is Grand Child Component</h1>
      <h2>Data from Child to Grand Child : {childData}</h2> */}
      <h1>
        ------------Data from App.jsx to Props1.jsx to Props2.jsx to
        Props3.jsx---------------
      </h1>
      <h3>My Mobile number is: {mob}</h3>
    </div>
  );
};
export default Props3;
