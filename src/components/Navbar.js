import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartSize }) {
  return (
    <nav>
      <h1>Planetarium</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Planets</Link>
        </li>
        <li>
          <Link to="/checkout">Cart ({cartSize})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
