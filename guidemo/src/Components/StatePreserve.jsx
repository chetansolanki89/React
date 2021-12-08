import React, { useState } from "react";
import { Button } from "react-bootstrap";

const StatePreserve = () => {
  const [generate, setGenerate] = useState([]);
  const handleGeneration = () => {
    setGenerate([...generate, {
      id: generate.length,
      value: Math.floor(Math.random() * 10) + 1,
    }]);
    // console.log(generate)
  };
  return (
    <div>
      <h1>useState Hook with Map</h1>
      <Button variant="danger" onClick={handleGeneration}>
        Generate
      </Button>
      {generate.map((elem, id) => {
        return (
          <li key={id}>
            {id} --&gt;{elem.value}
          </li>
        );
      })}
    </div>
  );
};

export default StatePreserve;
