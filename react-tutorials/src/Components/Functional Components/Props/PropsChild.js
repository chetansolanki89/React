import React from "react";

const PropsChild = ({callGreet}) => {
  return (
    <div>
      <h4>Child Props</h4>
      <button onClick={()=>callGreet('PropsChild')}>Call Parent Method</button>
    </div>
  );
};
export default PropsChild;
