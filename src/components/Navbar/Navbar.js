import React from "react";
import { Link } from "react-router-dom";

import { Nav, Title } from "./styles";

function Navbar({ cartSize }) {
  return (
    <Nav>
      <Title>
        <Link to="/">Planetarium</Link>
      </Title>

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
    </Nav>
  );
}

export default Navbar;
