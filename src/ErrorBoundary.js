// mostly code from the docs
// use this class to handle error, only passing
// through if there are no error, for example in an API request.

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    // this gets called whenever there is an error inside of the component.
    return { hasError: true };
  }

  componentDidUpdate() {
    // this will run every single time the component receives new state or new props
    // it will run whenever the prop or state changes.
    if (this.state.hasError)
      setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error: ", error, info);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait for five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
