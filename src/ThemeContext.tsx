import { createContext } from "react";

// you can stick anything into a context: string, array, function, object, boolean, int, etc
// we're just using a hook-like shape, so that we can use a react-hook: a state and a updater function.
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {
    return;
  }
]);

export default ThemeContext;
