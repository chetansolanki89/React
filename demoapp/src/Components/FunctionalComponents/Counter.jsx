import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ fontSize: "80px" }}>
      <Button
        variant="primary"
        style={{ fontSize: "40px", margin: "0px" }}
        onClick={()=>counter<10 && setCounter(counter+1)}
        disabled={!(counter<10)}
      >
        {" "}
        +{" "}
      </Button>
      &nbsp;&nbsp;&nbsp;{counter}&nbsp;&nbsp;&nbsp;
      <Button variant="primary" style={{ fontSize: "40px", margin: "0px" }} onClick={()=>counter>0 && setCounter(counter-1)}>
        {" "}
        -{" "}
      </Button>
    </div>
  );
};
