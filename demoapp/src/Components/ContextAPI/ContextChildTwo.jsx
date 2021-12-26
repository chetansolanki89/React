import React from "react";
import ContextChildThree from "./ContextChildThree";
import { sendData } from "./ContextParent";

const ContextChildTwo = () => {
  return (
    <div>
      <h3>Context Child 2</h3>
      <sendData.Consumer>
              {(first) => {
                  return (
                      <h3>
                    First name: {first}
                  </h3>
                );
            }}
            </sendData.Consumer>
      <ContextChildThree />
    </div>
  );
};

export default ContextChildTwo;
