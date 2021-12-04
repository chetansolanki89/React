import React, { useState } from "react";

const ConditionalRender = () => {
  const [show, setShow] = useState(false);
  //   const handleToggle = () => {
  //     setShow(!show);
  //   };
  return (
    <div>
      {show ? (
        <div style={{ backgroundColor: "yellow", height:"50px" }}>
          <h2>{String(show)}</h2>
        </div>
      ) : (
        <div style={{ backgroundColor: "red", height:"50px"  }}>
          <h2>{`${show}`}</h2>
        </div>
      )}
      {/* <button onClick={handleToggle}>Toggle</button> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default ConditionalRender;
