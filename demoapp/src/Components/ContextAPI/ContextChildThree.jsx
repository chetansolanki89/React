import React from "react";
import { sendData, sendData1 } from "./ContextParent";

const ContextChildThree = () => {
  return (
    <div>
      <h3>Context Child 3</h3>
      <sendData.Consumer>
        {(first) => {
          return (
            <sendData1.Consumer>
              {(second) => {
                return (
                  <h3>
                    First Name: {first} and Last name: {second}
                  </h3>
                );
              }}
            </sendData1.Consumer>
          );
        }}
      </sendData.Consumer>

      {/* <h1>{data2}</h1> */}
    </div>
  );
};

export default ContextChildThree;
