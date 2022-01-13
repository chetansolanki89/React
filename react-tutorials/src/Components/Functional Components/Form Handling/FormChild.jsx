import React from "react";

const FormChild = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
      <td>{props.topic}</td>
      <td>{props.status}</td>
    </tr>
  );
};

export default FormChild;
