import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={{ color: "black", textDecoration: "none" }} to="/about">
          <li>About</li>
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
