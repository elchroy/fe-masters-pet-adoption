import React from "react";

const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <span>{breed}</span>
    </div>
  );
};

export default Pet;
