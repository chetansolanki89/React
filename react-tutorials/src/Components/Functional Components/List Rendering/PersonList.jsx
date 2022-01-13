import React from "react";
import PersonChild from "./PersonChild";

export const PersonList = () => {
  const person = [
    {
      id: 0,
      name: "Chetan",
      age: 32,
      hero: "Dr. Strange",
    },
    {
      id: 1,
      name: "Bruce",
      age: 52,
      hero: "Batman",
    },
    {
      id: 2,
      name: "Tony",
      age: 54,
      hero: "Ironman",
    },
  ];

  return (
    <div>
      {person.map((item) => (
        <PersonChild key={item.id} person={item} />
      ))}
    </div>
  );
};
