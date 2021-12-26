import React, { createContext } from "react";
import ContextChildOne from "./ContextChildOne";
import ContextChildThree from "./ContextChildThree";

export const sendData = createContext();
export const sendData1 = createContext();
const ContextParent = () => {
  const name = "Chetan";
  const lname = "Solanki";
  console.log(sendData);
  return (
    <div>
      <h1>Context Parent</h1>-
      <sendData.Provider value={name}>
        {/* <sendData1.Provider value={lname}> */}
          <ContextChildOne />
        {/* </sendData1.Provider> */}
      </sendData.Provider>
      {/* <ContextChildOne data={name} /> */}
    </div>
  );
};

export default ContextParent;
