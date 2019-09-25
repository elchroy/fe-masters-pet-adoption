import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

// const color = "pink";
const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

console.log(spin.toString(), "hihih");

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  const [spinRate, changeSpinRate] = useState(1);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <button onClick={() => changeSpinRate(spinRate / 2)}>-</button>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${spinRate}s ${spin} linear infinite;
          &:hover {
            animation: ${spinRate}s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🎠
      </span>

      <button onClick={() => changeSpinRate(spinRate * 2)}>+</button>
    </header>
  );
};

export default NavBar;
