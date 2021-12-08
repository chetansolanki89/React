import React, { useState } from "react";
import { InputGroup, FormControl, Card } from "react-bootstrap";

const UseStatePreserve = () => {
  const [value, setValue] = useState({});
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [message, setMessage] = useState("");
  return (
    <div>
      <InputGroup style={{ width: "600px" }} className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <FormControl
          placeholder="Enter Name"
          aria-describedby="basic-addon1"
          name="name"
          onChange={(e) => setValue({...value, name: e.target.value })}
        />
      </InputGroup>
      <InputGroup style={{ width: "600px" }} className="mb-3">
        <InputGroup.Text id="basic-addon1">Age</InputGroup.Text>
        <FormControl
          placeholder="Enter Age"
          aria-describedby="basic-addon1"
          name="age"
          onChange={(e) => setValue({...value, age: e.target.value })}
        />
      </InputGroup>
      <InputGroup style={{ width: "600px" }} className="mb-3">
        <InputGroup.Text id="basic-addon1">Message</InputGroup.Text>
        <FormControl
          placeholder="Enter Message"
          aria-describedby="basic-addon1"
          name="message"
          onChange={(e) => setValue({...value, message: e.target.value })}
        />
      </InputGroup>

      <Card>
        <Card.Title>Name: {value.name}</Card.Title>
        <Card.Title>Age: {value.age}</Card.Title>
        <Card.Title>Message: {value.message}</Card.Title>
        <Card.Title>Object: {JSON.stringify(value)}</Card.Title>
      </Card>
    </div>
  );
};

export default UseStatePreserve;
