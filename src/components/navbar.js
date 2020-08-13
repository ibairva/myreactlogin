import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <div className="nav-signin">
          <li>
            <div className="nav-tag">
              <Link to="/" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </div>
          </li>
        </div>
        <div className="nav-signup">
          <li>
            <div className="nav-tag">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
