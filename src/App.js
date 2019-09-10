import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

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

render(React.createElement(App), document.getElementById("root"));
