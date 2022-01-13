import React, { useState } from "react";

export const UserGreeting = () => {
  const [login, setLogin] = useState(false);
  //1. ===========Conditional rendering using if/else==========

  //   if (login) {
  //     return <h3>Hello Chetan</h3>;
  //   } else {
  //     return <h3>Hello Guest</h3>;
  //   }

  //2. ==========Conditional rendering using Element variables=============

  //   let message;
  //   if (login) {
  //     message = <h1>Hello Chetan</h1>;
  //   } else {
  //     message = <h1>Hello Guest</h1>;
  //   }

  //   return <div>{message}</div>;

  //3. =======Conditional rendering using Ternary operator

  return login ? <h1>Hello Chetan</h1> : <h1>Hello Guest</h1>;

  //4. =======Conditional rendering using Shortcircuit operators

  //   return login && <h1>Hello Chetan</h1>;
};
