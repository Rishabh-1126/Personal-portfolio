import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <h2 className="logo">
          Rishabh<span>pandey</span>{" "}
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button type="button">Subscribe</button>
      </nav>
    </div>
  );
}

export default Navbar;
