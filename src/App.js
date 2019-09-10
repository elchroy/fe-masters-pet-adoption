import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bolt",
      animal: "dog",
      breed: "German Shepherd"
    }),
    React.createElement(Pet, {
      name: "Spy",
      animal: "dog",
      breed: "Mixed Breen"
    }),
    React.createElement(Pet, {
      name: "Lyla",
      animal: "cat",
      breed: "White Stray Mixed"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
