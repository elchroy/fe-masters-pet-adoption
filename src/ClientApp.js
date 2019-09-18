import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// any other browser-only things
// the below parts will not run in the browser
// hydrate is a special function like render

hydrate(<App />, document.getElementById("root"));
