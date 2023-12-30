import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1> HomePage</h1>
      <div>page???</div>
      <Link to="/about">go to aboutPage</Link>
      <br />
      <Link to="/products">go to productPage</Link>
      <br />
      <Link to="/user">go to userPage</Link>
    </div>
  );
};
