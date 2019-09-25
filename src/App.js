import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";

const App = () => {
  const themeHook = useState("peru"); // [state, stateUpdater]
  return (
    // Using the ThemeContext.Provider provides the given value (themeHook),
    // and makes it available to every child component inside this component, as a global app state
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
