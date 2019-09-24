import { createStore } from "redux";
import reducer from "./reducers";

const reduxDevTools =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const store = createStore(reducer, reduxDevTools);

export default store;
