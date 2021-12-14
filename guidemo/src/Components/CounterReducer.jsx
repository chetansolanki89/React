import React, { useReducer } from "react";

const initialState = { first: 0, second: 100 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, first: state.first + action.value };
    case "Decrement":
      return { ...state, first: state.first - action.value };
    case "Reset":
      return { ...state, first: initialState.first };
    case "Increment2":
      return { ...state, second: state.second + action.value };
    case "Decrement2":
      return { ...state, second: state.second - action.value };
    case "Reset2":
      return { ...state, second: initialState.second };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div style={{ backgroundColor: "tomato" }}>
        <h3>First Count: {count.first}</h3>
        <button onClick={() => dispatch({ type: "Decrement", value: 2 })}>
          Decrement
        </button>
        {/* dispatch is calle as a method so ()=>{} */}
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "Increment", value: 2 })}>
          Increment
        </button>
      </div>
      <div style={{ backgroundColor: "cyan" }}>
        <h3>Second Count: {count.second}</h3>
        <button onClick={() => dispatch({ type: "Decrement2", value: 10 })}>
          Decrement
        </button>
        {/* dispatch is calle as a method so ()=>{} */}
        <button onClick={() => dispatch({ type: "Reset2" })}>Reset</button>
        <button onClick={() => dispatch({ type: "Increment2", value: 10 })}>
          Increment
        </button>{console.log(count)}
      </div>
    </div>
  );
};

export default CounterReducer;
