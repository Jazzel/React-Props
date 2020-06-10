import React from "react";

export default function Gate({ isOpen }) {
  return <h3>The gate is {isOpen ? "open" : "closed"}.</h3>;
}
