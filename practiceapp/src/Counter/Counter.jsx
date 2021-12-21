import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter using useState Hook</h3>
      <p style={{fontSize:"200px", margin:"0px"}}>{count}</p>
      <Button variant="primary">Decrement</Button>
      <Button>Decrement</Button>
    </div>
  );
};
