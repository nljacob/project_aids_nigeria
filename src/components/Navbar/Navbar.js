import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
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
        <div className="btn-group">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Info
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/students">Our Students</a>
            <a className="dropdown-item" href="/curriculum">Curriculum</a>
          </div>
        </div>
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
        {/* <li
          className={
            window.location.pathname === "/students"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/students" className="nav-link">
            Our Students
          </Link>
        </li> */}
        {/* <li
          className={
            window.location.pathname === "/curriculum"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/curriculum" className="nav-link">
            Curriculum
          </Link>
        </li> */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
