import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
// import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("peru"); // [state, stateUpdater]
  return (
    // Using the ThemeContext.Provider provides the given value (themeHook),
    // and makes it available to every child component inside this component, as a global app state
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
