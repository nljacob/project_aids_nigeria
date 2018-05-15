import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
     Project AIDS Nigeria
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
          Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/questions"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/questions" className="nav-link">
          F.A.Q
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/donate"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/donate" className="nav-link">
          Donate
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/blog"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/blog" className="nav-link">
          Blog
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/students"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/students" className="nav-link">
          Our Students
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/curriculum"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/curriculum" className="nav-link">
          Curriculum
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
