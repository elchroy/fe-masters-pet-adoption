import React from "react";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("span", {}, breed)
  ]);
};

export default Pet;
