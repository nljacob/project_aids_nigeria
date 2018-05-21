import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import accountlogo from "../../images/accountlogo.jpg";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a className="navbar-brand" href=""></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
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
            F.A.Q.
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
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
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
        </li>  */}
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
        {/* Alicia added this one, we can move it if needed (maybe in profile? or do we want public to have access?) */}
        <li
          className={
            window.location.pathname === "/certification"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/certification" className="nav-link">
            Get Certified
          </Link>
        </li>
        {/* <li 
          className={
            window.location.pathname === "/certification"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/login" className="nav-link">
          <i className="fas fa-user accountlogo"></i>
          </Link>
        </li> */}
      </ul>
      <ul className="navbar-nav" >
        <li
          className={
            window.location.pathname === "/login"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/login" className="nav-link">
          <i className="fas fa-user accountlogo" title="Log In/Sign Up"></i> Login
          </Link>
        </li>
      </ul>
    </div>
  </nav>

  // <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
  //   <div>
  //     <ul className="navbar-nav">
  //       <li
  //         className={
  //           window.location.pathname === "/" ||
  //             window.location.pathname === "/home"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/" className="nav-link">
  //           Home
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/about"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/about" className="nav-link">
  //           About
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/questions"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/questions" className="nav-link">
  //           F.A.Q
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/donate"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/donate" className="nav-link">
  //           Donate
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/blog"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/blog" className="nav-link">
  //           Blog
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/students"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/students" className="nav-link">
  //           Our Students
  //         </Link>
  //       </li> 
  //       <li
  //         className={
  //           window.location.pathname === "/curriculum"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/curriculum" className="nav-link">
  //           Curriculum
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
);

export default Navbar;
