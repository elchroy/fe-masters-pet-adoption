import React, { FunctionComponent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Modals can also be used for things like: contextual navigation
// special header/footer, etc
const Modal: FunctionComponent = ({ children }) => {
  // read about this
  // I'm going to create an element and
  // I always want to use the same element
  // when I create a model, I am creating markup,
  // and when I destroy the modal, I want to destroy/unrender the same markup
  // else, I run the risk of having memory leak, but seuccessive opening/closing modals.
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    // if you return a function from there,
    // it is equivalent to the componentWillUnmount lifecycle method
    // it is the cleanup function.
    return () => {
      modalRoot.removeChild(elRef.current);
    };
    // this means that it only runs this function once the modal get closed.
  }, []); // we only want this to run once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
