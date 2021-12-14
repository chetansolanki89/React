import React, { useReducer } from "react";

const ReduCounter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countSecond, dispatchSecond] = useReducer(reducer, initialState);


  return (
    <div>
      <div style={{backgroundColor:"salmon"}}>
        <h3>Count: {count}</h3>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
        <button onClick={() => dispatch("Increment")}>Increment</button>
      </div>
      <div style={{backgroundColor:"cyan"}}>
        <h3>Count: {countSecond}</h3>
        <button onClick={() => dispatchSecond("Decrement")}>Decrement</button>
        <button onClick={() => dispatchSecond("Reset")}>Reset</button>
        <button onClick={() => dispatchSecond("Increment")}>Increment</button>
      </div>
    </div>
  );
};

export default ReduCounter;
