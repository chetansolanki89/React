import React, { useReducer } from "react";

const initialState = { one: 25, two: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, one: state.one + action.value };
    case "Decrement":
      return { ...state, one: state.one - action.value };
    case "Reset":
      return { ...state, one: initialState.one };
    case "Increment2":
      return { ...state, two: state.two + action.value };
    case "Decrement2":
      return { ...state, two: state.two - action.value };
    case "Reset2":
      return { ...state, two: initialState.two };
    default:
      return state;
  }
};
const PracUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer Implemetation</h1>
      <div style={{ backgroundColor: "tomato" }}>
        <h3>First Counter: {count.one}</h3>
        <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
      <div style={{ backgroundColor: "yellowgreen" }}>
        <h3>Second Counter: {count.two}</h3>
        <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "Reset2" })}>Reset</button>
      </div>
    </div>
  );
};

export default PracUseReducer;
