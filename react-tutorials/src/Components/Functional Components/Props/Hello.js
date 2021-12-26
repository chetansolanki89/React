import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>Props in Functional component<br/>
        Hello {props.name}, you are {props.hero}
      </h1>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Hello;
