import React, { useEffect, useState } from "react";

const UseEffectParent = () => {
  const [data, setData] = useState(0);
  const [text, setText] = useState(100);
  useEffect(() => {
    console.log("useEffect without dependency");
  }, [data]); //[data] or [text] or [data,text] or [] or no
  return (
    <div>
      <h1>Life Cycle Methods in Functional Component</h1>
      <h1>{data}</h1>
      <h1>{text}</h1>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => setText(text + 1)}>Text</button>
    </div>
  );
};

export default UseEffectParent;
