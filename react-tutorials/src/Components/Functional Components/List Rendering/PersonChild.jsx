import React from "react";

const PersonChild = ({person}) => {
  return (
    <div>
      <h4>
        My name is {person.name}. My age is {person.age} and I'm {person.hero}
      </h4>
    </div>
  );
};

export default PersonChild;
