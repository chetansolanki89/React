import React, { useRef, useEffect } from "react";

const RefFocus = () => {
  const inputRef = useRef(null);
  const btnRef = useRef(null);
  console.log("Ref: ", inputRef);

  useEffect(() => {
    console.log("Ref Input: ", inputRef);
    console.log("Ref Btn: ", btnRef);
    inputRef.current.value="PDAC";
    btnRef.current.focus();
  }, []);
  return (
    <div>
      <h1>useRef</h1>
      <label>Focused Input Box: </label>
      <input type="text" />

      <input ref={inputRef} type="text" />
      <button ref={btnRef}>Click Me</button>
    </div>
  );
};

export default RefFocus;
