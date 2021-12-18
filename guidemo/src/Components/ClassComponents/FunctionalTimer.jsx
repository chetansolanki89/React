import React, { useState, useEffect, useRef } from "react";

const FunctionalTimer = () => {
  const intervalRef = useRef(null); //{current: null}
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear
      </button>
    </div>
  );
};

export default FunctionalTimer;
