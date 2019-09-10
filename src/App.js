import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Bolt" animal="dog" breed="German Shepherd" />
      <Pet name="Spy" animal="dog" breed="Mixed Breen" />
      <Pet name="Lyla" animal="cat" breed="White Stray Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
